var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist',
    publicPath: 'http://localhost:8080/build/',
  }
};
