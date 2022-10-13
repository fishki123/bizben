<template>
  <!-- main home section -->
  <section id="home" class="main-home">
    <div class="home-content">
      <h1>List. Connect.<br/>
        Get Deals Done.</h1>
      <p class="home-text-p">Want to buy or sell a business? BizBen is the only network you need.</p>
      <div class="home-search">
        <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
              d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z"
              fill="#8D8D8D"/>
          <path
              d="M15.8095 14.8898L12.0805 11.1608C11.8264 10.9067 11.4149 10.9067 11.1608 11.1608C10.9067 11.4147 10.9067 11.8266 11.1608 12.0805L14.8898 15.8095C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8095 15.8095C16.0636 15.5556 16.0636 15.1437 15.8095 14.8898Z"
              fill="#8D8D8D"/>
        </svg>
        <input class="home-search-input" type="search"
               placeholder="What type or location of business would you like to buy or sell?"/>
        <button class="btn-show-results">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="btn-icon">
            <path
                d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z"
                fill="white"/>
            <path
                d="M15.8095 14.8898L12.0805 11.1608C11.8264 10.9067 11.4149 10.9067 11.1608 11.1608C10.9067 11.4147 10.9067 11.8266 11.1608 12.0805L14.8898 15.8095C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8095 15.8095C16.0636 15.5556 16.0636 15.1437 15.8095 14.8898Z"
                fill="white"/>
          </svg>
          <p>show results</p>
        </button>
      </div>
      <p class="home-text-p">Looking to reach our network? Create a want to buy or for sale ad!</p>
      <ul class="search">
        <div class="search-items">
          <PostingItem/>
          <p class="search-item-title">Postings</p>
        </div>
        <div class="search-items">
          <BlogItem/>
          <p class="search-item-title">new & refreshed daily listings</p>
        </div>
        <div class="search-items">
          <ResourcesItem/>
          <p class="search-item-title">Resources</p>
        </div>
      </ul>
    </div>
  </section>
  <!-- inf section -->
  <section class="home-inf">
    <div class="home-content">
      <p class="information-greet">Welcome to the bizben network</p>
      <h2 class="information-title">Education, Community, Expert Advice.</h2>
      <p class="information-text">Trusted for 25+ years, BizBen is the only comprehensive nationwide business listing
        network designed<br/>
        <span style="font-weight: bold">to educate, support, and connect buyers, sellers, brokers, and advisors.</span>
        With custom solutions to<br/>
        fit your needs, resources that cater to all experience levels, and access to a team of deep domain<br/>
        experts - our powerful network gives you everything you need to get deals done.</p>
      <ul class="information">
        <InformationItem/>
      </ul>
    </div>
  </section>
  <!-- features section -->
  <section class="home-features">
    <div class="feature-title">
      <h3>Discover Our Featured Listings</h3>
    </div>
    <div class="feature-description">
      <p style="color: #696969">What’s hot and new on the BizBen listing network.</p>
      <a href="#" style="color: #184997;border-bottom: 2px solid #184997;padding-bottom: 5px">Want to get featured?</a>
    </div>
    <div class="feature-slider">
      <feature-item/>
    </div>
  </section>
  <!-- presentation section -->
  <section class="home-presentation">
    <div class="presentation-text">
      <div class="presentation-buyer">
        <p class="presentation-tag">Probuyer</p>
        <h1 class="presentation-title">For Business Buyers</h1>
        <p class="presentation-text-1">Identify Your Ideal Business Purchase Opportunity and
          Connect with Sellers</p>
        <p class="presentation-text-2">Consult with our team of experts, define your financial goals, learn about the
          most lucrative business types in your area,
          post ‘want to buy’ listings, and connect with business advisors,</p>
        <button class="presentation-button">Get started</button>
      </div>
      <div class="presentation-seller">
        <p class="presentation-tag">Proseller</p>
        <h1 class="presentation-title">For Business Sellers</h1>
        <p class="presentation-text-1">Get the Best Return on Investment for Your Business + Reach
          More Buyers</p>
        <p class="presentation-text-2">Get an unbiased business valuation, use our marketing guidance to reach the right
          buyers, and enjoy featured business listing placement -
          which generates more views and purchase inquiries.</p>
        <button class="presentation-button">Get started</button>
      </div>
    </div>
    <div class="presentation-information">
      <p class="presentation-information-text">Additional programs are available for real estate professionals and
        business advisors.<br/>
        Need something specific? We offer custom solutions. <a href="#" style="color:white; border-bottom: 1px solid ">Contact
          us</a> to learn more!</p>
    </div>
  </section>
  <!-- testimonial section -->
  <section class="home-testimonial">
    <svg class="icon1" width="147" height="110" viewBox="0 0 147 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.05"
            d="M27.5172 54.459C29.2069 54.2186 31.5 54.0984 34.3966 54.0984C43.569 54.0984 50.4483 56.7432 55.0345 62.0328C59.8621 67.082 62.2759 73.4535 62.2759 81.1475C62.2759 89.3224 59.5 96.1749 53.9483 101.705C48.6379 107.235 41.2759 110 31.8621 110C22.2069 110 14.4828 107.355 8.68966 102.066C2.89655 96.5355 0 88.6011 0 78.2623C0 64.3169 4.22414 50.2514 12.6724 36.0656C21.1207 21.6393 31.5 9.61748 43.8103 0L51.0517 7.57376C35.3621 24.1639 27.5172 39.7923 27.5172 54.459ZM112.241 54.459C113.931 54.2186 116.224 54.0984 119.121 54.0984C128.293 54.0984 135.172 56.7432 139.759 62.0328C144.586 67.082 147 73.4535 147 81.1475C147 89.3224 144.224 96.1749 138.672 101.705C133.362 107.235 126 110 116.586 110C106.931 110 99.2069 107.355 93.4138 102.066C87.6207 96.5355 84.7241 88.6011 84.7241 78.2623C84.7241 64.3169 88.9483 50.2514 97.3965 36.0656C105.845 21.6393 116.224 9.61748 128.535 0L135.776 7.57376C120.086 24.1639 112.241 39.7923 112.241 54.459Z"
            fill="#0D263B"/>
    </svg>
    <svg class="icon2" width="147" height="110" viewBox="0 0 147 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.05"
            d="M119.483 55.541C117.793 55.7814 115.5 55.9016 112.603 55.9016C103.431 55.9016 96.5517 53.2568 91.9655 47.9672C87.1379 42.918 84.7241 36.5464 84.7241 28.8524C84.7241 20.6776 87.5 13.8251 93.0517 8.29508C98.3621 2.76502 105.724 -3.60845e-06 115.138 -2.78547e-06C124.793 -1.94139e-06 132.517 2.6448 138.31 7.93442C144.103 13.4645 147 21.3989 147 31.7377C147 45.6831 142.776 59.7486 134.328 73.9344C125.879 88.3607 115.5 100.383 103.19 110L95.9483 102.426C111.638 85.8361 119.483 70.2077 119.483 55.541ZM34.7586 55.541C33.069 55.7814 30.7759 55.9016 27.8793 55.9016C18.7069 55.9016 11.8276 53.2568 7.2414 47.9672C2.41381 42.918 6.42151e-06 36.5464 7.09414e-06 28.8524C7.80881e-06 20.6776 2.77586 13.8251 8.32758 8.29507C13.6379 2.76501 21 -1.10153e-05 30.4138 -1.01923e-05C40.069 -9.34821e-06 47.7931 2.6448 53.5862 7.93442C59.3793 13.4645 62.2759 21.3989 62.2759 31.7377C62.2759 45.6831 58.0517 59.7486 49.6035 73.9344C41.1552 88.3607 30.7759 100.383 18.4655 110L11.2242 102.426C26.9138 85.8361 34.7586 70.2077 34.7586 55.541Z"
            fill="#0D263B"/>
    </svg>
    <div class="testimonial-title">
      <h1>Testimonials</h1>
    </div>
    <testimonial-item/>
  </section>
  <!-- explore section -->
  <section class="home-explore">
    <div class="explore-title">
      <h1>Explore Listings</h1>
      <explore-item/>
    </div>
  </section>
  <!-- expert advisors section -->
  <section class="home-advisors">
    <h1 class="advisors-title">Expert Business Advisors</h1>
    <p class="advisors-description">Our impressive roster of proven business advisors includes real estate
      professionals, transactional attorneys, small business<br/>
      finance and due diligence experts, industry consultants, and more. </p>
    <advisors-item/>
  </section>
  <!-- bizben discussion blog -->
  <section class="home-bizben-discussion-blog">
    <div class="bizben-blog">
      <h1>Bizben Blog</h1>
      <p>Actionable insights for business buyers and sellers of all experience levels.</p>
      <bizben-item/>
    </div>
    <div class="discussion-blog">
      <h1>Expert Discussions</h1>
      <p>Insightful information from brokerage, business, finance, and legal experts.</p>
      <discussion-item/>
    </div>
  </section>
  <!-- reclame section -->
  <section class="home-reclame">
    <h1>Connect with buyers or sellers today!</h1>
    <p>Creating a ‘business for sale’ or ‘want to buy’ listing is quick and easy.</p>
    <button>Get Started</button>
  </section>
