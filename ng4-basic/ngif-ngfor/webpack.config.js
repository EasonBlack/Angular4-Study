var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')
path.resolve(__dirname, './dist')
module.exports = {
  entry: "./main.ts",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
};