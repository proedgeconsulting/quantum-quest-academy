const fs = require('fs');
const path = require('path');

// Directories to search
const directories = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/simulators')
];

// Function to normalize filenames for comparison
function normalizeFilename(filename) {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-\.]/g, '');
}

// Find duplicate HTML files
function findDuplicates() {
  const allFiles = [];
  const normalizedMap = {};
  const duplicates = [];

  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.html')) {
          const filePath = path.join(dir, file);
          const normalized = normalizeFilename(file);
          
          if (!normalizedMap[normalized]) {
            normalizedMap[normalized] = [];
          }
          
          normalizedMap[normalized].push(filePath);
          allFiles.push({ path: filePath, normalized });
        }
      });
    } else {
      console.log(`Directory ${dir} does not exist`);
    }
  });

  // Find duplicates
  Object.keys(normalizedMap).forEach(norm => {
    if (normalizedMap[norm].length > 1) {
      duplicates.push(normalizedMap[norm]);
    }
  });

  return duplicates;
}

// Process duplicates
const duplicates = findDuplicates();

if (duplicates.length === 0) {
  console.log("No duplicates found!");
} else {
  console.log(`Found ${duplicates.length} sets of duplicates:`);
  
  duplicates.forEach((set, index) => {
    console.log(`\nDuplicate set #${index + 1}:`);
    set.forEach(file => console.log(`  - ${file}`));
    
    // Keep the file in the simulators directory if it exists there
    const simulatorVersion = set.find(f => f.includes('simulators'));
    const toKeep = simulatorVersion || set[0];
    
    console.log(`  Keeping: ${toKeep}`);
    
    // Move other duplicates to a backup folder
    const backupDir = path.join(__dirname, '../backup-duplicates');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    set.forEach(file => {
      if (file !== toKeep) {
        const filename = path.basename(file);
        const backupPath = path.join(backupDir, filename);
        
        // Move file to backup
        fs.renameSync(file, backupPath);
        console.log(`  Moved: ${file} → ${backupPath}`);
      }
    });
  });
  
  console.log("\nCleanup complete!");
}
