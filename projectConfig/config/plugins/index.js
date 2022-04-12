const Html_Webpack_Plugin= require('./html_webpack_plugin') 
const Mini_Css_Extract_Plugin= require('./mini_css_extract_plugin') 
// const { VueLoaderPlugin } = require('vue-loader')
const PluginConfig=(mode)=>{
   const plugins=[]
   plugins.push(Html_Webpack_Plugin)
   if(mode=='production'){
      plugins.push(Mini_Css_Extract_Plugin)
   }
   // plugins.push(new VueLoaderPlugin())
   return plugins
}

module.exports=PluginConfig