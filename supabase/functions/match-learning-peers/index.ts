
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import type { UserProfile, LearningMatch, UserProgress } from "./types.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client
function initSupabaseClient() {
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  return createClient(supabaseUrl, supabaseServiceKey);
}

// Fetch user profile data
async function fetchUserProfile(supabase: any, userId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
    
  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
  
  return data;
}

// Fetch user's progress data
async function fetchUserProgress(supabase: any, userId: string): Promise<UserProgress[]> {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId);
    
  if (error) {
    console.error('Error fetching user progress:', error);
    return [];
  }
  
  return data;
}

// Get list of potential peer matches (excluding the user and existing connections)
async function getPotentialMatches(supabase: any, userId: string): Promise<UserProfile[]> {
  // Get existing connections to exclude them
  const { data: existingConnections, error: connectionsError } = await supabase
    .from('peer_connections')
    .select('peer_id')
    .eq('user_id', userId);
    
  if (connectionsError) {
    console.error('Error fetching existing connections:', connectionsError);
    return [];
  }
  
  // Create an array of IDs to exclude
  const excludeIds = [userId];
  if (existingConnections && existingConnections.length > 0) {
    excludeIds.push(...existingConnections.map(conn => conn.peer_id));
  }
  
  // Fetch all users except those in excludeIds
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .not('id', 'in', `(${excludeIds.join(',')})`);
    
  if (error) {
    console.error('Error fetching potential matches:', error);
    return [];
  }
  
  return data || [];
}

// Calculate progress similarity score between users (0-1)
async function calculateProgressSimilarity(
  supabase: any, 
  userAId: string, 
  userBId: string
): Promise<number> {
  const progressA = await fetchUserProgress(supabase, userAId);
  const progressB = await fetchUserProgress(supabase, userBId);
  
  if (progressA.length === 0 || progressB.length === 0) {
    return 0; // Can't calculate similarity without progress
  }
  
  // Get completed lessons by course for user A
  const completedLessonsByUserA = progressA
    .filter(p => p.completed)
    .reduce((acc, curr) => {
      const key = `${curr.course_id}-${curr.lesson_id}`;
      acc.add(key);
      return acc;
    }, new Set<string>());
  
  // Get completed lessons by course for user B  
  const completedLessonsByUserB = progressB
    .filter(p => p.completed)
    .reduce((acc, curr) => {
      const key = `${curr.course_id}-${curr.lesson_id}`;
      acc.add(key);
      return acc;
    }, new Set<string>());
  
  // Calculate similarity using Jaccard index
  const intersection = new Set(
    [...completedLessonsByUserA].filter(x => completedLessonsByUserB.has(x))
  );
  const union = new Set([...completedLessonsByUserA, ...completedLessonsByUserB]);
  
  return union.size === 0 ? 0 : intersection.size / union.size;
}

// Calculate skill complementarity (0-1)
// Higher score means more complementary skills (different completed courses)
async function calculateSkillComplementarity(
  supabase: any, 
  userAId: string, 
  userBId: string
): Promise<number> {
  const progressA = await fetchUserProgress(supabase, userAId);
  const progressB = await fetchUserProgress(supabase, userBId);
  
  if (progressA.length === 0 || progressB.length === 0) {
    return 0; // Can't calculate without progress
  }
  
  // Get completed courses for user A
  const completedCoursesByUserA = new Set(
    progressA
      .filter(p => p.completed)
      .map(p => p.course_id)
  );
  
  // Get completed courses for user B
  const completedCoursesByUserB = new Set(
    progressB
      .filter(p => p.completed)
      .map(p => p.course_id)
  );
  
  // Find unique courses that only one user has completed
  const userAUniqueCourses = [...completedCoursesByUserA]
    .filter(course => !completedCoursesByUserB.has(course));
  
  const userBUniqueCourses = [...completedCoursesByUserB]
    .filter(course => !completedCoursesByUserA.has(course));
  
  const uniqueCoursesCount = userAUniqueCourses.length + userBUniqueCourses.length;
  const totalCoursesCount = completedCoursesByUserA.size + completedCoursesByUserB.size;
  
  // Complementarity is the proportion of unique courses
  return totalCoursesCount === 0 ? 0 : uniqueCoursesCount / totalCoursesCount;
}

// Find peers for a user
async function findPeersForUser(supabase: any, userId: string): Promise<LearningMatch[]> {
  // Get potential matches (users not already connected)
  const potentialMatches = await getPotentialMatches(supabase, userId);
  
  if (potentialMatches.length === 0) {
    return [];
  }
  
  // Calculate match scores for each potential peer
  const matchPromises = potentialMatches.map(async (peer) => {
    const similarityScore = await calculateProgressSimilarity(supabase, userId, peer.id);
    const complementarityScore = await calculateSkillComplementarity(supabase, userId, peer.id);
    
    // Calculate overall match score (weighted average)
    // We give more weight to similarity for "similar level" matching
    const matchScore = (similarityScore * 0.7) + (complementarityScore * 0.3);
    
    return {
      userId,
      peerId: peer.id,
      peerUsername: peer.username || 'Quantum Learner',
      similarityScore,
      complementarityScore,
      matchScore,
      matchType: similarityScore > complementarityScore ? 'similar-level' : 'complementary-skills'
    };
  });
  
  // Wait for all match calculations
  const matches = await Promise.all(matchPromises);
  
  // Sort by match score (highest first) and take top 5
  return matches
    .sort((a, b) => b.matchScore - a.matchScore)
    .filter(match => match.matchScore > 0.1) // Only include meaningful matches
    .slice(0, 5);
}

// Save peer recommendations to database
async function savePeerRecommendations(supabase: any, matches: LearningMatch[]): Promise<void> {
  if (matches.length === 0) return;
  
  // Delete existing recommendations for this user
  const { error: deleteError } = await supabase
    .from('peer_recommendations')
    .delete()
    .eq('user_id', matches[0].userId);
    
  if (deleteError) {
    console.error('Error deleting existing recommendations:', deleteError);
    return;
  }
  
  // Format matches for database insertion
  const recommendationsToInsert = matches.map(match => ({
    user_id: match.userId,
    peer_id: match.peerId,
    similarity_score: match.similarityScore,
    complementarity_score: match.complementarityScore,
    match_score: match.matchScore,
    match_type: match.matchType,
    created_at: new Date().toISOString()
  }));
  
  // Insert new recommendations
  const { error: insertError } = await supabase
    .from('peer_recommendations')
    .insert(recommendationsToInsert);
    
  if (insertError) {
    console.error('Error inserting peer recommendations:', insertError);
  }
}

// Main handler
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const supabase = initSupabaseClient();
    const { user_id } = await req.json();
    
    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }
    
    console.log(`Finding learning peers for user: ${user_id}`);
    
    // Find learning peers for the user
    const peerMatches = await findPeersForUser(supabase, user_id);
    
    // Save recommendations to the database
    await savePeerRecommendations(supabase, peerMatches);
    
    return new Response(
      JSON.stringify({
        matches: peerMatches,
        count: peerMatches.length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error finding peers:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
