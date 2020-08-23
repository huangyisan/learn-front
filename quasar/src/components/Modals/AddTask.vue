<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <!-- 放入form元素里面  submit.prevent阻止提交后页面reload大刷新,但这个版本貌似不加.prevent也不会reload大刷新页面了 -->
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input 
            outlined 
            v-model="taskToSubmit.name" 
            label="Task Name"
            ref="taskName"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            class="col">
             <template v-slot:append v-if="taskToSubmit.name">
              <q-icon name="close" @click="taskToSubmit.name = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input outlined v-model="taskToSubmit.dueDate" label="Due Date" class="col">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
                <q-icon name="close" @click="cleanDueDate" class="cursor-pointer" v-if="taskToSubmit.dueDate" />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input outlined v-model="taskToSubmit.dueTime" label="Due Time" class="col">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
              <q-icon name="close" @click="taskToSubmit.dueTime = ''" class="cursor-pointer" v-if="taskToSubmit.dueTime" />
            </template>
          </q-input>
        </div>
        
      </q-card-section>
      <q-card-actions align="right">
        <!-- type="submit" 作为提交按钮 -->
        <q-btn label="SAVE" color="primary" type="submit"/>
      </q-card-actions>
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
      this.$refs.taskName.validate() // 如果验证异常, 则无法提交通过
      if (!this.$refs.taskName.hasError) {
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
    modalHeader: require('components/Modals/Shared/ModalHeader').default
  }
  
}
</script>


<style>

</style>