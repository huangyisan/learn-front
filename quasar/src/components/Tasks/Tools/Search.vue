<template>
<!-- 绑定了点击esc,清除搜索栏 -->
  <q-input 
    outlined 
    v-select-all 
    v-model="searchField" 
    @keyup.esc="searchField = ''"
    label="Search" 
    class="col">

    <template v-slot:append>
      <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>

  </q-input>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { selectAll } from 'src/directives/directive-select-all'
export default {
  directives: {
    selectAll
  },
  computed: {
    // 这里使用mapState而不使用mapGetter是因为不需要做一些处理，该数据直接从State中获取即可。
    ...mapState('tasks', ['search']),
    // 将searchField方法割裂成get和set方法(内置方法)
    // searchField() {
    //   return this.search
    // }
    searchField: {
      set(value) {
        this.setSearch(value)
      },

      get() {
        return this.search
      }
    }

  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  }
};
</script>

<style>
</style>