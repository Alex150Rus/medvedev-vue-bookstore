const state = {
    miniCart: []
}

const getters = {
    miniCart(state) {
        return state.miniCart;
    },
    booksInCart(state) {
        return state.miniCart.length;
    }
}

const mutations = {
    addBook(state, newBook) {
        if (state.miniCart.length === 0) {
            newBook.qty = 1;
            state.miniCart = state.miniCart.concat([newBook]);
        } else {
            const index = state.miniCart.find(elem => elem.ISBN === newBook.ISBN)
            if (index === -1 ) {
                newBook.qty = 1;
                state.miniCart = state.miniCart.concat([newBook]);
            } else {
                state.miniCart[index].qty++
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
