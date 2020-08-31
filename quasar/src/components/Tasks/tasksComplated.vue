<template>
  <q-list separator bordered v-if="Object.keys(tasksComplated).length">
      <task v-for="(item, index) in tasksComplated" 
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
    tasksComplated: {
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