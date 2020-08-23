<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <!-- v-close-popup 是一个可以用来控制qdialog关闭的组件,在官方的vue directive -> close popup的api中 -->
      <q-btn flat round dense icon="close" v-close-popup />

    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input outlined v-model="taskToSubmit.name" label="Task Name" />
      <q-input outlined v-model="taskToSubmit.dueDate">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="SAVE" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>


<script>
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
  }
  
}
</script>


<style>

</style>