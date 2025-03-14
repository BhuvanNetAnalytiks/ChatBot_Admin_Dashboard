const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development', // Development mode
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from public folder
    port: 3000, // Dev server port
    hot: true, // Enable hot reloading
    historyApiFallback: true,
  },
  devtool: 'inline-source-map', // Better debugging with source maps
});
