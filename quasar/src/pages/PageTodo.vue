<template>
  <q-page class="q-pa-md">
    <q-list bordered>
      <q-item v-for="(item, index) in tasks" 
        :key="index" 
        @click="item.complate = !item.complate" 
        clickable 
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="item.complate" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{item.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "go to shop",
          complate: false
        },
        {
          id: 2,
          name: "go to home",
          complate: false
        },
        {
          id: 3,
          name: "go to school",
          complate: true
        }
      ]
    }
  }
}
</script>
 