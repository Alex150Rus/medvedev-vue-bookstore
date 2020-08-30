import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import miniCart from "@/store/modules/miniCart";
import favourites from "@/store/modules/favourites";
export default new Vuex.Store({
  modules: {
    miniCart,
    favourites
  }
})
