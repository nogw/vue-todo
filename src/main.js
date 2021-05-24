import { createApp } from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniTrash, uniPlusCircle } from 'vue-unicons/dist/icons'

Unicon.add([uniTrash, uniPlusCircle])

createApp(App).use(Unicon).mount('#app')
