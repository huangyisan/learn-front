<template>
  <div>
    <tab-bar>
      <tab-bar-item>
        <!--插槽上不要写样式属性,因为slot会被替换,写了样式属性不会生效-->
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>


  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from './components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar: TabBar,
    TabBarItem: TabBarItem
  }
}
</script>

<style>

</style>
