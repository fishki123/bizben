<template>
  <div id="listing">
    <input @click="showMoreReset()" checked="" type="radio" name="lister" id="list1" selected="false">
    <input @click="showMoreReset()" type="radio" name="lister" id="list2" selected="false">
    <input @click="showMoreReset()" type="radio" name="lister" id="list3" selected="false">
    <input @click="showMoreReset()" type="radio" name="lister" id="list4" selected="false">
    <label class="list-up-button" for="list1">By Industry</label>
    <label class="list-up-button" for="list2">By Attribute</label>
    <label class="list-up-button" for="list3">New Listings</label>
    <label class="list-up-button" for="list4">Popular Listings</label>
    <div id="listings">
      <div id="overflow">
        <div class="inner">
          <ol class="explore-items" v-for="attribute in attribute_item" :key="attribute.id">
            <li class="explore-item" v-for="link in attribute.feature_item.slice(0, attribute.itemShow)" :key="link.id"
                :style="link.style">
              <img class="explore-img" :src="link.img" :style="link.style_img"/>
              <p class="explore-text">{{ link.text }}</p>
              <button @click="loadAll(attribute.id)" class="explore-show" :style="link.style_button"><p>
                {{ ShowMoreText(attribute.id, link.id) }}</p></button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreItem",
  data() {
    return {
      attribute_item: [
        {
          id: 1,
          itemShow: 7,
          showMore: false,
          feature_item: [
            {
              id: 1,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 2,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style_button: "display:none;"
            },
            {
              id: 3,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 4,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 5,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;" +
                  "grid-row-start: 3;" +
                  "grid-row-end: 1;" +
                  "grid-column-end:5;",
              style_button: "display:none;"
            },
            {
              id: 6,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style_button: "display:none;"
            },
            {
              id: 7,
              img: require("@/assets/featureimg7.png"),
              style_img: "display:none;",
              style_text: "",
              style: "background: rgba(13,38,59,100%);",
              style_button: "",
            },
            {
              id: 8,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 9,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 10,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 11,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 12,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;\n" +
                  "grid-row-start: 3;\n" +
                  "grid-row-end: 5;\n" +
                  "grid-column-end: 5;\n",
              style_button: "display:none;"
            },
            {
              id: 13,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 14,
              img: require("@/assets/featureimg6.png"),
              text: "Business Service",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
          ],
        },
        {
          id: 2,
          itemShow: 7,
          showMore: false,
          feature_item: [
            {
              id: 1,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 2,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style_button: "display:none;"
            },
            {
              id: 3,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 4,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 5,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;" +
                  "grid-row-start: 3;" +
                  "grid-row-end: 1;" +
                  "grid-column-end:5;",
              style_button: "display:none;"
            },
            {
              id: 6,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style_button: "display:none;"
            },
            {
              id: 7,
              img: require("@/assets/featureimg7.png"),
              style_img: "display:none;",
              style_text: "",
              style: "background: rgba(13,38,59,100%);",
              style_button: "",
            },
            {
              id: 8,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 9,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 10,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 11,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 12,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;\n" +
                  "grid-row-start: 3;\n" +
                  "grid-row-end: 5;\n" +
                  "grid-column-end: 5;\n",
              style_button: "display:none;"
            },
            {
              id: 13,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 14,
              img: require("@/assets/featureimg6.png"),
              text: "Business Service",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
          ],
        },
        {
          id: 3,
          itemShow: 7,
          showMore: false,
          feature_item: [
            {
              id: 1,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 2,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style_button: "display:none;"
            },
            {
              id: 3,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 4,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 5,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;" +
                  "grid-row-start: 3;" +
                  "grid-row-end: 1;" +
                  "grid-column-end:5;",
              style_button: "display:none;"
            },
            {
              id: 6,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style_button: "display:none;"
            },
            {
              id: 7,
              img: require("@/assets/featureimg7.png"),
              style_img: "display:none;",
              style_text: "",
              style: "background: rgba(13,38,59,100%);",
              style_button: "",
            },
            {
              id: 8,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 9,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 10,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 11,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 12,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;\n" +
                  "grid-row-start: 3;\n" +
                  "grid-row-end: 5;\n" +
                  "grid-column-end: 5;\n",
              style_button: "display:none;"
            },
            {
              id: 13,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 14,
              img: require("@/assets/featureimg6.png"),
              text: "Business Service",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
          ],
        },
        {
          id: 4,
          itemShow: 7,
          showMore: false,
          feature_item: [
            {
              id: 1,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 2,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style_button: "display:none;"
            },
            {
              id: 3,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 4,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style_button: "display:none;"
            },
            {
              id: 5,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;" +
                  "grid-row-start: 3;" +
                  "grid-row-end: 1;" +
                  "grid-column-end:5;",
              style_button: "display:none;"
            },
            {
              id: 6,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style_button: "display:none;"
            },
            {
              id: 7,
              img: require("@/assets/featureimg7.png"),
              style_img: "display:none;",
              style_text: "",
              style: "background: rgba(13,38,59,100%);",
              style_button: "",
            },
            {
              id: 8,
              img: require("@/assets/featureimg1.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 9,
              img: require("@/assets/featureimg2.png"),
              text: "Home Improvement",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 10,
              img: require("@/assets/featureimg6.png"),
              text: "Retail",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 3;\n",
              style_button: "display:none;"
            },
            {
              id: 11,
              img: require("@/assets/featureimg3.png"),
              text: "Retail",
              style: "grid-column-start: 1;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 12,
              img: require("@/assets/featureimg5.png"),
              text: "Business Service",
              style: "grid-column-start: 3;\n" +
                  "grid-row-start: 3;\n" +
                  "grid-row-end: 5;\n" +
                  "grid-column-end: 5;\n",
              style_button: "display:none;"
            },
            {
              id: 13,
              img: require("@/assets/featureimg4.png"),
              text: "Health & Beauty",
              style: "grid-column-start: 2;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
            {
              id: 14,
              img: require("@/assets/featureimg6.png"),
              text: "Business Service",
              style: "grid-column-start: 5;\n" +
                  "grid-row-start: 4;\n",
              style_button: "display:none;"
            },
          ],
        },
      ],
    }
  },
  methods: {
    loadAll(id1) {
      for (let el1 in this.attribute_item) {
        if (this.attribute_item[el1].id === id1) {
          if (this.attribute_item[el1].showMore === false) {
            this.attribute_item[el1].itemShow = 16;
            return this.attribute_item[el1].showMore = true;
          } else {
            this.attribute_item[el1].itemShow = 7;
            return this.attribute_item[el1].showMore = false;
          }
        }
      }
    },
    ShowMoreText(id1) {
      for (let el1 in this.attribute_item) {
        if (this.attribute_item[el1].id === id1) {
          if (this.attribute_item[el1].showMore === false) {
            return 'Show All';
          } else {
            return 'Hide';
          }
        }
      }
    },
    showMoreReset() {
      for (let el in this.attribute_item) {
        if (this.attribute_item[el].showMore === true) {
          this.attribute_item[el].showMore = false;
          this.attribute_item[el].itemShow = 7;
        }
      }
    }
  },
}
</script>

<style>
/* listings slider */
.list-up-button {
  margin: 0px 50px;
  padding: 10px 32px;
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
  border: none;
  color: #184997;
  background-color: transparent;
  transition: 0.5s all;
}

#listing {
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
}

#listings .inner {
  width: 400%;
}

#listings ol {
  width: 25%;
  float: left;
}

#listings {
  padding-top: 30px;
}

