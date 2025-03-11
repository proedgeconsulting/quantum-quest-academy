
import React, { useState, useEffect } from 'react';
import { generateAllPossiblePaths } from './resolvers/PathGenerationStrategies';
import { findFirstValidPath } from './resolvers/PathVerifier';

interface SimulatorPathResolverProps {
  url: string;
  onResolve: (resolvedUrl: string) => void;
  onError: () => void;
}

const SimulatorPathResolver: React.FC<SimulatorPathResolverProps> = ({ 
  url, 
  onResolve,
  onError
}) => {
  const [isResolved, setIsResolved] = useState(false);
  
  useEffect(() => {
    const resolveSimulatorPath = async () => {
      console.log(`SimulatorPathResolver: Trying to resolve paths for ${url}`);
      
      // Reset resolved state when URL changes
      setIsResolved(false);
      
      // First check if the URL is already absolute (starts with http or https)
      if (url.startsWith('http://') || url.startsWith('https://')) {
        console.log(`SimulatorPathResolver: URL is already absolute: ${url}`);
        onResolve(url);
        setIsResolved(true);
        return;
      }
      
      // Clean up the URL - remove any leading "public" directory if present
      // This ensures we don't have duplicate "public" in the path
      let cleanUrl = url.replace(/^\/public\/|^public\//, '/');
      
      // Ensure URL starts with a slash
      if (!cleanUrl.startsWith('/')) {
        cleanUrl = '/' + cleanUrl;
      }
      
      // Generate all possible paths based on our strategies
      const possiblePaths = generateAllPossiblePaths(cleanUrl);
      
      // Log all paths we're going to try
      console.log('Attempting the following paths:');
      possiblePaths.forEach(path => console.log(` - ${path}`));
      
      // Try each path until we find a valid one
      const validPath = await findFirstValidPath(possiblePaths);
      
      if (validPath) {
        console.log(`SimulatorPathResolver: Successfully resolved ${url} to ${validPath}`);
        onResolve(validPath);
        setIsResolved(true);
      } else {
        // If we get here, none of the paths worked
        console.error(`SimulatorPathResolver: Failed to resolve any path for ${url}`);
        console.error(`Attempted paths: ${possiblePaths.join(', ')}`);
        onError();
      }
    };
    
    if (!isResolved) {
      resolveSimulatorPath();
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [url, onResolve, onError, isResolved]);
  
  // This component doesn't render anything
  return null;
};

export default SimulatorPathResolver;
