const state = {
    favs : [],
}

const getters = {
    getFavs(state) {
        return state.favs
    },
    getFavsQty(state) {
        return state.favs.length ? state.favs.length : '0';
    },
}

const mutations = {
    addToFavs(state, book) {
        state.favs.find(elem => elem.ISBN === book.ISBN)  === undefined ? state.favs = state.favs.concat([book]) : '';
    },
    removeFromFavs(state,book) {
        state.favs = state.favs.filter(elem => elem.ISBN !== book.ISBN)
    },
}

const actions = {
    addToFavsAction(context, book) {
        context.dispatch('isBookInFavs', book)
            .then(result => result ? context.commit('removeFromFavs', book) : context.commit('addToFavs', book));
    },
    isBookInFavs(context, book) {
        return context.state.favs.find(elem => elem.ISBN === book.ISBN)  !== undefined;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}