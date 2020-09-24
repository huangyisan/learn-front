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
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  directives: {
    // 该selectAll 就是v-select-all, 在使用的时候去掉v-
    selectAll: {
      // el：指令所绑定的元素，可以用来直接操作 DOM。
      inserted(el) {
        // 获取input的dom, 使用类选择器,f12看到class为"q-field__native"
        let input = el.querySelector('.q-field__native')
        // 给定监听器, 监听focus事件, 监听到了,则执行函数
        input.addEventListener('focus', ()=> {
          // 非空的时候,则自动选中. 这边有bug, 点击弹出的时候无法监听到focus事件.
          console.log('value',input.value)
          if (input.value.length) {
            input.select()
          }
        })
      }
    }
  },
  methods: {
  }

}
</script>

<style>

</style>