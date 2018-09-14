const path = require("path"),
      HtmlWebpackPlugin = require('html-webpack-plugin')
const myforappSourcePath = path.resolve(__dirname,'../myforapp/src')

module.exports = {
    entry:{
        myforapp: myforappSourcePath
    },
    module:{
        rules:[
            {
                test: /\.(jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
                include:myforappSourcePath,
                loader: {
                  loader: 'file-loader',
                  options:{
                      outputPath:'myforapp/assets/'
                  }
                }
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'./myforapp/template.html',
           filename:'./myforapp/index.html',
           chunks:['myforapp']
       })
    ]
}