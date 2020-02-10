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

// 5. 使用vue进行开发
// 使用webpack安装的vue,则直接可以导入了
import Vue from 'vue'

/**
// 不再使用app.js文件改用App.vue
// import App from './vue/app.js'
 */
import App from './vue/App.vue'


/**
//这里直接build会报错,需要安装vue的loader
// 1. vue-loader  vue-template-compiler
// npm install vue-loader vue-template-compiler --save-dev
 同时配置webpack.config.js
 这边使用13.0.0系列版本的vue-loader, 高版本需要装一个插件
*/

// 将实例里面的内容抽取出来
// const App = {
//   template: `
//   <div>
//   <h2>{{message}}</h2>
//   <button @click="btnClick">按钮</button>
//   <h2>{{name}}</h2>
// </div>
//   `,
//   data: {
//     message: 'hello world',
//     name: 'yisan'
//   },
//   methods: {
//     btnClick() {
//       console.log('点击了')
//     }
//   }
// };

const app = new Vue({
  // 开发中,不会往index.html中写入template,但会写一个<div id='app'></div>的块.
  // 解析的时候,template的内容,会替换掉el对应的块的内容
  el: '#app',
  // <APP/> 替换#app, 单标签/在后面
  template: '<App/>',
  components: {
    //组件里面注册APP
    App
  }
});


document.writeln('<button>按钮</button>');