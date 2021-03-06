const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


module.exports = {
  // entry: './src/app.js', // just for SPA with component approach
  entry: {
    p1: './app.js',
    p2: './page2/app.js',
    p3: './page3/app.js',
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].bundle.js', // for multi-page app
  },
  plugins: [
    new ProgressBarPlugin(),

    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),


    new HtmlWebpackPlugin({
      filename: 'src/index.html',
      inject: false,
      chunks: ['p1'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),

    new HtmlWebpackPlugin({
      filename: 'src/page2/index.html',
      inject: false,
      chunks: ['p2'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'src/page3/index.html',
      inject: false,
      chunks: ['p3'],
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
      { test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] },
      // inline base64 URLs for <=8k images, direct URLs for the rest
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
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
