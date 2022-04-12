const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PluginConfig= require('./config/plugins')
const ModuleConfig= require('./config/modules')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: PluginConfig('development'),
  module:{
    rules:[
      ...ModuleConfig(),
      {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  
  devServer: {
    port: 3000,
    compress: true,
    open: true,
    hot: true,
    proxy: {
       '/api': 'http://localhost:3000',
    },
  },
});