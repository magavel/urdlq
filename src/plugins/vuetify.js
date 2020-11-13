import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { preset } from 'vue-cli-plugin-vuetify-preset-reply'
Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    preset
}

export default new Vuetify(opts)
