<template>
  <li class="information-item" v-for="link in information_item" :key="link.id">
    <div class="information-img">
      <img class="" :src="link.img"/>
    </div>
    <h3 class="information-item-title">{{ link.title }}</h3>
    <p class="information-item-description">{{ link.description }}</p>
    <a class="information-item-link" href="#">Get Started</a>
  </li>
</template>

<script>
export default {
  name: "InformationItem",
  data() {
    return {
      information_item: [
        {
          id: 1,
          img: require('@/assets/sellersicon.png'),
          title: "Sellers",
          description: "List your business to connect with thousands of business buyers.",
        },
        {
          id: 2,
          img: require('@/assets/buyersicon.png'),
          title: "Buyers",
          description: "Search listings for sale by state, county, category, industry,or type.",
        },
        {
          id: 3,
          img: require('@/assets/advisorsicon.png'),
          title: "Advisors",
          description: "Join the BizBen network to promote your business and connect with buyers and sellers.",
        },
        {
          id: 4,
          img: require('@/assets/intermediariesicon.png'),
          title: "Intermediaries",
          description: "Streamline and simplify listing management with multiple listing packages.",
        }
      ]
    }
  }
}
</script>