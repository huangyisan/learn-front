<template>
  <!--ref 一般绑定给子组件,明确指定某个子组件-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      })
    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>