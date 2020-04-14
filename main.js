

new Vue({
    el: "#app",
    data: {
        cart: 0,
        premium: false
    },
    methods: {
        updateCart() {
            this.cart += 1
        }
    },
});