<template>
  <div class="tab-bar-item">
    <!--配置具名插槽,用来放图片和名称-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else-if="isActive"><slot name="item-icon-active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>



  </div>
</template>

<script>
  export default {
    name: "TbaBarItem",
    data() {
      return {
        isActive: true
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /*均分*/
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    /*line-height: 49px;*/

  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    /* 去掉图片下面的空间 */
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>
