<template>
  <q-banner inline-actions class="list-header text-white bg-orange-4 text-center">
    <span class="text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>

<script>
export default {

}
</script>

<style>
  .list-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
</style>