</template>

<script>
import search_icon from "../../assets/search-icon.png"
import PostingItem from "@/components/Home/Postings";
import BlogItem from "@/components/Home/Blog";
import ResourcesItem from "@/components/Home/Resources";
import InformationItem from "@/components/Home/Information";
import FeatureItem from "@/components/Home/Features";
import TestimonialItem from "@/components/Home/Testimonials";
import ExploreItem from "@/components/Home/Explore";
import AdvisorsItem from "@/components/Home/Advisors";
import DiscussionItem from "@/components/Home/Discussion";
import BizbenItem from "@/components/Home/Bizben";

export default {
  name: "Home-item",
  components: {
    BizbenItem,
    DiscussionItem,
    AdvisorsItem,
    ExploreItem,
    TestimonialItem,
    FeatureItem,
    InformationItem,
    ResourcesItem,
    BlogItem,
    PostingItem
  },
  data() {
    return {
      search_icon: search_icon,
    }
  },
  methods() {
  }
}
</script>

<style>
/* main home */
/* background */
.main-home {
  background: url("../../assets/homeslide.jpg") no-repeat center center;
  background-size: cover;
  padding: 180px 0;
  margin: auto;
  position: relative;
}

.main-home:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 40%);
  z-index: 2;
}

.home-content {
  text-align: center;
  position: relative;
  z-index: 3;
}

