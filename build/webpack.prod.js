const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")
const prodConfig =  {
  mode: 'production',
  devtool: "cheap-module-source-map",
  module: {
		rules:[
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options:{
              importLoaders: 2,
              modules:true
            }
          }, "postcss-loader", 'stylus-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "postcss-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
		]
	},
  optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin()]
	},
  plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		})
	],
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js'
	}

}
module.exports = merge(commonConfig, prodConfig)