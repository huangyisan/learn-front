<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topimages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :paramInfo="paramInfo"></detail-params-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, GoodsInfo, Shop} from 'network/detail'


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll,
      DetailParamsInfo,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        //   参数页面信息
        paramInfo: {}
      }
    },
    created() {
      // 1. 获得当前页面的iid
      this.iid = this.$route.params.iid

      //  2. 根据iid获取数据
      getDetail(this.iid).then(res => {
        //  3. 获取顶部轮播图片数据
        const data = res.result
        this.topImages = data.itemInfo.topImages
        // this.topImages = this.topImages.map(x => 'http:' + x)
        // console.log(this.topImages[0])

        //  获取商品信息

        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.goods)

        // 创建店铺信息对象
        this.shop = new Shop(data.shopInfo)

        //  保存商品的详情数据
        this.detailInfo = data.detailInfo

        //  取出参数的信息
        this.paramInfo = data.itemParams
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 8;
    background-color: #fff;
    /* 如果不给高度,则高度被内容撑开,所以要给一个高度, 高度为视口高度,所见即所高*/
    height: 100vh;

  }

  .content {
    /* 高度为父组件的高度来计算*/
    height: calc(100% - 44px)
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>