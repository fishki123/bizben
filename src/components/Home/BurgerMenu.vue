<template>
  <div class="burger-menu">
    <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox">
    <label class="m-menu__toggle" for="menu">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="butt"
           stroke-linejoin="arcs">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </label>
    <label class="m-menu__overlay" for="menu"></label>
    <div class="m-menu">
      <div class="m-menu__header">
        <label class="m-menu__toggle" for="menu">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
               stroke-linecap="butt" stroke-linejoin="arcs">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </label>
        <span>MENU</span>
      </div>
      <ul>
        <li class="burger-menu-item" v-for="item in burger_menu_item" :key="item.id">
          <label class="a-label__chevron" :for="item.id">
            <a :href="item.link" @click="$router.push(item.link)">
              <img :src="item.icon" class="icon"/>
              {{ item.text }}
            </a>
          </label>
          <input type="checkbox" :id="item.id" class="m-menu__checkbox">
          <div class="m-menu" :style="item.style_content">
            <div class="m-menu__header">
              <label class="m-menu__toggle" :for="item.id">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
                     stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>{{ item.text }} </span>
            </div>
            <ul>
              <li v-for="link in item.links" :key="link.id">
                <a :href="link.link" @click="$router.push(link.link)">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenuItem",
  data() {
    return {
      burger_menu_item: [
        {
          id: 1,
          text: "Search Businesses",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/search-square.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
        {
          id: 2,
          text: "Advertising",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/invitation.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
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
          links: [
            {
              id: 1,
              text: "Franchise Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Business Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
        {
          id: 4,
          text: "Blog",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/pencil-write.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
        {
          id: 5,
          text: "Discussions",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/conversation-chat-text.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
        {
          id: 6,
          text: "Events",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/events.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Business Resales",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 2,
              text: "Franchise Resales",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "New Franchises",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "New Opportunities",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
        {
          id: 7,
          text: "About us",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/aboutus.png'),
          vector: require('@/assets/Vector.png'),
          style_content: "display:none",
          link: "/about"
        },
        {
          id: 8,
          text: "My Bizben",
          style_span: "font-weight: bold;text-transform: uppercase",
          icon: require('@/assets/events.png'),
          vector: require('@/assets/Vector.png'),
          style_div: "padding-right:30px",
          links: [
            {
              id: 1,
              text: "Login",
              icon: require('@/assets/synchronize-arrows.png'),
              style: "border-bottom:1px solid #e6e9ec",
              link: "/Account"
            },
            {
              id: 2,
              text: "Register",
              icon: require('@/assets/franchiseresales.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 3,
              text: "Dashboard",
              icon: require('@/assets/newfranchises.png'),
              style: "border-bottom:1px solid #e6e9ec"
            },
            {
              id: 4,
              text: "Saved Listings",
              icon: require('@/assets/newooportunities.png'),
            },
            {
              id: 5,
              text: "Saved Searches",
              icon: require('@/assets/newooportunities.png'),
            },
          ],
          isHidden: false,
          attributes: [
            {
              id: 1,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "1"
            },
            {
              id: 2,
              text: "Lifestyle",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "2"
            },
            {
              id: 3,
              text: "Franchise",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "3"
            },
            {
              id: 4,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "4"
            },
            {
              id: 5,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "5"
            },
            {
              id: 6,
              text: "With Real Estate",
              attribute_check: false,
              style: "border-bottom:1px solid #E6E9EC",
              check: "6"
            },
            {
              id: 7,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "7"
            },
            {
              id: 8,
              text: "With Real Estate",
              attribute_check: false,
              style: "",
              check: "8"
            },
          ]
        },
      ],
    }
  }
}
</script>

<style>
/* burger menu */
.burger-menu {
  display: none;
}
</style>