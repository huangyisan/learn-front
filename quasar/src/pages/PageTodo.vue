<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <!-- 搜索栏 -->
        <search></search>
        <sort></sort>
      </div>


      <!-- 将展现内容包裹到一个div，使得动画更加自然。 -->
      <q-scroll-area class="q-scroll-area-tasks">
        <!-- todo内容或者搜索栏不存在字符串的时候 -->
        <no-tasks
          v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
          ></no-tasks>

        <tasks-todo
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"
          ></tasks-todo>

        <tasks-complated
          v-if="Object.keys(tasksComplated).length"
          :tasksComplated="tasksComplated"
          ></tasks-complated>
      </q-scroll-area>

      <!-- 当搜索不到内容的时候 -->
      <!-- 因为tasksComplated和tasksTodo的方法已经对filter进行了过滤，所以这边是过滤后还得不到对应的tasks内容的情况 -->
      <p v-if="search && !Object.keys(tasksComplated).length && !Object.keys(tasksTodo).length && !settings.showTasksInOneList">
        No search result.
      </p>

      <!-- 添加task list按钮 -->
      <!-- 设置no-pointer-events和all-pointer-events使其不遮挡task list -->
      <!-- no-pointer-events: DOM element does not become a target of mouse events - clicks, hover and so on -->
      <div class="absolute-bottom q-mb-lg text-center no-pointer-events">
        <!-- all-pointer-events: The opposite of no-pointer-events -->
        <q-btn round color="primary" icon="add" size="md" @click="showAddTask = true" class="all-pointer-events"/>
      </div>

    </div>



    <!-- v-model控制是否展现dialog -->
    <q-dialog v-model="showAddTask" no-backdrop-dismiss>
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
export default {
  data() {
    return {
     showAddTask: false
    }
  },
  
  computed: {
    // store的内容在computed里面获取
    // tasks() {
    //   // 因为store-tasks.js用了namespaced:true,所以getters需要mudulename/方法
    //   return this.$store.getters['tasks/tasks']
    // }
    //还可以使用mapGetters来获取而无需定义tasks()函数
    // tasks为mudulename, 数组中的tasks为getters中的方法
    ...mapGetters('tasks',['tasksTodo', 'tasksComplated']),
    ...mapGetters('settings',['settings']),
    ...mapState('tasks',['search'])

  },
  created() {
    // 在created或者mounted生命周期获取global bus event
    // 这不是最优的方法去处理 showAddTask, 可以在vuex里面赋予变量进行解决。
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  beforeDestroy() {
    this.$root.$off('showAddTask', () => {
      this.showAddTask = true
    })
  },
  components: {
    // 'task' : require('components/Tasks/task').default,
    'addTask' : require('components/Tasks/Modals/AddTask').default,
    'tasksTodo' : require('components/Tasks/tasksTodo').default,
    'tasksComplated' : require('components/Tasks/tasksComplated').default,
    'noTasks' : require('components/Tasks/noTasks').default,
    'search' : require('components/Tasks/Tools/Search').default,
    'sort' : require('components/Tasks/Tools/Sort').default,
  }
}
</script>
 
<style>
  .q-scroll-area-tasks {
    display: flex;
    flex-grow: 1;
  }
</style>