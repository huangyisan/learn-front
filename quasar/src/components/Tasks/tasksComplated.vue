<template>
  <div class="q-mt-lg">
    <list-header
      :bgColor='bgcolor'
      >Tasks Complated</list-header>
    <q-list separator bordered>
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
  data() {
    return {
      bgcolor: 'bg-green',
    }
  },
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