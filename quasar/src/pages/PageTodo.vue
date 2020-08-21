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
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "go to shop",
          complate: false,
          dueDate: '2020/01/01',
          dueTime: '22:22:33'
        },
        {
          id: 2,
          name: "go to home",
          complate: false,
          dueDate: '2020/01/02',
          dueTime: '12:22:33'
        },
        {
          id: 3,
          name: "go to school",
          complate: true,
          dueDate: '2020/01/03',
          dueTime: '02:22:33'
        }
      ]
    }
  }
}
</script>
 