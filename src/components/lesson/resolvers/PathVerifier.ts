/**
 * Utility for verifying if paths exist via fetch API
 */

// Check if a single path exists by making a HEAD request
export const verifyPath = async (path: string): Promise<boolean> => {
  try {
    // Handle local file paths by converting them to relative web paths
    // This removes the absolute local path portion and keeps only the relative path
    if (path.includes("C:\\Users\\Lenovo\\quantum-quest-academy\\public")) {
      // Convert to web path format
      const webPath = path.replace("C:\\Users\\Lenovo\\quantum-quest-academy\\public", "");
      path = webPath.replace(/\\/g, '/');
    }
    
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
