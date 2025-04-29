import { fork } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    const child = fork(join('src', 'cp', 'files', 'script.js'), args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['arg1', 'arg2']); // test run
