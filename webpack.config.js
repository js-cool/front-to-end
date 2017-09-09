const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');
const { enabledModules } = require('./config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, './src')
        ]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.API_ENV': `"${process.env.API_ENV || 'development'}"`
    }),
    new webpack.ContextReplacementPlugin(/src/, new RegExp(`^./(${enabledModules.join('|')}).*$`)),
    new MinifyPlugin()
  ]
};
