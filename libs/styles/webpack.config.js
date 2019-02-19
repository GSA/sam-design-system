var webpack = require('webpack');
var path = require('path');
var MODULE_BUILD_DIR = path.resolve(__dirname, '../../dist/libs/styles/');

module.exports = {
  entry: './libs/styles/src/sam-styles-2/src/stylesheets/theme/styles.scss',
  output: {
    path: MODULE_BUILD_DIR,
    filename: 'styles.css'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  }
};