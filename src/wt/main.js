import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
    const workers = [];
    const results = [];
    const numCores = cpus().length;

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(join('src', 'wt', 'worker.js'));
        workers.push(worker);
        worker.postMessage(10 + i);

        worker.on('message', (data) => {
            results[i] = { status: 'resolved', data };
            if (results.length === numCores && results.every(r => r)) {
                console.log(results);
            }
        });

        worker.on('error', () => {
            results[i] = { status: 'error', data: null };
            if (results.length === numCores && results.every(r => r)) {
                console.log(results);
            }
        });
    }
};

await performCalculations();
