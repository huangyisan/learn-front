<template>
  <q-item 
    @click="updateTask({ id:id, update:{ complate: !item.complate }})" 
    clickable 
    v-ripple
    v-touch-hold:1000.mouse="showEditTaskModal"
    :class="!item.complate ? 'bg-orange-1' : 'bg-green-1'">
    <q-item-section side top>
      <!-- <q-checkbox v-model="item.complate" /> -->
      <!-- 将原本的v-model 拆成:value和@input方法，如果直接v-model操作同一个数据，则会报错Do not mutate vuex store state outside mutation handlers -->
      <q-checkbox :value="item.complate" @input="updateTask({ id:id, update:{ complate: !item.complate }})" />
    </q-item-section>
    <q-item-section>
      <!-- 自定义一个text-strikethrough的class, 然后去App.vue里面全局定义 -->
      <!-- 因为searchHighlight存在html语句，所以使用v-html进行解析 -->
      <!-- $options.filters是当filter配合v-html时候的语法 -->
      <!-- https://stackoverflow.com/questions/41688899/vuejs2-v-html-with-filter -->
      <q-item-label 
        :class="{ 'text-strikethrough' : item.complate }"
        v-html = "$options.filters.searchHighlight(item.name, search)"
        >
      </q-item-label>
    </q-item-section>
    <q-item-section side v-if="item.dueDate">
      <div class="row">
        <q-icon name="event" color="" size="18px" class="q-mr-xs" />
        <div class="column">
          <q-item-label caption class="row justify-end">
            {{item.dueDate | niceDate}}
          </q-item-label>
          <q-item-label caption class="row justify-end">
            <small>
              {{taskDueTime}}
            </small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <!-- // 删除按钮 -->
    <q-item-section side>
      <q-btn flat round dense color="green" icon="edit" @click.stop="showEditTaskModal" />
    </q-item-section>
    <q-item-section side>
      <q-btn flat round dense color="primary" icon="delete" @click.stop="promoteToDelete(id)" />
    </q-item-section>

    <!-- 编辑task -->
    <q-dialog v-model="showEditTask" no-backdrop-dismiss>
      <edit-task @close="showEditTask = false" :task="item" :id="id"></edit-task>
    </q-dialog>

  </q-item>

</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'
import { date }  from 'quasar'

// 单独提取formatDate方法
const { formatDate } = date

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
  data() {
    return {
      showEditTask: false,

    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings',['settings']),
    taskDueTime() {
      // 如果12小时开关打开，则使用十二小时制
      if (this.settings.show12HourTimeFormat) {
        // 这边需要拼接是因为formatDate函数只支持 2020/01/01 09:02:11 这种格式
        return formatDate(this.item.dueDate + ' ' + this.item.dueTime, "h:mmA")
      }
      return this.item.dueTime
    }
  },
  filters: {
    niceDate(dateValue) {
      return formatDate(dateValue, "MMM DD YYYY")
    },
    searchHighlight(value, search) {
      if (search) {
        // 正则表达式，无视大小写，全局匹配
        let searchRegExp = new RegExp(search, "ig")
        console.log("searchRegExp:", searchRegExp)
        // replace如果第二个参数是函数，则该函数的第一个参数为匹配到的子字符串。比如下面的match参数就是匹配到的子字符串。
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
        return value.replace(searchRegExp, (match) => {
          console.log("match:", match)
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  methods: {
    showEditTaskModal() {
      this.showEditTask = true
    },
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
  },
  components: {
    'editTask' : require('components/Tasks/Modals/editTask').default
  }
  
}
</script>

<style>

</style>