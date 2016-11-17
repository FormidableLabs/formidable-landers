const path = require("path");

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  // devtool: "inline-source-map", //just do inline source maps instead of the default
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"), //eslint-disable-line no-undef
        loader: require.resolve("babel-loader")
      }, {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, "node_modules"), //eslint-disable-line no-undef
        loader: require.resolve("babel-loader")
      }, {
        test: /\.css$/,
        loaders: [
          require.resolve("style-loader"),
          require.resolve("css-loader"),
          require.resolve("postcss-loader")
        ]
      }, {
        test: /\.svg$/,
        loaders: [
          require.resolve("raw-loader"),
          require.resolve("image-webpack-loader")
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          require.resolve("file-loader"),
          require.resolve("image-webpack-loader")
        ]
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  externals: {
    "jsdom": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react/addons": true
  }
};
