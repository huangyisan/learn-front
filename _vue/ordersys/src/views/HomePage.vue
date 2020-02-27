<template>
  <div>
    这是首页
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    created() {
      console.log(this.$store.state.token)
    }
  }
</script>

<style scoped>

</style>