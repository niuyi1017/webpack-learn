const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'develop',
  entry: {
    main: './src/index.js'
  },
  module:{
    roles: [
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
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin({
    template: "src/index.html"
  })],
  output:{
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist')
  }
    
}