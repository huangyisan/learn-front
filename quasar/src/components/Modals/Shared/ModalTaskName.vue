<template>
<!-- $emit是个知识点 -->
  <div class="row q-mb-sm">
    <q-input 
      outlined 
      :value="name" 
      @input="$emit('update:name', $event)"
      label="Task Name"
      ref="taskName"
      :rules="[val => !!val || 'Field is required']"
      autofocus
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
  methods: {
  }

}
</script>

<style>

</style>