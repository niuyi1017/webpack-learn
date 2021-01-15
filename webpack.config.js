const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.ts'
  },
  devtool: "cheap-module-eval-source-map",
  module:{
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: '/node_modules/'
      },
    ]
  },
  plugins:[
    
],
  output:{
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist')
  }
}