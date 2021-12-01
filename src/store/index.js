
import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            for (const item of state.cartList) {
                if (item.iid === payload.iid) {
                    item.count += 1;
                    return
                }
            }
            state.cartList.push(payload)
        },

    },
    getters: {
        cartLength(state) {
            return state.cartList.length
        },
        cartList(state) {
            return state.cartList
        },
        cartPirce(state) {
            let PriceCount = null;
            for (const item of state.cartList) {
                PriceCount += parseFloat(item.price) * item.count
                console.log(item.price);
                console.log(item.count);
                console.log(PriceCount);
            }
            return PriceCount * 100
        }
    }
})
