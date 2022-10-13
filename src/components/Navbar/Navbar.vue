<template>
  <nav>
    <div class="navbar">
      <NavbarUpItem/>
      <NavbarDownItem/>
    </div>
  </nav>
</template>

<script>
import NavbarUpItem from "@/components/Navbar/NavbarUp";
import NavbarDownItem from "@/components/Navbar/NavbarDown";

export default {
  components: {
    NavbarDownItem,
    NavbarUpItem
  },
  name: "navbar-item",
  data() {
    return {}
  },
}
</script>

<style>
/* navbar */
nav {
  width: 100%;
}

.navbar {
  padding: 15px 0px;
}

.navbar-item-1, .navbar-item-2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.navbar-item-1 {
  padding-bottom: 27px;
}

.navbar-content-1 {
  display: flex;
  flex: 0 0 75%;
}

.navbar-content-2 {
  display: flex;
  flex: 0 0 25%;
  justify-content: flex-end;
}

.navbar-logo {
  margin-right: 50px;
  cursor: pointer;
}

/* li */
.menu-item {
  display: flex;
  align-items: center;
  min-height: 25px;
}

/* ol */
.menu {
  display: flex;
  align-items: center;
}

/* a */
.menu-link {
  display: flex;
  align-items: center;
  fill: white;
  color: black;
  font-size: 13px;
  cursor: pointer;
}

.menu-link .icon {
  width: 20px;
  height: 20px;
}

/* span */
.menu-text {
  padding-left: 10px;
}

/*btn search*/
.btn-show-results {
  color: white;
  cursor: pointer;
  border: 0px;
  background-color: #F2632C;
  border-radius: 3px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* input search */
.navbar-search {
  width: 100%;
  max-width: 950px;
  margin: auto;
  position: relative;
}

.navbar-search-input {
  border: 1px solid #E6E9EC;
  font-size: 14px;
  width: 100%;
  height: 45px;
  border-radius: 3px;
  padding-left: 44px;
  padding-right: 192px;
}

.navbar-search .btn-show-results {
  position: absolute;
  width: calc(100% / 6);
  right: 5px;
  top: 5px;
  bottom: 5px;
  font-size: 11px;
}

.navbar-search .icon {
  position: absolute;
  padding: 0px;
  max-width: 16px;
  left: 2%;
  top: 30%;
}

.navbar-search .btn-icon {
  margin: 0 11px;
  max-width: 16px;
  left: 13%;
  top: 25%;
}

/* dropdown navbar */
.btn {
  color: #696969;
  border: none;
  outline: none;
  background-color: transparent;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  background-color: white;
  border-radius: 3px;
  border-bottom: 1px solid #E6E9EC;
  border-left: 1px solid #E6E9EC;
  border-right: 1px solid #E6E9EC;
  min-width: 300px;
  min-height: 305px;
  z-index: 6;
  padding: 0px 25px;
  margin-top: 28px;
  animation: drop 0.7s;
  animation-fill-mode: forwards;
  opacity: 1;
  transition: 0.5s;
}

@keyframes drop {
  from {
    top: 0px;
  }
  70% {
    top: 135px;
    animation-timing-function: ease-in;
  }
  to {
    top: 125px;
    animation-timing-function: ease-out;
  }
}

.dropdown-text {
  font-size: 15px;
  font-weight: bold;
  align-content: center;
  align-items: center;
  color: black;
  padding: 20px 10px;
  min-height: 70px;
  transition: 0.5s;
  cursor: pointer;
}

.dropdown-content a, .attribute-content a {
  display: block;
}

.dropdown-text img {
  padding-right: 20px;
  vertical-align: middle;
}

.dropdown-vector {
  padding-left: 10px;
}

#menu-user .checkbox-text {
  margin: 0;
}

#menu-user .checkbox-attribute {
  margin-top: 10px;
}

.dropdown-text:hover {
  transition: 0.5s;
  color: #184997;
}

/* attribute navbar */
.attribute-content {
  position: absolute;
  background-color: white;
  border-bottom: 1px solid #E6E9EC;
  border-left: 1px solid #E6E9EC;
  border-right: 1px solid #E6E9EC;
  min-width: 440px;
  max-height: 305px;
  z-index: 5;
  top: 0;
  left: 100%;
  padding: 20px 21px;
  border-radius: 3px;
  box-shadow: -8px 13px 20px 0px rgb(0 0 0 / 10%);
}

.attribute-content a:hover {
  background-color: #ddd
}

.attribute-item {
  font-size: 13px;
  margin: 0px 20px;
  padding: 14px 0px;
  align-items: center;
}

.attribute-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.attribute-title {
  border-bottom: 1px solid #E6E9EC;
  padding-bottom: 18px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
}

/* input attribute */
.checkbox-text {
  cursor: pointer;
  color: #696969;
  display: block;
}

.checkbox-attribute {
  cursor: pointer;
  float: right;
  margin-top: 5px;
}

.attribute-item input[type=checkbox] {
  position: relative;
  cursor: pointer;
  appearance: none;
}

.attribute-item input[type=checkbox]:checked:after {
  content: '';
  display: block;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 4px 4px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.attribute-item input[type=checkbox]:checked + .checkbox-text {
  color: black;
  transition: 0.5s;
}
</style>