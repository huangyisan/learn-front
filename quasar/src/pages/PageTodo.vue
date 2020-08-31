<template>
  <q-page class="q-pa-md">

    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
      ></no-tasks>

    <tasks-todo
      v-else
      :tasksTodo="tasksTodo"
      ></tasks-todo>

    <tasks-complated
      v-if="Object.keys(tasksComplated).length"
      :tasksComplated="tasksComplated"
      ></tasks-complated>

    <!-- 添加task list按钮 -->
    <div class="absolute-bottom q-mb-lg text-center">
      <q-btn round color="primary" icon="add" size="md" @click="showAddTask = true"/>
    </div>

    <!-- v-model控制是否展现dialog -->
    <q-dialog v-model="showAddTask" no-backdrop-dismiss>
      <add-task @close="showAddTask = false"></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
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
    ...mapGetters('tasks',['tasksTodo', 'tasksComplated'])

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
    'task' : require('components/Tasks/task').default,
    'addTask' : require('components/Modals/AddTask').default,
    'tasksTodo' : require('components/Tasks/tasksTodo').default,
    'tasksComplated' : require('components/Tasks/tasksComplated').default,
    'noTasks' : require('components/Tasks/noTasks').default,
  }
}
</script>
 