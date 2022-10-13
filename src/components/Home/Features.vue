<template>
  <Carousel :items-to-show="4">
    <Slide class="feature-items" v-for="link in feature_item" :key="link.id" :style="link.style">
      <div class="feature-item">
        <div class="feature-img">
          <div class="feature-buttons-img">
            <button class="feature-button-prosell">
              ProSell
            </button>
            <button class="feature-button-fasttrack">
              Fast Track
            </button>
            <button class="feature-button-forsale">
              For sale
            </button>
          </div>
        </div>
        <div class="feature-content">
          <div class="feature-title">
            <p>{{ link.title }}</p>
          </div>
          <div class="feature-ann">
            <div class="feature-sdc">
              <p style="padding-bottom: 9px;color: #0D263B;font-weight: bold">Annual SDC</p>
              <p style="color: #696969">{{ link.ann_sdc }}</p>
            </div>
            <div class="feature-gross">
              <p style="padding-bottom: 9px;color: #0D263B;font-weight: bold">Annual Gross</p>
              <p style="color: #696969">{{ link.ann_gross }}</p>
            </div>
            <div class="feature-pmt">
              <p style="padding-bottom: 9px;color: #0D263B;font-weight: bold">Down Pmt</p>
              <p style="color: #696969">Email/Call</p>
            </div>
          </div>
          <div class="feature-ann-description">
            <p style="padding-bottom: 9px; color: #0D263B;font-weight: bold">Description</p>
            <p style="padding-bottom:18px;color: #696969">{{ link.description }}</p>
          </div>
        </div>
        <div style="border-top: #E6E9EC 1px solid" class="feature-price">
          <div style="padding:20px" class="feature-price-offer">
            <p class="feature-price-text">${{ link.price }}</p>
            <div class="feature-details">
              <p style="color: #696969;margin-right: 6px;border-bottom: 1px #696969 solid">Details</p>
              <div class="feature-details-arrow" style="padding-right: 16px">
                <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M19.6508 2.31454L16.6308 0.154296C16.0836 -0.237068 15.3273 0.161455 15.3273 0.840034V2.16128H0.826946C0.370282 2.16128 0 2.53693 0 3.00034C0 3.46374 0.370282 3.83933 0.826946 3.83933H15.3272V5.16052C15.3272 5.84358 16.0875 6.23466 16.6306 5.84626L19.6506 3.68602C20.1118 3.35635 20.1211 2.6517 19.6508 2.31454Z"
                      fill="#696969"/>
                </svg>
              </div>
              <button class="feature-details-button">
                <svg width="15" height="15" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M13.7574 1.36523C12.1262 -0.187034 9.47106 -0.187034 7.83932 1.36488L7.50003 1.68715L7.16109 1.36503C5.52917 -0.187092 2.87443 -0.186917 1.24251 1.36503C0.44124 2.12716 0 3.13804 0 4.21119C0 5.28468 0.44124 6.2954 1.24263 7.05785L7.13771 12.6545C7.23911 12.751 7.36966 12.7991 7.5 12.7991C7.63034 12.7991 7.76071 12.7508 7.86229 12.6543L13.7574 7.05785C14.5586 6.29557 15 5.28471 15 4.21136C15 3.13804 14.5586 2.12733 13.7574 1.36523ZM13.0321 6.29469L7.5 11.547L1.96808 6.29487C1.37771 5.73348 1.05264 4.99347 1.05264 4.21136C1.05264 3.42926 1.37771 2.68925 1.96808 2.12786C2.58387 1.54189 3.39264 1.2491 4.20158 1.2491C5.0107 1.2491 5.81982 1.54224 6.43562 2.12821L7.13736 2.79471C7.34051 2.98787 7.65929 2.98787 7.86246 2.79471L8.56438 2.12786C9.79614 0.956101 11.8002 0.956101 13.0319 2.12786C13.6221 2.68928 13.9474 3.42926 13.9474 4.21136C13.9474 4.99347 13.6221 5.73331 13.0321 6.29469Z"
                      class="hearth" fill="#696969"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination/>
    </template>
  </Carousel>
