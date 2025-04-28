import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
    // Write your code here 
    const wrongPath = join('src', 'fs', 'files', 'wrongFilename.txt');
    const properPath = join('src', 'fs', 'files', 'properFilename.md');
    try {
        await fs.access(wrongPath);
        await fs.rename(wrongPath, properPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();