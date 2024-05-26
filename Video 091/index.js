import path from 'path';
import { promises as fs } from 'fs';

async function organizeDirectory(directoryPath) {
  try {
    // Read the contents of the directory
    const items = await fs.readdir(directoryPath);

    for (const item of items) {
      const itemPath = path.join(directoryPath, item);
      const stats = await fs.lstat(itemPath);

      if (stats.isFile()) {
        // Get the file extension
        const ext = path.extname(item).slice(1); // remove the leading '.'

        if (ext) {
          // Create the subdirectory if it doesn't exist
          const subdirPath = path.join(directoryPath, ext);
          await fs.mkdir(subdirPath, { recursive: true });

          // Move the file to the subdirectory
          const newFilePath = path.join(subdirPath, item);
          await fs.rename(itemPath, newFilePath);
        }
      }
    }

    console.log('Directory organized successfully!');
  } catch (error) {
    console.error('Error organizing directory:', error);
  }
}

// Use process.cwd() for the current working directory or specify a different path
const currentDir = process.cwd() + "/clutter";
organizeDirectory(currentDir);
