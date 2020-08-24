import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miniCart: []
  },
  getters: {
    miniCart(state) {
      return state.miniCart;
    }
  },
  mutations: {
    addBook(state, newBook) {
      if (state.miniCart.length === 0) {
        newBook.qty = 1;
        state.miniCart = state.miniCart.concat([newBook]);
      } else {
        const index = state.miniCart.findIndex(elem => elem.ISBN === newBook.ISBN)
          if (index === -1 ) {
            newBook.qty = 1;
            state.miniCart = state.miniCart.concat([newBook]);
          } else {
            state.miniCart[index].qty++
          }
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
