const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
  entry: './src/app.js', // just for SPA with component approach. Possible Milti-Page with multiple entry/output
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js', // for multi-page app
  },
  plugins: [
    new ProgressBarPlugin(),

    new webpack.ProvidePlugin({ // Provide Jquery
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),


    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),


    new CopyWebpackPlugin([
      { from: './src/img/',
        to: 'img/',
      },
    ]),

  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] },
      { test: /\.(png|jpe?g)$/, loader: 'url-loader?limit=55192' },
      // helps to load bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/,
        loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml' },
    ],
  },
  devtool: 'eval-source-map',
};
