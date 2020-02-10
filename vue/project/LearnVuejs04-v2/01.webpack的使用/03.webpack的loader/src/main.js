import {add, mul} from "./js/mathUtil.js"

console.log(add(1,2));
console.log(mul(1,2));


/** webpack 打包命令
 * webpack ./src/main.js ./dist/bundle.js
 */


// 依赖css文件,也写入main.js

require('./css/normal.css');

// css文件需要用loader才能处理
//1. 安装loader  开发时依赖模式 --save-dev
// npm install --save-dev css-loader
//2. 配置loader
//webpack.config.js

// css-loader只负责css文件加载,不负责解析等其他行为,如果要生效,还需要安装一个loader, style-loader

// 安装style-loader
// npm install style-loader -save-dev
// 配置loader
// webpack.config.js


// 将less文件引入
require('./css/special.less');

// 安装less的loader
// npm install -save-dev less-loader less

// 配置loader 相关配置

document.writeln('<h2>你好</h2>')