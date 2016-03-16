var path = require("path");

module.exports = {
  // devtool: "inline-source-map", //just do inline source maps instead of the default
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel"
      }, {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loaders: ["babel-loader?optional=runtime&stage=0"]
      }, {
        test: /\.json$/,
        loader: "json",
      }
    ]
  },
  externals: {
    "jsdom": "window",
    "cheerio": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  }
};
