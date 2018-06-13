const path = require('path');
const webpack = require('webpack');
const env = require('good-env')

module.exports = {
  entry: './lib/javascripts/test.js',
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'public', 'javascripts')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  watch: env.getBool('WEBPACK_WATCH') || false,
};
