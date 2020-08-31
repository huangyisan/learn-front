<template>
  <q-page class="q-pa-md">
    <!-- <q-list separator bordered v-if="Object.keys(tasksTodo).length">
      <task v-for="(item, index) in tasksTodo" 
        :key="index"
        :item='item'
        :id='index'
      >
      </task>
    </q-list> -->
    <tasks-todo
      :tasksTodo="tasksTodo"
      ></tasks-todo>
    <hr>

    <q-list separator bordered v-if="Object.keys(tasksComplated).length">
      <task v-for="(item, index) in tasksComplated" 
        :key="index"
        :item='item'
        :id='index'
      >
      </task>
    </q-list>

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
  components: {
    'task' : require('components/Tasks/task').default,
    'addTask' : require('components/Modals/AddTask').default,
    'tasksTodo' : require('components/Tasks/tasksTodo').default,
  }
}
</script>
 