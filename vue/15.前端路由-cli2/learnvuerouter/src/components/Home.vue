<template>
  <div>
    <h2>我是首页</h2>
    <!--添加router-link标签 这里需要写完整的路径-->
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <!-- 父组件内添加router-view块-->
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
