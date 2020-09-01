<template>
  <div class="row q-mb-sm">
    <q-input 
      outlined 
      :value="dueTime"
      @input="$emit('update:dueTime', $event)"
      label="Due Time" 
      class="col">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              :value="dueTime"
              @input="$emit('update:dueTime', $event)"
            />
          </q-popup-proxy>
        </q-icon>
        <q-icon name="close" @click="$emit('update:dueTime', '')" class="cursor-pointer" v-if="dueTime" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props:['dueTime']

}
</script>

<style>

</style>