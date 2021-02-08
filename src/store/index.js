import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [],
        cart: {}
    },
    mutations: {
        setProduct(state, payload) {
            state.products = payload
        },
        setCart(state, payload) {
            state.cart[payload.id] = payload
            console.log(state.cart)
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
        },
        add2Cart({commit, state}, product) {
            state.cart.hasOwnProperty(product.id) ? product.qty = state.cart[product.id].qty + 1 : product.qty = 1
            commit('setCart', product)
        }
    },
    modules: {

    }
})