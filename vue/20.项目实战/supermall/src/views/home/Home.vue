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
    <!-- feature图-->
    <feature-view></feature-view>


    <!--tabbar-->
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
    </ul>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import TabControl from 'components/content/tabControl/TabControl'

  import {getHomeMultidata, getHomeGoods} from "network/home"


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
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
        }
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
      getHomeMultidata(){
        // 当组件创建完后 开始发送网络请求
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type){
        // 每次获取的页码为当前页码+1
        const page = this.goods[type].page + 1
        console.log(page)
        getHomeGoods(type, 1).then(res => {
          // ... 表示结构list, 将list的元素一个个拆出来
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
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
    margin-top: 44px;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
