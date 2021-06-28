<template>
  <div>
    <p id="p1">
      <b>hello</b> world!
    </p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  data() {
    return {}
  },
  setup() {
    
    onMounted(() => {
      let range1 = document.createRange(),
        // range2 = document.createRange(),
        p1 = document.querySelector('#p1'),
        helloNode = p1.firstChild.firstChild,
        worldNode = p1.lastChild

      range1.setStart(helloNode, 2)
      range1.setEnd(worldNode, 3)

      // 删除选择范围
      // range1.deleteContents()

      // 删除并返回选中范围
      // let fragment = range1.extractContents()
      // p1.appendChild(fragment)
      
      // 将删除的选中范围，插入到第一位
      // let fragment = range1.extractContents()
      // range1.setStart(helloNode, 0)
      // range1.insertNode(fragment)

      let span = document.createElement('span')
      span.style.background = 'yellow'

      let range2 = document.createRange()
      range2.selectNode(helloNode)
      range2.surroundContents(span)

      // 从文档中分离，删除引用
      range1.detach()
      range1 = null

      range2.detach()
      range2 = null
      
    })

    return {}
  }
}
</script>