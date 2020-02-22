<template>
  <div id="home">
    <!-- nav bar-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!--轮播图-->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐图-->
    <recommend-view :recommends="recommends"></recommend-view>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  import {getHomeMultidata} from "network/home"


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        //  将请求到的数据, 拆分后存起来
        banners: [],
        recommends: []
      }
    },
    created() {
      // 当组件创建完后 开始发送网络请求
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
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
