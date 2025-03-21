
# Development Scripts

## Cleanup Duplicates Script

This script identifies and removes duplicate HTML files from the public directory,
keeping only one version (preferring files in the simulators directory).

### How to Run

Run the script directly with Node:

```bash
node scripts/cleanup_duplicates.js
```

No need to add it to package.json scripts.

### What it Does

1. Scans the public and public/simulators directories for HTML files
2. Identifies duplicate files based on normalized filenames
3. Keeps one file (preferring the one in simulators directory)
4. Moves duplicates to a backup-duplicates folder

### Output

The script will output:
- The number of duplicate sets found
- Which files are duplicates
- Which file is being kept
- Where duplicates are being moved to
