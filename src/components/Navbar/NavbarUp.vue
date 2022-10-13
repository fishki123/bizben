<template>
  <div class="navbar-item-1">
    <div class="navbar-content-1">
      <div class="navbar-logo">
        <img @click="$router.push('/')" :src="logo" alt="bizben" title="bizben"/>
      </div>
      <div class="navbar-search">
        <svg width="17" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path
              d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z"
              fill="#8D8D8D"/>
          <path
              d="M15.8095 14.8898L12.0805 11.1608C11.8264 10.9067 11.4149 10.9067 11.1608 11.1608C10.9067 11.4147 10.9067 11.8266 11.1608 12.0805L14.8898 15.8095C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8095 15.8095C16.0636 15.5556 16.0636 15.1437 15.8095 14.8898Z"
              fill="#8D8D8D"/>
        </svg>
        <input class="navbar-search-input" type="search"
               placeholder="What type or location of business do you want to buy or sell?">
        <button type="submit" class="btn-show-results">
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
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
    </div>
    <div class="navbar-content-2">
      <ol class="menu">
        <li class="menu-item" v-for="link in links_up_nav" :key="link.id" :style="link.style_div">
          <a class="menu-link" :style="link.style_text">
            <img :src="link.icon" :alt="link.alt" :title="link.title"/>
            <span class="menu-text">{{ link.text }}</span>
          </a>
        </li>
      </ol>
    </div>
    <BurgerMenuItem/>
  </div>
</template>

<script>
import logo from "../../assets/BizBen Logo 2.png"
import BurgerMenuItem from "@/components/Home/BurgerMenu";

export default {
  components: {
    BurgerMenuItem
  },
  name: "NavbarUpItem",
  data() {
    return {
      logo: logo,
      links_up_nav: [
        {
          id: 1,
          text: "Can we help you?",
          icon: require('@/assets/Chat.png'),
          style_div: "padding: 0 30px;",
          style_text: "font-size:14px",
          alt: "chat",
          title: "chat"
        },
        {
          id: 2,
          text: "(888) 212-4747",
          icon: require('@/assets/Mobile.png'),
          style_text: "font-size:14px",
          alt: "mobile",
          title: "mobile"
        }
      ],
    }
  },
}
</script>