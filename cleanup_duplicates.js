// NOTE: This is not part of the application, this is just a helper script
// to clean up duplicate simulator files.
// Run this with: node cleanup_duplicates.js

const fs = require('fs');
const path = require('path');

// Directories to check
const directories = [
  'public',
  'public/simulators'
];

// Find all HTML files
const findAllHtmlFiles = (dir) => {
  const results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      // Skip if it's a directory we already check separately
      if (!directories.includes(fullPath)) {
        results.push(...findAllHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push({
        path: fullPath,
        name: file,
        content: fs.readFileSync(fullPath, 'utf8')
      });
    }
  }
  
  return results;
};

// Find and remove duplicates
const findAndRemoveDuplicates = () => {
  let allFiles = [];
  
  // Get all HTML files from all directories
  directories.forEach(dir => {
    allFiles = [...allFiles, ...findAllHtmlFiles(dir)];
  });
  
  console.log(`Found ${allFiles.length} HTML files total.`);
  
  // Group files by content
  const filesByContent = {};
  allFiles.forEach(file => {
    const hash = Buffer.from(file.content).toString('base64');
    if (!filesByContent[hash]) {
      filesByContent[hash] = [];
    }
    filesByContent[hash].push(file);
  });
  
  // Identify duplicates
  let duplicatesFound = 0;
  for (const hash in filesByContent) {
    const files = filesByContent[hash];
    if (files.length > 1) {
      duplicatesFound++;
      console.log('\nDuplicate found:');
      files.forEach(file => console.log(`- ${file.path}`));
      
      // Keep the file in the simulators directory if it exists
      const preferred = files.find(f => f.path.includes('public/simulators/'));
      const toRemove = preferred 
        ? files.filter(f => f !== preferred)
        : files.slice(1); // Keep the first one if no preference
      
      console.log('Keeping:', preferred ? preferred.path : files[0].path);
      console.log('Removing:', toRemove.map(f => f.path).join(', '));
      
      // Uncomment this to actually remove the duplicates
      // toRemove.forEach(file => fs.unlinkSync(file.path));
    }
  }
  
  console.log(`\nFound ${duplicatesFound} sets of duplicate files.`);
  console.log("To actually remove duplicates, uncomment the line with fs.unlinkSync in the script.");
};

findAndRemoveDuplicates();
