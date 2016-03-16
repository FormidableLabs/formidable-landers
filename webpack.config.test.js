var path = require("path");

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  // devtool: "inline-source-map", //just do inline source maps instead of the default
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: require.resolve("babel-loader")
      }, {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: require.resolve("babel-loader")
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
