import Vue from 'vue'
import VHeader from '@/components/header/VHeader'
import VFooter from '@/components/footer/VFooter'
import VCard from '@/components/card/VCard'
import { VueEditor } from 'vue2-editor'

Vue.component('v-header', VHeader)
Vue.component('v-footer', VFooter)
Vue.component('v-card', VCard)
Vue.component('v-editor', VueEditor)
