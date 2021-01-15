const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
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
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins:[
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },
  },
  output:{
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, '../dist')
  }
}