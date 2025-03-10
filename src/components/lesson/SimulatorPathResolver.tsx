
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
      
      // First check if the URL is already absolute (starts with http or https)
      if (url.startsWith('http://') || url.startsWith('https://')) {
        console.log(`SimulatorPathResolver: URL is already absolute: ${url}`);
        onResolve(url);
        setIsResolved(true);
        return;
      }
      
      // Check if it's already a local file path
      if (url.includes('C:\\Users\\Lenovo\\quantum-quest-academy\\public')) {
        console.log(`SimulatorPathResolver: URL is already a local path: ${url}`);
        // Convert local path to web-friendly path for the browser
        const webPath = url.replace('C:\\Users\\Lenovo\\quantum-quest-academy\\public', '');
        onResolve(webPath.replace(/\\/g, '/'));
        setIsResolved(true);
        return;
      }
      
      // Normalize the URL before processing
      let normalizedUrl = url;
      
      // Handle URLs that start with "/public/" by removing the leading slash
      // This prevents duplicate paths like public/public/ or /public/public/
      if (normalizedUrl.startsWith('/public/')) {
        normalizedUrl = normalizedUrl.substring(1); // Remove the leading slash
      }
      
      // Also handle the case where the URL starts with just "public/"
      if (normalizedUrl.startsWith('public/')) {
        // Extract the path after "public/"
        const pathAfterPublic = normalizedUrl.substring(7);
        // Try the direct path first
        try {
          const response = await fetch(pathAfterPublic);
          if (response.ok) {
            console.log(`SimulatorPathResolver: Successfully resolved ${url} to ${pathAfterPublic}`);
            onResolve(pathAfterPublic);
            setIsResolved(true);
            return;
          }
        } catch (error) {
          console.log(`Direct path failed for ${pathAfterPublic}, trying alternatives...`);
        }
      }
      
      // Generate all possible paths based on our strategies
      const possiblePaths = generateAllPossiblePaths(normalizedUrl);
      
      // Log all paths we're going to try
      console.log('Attempting the following paths:');
      possiblePaths.forEach(path => console.log(` - ${path}`));
      
      // Try each path until we find a valid one
      const validPath = await findFirstValidPath(possiblePaths);
      
      if (validPath) {
        console.log(`SimulatorPathResolver: Successfully resolved ${url} to ${validPath}`);
        
        // If it's a local path, convert it to a web path
        if (validPath.includes('C:\\Users\\Lenovo\\quantum-quest-academy\\public')) {
          const webPath = validPath.replace('C:\\Users\\Lenovo\\quantum-quest-academy\\public', '');
          onResolve(webPath.replace(/\\/g, '/'));
        } else {
          onResolve(validPath);
        }
        setIsResolved(true);
      } else {
        // If we get here, none of the paths worked
        console.error(`SimulatorPathResolver: Failed to resolve any path for ${url}`);
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
