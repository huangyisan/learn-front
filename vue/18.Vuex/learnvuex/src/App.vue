<template>
  <div id="app">
    <h2>{{message}}</h2>
    <!-- 使用 $store的方式访问vuex中state对象中的counter属性-->
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
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
    methods:{
      addition(){
        // 通过commit方法进行提交,传入的参数是在mutations中定义好的方法名称
        this.$store.commit('increment')

      },
      subtraction(){
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style>

</style>
