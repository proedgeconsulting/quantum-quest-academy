
/**
 * Collection of strategies for generating possible file paths to try
 */

// Generate paths with various leading slash patterns
export const generateSlashVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
  // Try with and without leading slash
  paths.push(baseUrl);
  if (!baseUrl.startsWith('/')) paths.push('/' + baseUrl);
  else paths.push(baseUrl.substring(1));
  
  return paths;
};

// Generate paths with the "simulators" subfolder
export const generateSubfolderVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
  // Try with simulators subfolder
  paths.push(`/simulators/${fileName}`);
  paths.push(`simulators/${fileName}`);
  
  return paths;
};

// Generate paths with different spacing patterns (hyphen, underscore)
export const generateSpacingVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
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
  
  return paths;
};

// Generate paths with HTML extension variations
export const generateExtensionVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
  // Skip if already has .html extension
  if (baseUrl.endsWith('.html')) {
    return paths;
  }
  
  // Try adding .html extension
  const htmlFileName = fileName + '.html';
  paths.push('/' + htmlFileName);
  paths.push(htmlFileName);
  paths.push(`/simulators/${htmlFileName}`);
  
  // With hyphen and underscore variants
  const hyphenatedName = fileName.replace(/ /g, '-');
  const hyphenatedHtml = hyphenatedName + '.html';
  paths.push('/' + hyphenatedHtml);
  paths.push(hyphenatedHtml);
  paths.push(`/simulators/${hyphenatedHtml}`);
  
  const underscoreName = fileName.replace(/ /g, '_');
  const underscoreHtml = underscoreName + '.html';
  paths.push('/' + underscoreHtml);
  paths.push(underscoreHtml);
  paths.push(`/simulators/${underscoreHtml}`);
  
  return paths;
};

// Generate paths with capitalization variations
export const generateCaseVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
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
  
  return paths;
};

// Generate paths with abbreviation variations
export const generateAbbreviationVariations = (baseUrl: string): string[] => {
  const paths = [];
  const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
  
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
  
  return paths;
};

// Main function to generate all path variations
export const generateAllPossiblePaths = (baseUrl: string): string[] => {
  let allPaths = [
    ...generateSlashVariations(baseUrl),
    ...generateSubfolderVariations(baseUrl),
    ...generateSpacingVariations(baseUrl),
    ...generateExtensionVariations(baseUrl),
    ...generateCaseVariations(baseUrl),
    ...generateAbbreviationVariations(baseUrl)
  ];
  
  // Remove duplicates
  return [...new Set(allPaths)];
};
