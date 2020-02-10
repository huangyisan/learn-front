//生产得压缩js,所以保留uglifyjs插件,其他都可以放到base.config.js中

const uglifyWebPackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

//合并配置文件

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 使用uglifyWebPackPlugin插件
    // 之后bundle.js的内容就被压缩了,最后成品打包的时候再开启
    new uglifyWebPackPlugin(),
  ],
});

// module.exports = {
//   plugins: [
//     // 使用uglifyWebPackPlugin插件
//     // 之后bundle.js的内容就被压缩了,最后成品打包的时候再开启
//     new uglifyWebPackPlugin(),
//
//   ],
// };