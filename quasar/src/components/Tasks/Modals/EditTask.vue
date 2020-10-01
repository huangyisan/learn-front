<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <!-- 放入form元素里面  submit.prevent阻止提交后页面reload大刷新,但这个版本貌似不加.prevent也不会reload大刷新页面了 -->
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name 
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        ></modal-task-name>
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" @clear='cleanDueDate'></modal-due-date>
        <modal-due-time :dueTime.sync="taskToSubmit.dueTime" :dueDate="taskToSubmit.dueDate" v-if="taskToSubmit.dueDate"></modal-due-time>
        
      </q-card-section>

      <modal-buttons></modal-buttons>
    </form>

    
  </q-card>
</template>


<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  mixins: [mixinAddEditTask],
  props: ["task", "id"],
  data() {
    return {
      // 让mounted生命周期触发Object.assign, 动态获取传递过来的task信息
      taskToSubmit: {
      }
    }
  },
  methods: {
    ...mapActions('tasks',['updateTask']),
    submitTask() {
      this.updateTask({id:this.id, update:this.taskToSubmit})
    // 发射一个事件 让父组件监听, 用于 关闭addTask dialog
      this.$emit('close')
    },
  },
  mounted() {
    // mounted生命周期触发, 将task内容传递给taskToSubmit
    this.taskToSubmit = Object.assign({}, this.task)
  }
  
}
</script>


<style>

</style>