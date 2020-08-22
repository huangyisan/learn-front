<template>
  <q-item 
        @click="updateTask({ id:id, update:{ complate: !item.complate }})" 
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
        <!-- // 删除按钮 -->
        <q-item-section side>
          <q-btn flat round dense color="primary" icon="delete" @click.stop="promoteToDelete(id)" />
        </q-item-section>
      </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default : []
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask','deleteTask']),
    promoteToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
        // console.log('>>>> OK')
      })
    }
  }
  
}
</script>

<style>

</style>