// 'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
// const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
// const rootDir = path.resolve(__dirname, '../src');
console.warn('PATH', __dirname);
var ExtractTextPlugin = require('extract-text-webpack-plugin');



/*
module.exports = {
  entry: {
    app: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\src\\main'
  },

  output: {
    filename: 'mybundle2.js'
  },

  module: {
    loaders: [
      {test: /\.ts$/, loaders: 'ts'},
      // {test: /\.css$/, loaders: 'style!css'},
      // {test: /\.css$/, loader: 'raw', include: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\src\\app'},
      {test: /\.css$/, loader: 'raw', exclude: /node_modules/ }      
    ]
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  plugins: [
    new HtmlWebpack({
      template: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\src\\index.html'
    })
  ]

};
*/


module.exports = {
  entry: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\src\\main',
   output: {
    filename: 'mybundle.js',
    path: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\dist'
  },
  module: {
    loaders: [
      {test: /\.ts/, loader: 'ts'}
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpack({
      template: 'C:\\Users\\Yago\\WebstormProjects\\test-webpack\\src\\index.html'
    })
  ]
};

// plugins: [new webpack.LoaderOptionsPlugin({debug: true})]