#listings .inner {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -o-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

  -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

#list1:checked ~ #listings .inner {
  margin-left: 0;
}

#list2:checked ~ #listings .inner {
  margin-left: -100%;
}

#list3:checked ~ #listings .inner {
  margin-left: -200%;
}

#list4:checked ~ #listings .inner {
  margin-left: -300%;
}

#list1:checked ~ .list-up-button[for="list1"],
#list2:checked ~ .list-up-button[for="list2"],
#list3:checked ~ .list-up-button[for="list3"],
#list4:checked ~ .list-up-button[for="list4"] {
  border-radius: 50px;
  padding: 10px 32px;
  background-color: #184997;
  color: white;
  font-weight: bold;
  transition: 0.5s all;
}

/* feature items */
.explore-items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0 227px;
}

.explore-item {
  position: relative;
  margin: 15px;
  border-radius: 5px;
}

.explore-item:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(13, 38, 59, 60%);
  left: 0;
  z-index: 2;
  border-radius: 5px;
}

.explore-img {
  position: relative;
  width: 100%;
  height: 100%;
}

.explore-text {
  position: absolute;
  color: white;
  font-size: 18px;
  bottom: 30px;
  color: white;
  left: 25%;
  right: 25%;
  z-index: 4;
}

/* button */
.explore-show {
  position: relative;
  z-index: 3;
  content: '';
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  transition: 0.5s;
  cursor: pointer;
}

.explore-show p {
  position: absolute;
  bottom: 30px;
  left: 20%;
  right: 20%;
  color: white;
  font-size: 18px;
}

.explore-show:hover {
  background-color: #184997;
  transition: 0.5s;
  border-radius: 4px;
  z-index: 3;
}

.explore-show:after {
  position: absolute;
  content: '';
  height: 95px;
  width: 5px;
  z-index: 4;
  background-color: white;
  top: 25%;
  transition: 0.3s ease-out;
}

.explore-show:before {
  position: absolute;
  content: '';
  height: 95px;
  width: 5px;
  z-index: 4;
  transform: rotate(90deg);
  background-color: white;
  top: 25%;
  transition: 0.3s ease-out;
}
</style>