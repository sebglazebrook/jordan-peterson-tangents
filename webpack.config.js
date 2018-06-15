const path = require('path');
const webpack = require('webpack');
const env = require('good-env')

module.exports = {
  entry: {
    inline: './lib/javascripts/inline.js',
    test: './lib/javascripts/test.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'javascripts')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  watch: env.getBool('WEBPACK_WATCH') || false,
};