/* text */
.home-text-p {
  padding-bottom: 17px;
  font-size: 21px;
  line-height: 38px;
  color: white;
}

/* input with btn */
.home-search {
  width: 100%;
  max-width: 850px;
  margin: auto;
  position: relative;
  padding-bottom: 9px;
}

.home-search .icon {
  position: absolute;
  left: 34px;
  top: 39px;
}

.home-search .btn-show-results {
  position: absolute;
  width: calc(100% / 4);
  min-height: 55px;
  right: 19px;
  top: 20px;
  bottom: 20px;
  font-size: 13px;
  line-height: 38px;
  color: white;
}

.home-search .btn-icon {
  margin-right: 11px;
  max-width: 16px;
  left: 13%;
  top: 35%;
}

.home-search-input {
  width: 100%;
  padding-left: 78px;
  padding-right: 272px;
  height: 95px;
  font-size: 17px;
}

/* search */
.search {
  display: flex;
  justify-content: center;
  text-align: initial;
}

.search-item {
  width: 300px;
  height: 285px;
  padding: 21px 21px;
  background-color: white;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 10%);
}

.search-title {
  display: flex;
  align-items: center;
  padding-bottom: 12px;
}

.search-title p {
  padding-left: 18px;
  font-size: 15px;
  font-weight: bold;
}

.search-title img {
  padding-left: 8px;
  width: 43px;
  height: 35px;
}

/* search a */
.search-item-title {
  padding: 13px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  line-height: 24px;
}

/* search-result */
.search-result {
  margin: auto;
  padding-bottom: 19px;
}

.search-result-content {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #E6E9EC;

}

.search-result-text {
  padding: 0 15px;
  font-size: 13px;
  height: 100%;
  width: 100%;
}

.search-result-img img {
  height: 50px;
  width: 50px;
}

.search-result-title {
  font-weight: bold;
  color: black;
}

.search-result-price {
  font-weight: bold;
  color: black;
}

.search-result-description {
  color: #696969;
}

/* search a */
.search-results-link {
  text-decoration: initial;
  color: #184997;
}

.search-results-link a {
  border-bottom: 1px solid #184997;
  font-size: 13px;
  cursor: pointer;
}

