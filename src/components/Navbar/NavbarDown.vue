<template>
  <div class="navbar-item-2">
    <!-- left down-navbar content -->
    <div class="navbar-content-1" id="menu-nav">
      <ol class="menu">
        <li class="menu-item" v-for="link in links_down_nav" :key="link.id" :style="link.style_div">
          <div class="dropdown">
            <button class="btn menu-link" v-on:click="dropdownLeftMenu(link.id)">
              <img :src="link.icon" class="icon" :alt="link.alt" :title="link.title"/>
              <span class="menu-text" :style="link.style_span">{{ link.text }}</span>
              <img :src="link.vector" :alt="link.alt" :title="link.title" :style="link.style_content"
                   class="dropdown-vector"/>
            </button>
            <div class="dropdown-content" v-if='link.isHidden' :style="link.style_content">
              <ol class="dropdown-menu">
                <li class="dropdown-menu-item" v-for="link in link.links" :key="link.id">
                  <a class="dropdown-text" :style="link.style">
                    <img :src="link.icon" :alt="link.alt" :title="link.title"/>
                    <span>{{ link.text }}</span>
                  </a>
                </li>
              </ol>
              <div class="attribute-content">
                <div class="attribute-title">
                  <img :src="attribute_icon" :alt="link.alt" :title="link.title"/>
                  <p style="padding-left:15px">Attributes</p>
                </div>
                <ol class="attribute-items">
                  <li class="attribute-item" v-for="link in link.attributes" :key="link.id" :style="link.style">
                    <input type="checkbox" class="checkbox-attribute" :id="link.check"/>
                    <label class="checkbox-text" :for="link.check">{{ link.text }}</label>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </li>
        <li class="menu-item">
          <a class="btn menu-link" href="/About" @click="$router.push('/About')">
            <img :src="about_icon" class="icon" :alt="about_alt" :title="about_title"/>
            <span class="menu-text" :style="about_style">about us</span>
          </a>
        </li>
      </ol>
    </div>
    <!-- right down-navbar user content -->
    <div class="navbar-content-2" id="menu-user">
      <ol class="menu">
        <li class="menu-item" v-for="link in links_user" :key="link.id" :style="link.style_div">
          <div class="dropdown">
            <button class="btn menu-link" :style="link.style_btn" v-on:click="dropdownMenuUser(link.id)">
              <img :src="link.icon" class="icon"/>
              <span class="menu-text" :style="link.style_span">{{ link.text }}</span>
              <img :src="link.vector" class="dropdown-vector"/>
            </button>
            <div class="dropdown-content" v-if='link.isHidden' :style="link.style_content">
              <ol class="dropdown-menu">
                <li class="dropdown-menu-item" v-for="link in link.links" :key="link.id">
                  <a class="dropdown-text" :style="link.style" :href="link.link" @click="$router.push(link.link)">
                    <span>{{ link.text }}</span>
                    <img :src="link.icon" :style="link.style_img"/>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import attribute_icon from "@/assets/attributes.png";

