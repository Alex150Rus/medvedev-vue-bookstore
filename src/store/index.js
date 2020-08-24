import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import miniCart from "@/store/modules/miniCart";
export default new Vuex.Store({
  modules: {
    miniCart
  }
})
