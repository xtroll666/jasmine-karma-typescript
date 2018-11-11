module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: [ 'jasmine', 'requirejs', 'karma-typescript' ],
    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-junit-reporter',
      'karma-html-reporter',
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-typescript',
    ],

    files: [
      { pattern: 'test/test-main.js', included: true},
      { pattern: 'src/**/*.ts', included: false },
      { pattern: 'test/**/*.ts', included: false },
    ],

    junitReporter: {
      outputDir: "target/test/unit",
    },

    htmlReporter: {
      outputDir: "target/test/unit/html",
    },

    preprocessors: {
      "src/**/*.ts": ["karma-typescript"],
      "test/**/*.ts": ["karma-typescript"],
    },

    reporters: [ 'spec', 'junit', 'html', 'karma-typescript' ],

    karmaTypescriptConfig: {
      tsconfig: 'tsconfig.json',
    },

    include: [
      'src/**/*.ts',
      'test/**/*.ts',
    ],

    port: 9876,
    colors: true,
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true
  });
}