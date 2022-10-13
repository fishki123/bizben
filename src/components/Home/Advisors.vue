<template>
  <ol class="advisors-items">
    <li class="advisors-item" v-for="link in advisor_item.slice(0, itemShow)" :key="link.id">
      <div class="profile-title">
        <div class="profile-avatar">
          <img class="avatar" src=""/>
        </div>
        <div class="profile-stat">
          <div class="profile-details">
            <h2>{{ link.name }}</h2>
            <p>{{ link.place }}</p>
            <p>Phone: {{ link.phone }}</p>
          </div>
          <div class="profile-view-link">
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
      <div class="profile-description">
        <p style="color: black;font-weight: bold;margin-bottom: 8px">Description</p>
        <p style="color: #696969">{{ link.description }}</p>
      </div>
    </li>
  </ol>
  <button @click="ViewAll()" class="advisors-button">{{ ViewMoreText() }} Advisors</button>
</template>

<script>
export default {
  name: "AdvisorsItem",
  data() {
    return {
      advisor_item: [
        {
          id: 1,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 2,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 3,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 4,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 5,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 6,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 7,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 8,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 9,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 10,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 11,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
        {
          id: 12,
          name: "Robert Fox",
          place: "Advisor, Company XYZ",
          phone: "450-456-9874",
          description: "Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incidi dunt ut " +
              "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cilum..."
        },
      ],
      itemShow: 6,
      viewMore: false
    }
  },
  methods: {
    ViewAll() {
      if (this.viewMore === false) {
        this.itemShow = 12;
        return this.viewMore = true;
      } else {
        this.itemShow = 6;
        return this.viewMore = false;
      }
    },
    ViewMoreText() {
      if (this.viewMore === false) {
        return 'View All';
      } else {
        return 'Hide'
      }
    }
  },
}
</script>

<style>
.advisors-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(477px, 1fr));
  padding: 30px;
  margin: 0 167px;
  text-align: initial;
}

.advisors-item {
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 10%);
  width: 470px;
  background-color: white;
  padding: 30px;
  margin: 15px;
}

.profile-title {
  display: flex;
  margin-bottom: 19px;
}

.profile-avatar {
  height: 149px;
  width: 149px;
  margin-right: 49px;
  background-color: #C4C4C4;
  border-radius: 50%;
}

.profile-stat {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.profile-stat h2 {
  color: #0D263B;
  font-size: 16px;
  margin-bottom: 5px;
}

.profile-stat p {
  font-size: 14px;
  margin-bottom: 5px;
  color: #696969;
}

.profile-stat a {
  font-size: 14px;
  line-height: 27px;
  color: #184997;
  border-bottom: 1px #184997 solid;
}

.profile-view-link {
  align-self: end;
}

.profile-description {
  font-size: 14px;
}

/* button */
.advisors-button {
  width: 250px;
  background-color: transparent;
  border: 2px solid #E6E9EC;
  text-transform: uppercase;
  font-size: 13px;
  color: #184997;
  padding: 30px 0px;
  font-weight: bold;
  margin-top: 30px;
}
</style>