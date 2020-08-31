<template>
  <q-list separator bordered v-if="Object.keys(tasksTodo).length">
    <task v-for="(item, index) in tasksTodo" 
      :key="index"
      :item='item'
      :id='index'
    >
    </task>
  </q-list>
</template>

<script>
export default {
  props: {
    tasksTodo: {
      type: Object,
    }
  },
    components: {
      'task' : require('components/Tasks/task').default,
    }
  }


</script>

<style>

</style>