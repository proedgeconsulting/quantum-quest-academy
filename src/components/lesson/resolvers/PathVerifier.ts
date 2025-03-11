
/**
 * Utility for verifying if paths exist via fetch API
 */

// Normalize path by ensuring it starts with a slash and has no double slashes
const normalizePath = (path: string): string => {
  // Make sure path starts with a slash if it doesn't start with http
  if (!path.startsWith('/') && !path.startsWith('http')) {
    path = '/' + path;
  }
  
  // Convert Windows-style backslashes to forward slashes
  path = path.replace(/\\/g, '/');
  
  // Remove any duplicate slashes (but preserve http:// and https://)
  path = path.replace(/([^:])\/\//g, '$1/');
  
  return path;
};

// Check if a single path exists by making a HEAD request
export const verifyPath = async (path: string): Promise<boolean> => {
  try {
    const normalizedPath = normalizePath(path);
    
    console.log(`Checking path: ${normalizedPath}`);
    const response = await fetch(normalizedPath, { method: 'HEAD' });
    
    if (response.ok) {
      console.log(`Path verified successfully: ${normalizedPath}`);
      return true;
    } else {
      console.log(`Path verification failed with status ${response.status}: ${normalizedPath}`);
      return false;
    }
  } catch (error) {
    console.log(`Error checking path: ${path}`, error);
    return false;
  }
};

// Check multiple paths and return the first one that exists
export const findFirstValidPath = async (paths: string[]): Promise<string | null> => {
  for (const path of paths) {
    const isValid = await verifyPath(path);
    if (isValid) {
      return normalizePath(path);
    }
  }
  return null;
};
