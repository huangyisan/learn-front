export default {
// AddTask.vue和EditTask.vue存在两个相同的methods，可以作为mixin复用
  methods: {
    submitForm() {
      // 先进行提交验证, 如果通过后,则更新store. 
      // 先调用封装好的ref,再调用封装好里面的ref
      this.$refs.modalTaskName.$refs.taskName.validate() // 如果验证异常, 则无法提交通过
      if (!this.$refs.modalTaskName.$refs.taskName.hasError) {
        this.submitTask()
      }
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
  },

}