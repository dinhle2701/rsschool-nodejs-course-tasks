import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';

const decompress = async () => {
    const source = join('src', 'zip', 'files', 'archive.gz');
    const destination = join('src', 'zip', 'files', 'fileToCompress.txt');
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
