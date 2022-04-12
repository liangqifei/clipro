const HtmlWebpackPlugin = require('html-webpack-plugin');
const Html_Webpack_Plugin= new HtmlWebpackPlugin({
    title: '项目配置cli',
    template:'./public/index.html',
    favicon:'./public/favicon.ico'
})
module.exports=Html_Webpack_Plugin  