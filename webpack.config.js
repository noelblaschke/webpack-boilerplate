var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './build/manifest.js',
  output: {
    filename: './public/assets/app.js'
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        {
          test: /\.sass$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass')
        }
    ]
  },
  plugins: [
      new ExtractTextPlugin('./public/assets/app.css')
  ]
};
