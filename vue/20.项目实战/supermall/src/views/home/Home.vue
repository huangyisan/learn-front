<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
    </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'

  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    /* --color-tint 为变量的方式, 该值被定义在base.css中*/
    background-color: var(--color-tint);
    color: #ffffff;
  }

</style>
