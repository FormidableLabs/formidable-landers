const webpackConfig = require("./webpack.config.test");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    // Run a customized instance of headless chrome for dev + Travis CI.
    browsers: ['ChromeHeadlessCustom'],
    customLaunchers: {
      ChromeHeadlessCustom: {
        base: 'ChromeHeadless',
        // --no-sandbox for https://github.com/travis-ci/docs-travis-ci-com/pull/1671/files
        flags: ['--no-sandbox']
      }
    },
    reporters: ["spec"],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: true,

    files: [
      "test/setup.js",
      // all files in `tests/`
      "test/**/*.js"
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      "src/**/*.jsx": ["webpack", "sourcemap"],
      "test/**/*.js": ["webpack", "sourcemap"]
    },

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies
    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    client: {
      mocha: {
        ui: "bdd"
      }
    },

    plugins: [
      "karma-chrome-launcher",
      "karma-mocha",
      "karma-sourcemap-loader",
      "karma-spec-reporter",
      "karma-webpack"
    ]
  });
};
