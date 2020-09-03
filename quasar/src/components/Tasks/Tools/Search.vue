<template>
  <q-input outlined v-model="searchField" label="Search" class="col">

    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>

  </q-input>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 这里使用mapState而不使用mapGetter是因为不需要做一些处理，该数据直接从State中获取即可。
    ...mapState('tasks', ['search']),
    searchField() {
      return this.search
    }

  }
};
</script>

<style>
</style>