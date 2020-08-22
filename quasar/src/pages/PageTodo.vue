<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item v-for="(item, index) in tasks" 
        :key="index" 
        @click="item.complate = !item.complate" 
        clickable 
        v-ripple
        :class="!item.complate ? 'bg-orange-1' : 'bg-green-1'">
        <q-item-section side top>
          <q-checkbox v-model="item.complate" />
        </q-item-section>
        <q-item-section>
          <!-- 自定义一个text-strikethrough的class, 然后去App.vue里面全局定义 -->
          <q-item-label :class="{ 'text-strikethrough' : item.complate }">{{item.name}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <q-icon name="event" color="" size="18px" class="q-mr-xs" />
            <div class="column">
              <q-item-label caption class="row justify-end">
                {{item.dueDate}}
              </q-item-label>
              <q-item-label caption class="row justify-end">
                <small>
                  {{item.dueTime}}
                </small>
              </q-item-label>
            </div>
          </div>

        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
     
    }
  },
  computed: {
    // store的内容在computed里面获取
    // tasks() {
    //   // 因为store-tasks.js用了namespaced:true,所以getters需要mudulename/方法
    //   return this.$store.getters['tasks/tasks']
    // }
    //还可以使用mapGetters来获取而无需定义tasks()函数
    // tasks为mudulename, 数组中的tasks为getters中的方法
    ...mapGetters('tasks',['tasks'])

  }
}
</script>
 