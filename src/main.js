import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
import Routes from './routes'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'github-markdown-css/github-markdown.css'
import './assets/style.css'

import PageView from './layout/PageView'

const app = createApp(App)

app.component(PageView.name, PageView)

app.use(Store)
app.use(Routes)
app.use(Antd)

app.mount('#app')

export default app