## url基本知识

### url的hash
`location.hash = 'aa'`则可以将url切换为/#aa页面

### html5的history模式
1. 使用pushState `history.pushState({}, '', '/foo')` 则可以将url切换到/foo页面
2. 使用back,`history.back()` 则可以会到上一页
3. 上述两个方法,是入栈和出栈
4. 使用`history.go(-1)` 则可以回退到上一个页面,如果是-2,则弹出倒数第二个页面,也可以传入正数.
5. `history.back()`等价于`history.go(-1)`, `history.forward()`等价于`history.go(1)`
6. 使用`history.replaceState({},'','home')` 也可以将url改成/home, 但不属于压栈和出栈,所以不支持返回

## vue-router

### 安装vue-router
`npm install vue-router --save`

### 初始化路由
1. 导入路由对象,并且调用Vue.use(VueRouter)
2. 创建路由实例,并且传入路由映射配置
3. 在vue实例中挂载创建的路由实例

### 使用vue-router的步骤:
1. 创建路由组件
2. 配置路由映射: 组件和路径映射关系
3. 使用路由,通过router-link和router-view

## router-link的补充
1. 在前面的<router-link>中,我们只是使用了一个属性:to 用于指定跳转的路径.
2. tag属性: tag可以指定router-link之后被渲染成什么组件,而不是默认的a元素
3. replace属性: 添加replace属性,则将原先的pushState变为replace,不可以使用回退按钮
4. active-class: 当<router-link>对应的路由匹配成功时,会自动给当前元素设置一个router-link-active的class,设置active-class可以修改默认的名称.如果要全局修改,则可以将router路径下的index.js的routes字段,添加linkActiveClass:'你要修改的属性名'字

## 动态路由
1. 具体的url不固定,动态的方式去生成

### 使用动态路由
1. 服务器返回数据会放data里面, 在元素里面使用v-bind:to的方式去做路由的绑定,比如v-bind:to='"/user/"+userId'.
2. 动态获取当前页面的userId, 使用this.$route.params.userId

## vue-router打包文件解析
npm run build进行打包

### static/js目录下的app文件
1. 存放当前编写的业务代码,存放

### static/js目录下的vendor文件
1. 第三方的代码,比如vue框架,存放

### static/js目录下的manifest文件
1. 为打包的代码做底层支撑

### static/js目录下的其他文件
1. 当使用懒加载后,会多出其他js文件,多少个路径懒加载,就会多出多少个js文件

## 懒加载
1. 只有需要的时候,才去请求,加载数据.

### 路由懒加载做了什么
1. 路由懒加载的主要作用是将路由对应的组件打包成一个个js代码块
2. 只有在这个路由被访问到的时候,才加载对应的组件

### 懒加载写法
1. 结合Vue的异步组件和webpack的代码分析(比较老pass)
2. AMD写法(不做展开)
3. ES6的写法 const Home = () => import('../components/Home.vue')

## 路由的嵌套
1. 在home页面中,希望可以访问home/news和home/message的一些内容

## 实现嵌套路由的两个步骤
1. 创建对应的子组件, 并且在路由映射中配置对应的子路由
2. 在父组件内部使用<router-view>标签
3. 在父组件内使用<router-link>标签
