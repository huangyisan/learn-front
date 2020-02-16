<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!-- 使用 $store的方式访问vuex中state对象中的counter属性-->
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!--传参的方式更新数据-->
    <button @click="addFive(5)">+5</button>
    <!--特殊提交方式-->
    <button @click="addFiveSpe(10)">特殊方式+10</button>
    <!-- 提交student对象-->
    <h2>添加一个学生</h2>
    <button @click="addStudent({name:'X', age:41})">添加一个学生</button>


    <h2>getters相关内容</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>

    <h2>hellow vuex内容</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',
        counter: 0
      }
    },
    components: {
      HelloVuex: HelloVuex

    },
    // 通过methods提交到mutations
    methods: {
      addition() {
        // 通过commit方法进行提交,传入的参数是在mutations中定义好的方法名称
        this.$store.commit('increment')

      },
      subtraction() {
        this.$store.commit('decrement')
      },

      // 1. 普通提交风格
      addFive(count) {
        this.$store.commit('addFive', count)
      },

      // 2. 特殊提交风格
      addFiveSpe(count) {
        this.$store.commit({
          type: 'addFiveSpe',
          count
        })
      },
      addStudent(obj) {
        this.$store.commit('addStudent', obj)
      }
    }
  }
</script>

<style>

</style>
