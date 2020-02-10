// 该配置文件未webpack的配置文件

const path = require('path');



module.exports = {
  entry: './src/main.js',
  output: {
    //路径,动态获取路径,这边要用绝对路径
    path: path.resolve(__dirname,'dist'),
  //  文件名
    filename: 'bundle.js'
  },
};