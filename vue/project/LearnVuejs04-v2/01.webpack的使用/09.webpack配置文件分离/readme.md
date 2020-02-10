### 对webpack.config.js进行抽离
1. base.config.js用来存放公共配置
2. dev.config.js存放开发时候的配置
3. prod.config.js存放生产环境的配置

### 安装webpack-merge
1. 将两个配置文件进行合并.
2. `npm install webpack-merge --save-dev`

### 修改package.json中build的值
