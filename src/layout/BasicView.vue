<template>
  <a-layout >
    <!-- 侧边栏 -->
    <a-layout-sider
      class="layout-sider layout-sider-sticky"
      :trigger="null"
      collapsible
      :collapsed="siderCollapse"
      width="120"
      breakpoint="md"
      :collapsedWidth="siderWidth"
    >
      <a-menu
        mode="vertical"
        :inlineIndent="12"
      >

        <!-- 文档菜单 -->
        <a-sub-menu>
          <template #title>
            <span>
              <FileTextOutlined />
              <span>Docs</span>
            </span>
          </template>
          <a-menu-item v-for="doc in docRoutes" :key="doc">
            <router-link :to="'/Summary/' + doc">{{ doc }}</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item>menu - 1</a-menu-item>
        <a-menu-item>menu - 1</a-menu-item>
        <a-menu-item>menu - 1</a-menu-item>
        <a-menu-item>menu - 1</a-menu-item>

      </a-menu>
    </a-layout-sider>

    <!-- 主体 -->
    <a-layout class="layout-main">

      <!-- 顶部 -->
      <a-layout-header class="layout-header"></a-layout-header>

      <!-- 主内容 -->
      <a-layout-content class="layout-content">
        
        <router-view />

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { onMounted, onBeforeUnmount, nextTick, ref, computed } from 'vue'
import ResponsiveObservise from '@/utils/ResponsiveObservise'
import { FileTextOutlined } from '@ant-design/icons-vue'
import Summary from '@/docs'

export default {
  name: 'BasicView',
  components: {
    FileTextOutlined
  },
  setup() {
    // 响应式监听
    let token = ref(0)
    let isMobile = ref(false)
    let isDesktop = ref(false)
    
    onMounted(() => {
      nextTick(() => {
        token.value = ResponsiveObservise.subscribe(screen => {
          console.log(screen)
          isMobile.value = !!screen.mobile
          isDesktop.value = !!screen.desktop
        })
      })
    })

    onBeforeUnmount(() => {
      ResponsiveObservise.unsubscribe(token)
    })

    // 侧边栏
    let siderWidth = ref(80)
    let siderCollapse = computed(() => isMobile.value)

    // 文档路由
    let docRoutes = ref(Summary.path)

    return {
      siderWidth,
      siderCollapse,
      isMobile,
      isDesktop,

      docRoutes
    }
  },
}
</script>

<style scoped>
.layout-sider {
  height: 100vh;
  overflow: auto;
  background: #fff;
}
.layout-sider-sticky {
  position: sticky;
  top: 0;
}
.layout-header {
  background: #fff;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, .15);
}
.layout-content {
  margin: 15px;
  min-height: 200px;
  background: #fff;
}
</style>