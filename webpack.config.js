const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  externals:'lodash',
  plugins: [
    new CleanWebpackPlugin()
  ],
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'library',
    libraryTarget: 'umd'
  }
}