/* end main home */
/* inf section */
.home-inf {
  padding: 135px 225px;
  background-color: #F6F8F9;
}

.information-greet {
  color: #696969;
  font-size: 15px;
  padding-bottom: 21px;
  text-transform: uppercase
}

.information-title {
  font-size: 42px;
  color: #0D263B;
  padding-bottom: 21px;
}

.information-text {
  color: #696969;
  line-height: 38px;
  font-size: 21px;
}

/* inf items*/
.information {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.information-item {
  padding: 50px;
  background-color: white;
  margin: 0 15px;
  max-width: 345px;
  transition: 0.5s all;
}

.information-item:hover {
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 10%);
  transition: 0.5s all;
}

.information-img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-color: #EDF4FD;
  margin: auto;
}

.information-img img {
  margin-top: 25px;
}

.information-item-title {
  padding: 20px 0;
  color: #0D263B;
  font-size: 18px;
}

.information-item-description {
  line-height: 24px;
  margin-bottom: 22px;
  color: #696969;
  height: 72px;
  font-size: 14px;
}

.information-item-link {
  font-size: 14px;
  color: #184997;
  border-bottom: 2px solid #184997;
  padding-bottom: 5px
}

/* feature */
.home-features {
  padding: 110px 225px;
}

.feature-description {
  display: flex;
  font-size: 16px;
  justify-content: space-between;
}

.feature-title h3 {
  font-size: 30px;
  color: #0D263B;
}

/* presentation section */
.home-presentation {
  background-image: url("../../assets/slidepresentation.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  position: relative;
}

.home-presentation:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 40%);
  z-index: 2;
}

.presentation-text {
  padding-top: 129px;
  padding-right: 350px;
  padding-left: 350px;
  padding-bottom: 83px;
  display: flex;
  justify-content: center;
  color: white;
  position: relative;
  z-index: 3;
}

.presentation-tag {
  font-size: 15px;
  text-transform: uppercase;
  padding-bottom: 17px;
}

.presentation-title {
  font-size: 30px;
  line-height: 45px;
  padding-bottom: 13px;
}

.presentation-text-1 {
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 13px;
  font-weight: bold;
}

.presentation-text-2 {
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 45px
}

.presentation-buyer {
  padding-right: 165px;
}

/* button presentation */
.presentation-button {
  padding: 19px 50px;
  background-color: transparent;
  border: 2px white solid;
  border-radius: 4px;
  text-transform: uppercase;
  color: white;
  font-size: 13px;
  font-weight: bold;
  transition: 0.5s all;
}

.presentation-button:hover {
  background-color: white;
  color: black;
  font-weight: bold;
  transition: 0.5s all;
}

.presentation-information {
  text-align: center;
  font-size: 12px;
  line-height: 29px;
  color: white;
  padding-bottom: 21px;
  position: relative;
  z-index: 3;
}

/* testimonial blog */
.testimonial-title h1 {
  font-size: 30px;
  color: black;
  text-align: center;
}

/* slider */
.carousel {
  text-align: initial;
}

.feature-slider .carousel__viewport {
  padding: 60px 0;
}

.carousel__pagination-button {
  width: 8px;
  height: 8px;
  background-color: #184997;
}

.carousel__pagination-button--active {
  background-color: white;
  border: 2px solid #184997;
}

.carousel__pagination {
  align-items: center;
}

.carousel__next, .carousel__prev {
  display: none;
}

/* testimonial blog */
.home-testimonial {
  padding: 140px 0;
  position: relative;
  background-color: #F5F7FC;
}

/* icons testimonial */
.home-testimonial .icon1, .home-testimonial .icon2 {
  position: absolute;
}

.home-testimonial .icon1 {
  top: 40%;
  left: 10%;
}

.home-testimonial .icon2 {
  top: 40%;
  right: 10%;
}

/* ul li */
.testimonial-tabs {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 40px;
}

.testimonial-tab {
  cursor: pointer;
}

/* testimonial links */
.carousel__pagination-button--active + .testimonial-tab {
  color: red;
}

/*explore blog*/
.home-explore {
  padding: 114px 0;
}

/*explore title*/
.explore-title h1 {
  font-size: 30px;
  color: #0D263B;
  text-align: center;
}

/* advisors blog */
.home-advisors {
  background-color: #F6F8F9;
  padding: 116px 0;
  text-align: center;
}

