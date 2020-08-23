<template>
  <q-card-section class="row">
    <!-- 添加slot插槽 -->
  <div class="text-h6"><slot></slot></div>
  <q-space />
  <!-- v-close-popup 是一个可以用来控制qdialog关闭的组件,在官方的vue directive -> close popup的api中 -->
  <q-btn flat round dense icon="close" v-close-popup />

</q-card-section>
</template>

<script>
export default {
  
}
</script>

<style>

</style>