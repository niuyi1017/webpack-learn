const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const commonConfig = require("./webpack.common")
const {merge} = require("webpack-merge")

const prodConfig =  {
  mode: 'production',
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.styl$/,
        use:[
          MiniCssExtractPlugin.loader,
          'style-loader', 
          {
            loader: "css-loader",
            options:{
              importLoaders: 2,
              modules:true
            }
          }, 'stylus-loader', "postcss-loader"
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.[contentHash].css'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
module.exports = merge(commonConfig, prodConfig)