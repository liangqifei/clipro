const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleConfig = (mode) => {
   const allCssModule = generateLoaders(mode)
   return allCssModule
}

const generateLoaders = (mode,types = ['less'],) => {
   const isProductionMode=mode=='production'
   const classRules=[{
      test: /\.less$/,
      exclude: /node_modules/,
      use: [
         isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
         'css-loader',
         {
            loader:'less-loader',
         },
         'postcss-loader'
      ]
   },
   {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
         isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
         'css-loader',
         'postcss-loader'
      ]
   }]
   return classRules
}


module.exports = ModuleConfig