<template>
  <div>
    <h2>我是Cpn组件的标题</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'CPN组件的名称'
      }
    }
  }
</script>

<style scoped>

</style>