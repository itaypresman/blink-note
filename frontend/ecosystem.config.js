module.exports = {
    apps: [{
        script: 'server.js',
        cwd: './',
        mode: 'cluster',
        name: 'fe',
        instances: 1
    }],
};
