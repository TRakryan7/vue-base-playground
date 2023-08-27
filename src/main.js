import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Unicon from 'vue-unicons'
import { uniLayerGroupMonochrome, uniCarWash, uniEye, uniEyeSlash } from 'vue-unicons/dist/icons'

Unicon.add([uniLayerGroupMonochrome, uniCarWash,uniEye,uniEyeSlash])

createApp(App).use(Unicon).mount('#app')