.advisors-title {
  font-size: 30px;
  color: black;
  margin-bottom: 19px;
}

.advisors-description {
  font-size: 16px;
  line-height: 29px;
  color: #696969;
  margin-bottom: 14px;
}

/* bizben and discussion blog*/
.home-bizben-discussion-blog {
  padding: 116px 190px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(750px, 1fr));
  text-align: center;
}

.bizben-blog, .discussion-blog {
  padding: 0 15px;
}

.bizben-blog h1, .discussion-blog h1 {
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}

.bizben-blog p, .discussion-blog p {
  font-size: 14px;
  color: #696969;
}

/* reclame section */
.home-reclame {
  padding: 69px 0;
  background-color: #1D85E3;
  text-align: center;
  width: 100%;
  height: 100%;
}

.home-reclame h1 {
  font-size: 30px;
  margin-bottom: 15px;
}

.home-reclame p {
  font-size: 14px;
  color: white;
  margin-bottom: 26px;
}

.home-reclame button {
  text-transform: uppercase;
  font-size: 13px;
  color: #184997;
  background-color: white;
  padding: 19px 50px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.5s all;
}

.home-reclame button:hover {
  background-color: #0D263B;
  color: white;
  transition: 0.5s all;
}

/* 1920px+ */
@media screen and (min-width: 1920px) {
  /* explore section */
  .explore-show:after, .explore-show:before {
    height: 40%;
  }

  /* presentation section */
  .home-presentation {
    background-size: cover;
  }
}

/* 1600px - 1919px */
@media screen and (min-width: 1660px) and (max-width: 1919px) {
  /* bizben and discussion section */
  .home-bizben-discussion-blog {
    padding: 100px 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    text-align: center;
  }

  .explore-show:after, .explore-show:before {
    height: 35%;
  }

  .discussion-img {
    height: 225px;
  }

  /* presentation section */
  .presentation-text {
    padding-top: 80px;
    padding-right: 350px;
    padding-left: 350px;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
    color: white;
    position: relative;
    z-index: 3;
  }

  /* feature section */
  .feature-img {
    height: 20vh;
  }
}

/* 1100px - 1659px */
@media screen and (min-width: 1100px) and (max-width: 1659px) {
  .discussion-user-name, .discussion-user-data {
    margin-right: 5px;
  }

  .bizben-blog p, .discussion-blog p {
    font-size: 13px;
    color: #696969;
  }

  .explore-show:after, .explore-show:before {
    height: 35%;
  }

  .discussion-img {
    height: 225px;
  }

  /* presentation section */
  .presentation-text {
    padding-top: 50px;
    padding-right: 300px;
    padding-left: 300px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    color: white;
    position: relative;
    z-index: 3;
  }

  .profile-stat {
    justify-content: initial;
  }

  /* bizben and discussion section */
  .home-bizben-discussion-blog {
    padding: 100px 100px;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  }

  /* feature section */
  .feature-img {
    height: 20vh;
  }

  .home-content h1 {
    font-size: 50px;
  }

  .information-title {
    font-size: 38px;
  }

  .explore-title h1, .bizben-blog h1, .discussion-blog h1, .testimonial-title h1, .advisors-title, .presentation-title, .feature-title h3, .home-reclame h1 {
    font-size: 28px;
  }

  .information-text, .home-text-p {
    font-size: 18px;
  }

  .explore-show p, .explore-text, .information-item-title {
    font-size: 16px;
  }

  .home-advisors h2, .discussion-text h2, .home-search-input {
    font-size: 15px;
  }

  .feature-title, .list-up-button, .slider-up-button, .testimonial-text, .testimonial-information h2,
  .presentation-tag, .feature-description, .information-greet, .search-title p {
    font-size: 14px;
  }

  .feature-price-offer, .information-item-link, .information-item-description, .feature-ann-description,
  .feature-pmt, .feature-gross, .feature-sdc, .home-reclame p, .home-advisors p,
  .button-showmore, .testimonial-information p, .presentation-text-1, .presentation-text-2, .search-item-title {
    font-size: 13px;
  }

  .discussion-link, .navbar-search-input, .search-results-link a, .search-result-text, .btn-show-results, .advisors-button {
    font-size: 12px;
  }

  .presentation-information {
    font-size: 11px;
  }

  .btn-show-results {
    font-size: 10px;
  }

  .feature-button-forsale, .feature-button-fasttrack, .feature-button-prosell {
    font-size: 9px;
  }

  .feature-items {
    width: 33% !important;
  }

  .information-item {
    padding: 25px;
  }

  .home-features, .home-inf, .home-testimonial, .home-explore {
    padding: 100px 50px;
  }

  .presentation-text {
    padding: 90px 50px;
  }

  .explore-items {
    padding: 0 100px;
  }

  .home-advisors {
    padding: 100px 0;
  }

  .advisors-item {
    justify-self: center;
  }

  .testimonial-text {
    padding: 50px 10px;
  }

  .bizben-blog, .discussion-blog {
    padding: 15px;
  }

  .wrapper {
    padding: 0 100px !important;
  }
}

