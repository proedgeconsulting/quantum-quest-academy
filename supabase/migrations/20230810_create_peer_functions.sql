
-- Function to get peer recommendations
CREATE OR REPLACE FUNCTION public.get_peer_recommendations(user_id UUID)
RETURNS TABLE (
  id UUID,
  username TEXT,
  avatar_url TEXT,
  similarity_score FLOAT,
  complementarity_score FLOAT,
  match_score FLOAT,
  match_type TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.username,
    p.avatar_url,
    pr.similarity_score,
    pr.complementarity_score,
    pr.match_score,
    pr.match_type
  FROM public.peer_recommendations pr
  JOIN public.profiles p ON pr.peer_id = p.id
  WHERE pr.user_id = get_peer_recommendations.user_id
  ORDER BY pr.match_score DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get peer connections by status
CREATE OR REPLACE FUNCTION public.get_peer_connections(user_id UUID, status_filter TEXT)
RETURNS TABLE (
  id UUID,
  username TEXT,
  avatar_url TEXT,
  connection_id UUID,
  status TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.username,
    p.avatar_url,
    pc.id as connection_id,
    pc.status
  FROM public.peer_connections pc
  JOIN public.profiles p ON 
    CASE 
      WHEN pc.user_id = get_peer_connections.user_id THEN pc.peer_id = p.id
      ELSE pc.user_id = p.id
    END
  WHERE (pc.user_id = get_peer_connections.user_id OR pc.peer_id = get_peer_connections.user_id)
    AND pc.status = status_filter
  ORDER BY pc.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create a peer connection
CREATE OR REPLACE FUNCTION public.create_peer_connection(user_id UUID, peer_id UUID)
RETURNS UUID AS $$
DECLARE
  connection_id UUID;
BEGIN
  INSERT INTO public.peer_connections (user_id, peer_id, status)
  VALUES (create_peer_connection.user_id, create_peer_connection.peer_id, 'pending')
  RETURNING id INTO connection_id;
  
  RETURN connection_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update connection status
CREATE OR REPLACE FUNCTION public.update_connection_status(connection_id UUID, new_status TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE public.peer_connections
  SET 
    status = update_connection_status.new_status,
    updated_at = now()
  WHERE id = update_connection_status.connection_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to delete a peer connection
CREATE OR REPLACE FUNCTION public.delete_peer_connection(connection_id UUID)
RETURNS VOID AS $$
BEGIN
  DELETE FROM public.peer_connections
  WHERE id = delete_peer_connection.connection_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update learning streak
CREATE OR REPLACE FUNCTION public.update_learning_streak(user_id UUID)
RETURNS JSON AS $$
DECLARE
  streak_record RECORD;
  today DATE := CURRENT_DATE;
  yesterday DATE := today - INTERVAL '1 day';
  result JSON;
BEGIN
  -- Check if user has a streak record
  SELECT * INTO streak_record 
  FROM public.learning_streaks 
  WHERE learning_streaks.user_id = update_learning_streak.user_id;
  
  IF NOT FOUND THEN
    -- Create new streak record
    INSERT INTO public.learning_streaks (
      user_id, current_streak, longest_streak, last_activity_date
    ) VALUES (
      update_learning_streak.user_id, 1, 1, today
    )
    RETURNING current_streak, longest_streak INTO streak_record;
    
    result := json_build_object(
      'current_streak', 1,
      'longest_streak', 1,
      'is_new_streak', true,
      'is_continued_streak', false
    );
  ELSE
    -- Check if user already logged activity today
    IF streak_record.last_activity_date = today THEN
      -- Already logged today, no change to streak
      result := json_build_object(
        'current_streak', streak_record.current_streak,
        'longest_streak', streak_record.longest_streak,
        'is_new_streak', false,
        'is_continued_streak', false
      );
    ELSIF streak_record.last_activity_date = yesterday THEN
      -- Continue streak
      UPDATE public.learning_streaks 
      SET 
        current_streak = current_streak + 1,
        last_activity_date = today,
        longest_streak = GREATEST(longest_streak, current_streak + 1),
        updated_at = now()
      WHERE user_id = update_learning_streak.user_id
      RETURNING current_streak, longest_streak INTO streak_record;
      
      result := json_build_object(
        'current_streak', streak_record.current_streak,
        'longest_streak', streak_record.longest_streak,
        'is_new_streak', false,
        'is_continued_streak', true
      );
    ELSE
      -- Streak broken, start new streak
      UPDATE public.learning_streaks 
      SET 
        current_streak = 1,
        last_activity_date = today,
        updated_at = now()
      WHERE user_id = update_learning_streak.user_id
      RETURNING current_streak, longest_streak INTO streak_record;
      
      result := json_build_object(
        'current_streak', 1,
        'longest_streak', streak_record.longest_streak,
        'is_new_streak', true,
        'is_continued_streak', false
      );
    END IF;
  END IF;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get learning analytics
CREATE OR REPLACE FUNCTION public.get_learning_analytics(user_id UUID)
RETURNS JSON AS $$
DECLARE
  total_completed INTEGER;
  total_lessons INTEGER;
  completion_rate FLOAT;
  most_active_hour TEXT;
  most_active_day TEXT;
  avg_time_per_lesson FLOAT;
  current_streak INTEGER;
  longest_streak INTEGER;
  last_week_activity INTEGER;
  analytics_json JSON;
BEGIN
  -- Get completion rate
  SELECT 
    COUNT(*) FILTER (WHERE completed = true) as completed_count,
    COUNT(*) as total_count
  INTO total_completed, total_lessons
  FROM public.user_progress
  WHERE user_id = get_learning_analytics.user_id;
  
  completion_rate := CASE WHEN total_lessons > 0 THEN 
    (total_completed::FLOAT / total_lessons::FLOAT) * 100 
    ELSE 0 END;
  
  -- Get most active hour of day
  SELECT 
    TO_CHAR(updated_at, 'HH24') || ':00'
  INTO most_active_hour
  FROM public.user_progress
  WHERE user_id = get_learning_analytics.user_id
    AND completed = true
  GROUP BY TO_CHAR(updated_at, 'HH24')
  ORDER BY COUNT(*) DESC
  LIMIT 1;
  
  -- Get most active day of week
  SELECT 
    TO_CHAR(updated_at, 'Day')
  INTO most_active_day
  FROM public.user_progress
  WHERE user_id = get_learning_analytics.user_id
    AND completed = true
  GROUP BY TO_CHAR(updated_at, 'Day')
  ORDER BY COUNT(*) DESC
  LIMIT 1;
  
  -- Get streak information
  SELECT 
    current_streak, longest_streak
  INTO current_streak, longest_streak
  FROM public.learning_streaks
  WHERE user_id = get_learning_analytics.user_id;
  
  -- Get last week activity count
  SELECT 
    COUNT(DISTINCT DATE(updated_at))
  INTO last_week_activity
  FROM public.user_progress
  WHERE user_id = get_learning_analytics.user_id
    AND updated_at >= NOW() - INTERVAL '7 days';
  
  -- Build JSON response
  analytics_json := json_build_object(
    'completion_rate', ROUND(completion_rate, 2),
    'total_completed', total_completed,
    'total_lessons', total_lessons,
    'most_active_hour', COALESCE(most_active_hour, 'Not enough data'),
    'most_active_day', COALESCE(most_active_day, 'Not enough data'),
    'current_streak', COALESCE(current_streak, 0),
    'longest_streak', COALESCE(longest_streak, 0),
    'last_week_activity', last_week_activity,
    'learning_pattern', CASE 
      WHEN last_week_activity >= 6 THEN 'Daily Learner'
      WHEN last_week_activity >= 3 THEN 'Regular Learner'
      WHEN last_week_activity >= 1 THEN 'Casual Learner'
      ELSE 'Inactive'
    END
  );
  
  RETURN analytics_json;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
