import { mapState } from 'vuex';
<template>
<!-- 添加emit-value属性后，只会获取到value，而不是将整个object作为对象使用 -->
<!-- 配合map-options， 则在选择的时候显示label，而非value -->
  <q-select 
    filled v-model="sortBy" 
    :options="options" 
    emit-value
    map-options
    class="col q-ml-sm"
    label="Sort by" 
    stack-label 
  />
</template>

<script>
// 引入map，
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        }
      ],
    }
  },
  computed: {
    ...mapState('tasks',['sort']),
    sortBy: {
      get(){
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>
  .q-select {
    flex: 0 0 112px;
  }
</style>