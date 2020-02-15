### vuex插件安装
```
npm install vuex --save
```

### 全局单例模式(大管家)
1. 基本思想,将共享的状态抽出来,让全局单例模式进行统一管理.
2. 之后,每个视图如果用到,且需要记性访问和修改等操作,需遵循规定好的规定来执行.
3. 如果要修改state,则通过mutations去修改. 只有通过mutations去修改,devtools才会记录跟踪修改状态.
4. 如果是同步操作,在mutations里面修改. 异步操作(网络请求等情况),则在action中修改, action处理完后会自动提交给mutations.