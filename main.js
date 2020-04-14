new Vue({
    el: "#app",
    data() {
        return {
            brand: 'Appcellon',
            product: 'Socks',
            inventory: 1,
            selectedVariant: 0,
            details: ['80% cotton', '20% polyster', 'Nylon'],
            cart: 0,
            variants: [
                { name: 'Blue', image: './assets/img/vmSocks-blue-onWhite.jpg', color: 'blue' },
                { name: 'Green', image: './assets/img/vmSocks-green-onWhite.jpg', color: 'green' }
            ]
        };
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProductImage(variantIndex) {
            this.selectedVariant = variantIndex
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        }
    },
});