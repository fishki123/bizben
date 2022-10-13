<template>
  <!-- navbar -->
  <div class="wrapper">
    <NavbarItem/>
  </div>
  <div class="app">
    <router-view/>
  </div>
  <div>
    <FooterItem/>
  </div>
</template>

<script>
import NavbarItem from "@/components/Navbar/Navbar";
import FooterItem from "@/components/Home/Footer";

export default {
  components: {
    FooterItem,
    NavbarItem,
  },
  data() {
    return {}
  }
}
</script>

<style>
* {
  font-family: Cerebri Sans;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  padding: 0 225px;
}

h1 {
  font-size: 60px;
  font-weight: bold;
  color: white;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

/* burger menu */
@media screen and (max-width: 1919px) {
  /* navbar */
  .navbar-content-2, .menu {
    display: none;
  }

  .navbar-content-1, .navbar-item-1 {
    flex: initial;
    flex-wrap: initial;
    width: 100%;
  }

  .navbar-search {
    margin-right: 50px;
  }

  .burger-menu {
    height: 50px;
    padding: 0 16px;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    /* fade in checked menu */
  }

  .burger-menu .m-menu__checkbox {
    display: none;
  }

  .burger-menu label.m-menu__toggle {
    cursor: pointer;
  }

  .burger-menu .m-menu {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 450px;
    width: calc(100vw - 30px);
    height: 100%;
    transform: translate3d(-450px, 0, 0);
    transition: transform 0.35s;
    z-index: 100;
    overflow: hidden;
    background-color: #fff;
  }

  .burger-menu .m-menu__overlay {
    background-color: rgba(103, 103, 103, 0.5);
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 100;
    overflow: hidden;
    display: none;
  }

  .burger-menu .m-menu__header {
    padding: 0 16px;
    height: 50px;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
  }

  .burger-menu .m-menu__header span {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
  }

  .burger-menu .m-menu .m-menu {
    -moz-transform: translate3d(480px, 0, 0);
    -o-transform: translate3d(480px, 0, 0);
    -ms-transform: translate3d(480px, 0, 0);
    -webkit-transform: translate3d(480px, 0, 0);
    transform: translate3d(480px, 0, 0);
  }

  .burger-menu .m-menu ul {
    height: 100%;
    overflow-y: auto;
  }

  .burger-menu .m-menu ul li a, nav .m-menu ul li label {
    display: block;
    text-align: left;
    padding: 0 15px;
    line-height: 47px;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
  }

  .burger-menu .a-label__chevron img {
    margin-right: 15px;
    margin-bottom: -5px;
  }

  .burger-menu .m-menu ul li label.a-label__chevron::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 10px;
    width: 10px;
    border-color: #333;
    border-style: solid;
    border-width: 1px 1px 0 0;
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 50%;
    margin-top: -5px;
    right: 16px;
  }

  .burger-menu .m-menu ul li .-invisible {
    border-bottom: 0;
  }

  .burger-menu .m-menu .m-menu label.m-menu__toggle {
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    border-bottom: 0;
    padding: 0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .burger-menu .m-menu__checkbox:checked ~ .m-menu__overlay {
    display: block;
  }

  .burger-menu .m-menu__checkbox:checked ~ .m-menu {
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

/* 1100px - 1659px */
@media screen and (min-width: 1100px) and (max-width: 1659px) {
  /* footer section */
  .footer-contact, .footer-down-left-side {
    flex: 1 1 35%;
    padding: 50px;
  }

  .footer-nav, .footer-policy {
    flex: 1 1 60%;
    padding: 50px;
  }

  .home-footer h2 {
    font-size: 15px;
  }

  .home-footer a, .home-footer {
    font-size: 13px;
  }
}

/* 800px - 1099px */
@media screen and (min-width: 800px) and (max-width: 1099px) {
  /* footer section */
  .footer-contact {
    flex: initial;
    padding: 50px;
    text-align: center;
    width: 100%;
  }

  .footer-nav-1-item, .footer_social-buttons {
    justify-content: center;
  }

  .footer-down-left-side {
    flex: 1 1 38%;
    padding: 50px;
  }

  .footer-policy {
    flex: 1 1 60%;
    padding: 50px;
  }

  .footer-nav {
    flex: initial;
    width: 100%;
    padding: 50px;
  }

  .home-footer h2 {
    font-size: 15px;
  }

  .home-footer a, .home-footer {
    font-size: 13px;
  }
}

/* 576px - 799px */
@media screen and (min-width: 576px) and (max-width: 799px) {
  /* footer section */
  .footer-contact, .footer-down-left-side {
    flex: initial;
    padding: 35px;
    width: 100%;
  }

  .footer-nav, .footer-policy {
    flex: initial;
    padding: 35px;
    text-align: center;
  }

  .footer-nav-items, .footer_down {
    display: initial;
    flex-wrap: initial;
  }

  .footer-nav-item {
    margin-right: 0px;
  }

  .footer-logo, .footer-policy, .footer_social-buttons, .footer-nav-1-item, .footer-contact {
    text-align: center;
    justify-content: center;
  }

  .home-footer h2 {
    font-size: 13px;
  }

  .home-footer a, .home-footer {
    font-size: 11px;
  }
}

/* 0px - 575px */
@media screen and (min-width: 0px) and (max-width: 575px) {
  /* footer section */
  .footer-contact, .footer-down-left-side {
    flex: initial;
    padding: 35px;
    width: 100%;
  }

  .footer-nav, .footer-policy {
    flex: initial;
    padding: 35px;
    text-align: center;
  }

  .footer-nav-items, .footer_down {
    display: initial;
    flex-wrap: initial;
  }

  .footer-nav-item {
    margin-right: 0px;
  }

  .footer-logo, .footer-policy, .footer_social-buttons, .footer-nav-1-item, .footer-contact {
    text-align: center;
    justify-content: center;
  }

  .footer-subscribe {
    display: none;
  }

  .home-footer h2 {
    font-size: 13px;
  }

  .home-footer a, .home-footer {
    font-size: 11px;
  }
}
</style>