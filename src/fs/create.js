import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    // Write your code here 
    const filePath = join('src', 'fs', 'files', 'fresh.txt');
    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();