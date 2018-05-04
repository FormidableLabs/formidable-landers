const path = require("path");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },
  // devtool: "inline-source-map", //just do inline source maps instead of the default
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/, //eslint-disable-line no-undef
        loader: "babel-loader",
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
        ]
      }, {
        test: /\.svg$/,
        use: [
          "raw-loader",
          "image-webpack-loader",
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          "file-loader",
          "image-webpack-loader",
        ]
      }
    ]
  },
  externals: {
    "jsdom": "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react/addons": true
  },
  mode: "production"
};
