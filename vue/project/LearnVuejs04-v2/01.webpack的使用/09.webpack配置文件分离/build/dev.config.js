//开发环境配置只需要配置webpack-dev-server,其他都可以抽到base.config.js中

const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    // 服务于哪个路径
    contentBase: './dist',
    //是否实时监听文件更变
    inline: true,
  }
});

// module.exports = {
//   devServer: {
//     // 服务于哪个路径
//     contentBase: './dist',
//     //是否实时监听文件更变
//     inline: true,
//   }
// };