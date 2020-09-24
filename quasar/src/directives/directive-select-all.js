// select all 功能全局化

export const selectAll = {
  // el：指令所绑定的元素，可以用来直接操作 DOM。
  inserted(el) {
    // 获取input的dom, 使用类选择器,f12看到class为"q-field__native"
    let input = el.querySelector('.q-field__native')
    // 给定监听器, 监听focus事件, 监听到了,则执行函数
    input.addEventListener('focus', ()=> {
      // 非空的时候,则自动选中. 这边有bug, 点击弹出的时候无法监听到focus事件.
      if (input.value.length) {
        input.select()
      }
    })
  }
}
