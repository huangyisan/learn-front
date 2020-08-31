<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No tasks to do.
    <template v-slot:action>
      <!-- 定义global bus event -->
      <q-btn
        @click="$root.$emit('showAddTask')"
        flat color="primary" 
        label="Add a Task" 
      />
    </template>
  </q-banner>
</template>

<script>
export default {

}
</script>

<style>

</style>