// 该配置文件未webpack的配置文件

const path = require('path');


module.exports = {
  entry: './src/main.js',
  output: {
    //路径,动态获取路径,这边要用绝对路径
    path: path.resolve(__dirname, 'dist'),
    //  文件名
    filename: 'bundle.js',
    //所有打包出来的文件,目录前缀添加dist/
    publicPath: 'dist/'
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
      }
    ]
  }
};