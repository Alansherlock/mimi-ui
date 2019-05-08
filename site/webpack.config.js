const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack");
const isDev = process.env.NODE_ENV === 'development';
const config = {
    entry: "./package/index.tsx",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Scss to CSS
            }
          ]
        },
        //配置处理小的图片
        {
          test:/\.(gif|jpg|jpeg|png|svg)$/,
          use:[
              {
                  loader:'url-loader',
                  options:{
                      limit:1024,
                      name:'[name].[ext]'
                  }
              }
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // 生成的模板文件的名字 默认index.html
            template: "./index.html", //模板来源文件
            hash: true
          })
    ],
};
if(isDev) {
  //调试时，使代码映射正常代码
  config.devServer = {
    port: 9000,
    disableHostCheck: true,
    host: "0.0.0.0",
    compress: true,
    open: true
  }
  config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  )
}
module.exports = config;