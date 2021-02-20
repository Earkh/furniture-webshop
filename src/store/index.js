import { createStore } from 'vuex'
import { projectFirestore } from '../firebase/config'

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
        },
        emptyCart(state) {
            state.cart = {}
        },
        increment(state, payload) {
            ++state.cart[payload].qty
        },
        decrement(state, payload) {
            --state.cart[payload].qty
            if (state.cart[payload].qty === 0) {
                delete state.cart[payload]
            }
        },
        deleteItem(state, payload) {
            delete state.cart[payload]
        }
    },
    actions: {
        async fetchData({commit}) {
            try {
                const res = await projectFirestore.collection('products').get()
                const data = res.docs.map(doc => {
                    return { ...doc.data(), id: doc.id}
                })
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
    getters: {
        totalAmount(state) {
            return Object.values(state.cart).reduce((acc, {qty}) => acc + qty, 0)
        },
        totalPrice(state) {
            return Object.values(state.cart).reduce((acc, {qty, price}) => acc + qty * price, 0)
        },
        getCategory(state, category) {
              return state.products.filter((product) => product.category == category)
        }
    }
})