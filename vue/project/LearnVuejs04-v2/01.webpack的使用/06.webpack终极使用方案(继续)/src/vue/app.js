// 将抽出来的内容放里面

export default {
  template: `
  <div>
  <h2>{{message}}</h2>
  <button @click="btnClick">按钮</button>
  <h2>{{name}}</h2>
</div>
  `,
  data(){
    return {
      message: 'hello world',
      name: 'yisan'
    }
  },
  methods: {
    btnClick() {
      console.log('点击了')
    }
  },
}