const state = {
    miniCart: [],
    totalQty: 0,
    totalAmount: 0,
}

const getters = {
    miniCart(state) {
        return state.miniCart;
    },
    booksInCart(state) {
        return state.miniCart.length;
    },
    getTotalQty(state) {
        return state.totalQty;
    },
    getTotalAmount(state) {
        return state.totalAmount;
    },
}

const mutations = {
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
    },
    removeBook(state, isbn){
        state.miniCart = state.miniCart.filter(item => item.ISBN !== isbn);
    },
    setTotalQty(state) {
        state.totalQty++;
    },
    reduceTotalQty(state, isbn){

        const bookQty = state.miniCart.find(book => book.ISBN === isbn).qty;
        state.totalQty = state.totalQty - bookQty;
    },
    setTotalAmount(state) {
        var initialValue = 0;
        state.totalAmount = state.miniCart.reduce((prev, curr) => prev + curr.qty*curr.price, initialValue)
    }
}

const actions = {
    removeBookFromCart(context, isbn) {
        context.commit('reduceTotalQty', isbn);
        context.commit('removeBook', isbn);
        context.commit('setTotalAmount');
    },
    addBookToCart(context, payload){
        context.commit('addBook', payload)
        context.commit('setTotalQty')
        context.commit('setTotalAmount')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
