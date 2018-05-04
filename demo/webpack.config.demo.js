/*globals __dirname:false */

const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssNext = require("postcss-cssnext");
const postcssInlineSvg = require("postcss-inline-svg");

const DashboardPlugin = require("webpack-dashboard/plugin");

const webpack = require("webpack");

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
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-1", "react"]
        }
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          { 
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                postcssImport,
                postcssUrl({url: "inline"}),
                postcssNext,
                postcssInlineSvg
              ]
            }
          }
        ]
      }, {
        test: /\.svg$/,
        use: [
          "raw-loader",
          "image-webpack-loader"
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          "file-loader",
          "image-webpack-loader"
        ]
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new DashboardPlugin(), 
  ],
  mode: 'development'
};
