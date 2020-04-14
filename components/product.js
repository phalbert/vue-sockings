Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
        <div class="product-image">
            <img :src="image" />
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>Premium: {{ premium }}</p>
            <p>Shipping: {{ shipping_fee }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else="inStock">Out of Stock</p>

            <ul>
                <li v-for='(detail, $detailIndex) in details' :key='$detailIndex'>{{ detail }}</li>
            </ul>

            <div v-for='(variant, variantIndex) in variants' :key='variantIndex' class="color-box"
                :style='{backgroundColor: variant.color}'>
                <p @mouseover='updateProductImage(variantIndex)'>{{ variant.name }}</p>
                <hr>
            </div>

            <button @click='addToCart' 
            :class='{ disabledButton: !inStock }'>Add</button>
            
        </div>
    </div>
    `,
    data() {
        return {
            brand: 'Appcellon',
            product: 'Socks',
            inventory: 1,
            selectedVariant: 0,
            details: ['80% cotton', '20% polyster', 'Nylon'],
            variants: [
                { name: 'Blue', image: './assets/img/vmSocks-blue-onWhite.jpg', color: 'blue', quantity: 13 },
                { name: 'Green', image: './assets/img/vmSocks-green-onWhite.jpg', color: 'green', quantity: 0 }
            ]
        };
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
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
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping_fee(){
            return this.premium ? 'Free' : '50'
        }
    },
})