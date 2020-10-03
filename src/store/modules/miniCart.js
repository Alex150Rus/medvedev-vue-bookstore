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
    increaseTotalQtyOfBooks(state) {
        state.totalQty++;
    },
    reduceTotalQtyOfBooks(state, isbn){
        const bookQty = state.miniCart.find(book => book.ISBN === isbn).qty;
        state.totalQty = state.totalQty - bookQty;
    },
    increaseTotalAmountOfBooks(state) {
        const initialValue = 0;
        state.totalAmount = state.miniCart.reduce((prev, curr) => prev + curr.qty*curr.price, initialValue)
    }
}

const actions = {
    removeBookFromCart(context, isbn) {
        context.commit('reduceTotalQtyOfBooks', isbn);
        context.commit('removeBook', isbn);
        context.commit('increaseTotalAmountOfBooks');
    },
    addBookToCart(context, payload){
        context.commit('addBook', payload)
        context.commit('increaseTotalQtyOfBooks')
        context.commit('increaseTotalAmountOfBooks')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
