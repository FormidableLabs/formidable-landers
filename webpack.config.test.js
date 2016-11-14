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
        test: /\.json$/,
        loader: "json"
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      }, {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }, {
        test: /.svg$/,
        loaders: [
          require.resolve("raw-loader"),
          require.resolve("image-webpack-loader")
        ]
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
