
/**
 * Utility for verifying if paths exist via fetch API
 */

// Check if a single path exists by making a HEAD request
export const verifyPath = async (path: string): Promise<boolean> => {
  try {
    // Make sure path starts with a slash if it doesn't start with http
    if (!path.startsWith('/') && !path.startsWith('http')) {
      path = '/' + path;
    }
    
    // Convert Windows-style backslashes to forward slashes
    path = path.replace(/\\/g, '/');
    
    // Remove any duplicate slashes
    path = path.replace(/\/\//g, '/');
    
    console.log(`Checking path: ${path}`);
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.log(`Failed to check path: ${path}`);
    return false;
  }
};

// Check multiple paths and return the first one that exists
export const findFirstValidPath = async (paths: string[]): Promise<string | null> => {
  for (const path of paths) {
    const isValid = await verifyPath(path);
    if (isValid) {
      return path;
    }
  }
  return null;
};
