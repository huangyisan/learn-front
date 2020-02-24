<template>
  <div id="home">
    <!-- nav bar-->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 使用better-scroll封装-->
    <!--<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">-->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true">
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
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
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
        currentType: 'pop',
        isShowBackTop: false
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
    mounted(){
      // 如果放在created里面,有可能组件还没渲染出来,则得不到$refs.scroll
      //  监听item中图片加载完成
      const refresh = this.debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    },

    methods: {

      //事件监听相关

      // 防抖函数
      // 在delay时间后,执行传入的func函数, 如果再次出发, 则因为存在timer, 被clearTimeout函数给取消, 前一次等待执行的func函数, 依次类推, 直到最后一次, 等待delay中, 没有新的触发, 则执行func.
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },

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
        // console.log(this.currentType)
      },

      // 回到顶部按钮
      backClick() {
        // 通过ref的scroll对象,直接访问scroll.vue里面的内容
        // 500表示500ms内返回0,0坐标,也就是顶部
        this.$refs.scroll.scrollTo(0,0,500)
      },

      contentScroll(position) {
        // console.log(position)
        // 判断y是否小于-1000 然后true或者false赋值给this.isShowBackTop
        this.isShowBackTop = position.y < -1000;
      },

      // loadMore(){
      //   console.log('上阿里加载更多')
      //   this.getHomeGoods(this.currentType)
      //
      //   // 当加载完后,重新刷新,获取新的高度
      //   this.$refs.scroll.scroll.refresh()
      // },

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
        getHomeGoods(type, page).then(res => {
          // ... 表示结构list, 将list的元素一个个拆出来
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
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
