<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions("settings", ['getSettings'])
  },
  // 在页面渲染html后开始执行getSettings函数。目前该函数就是获取localstorage的内容
  mounted() {
    this.getSettings()
  }
}
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
