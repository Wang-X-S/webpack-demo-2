const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const base = require("./webpack.config.base.js");

module.exports = {
    ...base, //把base的所有属性抄到这里,继承
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
    },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //style-loader 把读到的字符串文件放到html里面,css-loader读取css文件
      },
    ],
  },
};
