 // base存放公用的东西.
 //不存放一些非公用的东西,比如uglifyjswebplugin

 // 该配置文件未webpack的配置文件

 const path = require('path');

 // 导入webpack 只要这种形式导入,会去node_modules中查询,
 // 这个是给BannerPlugin用的,因为这个插件在webpack中
 const webpack = require('webpack');

 // 导入HtmlWebPackPlugin
 const HtmlWebPackPlugin = require('html-webpack-plugin');



 module.exports = {
   entry: './src/main.js',
   output: {
     //路径,动态获取路径,这边要用绝对路径, 分离配置后,这边的dist需要再往上一层
     // path: path.resolve(__dirname, 'dist'),
     path: path.resolve(__dirname, '../dist'),
     //  文件名
     filename: 'bundle.js',
     //所有打包出来的文件,目录前缀添加dist/
     //使用HtmlWebPackPlugin插件后就可以注释了.因为这个插件会帮你自动添加
     // publicPath: 'dist/'
   },
   // 配置css-loader
   module: {
     rules: [
       {
         test: /\.css$/,
         // 添加style-loader和css-loader
         // css-loader只负责将css文件进行加载
         // style-loader负责将样式生效,添加到DOM中

         // 使用多个loader的时候,是从右向左读取, 所以得把style-loader放第一个,得让css-loader先使用
         use: ['style-loader', 'css-loader']
       },
       //  配置less-loader的rules
       {
         test: /\.less$/,
         use: [
           {
             loader: 'style-loader', // creates style nodes from JS strings
           },
           {
             loader: 'css-loader', // translates CSS into CommonJS
           },
           {
             loader: 'less-loader', // compiles Less to CSS
           },
         ],
       },

       //    如果css中引用了图片之类的资源.需要添加url-loader
       {
         test: /\.(png|jpg|gif|jpeg)$/,
         use: [
           {
             loader: 'url-loader',
             options: {
               // 当图片大小小于这个值的时候,会被编译成base64,比这个值大则需要file-loader,只需要npm install file-loader即可,不需要写json配置
               limit: 8192,
               //设定打包生成的图片命名规范
               name: 'img/[name].[hash:8].[ext]'
             },
           },
         ],
       },
       //    如果希望将es6语法转换成es5,则需要babel
       //    在webpack中,直接使用babel对应的loader即可
       //    npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['es2015']
           }
         }
       },
       {
         test: /\.vue$/,
         use: {loader: 'vue-loader'}
       }
     ]
   },
//  指定vue使用runtime-complier方式进行编译
   resolve: {
     alias: {
       'vue$': 'vue/dist/vue.esm.js'
     }
   },
   // 添加插件, bannerplugin用来添加代码顶部,版权,作者,日期等信息
   // 重新打包后 能看到 bundle.js里面添加了相应的信息
   plugins: [
     new webpack.BannerPlugin('最终版权归aa所有'),
     //    使用HtmlWebPackPlugin插件
     new HtmlWebPackPlugin({
           //根据index.html作为模板来生成dist/index.html
           template: 'index.html'
         },
     ),
   ],
 };