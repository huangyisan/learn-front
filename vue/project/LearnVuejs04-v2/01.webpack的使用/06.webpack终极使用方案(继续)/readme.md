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