/*globals __dirname:false */

const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  devServer: {
    contentBase: __dirname,
    noInfo: false
  },

  output: {
    path: __dirname,
    filename: "main.js",
    publicPath: "/"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./demo/demo.js"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-1", "react"]
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      }, {
        test: /.svg$/,
        loaders: [
          require.resolve("raw-loader"),
          require.resolve("image-webpack-loader")
        ]
      }, {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new DashboardPlugin()
  ]
};
