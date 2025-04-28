import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';

const compress = async () => {
    const source = join('src', 'zip', 'files', 'fileToCompress.txt');
    const destination = join('src', 'zip', 'files', 'archive.gz');
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
