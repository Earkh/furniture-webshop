import { createStore } from 'vuex'

export default createStore({
    state: {
        products: []
    },
    mutations: {
        setProduct(state, payload) {
            state.products = payload
            console.log(state.products)
        }
    },
    actions: {
        async fetchData({commit}) {
            try {
                const res = await fetch('api.json')
                const data = await res.json()
                commit('setProduct', data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {

    }
})