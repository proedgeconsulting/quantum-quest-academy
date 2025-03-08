
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
  
  // Try adding .html extension if not present
  if (!baseUrl.endsWith('.html')) {
    const htmlFileName = fileName + '.html';
    paths.push('/' + htmlFileName);
    paths.push(htmlFileName);
    paths.push(`/simulators/${htmlFileName}`);
    
    // With hyphen and underscore variants
    const hyphenatedHtml = hyphenatedName + '.html';
    paths.push('/' + hyphenatedHtml);
    paths.push(hyphenatedHtml);
    paths.push(`/simulators/${hyphenatedHtml}`);
    
    const underscoreHtml = underscoreName + '.html';
    paths.push('/' + underscoreHtml);
    paths.push(underscoreHtml);
    paths.push(`/simulators/${underscoreHtml}`);
  }
  
  // Try looking for files with variations in capitalization
  const lowerCaseName = fileName.toLowerCase();
  if (lowerCaseName !== fileName) {
    paths.push('/' + lowerCaseName);
    paths.push(lowerCaseName);
    paths.push(`/simulators/${lowerCaseName}`);
    
    if (!baseUrl.endsWith('.html')) {
      paths.push('/' + lowerCaseName + '.html');
      paths.push(lowerCaseName + '.html');
      paths.push(`/simulators/${lowerCaseName}.html`);
    }
  }
  
  // Try with word 'Quantum' abbreviated to Q if it starts with Quantum
  if (fileName.startsWith('Quantum ')) {
    const abbreviatedName = fileName.replace('Quantum ', 'Q');
    paths.push('/' + abbreviatedName);
    paths.push(abbreviatedName);
    paths.push(`/simulators/${abbreviatedName}`);
    
    if (!baseUrl.endsWith('.html')) {
      paths.push('/' + abbreviatedName + '.html');
      paths.push(abbreviatedName + '.html');
      paths.push(`/simulators/${abbreviatedName}.html`);
    }
  }
  
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
