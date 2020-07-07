// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'pact', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('@pact-foundation/karma-pact'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        pact: [{
            port: 1234,
            consumer: 'ui',
            provider: 'backend',
            logLevel: 'DEBUG',
            log: 'logs/pact.log',
            dir: 'pacts',
            spec: 2
        }],
        proxies: {
            '/api/book': 'http://127.0.0.1:1234/api/book',
        }
    });
};
