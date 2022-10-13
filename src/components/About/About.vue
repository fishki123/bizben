<template>
  <div>
    <div class="about_slider">
      <h1>About us</h1>
      <p>Home / About Us</p>
    </div>
    <div class="about_content">
      <div class="about_content_title">
        <h2>Mission and Vision</h2>
        <p>Our commitment to you</p>
      </div>
      <div class="about_content_inf">
        <div class="about_content_inf_img">
          <img :src="aboutimg" title="about us" alt="about_us"/>
        </div>
        <div class="about_content_inf_text">
          <p>
            <span>With 500 new and refreshed listings added daily, we’re committed to helping buyers and
              sellers across the US get deals done - but we’re so much more than a classifieds website.</span>
          </p>
          <p>
            BizBen is the only comprehensive nationwide business listing service, and we built our business exchange
            network to educate, support, and connect buyers, sellers, brokers, agents, and advisors.
          </p>
          <p>
            Our proven platform, trusted for over 25 years, provides everything buyers and sellers need to complete a
            successful business transaction. Users can publish ‘wanted to buy’ and ‘for sale’ postings to our site,
            which gets thousands of visits per day, and that’s just the beginning.
          </p>
          <p>
            Members of the BizBen network also have access to tons of educational content, including blog and discussion
            posts, podcasts, expert write-ups and interviews, and more. We also offer a broad range of expert advisory
            services that cater to all experience levels, from first-time business buyers and sellers to serial
            entrepreneurs.
          </p>
          <p>
            Our vast network of trusted advisors makes it easy for buyers and sellers to connect with the right people
            at the right stage of the transaction. Above all else, our responsive team of experts is invested in your
            success. We’re here to help every step of the way, and our goal is to make sure everyone we serve is fully
            satisfied with the outcome of their transaction.
          </p>
          <div class="about_content_inf_total">
            <div class="total" v-for="total in totals" :key="total.id">
              <div class="total_number">
                <h2>{{ total.number }}</h2>
              </div>
              <div class="total_name_number">
                <p>{{ total.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- features section -->
    <section class="home-features about-features">
      <div class="feature-title">
        <h3>Discover Our Featured Listings</h3>
      </div>
      <div class="feature-description">
        <p style="color: #696969">What’s hot and new on the BizBen listing network.</p>
        <a href="#" style="color: #184997;border-bottom: 2px solid #184997;padding-bottom: 5px">Want to get
          featured?</a>
      </div>
      <div class="feature-slider">
        <feature-item/>
      </div>
    </section>
    <!-- explore section -->
    <section class="home-explore">
      <div class="explore-title">
        <h1>Explore Listings</h1>
        <explore-item/>
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
  </div>
</template>

<script>
import aboutimg from "../../assets/aboutinfimg.jpg";
import BizbenItem from "@/components/Home/Bizben";
import DiscussionItem from "@/components/Home/Discussion";
import ExploreItem from "@/components/Home/Explore";
import TestimonialItem from "@/components/Home/Testimonials";
import FeatureItem from "@/components/Home/Features";

export default {
  name: "AboutItem",
  components: {
    BizbenItem,
    DiscussionItem,
    ExploreItem,
    FeatureItem,
    TestimonialItem,
  },
  data() {
    return {
      aboutimg: aboutimg,
      totals: [
        {
          id: 1,
          number: "8,000+",
          name: "POSTINGS"
        },
        {
          id: 2,
          number: "2,500+",
          name: "RESOURCES"
        },
        {
          id: 3,
          number: "500+",
          name: "NEW & REFRESHED DAILY LISTINGS"
        },
      ]
    }
  }
}
</script>

<style>
.about_slider {
  padding: 150px 0px;
  text-align: center;
  background-image: url("../../assets/aboutusslider.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: white;
}

.about_content {
  padding: 150px 0px;
}

.about_content_title {
  text-align: center;
  padding-bottom: 100px;
}

.about_content_title p {
  font-size: 14px;
  color: #696969;
}

.about_content_title h2 {
  color: #0D263B;
  font-size: 30px;
}

.about_slider:after {
  position: absolute;
  background: rgba(0, 0, 0, 40%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
}

.about_slider h1 {
  font-size: 30px;
}

.about_slider p {
  font-size: 14px;
  margin-top: 10px;
}

.about_content_inf {
  padding-right: 75px;
  padding-left: 75px;
  display: flex;
}

.about_content_inf_img {
  padding-left: 150px;
  padding-right: 100px;
}

.about_content_inf_text {
  padding-right: 150px;
  padding-left: 50px;
  font-size: 14px;
  color: #696969;
  line-height: 24px;
}

.about_content_inf_text span {
  color: #0D263B;
  font-weight: bold;
}

.about_content_inf_text p {
  margin-top: 15px;
  margin-bottom: 15px;
}

.about_content_inf_total {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 50px;
}

.total {
  flex: 0 0 33%;
}

.total_number {
  font-size: 30px;
  color: #184997;
}

.total_name_number {
  font-size: 14px;
  line-height: 24px;
  color: #696969;
  margin-top: 15px;
}

.about-features {
  background-color: #F6F8F9;
}

/* 1600px - 1850px */
@media screen and (min-width: 1600px) and (max-width: 1850px) {
  .about_content_inf_img {
    padding: 0 50px;
  }

  .about_content_inf_text {
    padding: 0 50px;
  }
}

/* 1250px - 1599px */
@media screen and (min-width: 1250px) and (max-width: 1599px) {
  .about_content {
    padding: 75px 0;
  }

  .about_content_inf_img {
    padding: 0 50px;
  }

  .about_content_inf_text {
    padding: 0 50px;
    font-size: 13px;
  }

  .about_content_inf_img img {
    max-width: 400px;
    height: 100%;
  }

  .about_content_inf_total {
    padding-top: 25px;
  }

  .total_number {
    font-size: 28px;
  }

  .total_name_number {
    font-size: 13px;
  }

  .about_content_title {
    padding-bottom: 50px;
  }
}

/* 600px - 1249px */
@media screen and (min-width: 600px) and (max-width: 1249px) {
  .about_content {
    padding: 50px 0;
  }

  .about_content_inf {
    display: initial;
  }

  .about_content_inf_img {
    padding: 0 50px;
    text-align: center;
  }

  .about_content_inf_text {
    padding: 25px 50px;
  }

  .about_content_inf_img img {
    max-width: 400px;
    height: 100%;
  }

  .about_content_inf_total {
    padding-top: 50px;
  }

  .about_slider p, .about_content_inf_text, .total_name_number, .about_content_title p {
    font-size: 13px;
  }

  .about_content_title h2, .total_number, .about_slider h1 {
    font-size: 28px;
  }

  .about_content_title {
    padding-bottom: 0px;
  }
}

/* 0px - 599px */
@media screen and (min-width: 0px) and (max-width: 599px) {
  .about_content {
    padding: 50px 0;
  }

  .about_content_inf {
    display: initial;
  }

  .about_content_inf_img {
    padding: 0 0;
    text-align: center;
  }

  .about_content_inf_text {
    padding: 25px 50px;
  }

  .about_slider p, .about_content_inf_text, .total_name_number, .about_content_title p {
    font-size: 12px;
  }

  .about_content_title h2, .total_number, .about_slider h1 {
    font-size: 26px;
  }

  .about_content_inf_img img {
    max-width: 300px;
    height: 100%;
  }

  .about_content_inf_total {
    padding-top: 0px;
    display: initial;
  }

  .about_content_title {
    padding-bottom: 0px;
  }

  .total {
    padding-top: 25px;
  }
}
</style>