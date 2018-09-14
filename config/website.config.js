const path = require("path"),
      HtmlWebpackPlugin = require('html-webpack-plugin')
const websiteforappSourcePath = path.resolve(__dirname,'../website/src')

module.exports = {
    entry:{
        websitforapp: websiteforappSourcePath
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'./website/template.html',
           filename:'./website/index.html',
           chunks:['websitforapp']
       })
    ]
}