
/**
 * Utility for verifying if paths exist via fetch API
 */

// Check if a single path exists by making a HEAD request
export const verifyPath = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    const isValid = response.ok;
    console.log(`Path check: ${path} - ${isValid ? 'Valid ✅' : 'Invalid ❌'}`);
    return isValid;
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
      console.log(`Found valid path: ${path}`);
      return path;
    }
  }
  console.error('No valid paths found among all tested variations');
  return null;
};
