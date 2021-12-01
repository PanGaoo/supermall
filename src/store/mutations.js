export default {
    addCart(state, payload) {
        for (const item of state.cartList) {
            if (item.iid === payload.iid) {
                item.count += 1;
                return
            }
        }
        state.cartList.push(payload)
    },
}