/* 800px - 1099px */
@media screen and (min-width: 800px) and (max-width: 1099px) {
  .discussion-user-name, .discussion-user-data {
    margin-right: 5px;
  }

  .advisors-item {
    justify-self: center;
  }

  .information {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .list-up-button, .slider-up-button {
    padding: 0;
    margin: 0 25px;
  }

  #list1:checked ~ .list-up-button[for="list1"], #list2:checked ~ .list-up-button[for="list2"],
  #list3:checked ~ .list-up-button[for="list3"], #list4:checked ~ .list-up-button[for="list4"] {
    padding: 10px 20px;
  }

  .explore-items {
    padding: 0 50px;
  }

  .bizben-blog p, .discussion-blog p {
    font-size: 13px;
    color: #696969;
  }

  .explore-show:after, .explore-show:before {
    height: 35%;
  }

  .discussion-img {
    height: 225px;
  }

  /* presentation section */
  .presentation-text {
    padding: 40px;
  }

  .profile-stat {
    justify-content: initial;
  }

  /* bizben and discussion section */
  .home-bizben-discussion-blog {
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .discussion-items {
    width: 100% !important;
  }

  /* feature section */
  .feature-img {
    height: 20vh;
  }

  /* testimonial section */
  .testimonial-text {
    padding: 30px 100px;
  }

  .wrapper {
    padding: 0 50px !important;
  }

  .advisors-items {
    margin: auto;
  }

  .home-inf, .home-features, .information, .main-home {
    padding: 50px;
  }

  .home-content h1 {
    font-size: 50px;
  }

  .information-title {
    font-size: 38px;
  }

  .explore-title h1, .bizben-blog h1, .discussion-blog h1, .testimonial-title h1, .advisors-title, .presentation-title, .feature-title h3, .home-reclame h1 {
    font-size: 28px;
  }

  .information-text, .home-text-p {
    font-size: 18px;
  }

  .explore-show p, .explore-text, .information-item-title {
    font-size: 16px;
  }

  .home-advisors h2, .discussion-text h2, .home-search-input {
    font-size: 15px;
  }

  .feature-title, .list-up-button, .slider-up-button, .testimonial-text, .testimonial-information h2,
  .presentation-tag, .feature-description, .information-greet, .search-title p {
    font-size: 14px;
  }

  .feature-price-offer, .information-item-link, .information-item-description, .feature-ann-description,
  .feature-pmt, .feature-gross, .feature-sdc, .home-reclame p, .home-advisors p,
  .button-showmore, .testimonial-information p, .presentation-text-1, .presentation-text-2, .search-item-title {
    font-size: 13px;
  }

  .discussion-link, .navbar-search-input, .search-results-link a, .search-result-text, .btn-show-results, .advisors-button {
    font-size: 12px;
  }

  .presentation-information {
    font-size: 11px;
  }

  .btn-show-results {
    font-size: 10px;
  }

  .feature-button-forsale, .feature-button-fasttrack, .feature-button-prosell {
    font-size: 9px;
  }

  .feature-items {
    width: 50% !important;
  }

  .information-item {
    padding: 25px;
    margin: 10px;
  }

  .home-search, .search, .navbar-search {
    display: none;
  }
}

/* 576px - 799px */
@media screen and (min-width: 576px) and (max-width: 799px) {
  /* advisors section */
  .advisors-items {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0px;
    margin: 0px 10px;
  }

  .advisors-item {
    width: 300px;
    background-color: white;
    padding: 30px;
    margin: 15px 0px;
    justify-self: center;
  }

  .profile-avatar {
    height: 75px;
    width: 100px;
    margin-right: 49px;
    background-color: #C4C4C4;
    border-radius: 50%;
  }

  .discussion-user-name, .discussion-user-data {
    margin-right: 5px;
  }

  .list-up-button, .slider-up-button {
    padding: 0;
    margin: 0 10px;
  }

  #list1:checked ~ .list-up-button[for="list1"], #list2:checked ~ .list-up-button[for="list2"],
  #list3:checked ~ .list-up-button[for="list3"], #list4:checked ~ .list-up-button[for="list4"] {
    padding: 10px 20px;
  }

  .explore-items {
    padding: 0px;
  }

  .bizben-blog p, .discussion-blog p {
    font-size: 13px;
    color: #696969;
  }

  .explore-show:after, .explore-show:before {
    height: 35%;
  }

  .discussion-img {
    height: 225px;
  }

  .profile-stat {
    justify-content: initial;
  }

  /* bizben and discussion section */
  .home-bizben-discussion-blog {
    padding: 35px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .discussion-items {
    width: 100% !important;
  }

  /* feature section */
  .feature-img {
    height: 13vh;
  }

  .feature-button-forsale, .feature-button-fasttrack, .feature-button-prosell {
    font-size: 7px;
  }

  .feature-description p {
    margin-right: 25px;
  }

  .feature-items {
    width: 50% !important;
  }

  .testimonial-text, .advisors-description {
    padding: 30px;
  }

  .home-reclame {
    flex: initial;
    padding: 35px;
    text-align: center;
  }

  .home-search, .search, .home-explore, .navbar-search {
    display: none;
  }

  .presentation-buyer {
    padding-right: 0px;
  }

  .bizben-blog, .discussion-blog, .home-advisors, .home-explore,
  .feature-slider .carousel__viewport, .home-testimonial {
    padding: 35px 0;
  }

  .presentation-text {
    padding: 35px;
  }

  .information {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .information-item {
    margin: 15px;
  }

  .wrapper {
    padding: 0 25px !important;
  }

  .home-inf, .home-features, .information, .main-home {
    padding: 35px;
  }

  .home-content h1 {
    font-size: 38px;
  }

  .information-title {
    font-size: 28px;
  }

  .explore-title h1, .bizben-blog h1, .discussion-blog h1, .testimonial-title h1, .advisors-title, .presentation-title, .feature-title h3, .home-reclame h1 {
    font-size: 22px;
  }

  .information-text, .home-text-p {
    font-size: 15px;
  }

  .explore-show p, .explore-text, .information-item-title {
    font-size: 14px;
  }

  .home-advisors h2, .discussion-text h2, .home-search-input {
    font-size: 13px;
  }

  .feature-title, .list-up-button, .slider-up-button, .testimonial-text, .testimonial-information h2,
  .presentation-tag, .feature-description, .information-greet, .search-title p {
    font-size: 12px;
  }

  .feature-price-offer, .information-item-link, .information-item-description, .feature-ann-description,
  .feature-pmt, .feature-gross, .feature-sdc, .home-reclame p, .home-advisors p,
  .button-showmore, .testimonial-information p, .presentation-text-1, .presentation-text-2, .search-item-title {
    font-size: 11px;
  }

  .discussion-link, .navbar-search-input, .search-results-link a, .search-result-text, .btn-show-results, .advisors-button, .presentation-button {
    font-size: 10px;
  }

  .presentation-information {
    font-size: 9px;
  }

  .btn-show-results {
    font-size: 8px;
  }

  .information-item {
    padding: 25px;
    justify-self: center;
  }

  .presentation-button {
    padding: 19px 25px;
  }

  .presentation-text {
    text-align: center;
  }

  #slide1:checked ~ .slider-up-button[for="slide1"], #slide2:checked ~ .slider-up-button[for="slide2"], #slide3:checked ~ .slider-up-button[for="slide3"], #slide4:checked ~ .slider-up-button[for="slide4"] {
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
}

/* 0px - 575px */
@media screen and (min-width: 0px) and (max-width: 575px) {
  /* advisors section */
  .advisors-items {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0px;
    margin: 0px 10px;
  }

  .advisors-item {
    width: 300px;
    background-color: white;
    padding: 30px;
    margin: 15px 0px;
    justify-self: center;
  }

  .profile-avatar {
    height: 75px;
    width: 100px;
    margin-right: 49px;
    background-color: #C4C4C4;
    border-radius: 50%;
  }

  .discussion-user-name, .discussion-user-data {
    margin-right: 5px;
  }

  .list-up-button, .slider-up-button {
    padding: 0;
    margin: 0 10px;
  }

  #list1:checked ~ .list-up-button[for="list1"], #list2:checked ~ .list-up-button[for="list2"],
  #list3:checked ~ .list-up-button[for="list3"], #list4:checked ~ .list-up-button[for="list4"] {
    padding: 10px 20px;
  }

  .explore-items {
    padding: 0px;
  }

  .bizben-blog p, .discussion-blog p {
    font-size: 13px;
    color: #696969;
  }

  .explore-show:after, .explore-show:before {
    height: 35%;
  }

  .discussion-img {
    height: 225px;
  }

  .profile-stat {
    justify-content: initial;
  }

  /* bizben and discussion section */
  .home-bizben-discussion-blog {
    padding: 0px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .discussion-items {
    width: 100% !important;
  }

  /* feature section */
  .feature-img {
    height: 13vh;
  }

  .feature-button-forsale, .feature-button-fasttrack, .feature-button-prosell {
    font-size: 7px;
  }

  .feature-description p {
    margin-right: 25px;
  }

  .feature-items {
    width: 100% !important;
  }

  .testimonial-text, .advisors-description {
    padding: 30px;
  }

  .home-reclame {
    flex: initial;
    padding: 35px;
    text-align: center;
  }

  .home-search, .search, .presentation-information, .home-explore, .navbar-search {
    display: none;
  }

  .presentation-buyer {
    padding-right: 0px;
  }

  .bizben-blog, .discussion-blog, .home-advisors, .home-explore, .feature-slider .carousel__viewport,
  .presentation-text, .home-testimonial {
    padding: 35px 0;
  }

  .information {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .information-item {
    margin: 15px;
  }

  .wrapper {
    padding: 0 25px !important;
  }

  .home-inf, .home-features, .information, .main-home {
    padding: 25px;
  }

  .home-content h1 {
    font-size: 38px;
  }

  .information-title {
    font-size: 28px;
  }

  .explore-title h1, .bizben-blog h1, .discussion-blog h1, .testimonial-title h1, .advisors-title, .presentation-title, .feature-title h3, .home-reclame h1 {
    font-size: 22px;
  }

  .information-text, .home-text-p {
    font-size: 15px;
  }

  .explore-show p, .explore-text, .information-item-title {
    font-size: 14px;
  }

  .home-advisors h2, .discussion-text h2, .home-search-input {
    font-size: 13px;
  }

  .feature-title, .list-up-button, .slider-up-button, .testimonial-text, .testimonial-information h2,
  .presentation-tag, .feature-description, .information-greet, .search-title p {
    font-size: 12px;
  }

  .feature-price-offer, .information-item-link, .information-item-description, .feature-ann-description,
  .feature-pmt, .feature-gross, .feature-sdc, .home-reclame p, .home-advisors p,
  .button-showmore, .testimonial-information p, .presentation-text-1, .presentation-text-2, .search-item-title {
    font-size: 11px;
  }

  .discussion-link, .navbar-search-input, .search-results-link a, .search-result-text, .btn-show-results, .advisors-button, .presentation-button {
    font-size: 10px;
  }

  .presentation-information {
    font-size: 9px;
  }

  .btn-show-results {
    font-size: 8px;
  }

  .information-item {
    padding: 25px;
    justify-self: center;
  }

  .presentation-button {
    padding: 19px 25px;
  }

  .presentation-text {
    text-align: center;
  }

  #slide1:checked ~ .slider-up-button[for="slide1"], #slide2:checked ~ .slider-up-button[for="slide2"], #slide3:checked ~ .slider-up-button[for="slide3"], #slide4:checked ~ .slider-up-button[for="slide4"] {
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
}

/* 400px - 575px feature img */
@media screen and (min-width: 400px) and (max-width: 575px) {
  .feature-img {
    height: 20vh;
  }
}

/* 725px - 799px feature img */
@media screen and (min-width: 725px) and (max-width: 799px) {
  .feature-img {
    height: 22vh;
  }
}
</style>