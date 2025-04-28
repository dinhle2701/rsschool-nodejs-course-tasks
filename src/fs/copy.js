import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
    // Write your code here 
    const srcPath = join('src', 'fs', 'files');
    const destPath = join('src', 'fs', 'files_copy');
    try {
        await fs.access(srcPath);
        await fs.mkdir(destPath);
        const files = await fs.readdir(srcPath);
        for (const file of files) {
            await fs.copyFile(join(srcPath, file), join(destPath, file));
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
