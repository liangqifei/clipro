const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 
 const PluginConfig= require('./config/plugins')
const ModuleConfig= require('./config/modules')
 module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   plugins: PluginConfig('production'),
   module:{
    rules:[
      ...ModuleConfig('production'),
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
        loader: 'babel-loader'
      }
    ]
  },
 });
