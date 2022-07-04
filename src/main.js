import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
// import { pinia } from './stores'
import router from './router'
import {createPinia} from 'pinia'

// export const pinia = createPinia()

const pinia = createPinia()

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(pinia)

router.isReady().then(() => {
    app.mount('#app')
})
// app.mount('#app')
