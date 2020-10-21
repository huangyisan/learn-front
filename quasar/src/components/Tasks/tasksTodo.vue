<template>
  <!-- 添加动画效果 给定一个absolute-top，让其永远在顶部显示动画，这样当没有task的时候，No tasks to do doday不会很突兀-->
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <list-header v-if="!settings.showTasksInOneList"
        :bgColor='bgColor'
        >Tasks To Do</list-header>
      <q-list separator bordered >
        <task v-for="(item, index) in tasksTodo" 
          :key="index"
          :item='item'
          :id='index'
        >
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components: {
      'task' : require('components/Tasks/task').default,
      'listHeader' : require('components/Shared/ListHeader').default,
    }
  }


</script>

<style>

</style>