<template>
  <div>
    <list-header>Tasks Complated</list-header>
    <q-list separator bordered v-if="Object.keys(tasksComplated).length">
        <task v-for="(item, index) in tasksComplated" 
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
    tasksComplated: {
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