const webpackConfig = require("./webpack.config.test");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    browsers: ["PhantomJS"],
    reporters: ["spec"],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

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
    webpack: {...webpackConfig, mode: "production"},

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
      "karma-phantomjs-launcher",
      "karma-sourcemap-loader",
      "karma-spec-reporter",
      "karma-webpack"
    ]
  });
};
