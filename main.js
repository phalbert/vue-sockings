

new Vue({
    el: "#app",
    data: {
        cart: [],
        premium: false
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    },
});