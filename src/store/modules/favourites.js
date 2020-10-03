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
    doFavsArrayMutation(state, book) {
        state.favs.find(elem => elem.ISBN === book.ISBN)  === undefined ?
            state.favs = state.favs.concat([book]) :
            state.favs.splice(state.favs.indexOf(book), 1);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}