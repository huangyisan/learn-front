### webpack-dev-server
1. 一个本地服务器
2. 基于nodejs搭建,内部使用express框架,可以实现我们想要的让浏览器自动刷新显示我们修改后的结果.

### webpack-dev-server部署
1. 安装命令 `npm install webpack-dev-server@2.9.3 -save-dev`
2. webpack.config.js中进行配置devServer:{}

### webpack-dev-server启动
`./node_modules/.bin/webpack-dev-server`

### 配置一个启动脚本
在package.json中配置 ,--open参数可以启动的时候自动打开页面


### 访问地址
会在启动log里面给出

### 自动刷新
只要删除一些元素, 该页面会自动刷新.如果出现的结果符合自己的期望,就可以进行打包了.