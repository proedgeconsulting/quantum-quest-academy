
import { supabase } from "@/integrations/supabase/client";

export const getProgress = async (userId: string, courseId: string, lessonId: string) => {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .eq('lesson_id', lessonId)
      .single();
      
    if (error) {
      console.error("Error fetching progress:", error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const updateProgress = async (userId: string, courseId: string, lessonId: string, completed: boolean, score?: number) => {
  try {
    // Check if progress already exists
    const { data: existingProgress } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .eq('lesson_id', lessonId)
      .single();
    
    if (existingProgress) {
      // Update existing progress
      const { data, error } = await supabase
        .from('user_progress')
        .update({ 
          completed, 
          score: score !== undefined ? score : existingProgress.score,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingProgress.id)
        .select();
        
      if (error) throw error;
      return data;
    } else {
      // Insert new progress
      const { data, error } = await supabase
        .from('user_progress')
        .insert({ 
          user_id: userId, 
          course_id: courseId, 
          lesson_id: lessonId,
          completed,
          score: score || 0
        })
        .select();
        
      if (error) throw error;
      return data;
    }
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
