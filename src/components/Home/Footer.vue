<template>
  <div class="footer-up">
    <div class="footer-contact">
      <h2>Contact Us</h2>
      <ol>
        <li class="footer-nav-1-item" v-for="link in footer_nav_1" :key="link.id">
          <img :src="link.img"/>
          <p>{{ link.text }}</p>
        </li>
      </ol>
      <ol class="footer_social-buttons">
        <li class="footer_social-button-item" v-for="link in footer_social" :key="link.id" :style="link.style">
          <button><img :src="link.img"/></button>
        </li>
      </ol>
    </div>
    <div class="footer-nav">
      <div class="footer-nav-content">
        <h2>Site Navigation</h2>
        <div class="footer-nav-items">
          <ol class="footer-nav-item">
            <li v-for="link in footer_nav_2" :key="link.id">
              <a>{{ link.link }}</a>
            </li>
          </ol>
          <ol class="footer-nav-item">
            <li v-for="link in footer_nav_3" :key="link.id">
              <a>{{ link.link }}</a>
            </li>
          </ol>
          <ol class="footer-nav-item">
            <li v-for="link in footer_nav_4" :key="link.id">
              <a>{{ link.link }}</a>
            </li>
          </ol>
        </div>
      </div>
      <div class="footer-subscribe">
        <h2>Subscribe to Our Weekly Newsletter</h2>
        <p>New tips, articles and events for buyers, sellers, agents and brokers.</p>
        <div class="footer-subscribe-email">
          <input class="subscribe-input" type="email" placeholder="Enter your email"/>
          <button class="subscribe-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M19.8059 0.449983C19.7717 0.402375 19.7341 0.358582 19.6936 0.317536C19.6918 0.315552 19.6903 0.313416 19.6883 0.311585C19.6866 0.309907 19.6846 0.308381 19.6829 0.306702C19.4566 0.0827029 19.1419 -0.0390625 18.7775 -0.0390625C18.5707 -0.0390625 18.3487 7.82311e-08 18.1178 0.0770571L1.1215 5.74235C0.222297 6.04219 0.0584177 6.56557 0.04087 6.85075C0.0231698 7.13609 0.121284 7.67564 0.976388 8.08397L5.24428 10.1222L3.33433 14.8386C3.3296 14.85 3.32533 14.8616 3.32152 14.8732C3.10927 15.51 3.19472 16.0825 3.5562 16.4438C3.78706 16.6747 4.10399 16.7929 4.46883 16.7929C4.67513 16.7929 4.89668 16.7551 5.12663 16.6785C5.13838 16.6745 5.14983 16.6704 5.16127 16.6657L9.87777 14.7557L11.9159 19.0235C12.3054 19.8391 12.8189 19.961 13.0904 19.961C13.3328 19.961 13.9319 19.8554 14.2575 18.8784L19.923 1.88202C20.1096 1.32218 20.0681 0.8136 19.8059 0.449983V0.449983ZM1.30811 6.92934C1.3545 6.90584 1.41523 6.8799 1.49214 6.85426L17.7295 1.44165L8.56887 10.6024C8.2347 10.3214 7.88528 10.0849 7.55385 9.92663L1.4813 7.02638C1.40821 6.99144 1.3513 6.95833 1.30811 6.92934V6.92934ZM4.73998 15.5721C4.5378 15.6369 4.4232 15.6258 4.38658 15.6134C4.37422 15.5767 4.36308 15.4622 4.42793 15.26L6.3037 10.6282L7.04879 10.9842C7.75802 11.3228 8.67706 12.242 9.0158 12.9511L9.37179 13.6963L4.73998 15.5721ZM13.1458 18.5079C13.1201 18.5849 13.0942 18.6455 13.0707 18.6919C13.0415 18.6487 13.0083 18.5918 12.9733 18.5184L10.0732 12.446C9.915 12.1146 9.67849 11.7653 9.39743 11.431L18.5584 2.27021L13.1458 18.5079Z"
                  fill="white"/>
            </svg>
          </button>
        </div>
        <p>100% Privacy. No spam ever.</p>
      </div>
    </div>
  </div>
  <div class="footer-down">
    <div class="footer-down-left-side">
      <div class="footer-logo">
        <img :src=footer_logo/>
        <p>© 2022</p>
      </div>
    </div>
    <div class="footer-policy">
      <ol class="policy-items">
        <li class="policy-item" v-for="link in policy_item" :key="link.id" :style="link.style">
          <a>{{ link.link }}</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  data() {
    return {
      footer_logo: require("@/assets/BizBenLogoWhite2.png"),
      footer_nav_1: [
        {
          id: 1,
          img: require("@/assets/locationimg.png"),
          text: "7172 Regional St. #364\n" +
              "Dublin, CA 94568"
        },
        {
          id: 2,
          img: require("@/assets/telephoneimg.png"),
          text: "(888) 212-4747"
        },
        {
          id: 3,
          img: require("@/assets/emailimg.png"),
          text: "info@bizben.com"
        },
      ],
      footer_social: [
        {
          id: 1,
          img: require("@/assets/facebookimg.png"),
          style: "margin-right:37px"
        },
        {
          id: 2,
          img: require("@/assets/twitterimg.png"),
          style: "margin-right:37px"
        },
        {
          id: 3,
          img: require("@/assets/instimg.png"),
          style: "margin-right:37px"
        },
        {
          id: 4,
          img: require("@/assets/inimg.png")
        },
      ],
      footer_nav_2: [
        {
          id: 1,
          link: "Advertising Programs"
        },
        {
          id: 2,
          link: "Place A For Sale Listing"
        },
        {
          id: 3,
          link: "Place A Wanted Listing"
        },
        {
          id: 4,
          link: "Listing Policy"
        },
        {
          id: 5,
          link: "Guidelines"
        },
        {
          id: 6,
          link: "Advertising Policy"
        }
      ],
      footer_nav_3: [
        {
          id: 1,
          link: "Listings"
        },
        {
          id: 2,
          link: "Resources"
        },
        {
          id: 3,
          link: "Glossary"
        },
        {
          id: 4,
          link: "Buy A Business"
        },
        {
          id: 5,
          link: "Sell A Business"
        },
        {
          id: 6,
          link: "Value A Business"
        },
        {
          id: 7,
          link: "Due Diligence"
        },
        {
          id: 8,
          link: "Financing"
        },
      ],
      footer_nav_4: [
        {
          id: 1,
          link: "Blog"
        },
        {
          id: 2,
          link: "Discussions"
        },
        {
          id: 3,
          link: "Podcast"
        },
        {
          id: 4,
          link: "New User Register"
        },
        {
          id: 5,
          link: "Email Privacy Policy"
        },
        {
          id: 6,
          link: "Terms of Use"
        }
      ],
      policy_item: [
        {
          id: 1,
          link: "SiteMap",
          style: "margin-right:21px"
        },
        {
          id: 2,
          link: "Privacy Policies",
          style: "margin-right:21px"
        },
        {
          id: 3,
          link: "Cookie Policy"
        }
      ]
    }
  },
}
</script>

