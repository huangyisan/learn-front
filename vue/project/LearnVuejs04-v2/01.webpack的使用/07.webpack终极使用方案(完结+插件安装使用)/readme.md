### webpack配置vue
因为vue是属于运行中要被使用
所以使用安装的命令为 `npm install vue -save`
`-save-dev`是开发中被使用

### 一些知识点
1. vue运行分两种类型
1.1 runtime-only 这种代码中不可以包含template,也就是index中{{xxx}}这部分
1.2 runtime-compiler 代码中可以包含template,因为有compiler可以用于编译template

2. 想编译成runtime-complier,则需要在webpack.config.js中添加配置
`  resolve: {
     alias: {
       'vue$': 'vue/dist/vue.ems.js'
     }
   }`

### 注意
新增部分看 文档注释格式内容 /** */

### 用到的几个插件
1. BannerPlugin (给bundle.js添加作者名,日期,版权等功能)
2. HtmlWebpackPlugin (自动生成index.html的文件, 将打包的js文件,自动通过script标签插入到body中)
  2.1 安装 npm install html-webpack-plugin --save-dev
  2.1 修改webpack.config.js
3. UglifyJsPlugin (js压缩插件, 在开发的时候不建议使用,最终出成品,打包的时候再用)
  3.1 安装 npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
  3.2 修改webpack.config.js