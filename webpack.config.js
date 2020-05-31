var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.[contenthash].js',
    },
    devtool: 'inline-source-map',
    devServer: {
            contentBase: './dist',
          },
    plugins: [new HtmlWebpackPlugin({
        title: '13jun',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],//style-loader 把读到的字符串文件放到html里面,css-loader读取css文件
          },
        ],
      },
};
