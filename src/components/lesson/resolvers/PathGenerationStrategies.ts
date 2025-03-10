
/**
 * Utility for generating possible paths to try when resolving simulator files
 */

export const generateAllPossiblePaths = (url: string): string[] => {
  const paths: string[] = [];
  
  // Clean the URL by removing any leading slashes and normalizing public prefixes
  let cleanUrl = url.replace(/^\/+/, '');
  
  // Handle the case where the URL already includes 'public/'
  if (cleanUrl.startsWith('public/')) {
    cleanUrl = cleanUrl.substring(7); // Remove the 'public/' prefix
  }
  
  // Always try the original URL first
  paths.push(url);
  
  // Don't add duplicate paths
  const addPathIfNew = (path: string) => {
    if (!paths.includes(path)) {
      paths.push(path);
    }
  };
  
  // Generate normalized paths
  addPathIfNew(cleanUrl); // Without public prefix
  addPathIfNew('public/' + cleanUrl); // With public/ prefix
  
  // If URL contains spaces, try with encoding
  if (cleanUrl.includes(' ')) {
    const encodedUrl = cleanUrl.replace(/ /g, '%20');
    addPathIfNew(encodedUrl);
    addPathIfNew('public/' + encodedUrl);
  }
  
  // Special case for simulators directory
  if (!cleanUrl.startsWith('simulators/')) {
    const fileName = cleanUrl.split('/').pop() || '';
    addPathIfNew('simulators/' + fileName);
    addPathIfNew('public/simulators/' + fileName);
  }
  
  return paths;
};
