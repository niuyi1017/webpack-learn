const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase:"./dist",
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module:{
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath:'images/',
            limit:'10240'
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.stylus$/,
        use: ['style-loader', {
          loader: "css-loader",
          options:{
            importLoaders: 2,
            modules:true
          }
        }, 'stylus-loader', "postcss-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
],
  output:{
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist')
  }
    
}