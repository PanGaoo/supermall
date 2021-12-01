export default {
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
        }
        return PriceCount * 100
    }
}