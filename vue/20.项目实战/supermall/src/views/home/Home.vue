<template>
  <div id="home">
    <!-- nav bar-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 使用better-scroll封装-->
    <scroll class="content" ref="scroll">
      <!--轮播图-->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐图-->
      <recommend-view :recommends="recommends"></recommend-view>
      <!-- feature图-->
      <feature-view></feature-view>

      <!--tabbar @tabClick 该方法为子组件emit出来的内容, 此时不需要写入传递来的参数-->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

      <!--商品图-->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!-- 如果想要监听组件的点击,则需要添加.native 这个原生修饰符-->
    <back-top @click.native="backClick"></back-top>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from "network/home"


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        //  将请求到的数据, 拆分后存起来
        banners: [],
        recommends: [],
        // 数据设计, 开始先请求第一页, 当上拉加载的时候再请求下一页
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop'
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 请求首页数据
      this.getHomeMultidata()

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods: {

      //事件监听相关


      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break

          case 1:
            this.currentType = 'new'
            break

          case 2:
            this.currentType = 'sell'
            break
        }
        console.log(this.currentType)
      },

      // 回到顶部按钮
      backClick() {
        // 通过ref的scroll对象,直接访问scroll.vue里面的内容
        // 500表示500ms内返回0,0坐标,也就是顶部
        this.$refs.scroll.scrollTo(0,0,500)
      },

      //网络请求相关

      getHomeMultidata() {
        // 当组件创建完后 开始发送网络请求
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        // 每次获取的页码为当前页码+1
        const page = this.goods[type].page + 1
        console.log(page)
        getHomeGoods(type, 1).then(res => {
          // ... 表示结构list, 将list的元素一个个拆出来
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },


    }
  }
</script>

<style scoped>
  .home-nav {
    /* --color-tint 为变量的方式, 该值被定义在base.css中*/
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

  /* 因为脱离标准流, 轮播图跟nav bar重合了, 给#home 一个nav bar的margin-top高度*/
  #home {
    /*margin-top: 44px;*/
    /*设定home的高度为100个视口, 因为存在内容会把home的高度撑大*/
    height: 100vh;
    position: relative;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  /* better-scroll*/
  /*.content {*/
  /*height: calc(100% - 93px);*/
  /*overflow: hidden;*/
  /*!*margin-top: 44px;*!*/
  /*}*/

  .content {
    overflow: hidden;
    position: absolute;
    /* 将顶部和底部撑开*/
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
