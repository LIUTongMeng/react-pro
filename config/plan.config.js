const path = require("path"),
      HtmlWebpackPlugin = require('html-webpack-plugin')
const myforappSourcePath = path.resolve(__dirname,'../plan/src')

module.exports = {
    entry:{
        plan: path.resolve(__dirname,'../plan/src/index.js')
    },
    module:{
        rules:[
            {
                test: /\.(jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
                include:myforappSourcePath,
                loader: {
                  loader: 'file-loader'
                }
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'./plan/index.html',
           filename:'./plan/index.html',
           chunks:['plan']
       })
    ]
}