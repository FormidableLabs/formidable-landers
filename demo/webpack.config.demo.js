/*globals __dirname:false */

const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssNext = require("postcss-cssnext");
const postcssInlineSvg = require("postcss-inline-svg");

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
        loader: require.resolve("babel-loader"),
        query: {
          presets: ["es2015", "stage-1", "react"]
        }
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
        loader: "json-loader"
      }
    ]
  },
  postcss: (webpack) => { // eslint-disable-line no-shadow
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssUrl,
      postcssNext,
      postcssInlineSvg
    ];
  },
  plugins: [
    new DashboardPlugin()
  ]
};
