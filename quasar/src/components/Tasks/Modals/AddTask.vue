<template>
  <q-card>
    <modal-header>Add Task</modal-header>

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
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        complate: false,
        dueDate: "",
        dueTime: ""
      }
    }
  },
  methods: {
    ...mapActions('tasks',['addTask']),

    submitForm() {
      // 先进行提交验证, 如果通过后,则更新store. 
      // 先调用封装好的ref,再调用封装好里面的ref
      this.$refs.modalTaskName.$refs.taskName.validate() // 如果验证异常, 则无法提交通过
      if (!this.$refs.modalTaskName.$refs.taskName.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      // 发射一个事件 让父组件监听, 用于 关闭addTask dialog
      this.$emit('close')
    },
    cleanDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  components: {
    modalHeader: require('components/Tasks/Modals/Shared/ModalHeader').default,
    modalTaskName: require('components/Tasks/Modals/Shared/ModalTaskName').default,
    modalDueDate: require('components/Tasks/Modals/Shared/ModalDueDate').default,
    modalDueTime: require('components/Tasks/Modals/Shared/ModalDueTime').default,
    modalButtons: require('components/Tasks/Modals/Shared/ModalButtons').default,
  }
  
}
</script>


<style>

</style>