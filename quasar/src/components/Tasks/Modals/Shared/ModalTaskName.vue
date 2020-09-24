<template>
<!-- $emit是个知识点 -->
<!-- v-select-all是自定义的指令,可以让开发者直接操作底层dom,格式为v-自定义名称,然后在export中directives中进行使用 -->
  <div class="row q-mb-sm">
    <q-input 
      outlined 
      :value="name" 
      @input="$emit('update:name', $event)"
      label="Task Name"
      ref="taskName"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      v-select-all
      class="col">
        <template v-slot:append v-if="name">
        <q-icon name="close" 
          @click="$emit('update:name','')" 
          class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  directives: {
    // focus后全选
    selectAll,
   
  },
  methods: {
  }

}
</script>

<style>

</style>