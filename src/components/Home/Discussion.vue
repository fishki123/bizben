<template>
  <Carousel :items-to-show="2">
    <Slide class="discussion-items" v-for="link in discussion_item" :key="link.id" :style="link.style">
      <div class="discussion-item">
        <div class="discussion-img"></div>
        <div class="discussion-content">
          <div class="discussion-user-date">
            <svg style="margin-right: 10px" width="15" height="15" viewBox="0 0 15 15" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M13.8102 9.52183C13.313 9.08501 12.7102 8.70758 12.0181 8.40008C11.7223 8.2687 11.3761 8.40191 11.2447 8.69762C11.1134 8.99334 11.2466 9.33952 11.5423 9.47102C12.1258 9.73034 12.6287 10.0436 13.0367 10.4021C13.5396 10.8441 13.8281 11.484 13.8281 12.1582V13.2422C13.8281 13.5653 13.5653 13.8281 13.2422 13.8281H1.75781C1.43475 13.8281 1.17188 13.5653 1.17188 13.2422V12.1582C1.17188 11.484 1.46038 10.8441 1.96335 10.4021C2.55535 9.88186 4.2802 8.67188 7.5 8.67188C9.89079 8.67188 11.8359 6.72672 11.8359 4.33594C11.8359 1.94515 9.89079 0 7.5 0C5.10921 0 3.16406 1.94515 3.16406 4.33594C3.16406 5.7336 3.82896 6.97872 4.85893 7.77214C2.97432 8.18642 1.80199 8.98384 1.18984 9.52183C0.433731 10.1862 0 11.147 0 12.1582V13.2422C0 14.2115 0.788498 15 1.75781 15H13.2422C14.2115 15 15 14.2115 15 13.2422V12.1582C15 11.147 14.5663 10.1862 13.8102 9.52183ZM4.33594 4.33594C4.33594 2.59129 5.75535 1.17188 7.5 1.17188C9.24465 1.17188 10.6641 2.59129 10.6641 4.33594C10.6641 6.08059 9.24465 7.5 7.5 7.5C5.75535 7.5 4.33594 6.08059 4.33594 4.33594Z"
                  fill="#696969"/>
            </svg>
            <p class="discussion-user-name">{{ link.name }}</p>
            <svg style="margin-right: 10px" width="15" height="15" viewBox="0 0 15 15" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M13.0664 1.17188H11.7188V0.46875C11.7188 0.209883 11.5089 0 11.25 0C10.9911 0 10.7812 0.209883 10.7812 0.46875V1.17188H4.21875V0.46875C4.21875 0.209883 4.0089 0 3.75 0C3.4911 0 3.28125 0.209883 3.28125 0.46875V1.17188H1.93359C0.867393 1.17188 0 2.03927 0 3.10547V13.0664C0 14.1326 0.867393 15 1.93359 15H13.0664C14.1326 15 15 14.1326 15 13.0664V3.10547C15 2.03927 14.1326 1.17188 13.0664 1.17188ZM1.93359 2.10938H3.28125V2.57812C3.28125 2.83699 3.4911 3.04688 3.75 3.04688C4.0089 3.04688 4.21875 2.83699 4.21875 2.57812V2.10938H10.7812V2.57812C10.7812 2.83699 10.9911 3.04688 11.25 3.04688C11.5089 3.04688 11.7188 2.83699 11.7188 2.57812V2.10938H13.0664C13.6157 2.10938 14.0625 2.55621 14.0625 3.10547V4.21875H0.9375V3.10547C0.9375 2.55621 1.38434 2.10938 1.93359 2.10938ZM13.0664 14.0625H1.93359C1.38434 14.0625 0.9375 13.6157 0.9375 13.0664V5.15625H14.0625V13.0664C14.0625 13.6157 13.6157 14.0625 13.0664 14.0625Z"
                  fill="#696969"/>
            </svg>
            <p class="discussion-user-data">{{ link.date }}</p>
          </div>
          <div class="discussion-text">
            <h2>{{ link.title }}</h2>
            <p>{{ link.description }}</p>
            <a href="#" class="discussion-link">Read more</a>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination/>
      <Navigation/>
    </template>
  </Carousel>
</template>

<script>
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "DiscussionItem",
  components: {Carousel, Slide, Pagination, Navigation},
  data() {
    return {
      img_discussion_item: require("@/assets/featureimg.png"),
      discussion_item: [
        {
          id: 1,
          name: "Peter Siegel",
          date: "06 April, 2022",
          title: "Confidentiality: Why Keeping A Deal Quiet Is Important To Business Sellers",
          description: "Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus."
        },
        {
          id: 2,
          name: "Tim Cunha",
          date: "06 April, 2022",
          title: "8 Questions You Most Likely Will Be Asked When Selling Your Business",
          description: "Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus."
        },
        {
          id: 3,
          name: "Peter Siegel",
          date: "06 April, 2022",
          title: "Buying A Food Truck Business Opportunity: 5 Things To Consider",
          description: "Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus."
        },
        {
          id: 4,
          name: "Chuck Post",
          date: "06 April, 2022",
          title: "Who Is Today's Laundry Investor Or Buyer: Blue Collar Or White Collar?",
          description: "Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus."
        },
        {
          id: 5,
          name: "Peter Siegel",
          date: "06 April, 2022",
          title: "Confidentiality: Why Keeping A Deal Quiet Is Important To Business Sellers",
          description: "Semper sagittis facilisi praesent elementum purus faucibus faucibus non tempus."
        },
      ]
    }
  }
}
</script>

<style>
.discussion-items {
}

.discussion-item {
  margin: 20px;
  max-width: 364px;
}

.discussion-img {
  background-image: url("../../assets/featureimg.png");
  background-size: 100% 100%;
  transition: 0.5s all;
  width: 100%;
  height: 250px;
}

.discussion-content {
  padding: 20px;
}

.discussion-user-date {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  color: #696969;
}

.discussion-text h2 {
  font-size: 16px;
  color: #0D263B;
  line-height: 28px;
  margin-bottom: 9px;
}

.discussion-text p {
  font-size: 14px;
  color: #696969;
  margin-bottom: 15px;
}

.discussion-item:hover {
  box-shadow: 0px 0px 19px 0px rgb(0 0 0 / 10%);
  transition: 0.5s all;
}

.discussion-link {
  color: #184997;
  font-size: 13px;
  border-bottom: 1px solid #184997;
  text-transform: uppercase;
  font-weight: bold;
}

.discussion-user-name, .discussion-user-data {
  margin-right: 10px;
}
</style>