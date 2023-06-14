module.exports = {
    apps: [{
        script: 'dist/index.js',
        cwd: './',
        mode: 'cluster',
        name: 'be',
        instances: 1
    }],
};
