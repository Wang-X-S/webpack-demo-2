const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", //把js字符串转化为style标签
          "css-loader", //把css代码转化为js字符串
          {
            loader: "sass-loader", //把sass代码转化成css代码
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "13jun",
      template: "src/assets/index.html",
    }),
  ],
};
