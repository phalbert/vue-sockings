Vue.component('product-tabs', {
  template: `
      <div>
        <div>
        <span class='tab' v-for='(tab, index) in tabs' :key='index'
        @click='selectedTab = tab'
        :class="{ activeTab: selectedTab === tab}">{{ tab }}</span>
        </div>

        <div v-show="selectedTab === 'Reviews'">
          <h2>Reviews</h2>
          <ul>
            <li v-for='(review, index) in reviews' :key='index'>
            <p>{{ review.name }}</p>
            <p>{{ review.rating }}</p>
            <p>{{ review.review }}</p>
            </li>
          </ul>
        </div>
        <product-review v-show="selectedTab === 'Add Review'" @review-submitted='addReview'><product-review/>
      </div>
    `,
  props: {
    reviews: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      tabs: ['Reviews', 'Add Review'],
      selectedTab: 'Reviews'
    }
  },
  methods: {
    addReview(review) {
      this.reviews.push(review)
      this.selectedTab = 'Reviews'
    }
  },
})