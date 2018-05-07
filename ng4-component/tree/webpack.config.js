var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

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
          'awesome-typescript-loader','angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
   
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'app'),
        use: ExtractTextPlugin.extract({ 
          fallbackLoader: 'style-loader', 
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|woff2)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};