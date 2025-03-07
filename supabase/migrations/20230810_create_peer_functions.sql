
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
