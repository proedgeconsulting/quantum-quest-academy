
import React, { useState, useEffect } from 'react';

// List of possible file path patterns to try
const generatePossiblePaths = (baseUrl: string) => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
  // Try with and without leading slash
  paths.push(baseUrl);
  if (!baseUrl.startsWith('/')) paths.push('/' + baseUrl);
  else paths.push(baseUrl.substring(1));
  
  // Try with simulators subfolder
  paths.push(`/simulators/${fileName}`);
  paths.push(`simulators/${fileName}`);
  
  // Try with spaces replaced with hyphens
  const hyphenatedName = fileName.replace(/ /g, '-');
  paths.push('/' + hyphenatedName);
  paths.push(hyphenatedName);
  paths.push(`/simulators/${hyphenatedName}`);
  
  // Try with spaces replaced with underscores
  const underscoreName = fileName.replace(/ /g, '_');
  paths.push('/' + underscoreName);
  paths.push(underscoreName);
  paths.push(`/simulators/${underscoreName}`);
  
  return [...new Set(paths)]; // Remove duplicates
};

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
    const tryPaths = async () => {
      console.log(`SimulatorPathResolver: Trying to resolve paths for ${url}`);
      const possiblePaths = generatePossiblePaths(url);
      
      // Log all paths we're going to try
      console.log('Attempting the following paths:');
      possiblePaths.forEach(path => console.log(` - ${path}`));
      
      for (const path of possiblePaths) {
        try {
          // Check if the file exists by making a HEAD request
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            console.log(`SimulatorPathResolver: Successfully resolved ${url} to ${path}`);
            onResolve(path);
            setIsResolved(true);
            return;
          }
        } catch (error) {
          // Continue trying other paths
          console.log(`Failed to check path: ${path}`);
        }
      }
      
      // If we get here, none of the paths worked
      console.error(`SimulatorPathResolver: Failed to resolve any path for ${url}`);
      onError();
    };
    
    if (!isResolved) {
      tryPaths();
    }
    
    return () => {
      // Cleanup if needed
    };
  }, [url, onResolve, onError, isResolved]);
  
  // This component doesn't render anything
  return null;
};

export default SimulatorPathResolver;
