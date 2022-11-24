const { copyFile } = require('fs/promises');

const build = async () => {

    // Buildar para node
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outfile: '/dist/index.js',
        platform: 'node',
        external: ['vanilla-render-function'],
        target: ['node10.4'],
    });

    // Buildar ECMAScript Module
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: false,
        sourcemap: false,
        outfile: '/dist/esm/index.js',
        external: ['vanilla-render-function'],
        format: 'esm',
        target: ['es2018'],
    });

    // Buildar para browser
    require('esbuild').buildSync({
        entryPoints: ['./src/index.ts'],
        bundle: true,
        minify: true,
        sourcemap: false,
        outfile: '/dist/unpkg/web-doc.min.js',
        target: ['esnext']
    });

    copyFile('package.json', './dist/package.json');
};

build();