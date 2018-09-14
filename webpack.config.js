const webpack = require('webpack'), 
      path = require("path"),
      merge = require('webpack-merge'),
      CleanWebpackPlugin = require('clean-webpack-plugin')
const publicPath = path.resolve(__dirname, './public')

const myforapp = require('./config/myforapp.config'),
      websiteforapp = require('./config/website.config'),
      plan = require('./config/plan.config')


module.exports = (env, argv) => {
  return merge({
    output:{
         path:publicPath,
         filename:'[name].js',
         publicPath:'/'
    },
    module: {
      rules: [
        { test: /\.jsx?$/, loader: 'babel-loader' },
        {
          test: /\.css$/,
          use:['style-loader', 'css-loader']
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: {
            loader: 'file-loader',
            options: {
              
            }
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader'
          }
        }
        
      ]
    },
    plugins:[
      // new CleanWebpackPlugin(["./public"]),
      new webpack.ProvidePlugin({
        $:'n-zepto',
        React:'react',
        ReactDOM:'react-dom'
      }),
      //防止重复引用
           new webpack.optimize.SplitChunksPlugin({
               chunks: 'common', // 指定公共 bundle 的名称。
               name:true
             })
    ],
    devServer: {
      contentBase: "./public/",
      port: 8080,
      historyApiFallback:true
    }
  }, myforapp, websiteforapp, plan)

}