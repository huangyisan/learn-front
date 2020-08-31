<template>
  <div>
    <list-header
      :bgColor='bgColor'
      >Tasks To Do</list-header>
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
  data() {
    return {
      bgColor: 'bg-orange-4'
    }
  },
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