export default {
  name: "NavbarDownItem",
  data() {
    return {
      attribute_icon: attribute_icon,
      about_icon: require('@/assets/aboutus.png'),
      about_style: "font-weight: bold;text-transform: uppercase",
      about_alt: "about us",
      about_title: "about us",
      links_down_nav: [
        {
          id: 1,
          text: "Search Businesses",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/search-square.png'),
          vector: require('@/assets/Vector.png'),
          alt: "Search Businesses",
          title: "Search Businesses",
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
        {
          id: 2,
          text: "Advertising",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/invitation.png'),
          vector: require('@/assets/Vector.png'),
          alt: "Advertising",
          title: "Advertising",
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
        {
          id: 3,
          text: "Resources",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/layout-module.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          alt: "Resources",
          title: "Resources",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
        {
          id: 4,
          text: "Blog",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/pencil-write.png'),
          vector: require('@/assets/Vector.png'),
          alt: "Blog",
          title: "Blog",
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
        {
          id: 5,
          text: "Discussions",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/conversation-chat-text.png'),
          vector: require('@/assets/Vector.png'),
          alt: "Discussions",
          title: "Discussions",
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
        {
          id: 6,
          text: "Events",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/events.png'),
          vector: require('@/assets/Vector.png'),
          alt: "Events",
          title: "Events",
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Business Resales",
              title: "Business Resales",
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "Franchise Resales",
              title: "Franchise Resales",
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec",
              alt: "New Franchises",
              title: "New Franchises",
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
              alt: "New Opportunities",
              title: "New Opportunities",
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              style: "border-bottom:1px solid #E6E9EC",
              check: "One"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Two"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Three"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Four"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Five"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "Six"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Seven"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "Eight"
            },
          ]
        },
      ],
      links_user: [
        {
          id: 1,
          text: "My BizBen",
          style_span: "",
          icon: require('@/assets/loginuser.png'),
          vector: require('@/assets/Vector.png'),
          alt: "My BizBen",
          title: "My BizBen",
          style_div: "padding-right:21px",
          style_content: "min-height:auto;padding: 0px 28px",
          isHidden: false,
          links: [
            {
              id: 1,
              text: "login",
              style: "border-bottom:1px solid #e6e9ec;font-size:13px;padding:10px 0;line-height:40px;text-transform:uppercase;display:flex;justify-content:space-between",
              icon: require('@/assets/Vector2.png'),
              style_img: "padding:0;",
              alt: "login",
              title: "login",
              link: "/Account"
            },
            {
              id: 2,
              text: "register",
              style: "border-bottom:1px solid #e6e9ec;font-size:13px;padding:10px 0;line-height:40px;text-transform:uppercase;display:flex;justify-content:space-between",
              icon: require('@/assets/Vector2.png'),
              alt: "register",
              title: "register",
              style_img: "padding:0;",
              link: "/Account"
            },
            {
              id: 3,
              text: "dashboard",
              style: "border-bottom:1px solid #e6e9ec;font-size:13px;padding:10px 0;line-height:40px;text-transform:uppercase;display:flex;justify-content:space-between",
              icon: require('@/assets/Vector2.png'),
              alt: "dashboard",
              title: "dashboard",
              style_img: "padding:0;"
            },
            {
              id: 4,
              text: "saved listings",
              style: "border-bottom:1px solid #e6e9ec;font-size:13px;padding:10px 0;line-height:40px;text-transform:uppercase;display:flex;justify-content:space-between",
              icon: require('@/assets/Vector2.png'),
              alt: "saved listings",
              title: "saved listings",
              style_img: "padding:0;"
            },
            {
              id: 5,
              text: "saved searches",
              style: "font-size:13px;padding:10px 0;line-height:40px;text-transform:uppercase;display:flex;justify-content:space-between",
              icon: require('@/assets/Vector2.png'),
              alt: "saved searches",
              title: "saved searches",
              style_img: "padding:0;"
            },
          ]
        },
        {
          id: 2,
          text: "Create listing",
          style_span: "font-weight: bold;text-transform: uppercase;color:#184997",
          icon: require('@/assets/createlisting.png'),
          alt: "Create listing",
          title: "Create listing",
          style_btn: "border: 1px solid #E6E9EC;padding-top:15px;padding-bottom:15px;padding-left:19px;padding-right:19px;border-radius:3px;",
          style_content: "display:none"
        }
      ]
    }
  },
  methods: {
    dropdownMenuUser(id) {
      for (let el in this.links_user) {
        if (this.links_user[el].id === id) {
          if (this.links_user[el].isHidden === false) {
            this.links_user[el].isHidden = true;
          } else {
            this.links_user[el].isHidden = false
          }
        }
      }
    },
    dropdownLeftMenu(id) {
      for (let el in this.links_down_nav) {
        if (this.links_down_nav[el].id === id) {
          if (this.links_down_nav[el].isHidden === false) {
            this.links_down_nav[el].isHidden = true;
          } else {
            this.links_down_nav[el].isHidden = false
          }
        }
      }
    }
  }
}
</script>