module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url")({ url: "inline" }),
    require("postcss-cssnext"),
    require("postcss-inline-svg")
  ]
};
