<template>
  <div>
    <list-header>Tasks To Do</list-header>
    <q-list separator bordered v-if="Object.keys(tasksTodo).length">
      <task v-for="(item, index) in tasksTodo" 
        :key="index"
        :item='item'
        :id='index'
      >
      </task>
    </q-list>
  </div>
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
      'listHeader' : require('components/Shared/ListHeader').default,
    }
  }


</script>

<style>

</style>