<style>
/* footer section */
.footer-up, .footer-down {
  color: white;
}

/* footer up blog */
.footer-up {
  display: flex;
  border-bottom: 1px solid #b7b5b5;
  flex-wrap: wrap;
  color: white;
}

.footer-up h2, .footer-down h2 {
  font-size: 16px;
}

.footer-up a, .footer-down a {
  font-size: 14px;
  line-height: 40px;
}

/* footer nav blog */
.footer-nav {
  display: flex;
  width: 100%;
  background-color: #0D263B;
  padding-left: 50px;
  padding-right: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  flex: 1 1 66%;
}

/* footer contact blog */
.footer-contact {
  background-color: #112E46;
  padding-left: 200px;
  padding-right: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  flex: 1 1 33%;
}

.footer-contact h2 {
  margin-bottom: 29px;
}

.footer-nav-1-item {
  display: flex;
  margin: 20px 0;
}

.footer-nav-1-item img {
  height: 100%;
  margin-right: 22px;
}

.footer_social-buttons {
  display: flex;
  width: 100%;
  margin-top: 27px;
}

.footer_social-buttons button {
  width: 15px;
  height: 15px;
  border: none;
  background-color: transparent;
  padding: 12px;
  transition: 0.5s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_social-buttons button:hover {
  background-color: rgba(255, 255, 255, 30%);
  padding: 12px;
  transition: 0.5s;
}

.footer-nav-items {
  display: flex;
}

.footer-nav-item {
  margin-right: 70px;
  margin-top: 25px;
}

.footer-subscribe {
  width: 100%;
}

.footer-subscribe p {
  font-size: 14px;
  margin-top: 32px;
}

.footer-subscribe input {
  width: 100%;
  padding: 19px 32px;
  border-radius: 4px;
  border: none;
}

.footer-subscribe-email {
  position: relative;
  margin-top: 32px;
}

.subscribe-input {

}

.subscribe-button {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #184997;
  border-radius: 4px;
}

.footer-nav-content {
  width: 100%;
}

/* footer down blog */
.footer-down {
  display: flex;
  flex-wrap: wrap;
  color: white;
}

/* footer logo blog */
.footer-down-left-side {
  background-color: #112E46;
  padding-left: 200px;
  padding-right: 100px;
  padding-top: 44px;
  padding-bottom: 44px;
  flex: 1 1 33%;
}

.footer-logo {
  align-items: center;
}

.footer-logo p {
  display: inline;
  margin-left: 25px;
}

/* footer policy blog */
.footer-policy {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: #0D263B;
  padding-left: 50px;
  padding-right: 200px;
  padding-top: 44px;
  padding-bottom: 44px;
  flex: 1 1 66%;
}

.policy-items {
  display: flex;
}
</style>