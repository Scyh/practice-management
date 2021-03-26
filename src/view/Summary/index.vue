<template>
  <page-view class="markdown-body">
    
    <component
      v-if="currentComponent"
      v-bind:is="currentComponent"
    ></component>

    <p v-else>
      文档
    </p>
  </page-view>
</template>
<script>
import Summary from '@/docs'

import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Summary',
  components: {
    ...Summary.components
  },
  setup() {
    const route = useRoute()
    console.log(route)

    const currentComponent = ref('')
    watch(
      () => route.params.article,
      (article) => {
        currentComponent.value = 'DOC-' + article
      },
      { immediate: true }
    )
    
    
    return {
      currentComponent
    }
  },
}
</script>