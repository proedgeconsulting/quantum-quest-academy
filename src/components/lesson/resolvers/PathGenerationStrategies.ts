
/**
 * Utility for generating possible paths to try when resolving simulator files
 */

export const generateAllPossiblePaths = (url: string): string[] => {
  const paths: string[] = [];
  
  // Clean the URL by removing any leading slashes
  const cleanUrl = url.replace(/^\/+/, '');
  
  // Always try the original URL first
  paths.push(url);
  
  // Don't add duplicate paths
  const addPathIfNew = (path: string) => {
    if (!paths.includes(path)) {
      paths.push(path);
    }
  };
  
  // If the URL starts with "public/"
  if (cleanUrl.startsWith('public/')) {
    // Try without public prefix (in case we're already in public directory)
    addPathIfNew(cleanUrl.substring(7));
    
    // Try with just a leading slash
    addPathIfNew('/' + cleanUrl);
  } else {
    // If URL doesn't start with public/, try with public/ prefix
    addPathIfNew('public/' + cleanUrl);
    
    // Try with /public/ prefix
    addPathIfNew('/public/' + cleanUrl);
  }
  
  // If URL contains spaces, try with and without encoding
  if (cleanUrl.includes(' ')) {
    const encodedUrl = cleanUrl.replace(/ /g, '%20');
    addPathIfNew(encodedUrl);
    addPathIfNew('public/' + encodedUrl);
    addPathIfNew('/public/' + encodedUrl);
  }
  
  // If URL refers specifically to a simulator, try in the simulators folder
  if (!cleanUrl.includes('/simulators/')) {
    const fileName = cleanUrl.split('/').pop() || '';
    addPathIfNew(`/simulators/${fileName}`);
    addPathIfNew(`public/simulators/${fileName}`);
    addPathIfNew(`/public/simulators/${fileName}`);
  }
  
  return paths;
};
