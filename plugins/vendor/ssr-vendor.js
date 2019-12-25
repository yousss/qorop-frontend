import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuelidate from "vuelidate";
import VueLazyload from 'vue-lazyload'

Vue.use(Vuelidate)
Vue.use(VueLazyload, { observer: true })
Vue.use(Vuetify, {
  theme: {
    primaryDark: "#826725",
    primary: "#8925f4",
    colorPink: "#f722f7",
    secondary: "#1a1a1a",
    bgDark: "#111111",
    colorBlue: "#1D3043",
    colorGreen: "#a2ce2d",
    colorRed: "#DA4A4C",
    colorGrey: "#8f99a3"
  }
});