</template>

<script>
import {Carousel, Slide, Pagination} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "FeatureItem",
  components: {Carousel, Slide, Pagination},
  data() {
    return {
      feature_item: [
        {
          id: 1,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "166,143",
          ann_gross: "224,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "149,000"
        },
        {
          id: 2,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "120,000",
          ann_gross: "190,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "325,000"
        },
        {
          id: 3,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "120,000",
          ann_gross: "190,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "169,000"
        },
        {
          id: 4,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "120,000",
          ann_gross: "190,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "149,000"
        },
        {
          id: 5,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "120,000",
          ann_gross: "190,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "149,000"
        },
        {
          id: 6,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "166,143",
          ann_gross: "224,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "149,000"
        },
        {
          id: 7,
          title: "Acupuncture Practice",
          style: "padding: 0 15px",
          ann_sdc: "120,000",
          ann_gross: "190,000",
          description: "Lorem ipsum dolor sit amet, consectetur \n" +
              "adipiscing elit, sed do eiusmod tempor incidi \n" +
              "dunt ut labore et dolore magna aliqua. Ut enim \n" +
              "ad minim veniam, quis nostrud exercitation \n" +
              "ullamco laboris nisi ut aliquip ex ea commodo \n" +
              "consequat. Duis aute irure dolor in reprehen \n" +
              "derit in voluptate velit esse cilum...",
          price: "169,000"
        },
      ]
    }
  }
}
</script>
<style>
.feature-item {
  border-radius: 4px;
  border: 1px solid #E6E9EC;
  transition: 0.5s all;
}

.feature-content {
  padding: 20px;
}

.feature-ann {
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}

.feature-price-offer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.feature-price-text {
  color: #0D263B;
  font-weight: bold
}

.feature-details {
  display: flex;
  align-items: center;
}

/* img */
.feature-img {
  background-image: url("../../assets/featureimg.png");
  background-size: 100% 100%;
  position: relative;
  transition: 0.5s all;
  width: 100%;
  height: 25vh;
}

.feature-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0%);
  z-index: 2;
  transition: 0.5s all;
}

.feature-img img {
  width: 100%;
  transition: 0.5s all;
}

/* buttons on img */
.feature-buttons-img {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 3;
}

.feature-button-prosell {
  margin-right: 10px;
  padding: 5px 10px;
  color: white;
  background-color: #12C3A4;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
}

.feature-button-fasttrack {
  padding: 5px 10px;
  color: white;
  background-color: #1967D2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 10px;
}

.feature-button-forsale {
  float: right;
  padding: 5px 10px;
  color: white;
  background-color: #0D263B;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 10px;
  cursor: pointer;
}

/* button */
.feature-details-button {
  padding: 10px;
  border-radius: 50%;
  border: none;
  display: flex;
  cursor: pointer;
  transition: 0.5s all;
}

/* hover */
.feature-item:hover {
  box-shadow: 0px 0px 20px 5px rgb(0 0 0 / 10%);
  transition: 0.5s all;
}

.feature-item:hover .feature-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*background: rgba(13,38,59,60%);*/
  background: rgba(13, 38, 59, 60%);
  z-index: 2;
  transition: 0.5s all;
  border-radius: 4px;
}

.feature-details-button:hover {
  background-color: red;
  transition: 0.5s all;
}

.feature-details-button:hover .hearth {
  fill: white;
}

.feature-ann-description, .feature-pmt {
  font-size: 14px;
}

.feature-gross, .feature-sdc {
  padding-right: 34px;
  font-size: 14px;
}

.feature-title {
  font-size: 16px;
  font-weight: bold;
  color: #0D263B;
  padding-bottom: 30px
}
</style>