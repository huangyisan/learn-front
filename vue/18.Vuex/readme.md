### vuex插件安装
```
npm install vuex --save
```

### 全局单例模式(大管家)
1. 基本思想,将共享的状态抽出来,让全局单例模式进行统一管理.
2. 之后,每个视图如果用到,且需要记性访问和修改等操作,需遵循规定好的规定来执行.
3. 如果要修改state,则通过mutations去修改. 只有通过mutations去修改,devtools才会记录跟踪修改状态.
4. 如果是同步操作,在mutations里面修改. 异步操作(网络请求等情况),则在action中修改, action处理完后会自动提交给mutations.

### state单一状态树
1. 单一状态树能够让我们最直接的方式找到某个状态的片段, 而且在之后的维护和调试过程中, 也可以非常方便的维护和管理.
2. 不建议创建多个store实例, 所有的信息状态都用一个store管理即可.

### getters
1. 当我们需要从store中获取一些state变异后的状态

### mutatuon状态更新
1. Vuex的store状态的更新唯一方式: 提交Mutation
2. mutation主要包括两部分, 字符串的事件类型和一个回调函数.
3. mutatuon的定义方式
```
mutations: {
  increment(state) {
    state.count++
  }
}
```

4. 使用commit进行对mutation更新
5. 可以传入参数,称之为payload, 该payload也可以是一个对象