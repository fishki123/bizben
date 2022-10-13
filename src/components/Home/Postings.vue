<template>
  <li class="search-item">
    <div class="search-title">
      <img :src="listing_img"/>
      <p>{{ listing_title }}</p>
    </div>
    <ol class="search-result">
      <li class="search-result-content" v-for="link in listing_item" :key="link.id">
        <div class="search-result-img">
          <img :src="link.img"/>
        </div>
        <div class="search-result-text">
          <p class="search-result-title">{{ link.title }}</p>
          <p class="search-result-price">${{ link.price }}</p>
          <p class="search-result-description">{{ link.description }}</p>
        </div>
      </li>
    </ol>
    <div class="search-results-link">
      <a>View all results</a>
    </div>
  </li>
</template>

<script>
export default {
  name: "PostingItem",
  data() {
    return {
      listing_img: require('@/assets/listingicon.png'),
      listing_title: "Listings",
      listing_item: [
        {
          id: 1,
          img: require('@/assets/blog-item-img.png'),
          title: "Home Health Agency",
          price: "250000",
          description: "Annual SDC: $350,000"
        },
        {
          id: 2,
          img: require('@/assets/blog-item-img.png'),
          title: "Home Health Agency",
          price: "250000",
          description: "Annual SDC: $350,000"
        },
      ]
    }
  }
}
</script>