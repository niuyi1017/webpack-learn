const webpack = require('webpack')
const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")

const devConfig = {
  mode: 'development',
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase:"./dist",
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module:{
    rules: [{
      test: /\.styl$/,
      use: [
        'style-loader', 
        {
          loader: "css-loader",
          options:{
            importLoaders: 2,
            modules:true
          }
         }, 'stylus-loader', "postcss-loader"]
    }]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    usedExports: true
  }
 
}
module.exports = merge(commonConfig, devConfig)