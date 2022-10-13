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
  name: "ResourcesItem",
  data() {
    return {
      listing_img: require('@/assets/resourceicon.png'),
      listing_title: "Discussions",
      listing_item: [
        {
          id: 1,
          img: require('@/assets/blog-item-img.png'),
          title: "Cash Based Businesses: How \n" +
              "Do I Confirm Cash Being \n" +
              "Represented?",
        },
        {
          id: 2,
          img: require('@/assets/blog-item-img.png'),
          title: "Should A Buyer Be Allowed To \n" +
              "Operate A Business Before \n" +
              "Escrow Closes?",
        },
      ]
    }
  }
}
</script>