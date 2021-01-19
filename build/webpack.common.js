const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: "src/index.html"
  }),
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
files.forEach(file => {
  if(/.*\.dll.js/.test(file)){
    plugins.push(
      new AddAssetHtmlWebpackPlugin({
        filepath: path.resolve(__dirname, '../dll', file)
      })
    )
  }
  if(/.*\.manifest.json/.test(file)){
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll', file)
    }))
  }
})

module.exports = {
  entry: {
    main: './src/index.js'
  },
  resolve:{
    extensions: ['.js','.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' 
    }
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
      
    ]
  },
  plugins,
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },
  },
  output:{
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
  }
}