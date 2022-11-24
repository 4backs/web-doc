import esbuildServe from 'esbuild-serve';

esbuildServe({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: '/dist',
    logLevel: 'info',
    // format: 'esm',
    // target: ['esnext']
    // splitting: true
});