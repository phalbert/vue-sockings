new Vue({
    el: "#app",
    data() {
        return {
            product: 'Socks',
            image: './assets/img/vmSocks-green-onWhite.jpg',
            inventory: 1,
            details: ['80% cotton', '20% polyster', 'Nylon'],
            cart: 0,
            variants: [
                { name: 'Blue', image: './assets/img/vmSocks-blue-onWhite.jpg' },
                { name: 'Green', image: './assets/img/vmSocks-green-onWhite.jpg' }
            ]
        };
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProductImage(image) {
            this.image = image
        }
    },
});