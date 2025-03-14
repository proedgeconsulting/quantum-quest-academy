
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.14.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create a Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get user counts
    const { data: userCount, error: userCountError } = await supabase
      .from("profiles")
      .select("id", { count: "exact", head: true });

    if (userCountError) throw userCountError;

    // Get course engagement data
    const { data: userProgressData, error: progressError } = await supabase
      .from("user_progress")
      .select("*");

    if (progressError) throw progressError;

    // Get recent activity data (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const { data: recentActivity, error: activityError } = await supabase
      .from("user_progress")
      .select("*")
      .gte("updated_at", sevenDaysAgo.toISOString());

    if (activityError) throw activityError;

    // Calculate statistics
    const totalUsers = userCount?.count || 0;
    
    // Count unique course IDs
    const uniqueCourses = new Set(userProgressData?.map(p => p.course_id) || []);
    const totalCourses = uniqueCourses.size;
    
    // Calculate completion rate
    const completedLessons = userProgressData?.filter(p => p.completed)?.length || 0;
    const totalLessons = userProgressData?.length || 0;
    const completionRate = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    // Calculate daily active users (using a simple approximation)
    const today = new Date().toISOString().split('T')[0];
    const dailyActiveUsers = new Set(
      userProgressData
        ?.filter(p => p.updated_at?.startsWith(today))
        ?.map(p => p.user_id)
    ).size;

    // Calculate user activity by day
    const activityByDay = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Initialize counts for each day
    const dayCounts = new Array(7).fill(0);
    
    // Count activities for each day
    recentActivity?.forEach(activity => {
      const date = new Date(activity.updated_at);
      const dayIndex = date.getDay(); // 0 = Sunday, 6 = Saturday
      dayCounts[dayIndex]++;
    });
    
    // Format the data for the chart
    dayNames.forEach((name, index) => {
      activityByDay.push({
        name: name,
        value: dayCounts[index]
      });
    });

    // Calculate course engagement data
    const courseEngagement = [];
    const courseData = {};
    
    // Group by course_id
    userProgressData?.forEach(progress => {
      if (!courseData[progress.course_id]) {
        courseData[progress.course_id] = {
          enrollments: 0,
          completions: 0
        };
      }
      
      courseData[progress.course_id].enrollments++;
      
      if (progress.completed) {
        courseData[progress.course_id].completions++;
      }
    });
    
    // Convert to array format for charts
    Object.entries(courseData).forEach(([courseId, data]) => {
      courseEngagement.push({
        name: courseId.slice(0, 12) + (courseId.length > 12 ? "..." : ""), // Truncate long names
        enrollments: data.enrollments,
        completions: data.completions
      });
    });
    
    // Take top 5 courses by enrollment
    courseEngagement.sort((a, b) => b.enrollments - a.enrollments);
    const topCourses = courseEngagement.slice(0, 5);

    // Simple age demographics data (mock data as we don't have this info)
    const learnerDemographics = [
      { name: "10-13", value: Math.floor(totalUsers * 0.15) },
      { name: "14-17", value: Math.floor(totalUsers * 0.25) },
      { name: "18-24", value: Math.floor(totalUsers * 0.35) },
      { name: "25-34", value: Math.floor(totalUsers * 0.20) },
      { name: "35+", value: Math.floor(totalUsers * 0.05) }
    ];

    // Prepare the response object
    const analytics = {
      stats: {
        totalUsers,
        activeCourses: totalCourses,
        completionRate,
        dailyActiveUsers,
        monthlyCourseAdditions: 4, // Example static value
        averageRating: 4.7 // Example static value
      },
      charts: {
        userActivity: activityByDay,
        courseEngagement: topCourses,
        learnerDemographics
      }
    };

    return new Response(
      JSON.stringify(analytics),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error in admin-analytics:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
