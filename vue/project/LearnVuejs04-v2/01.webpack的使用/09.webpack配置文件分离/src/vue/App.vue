<template>
  <!-- 将app.js中的template内容抽到这边-->
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <!--cpn为App的子组件-->
    <cpn></cpn>
  </div>
</template>

<script>

  // <!--导入Cpn.vue的组件-->
  import Cpn from './Cpn.vue'

  export default {
    name: "App",
    //注册Cpn
    components: {
      cpn:Cpn
    },
    // data和methods放到这边
    data(){
      return {
        message: 'hello world',
        name: 'yisan'
      }
    },
    methods: {
      btnClick() {
        console.log('点击了')
      }
    },
  }
</script>

<style scoped>
  .title {
    background-color: blue;
  }
</style>