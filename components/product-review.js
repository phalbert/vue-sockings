Vue.component('product-review', {
    template: `
      <form class="review-form" @submit.prevent='onSubmit'>
        <p>
          <label for="name">Name: </label>
          <input id="name" v-model="name" required>
        </p>
        <p>
          <label for="review">Review: </label>
          <textarea id="review" v-model="review"></textarea>
        </p>
        <p>
           <label for="rating">Rating: </label>
           <select id="rating" v-model.number="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
           </select>
        </p>
        <button type='submit'>Submit</button>
      </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = null
            this.review = null
            this.rating = null
        }
    },
})