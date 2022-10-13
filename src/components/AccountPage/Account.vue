<template>
  <div class="account-page">
    <div class="account-title">
      <div class="account-text">
        <h2>My Account</h2>
        <p>Home / My Account</p>
      </div>
    </div>
    <div class="account-forms">
      <form id="signin">
        <h2>Sign in</h2>
        <div class="account-inf">
          <input class="account-login" type="text" placeholder="Login"/>
          <input class="account-password" type="password" placeholder="Password"/>
          <div class="account-checkbox">
            <div class="checkbox">
              <input type="checkbox" id="rememberpassword"/>
              <label class="password-checkbox" for="rememberpassword">Remember me</label>
            </div>
            <div class="forgot">
              <a>Forgot</a>
            </div>
          </div>
          <button>Sign in</button>
        </div>
      </form>
      <form id="registration" @submit.prevent="handleSubmit">
        <h2>Registration</h2>
        <div class="account-inf">
          <input class="account-fn" v-model="first_name" type="text" placeholder="First Name"/>
          <input class="account-ln" v-model="last_name" type="text" placeholder="Last Name"/>
          <input class="account-email" v-model="email" type="email" placeholder="Email"/>
          <input class="account-ur" v-model="user_role" type="text" placeholder="User role"/>
          <input class="account-password" v-model="password" type="password" placeholder="Password"/>
          <input class="account-password-confirm" v-model="password_confirm" type="password"
                 placeholder="Re-enter password"/>
          <p><span>Weekly eNewsletter</span></p>
          <p>Sign up for our Weekly eNewsletter. Includes tips, events, blog posts, podcasts and more!
            Select the eNewsletters you would like to receive:</p>
          <div class="account-checkbox">
            <div class="checkbox" v-for="link in checkbox_data" :key="link.id">
              <input type="checkbox" :id="link.check"/>
              <label class="password-checkbox" :for="link.check">{{ link.text }}</label>
            </div>
          </div>
          <p><span>Daily State Reports</span></p>
          <p>Sign up for our comprehensive daily Email State Reports. Consists of new listings, resources and tips.
            Select the states below you would like to receive email reports for:</p>
          <select>
            <option selected>Select States</option>
            <option>Select States</option>
            <option>Select States</option>
          </select>
          <button>Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AccountItem",
  methods: {
    handleSubmit() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        user_role: this.user_role,
        password: this.password,
        password_confirm: this.password_confirm
      };
      axios.post('http://localhost:8080/Account', data)
          .then(res => {
            console.log(res)
          }).catch(err => {
        console.log(err)
      })
    }
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      user_role: "",
      password: "",
      password_confirm: "",
      checkbox_data: [
        {
          id: 1,
          text: "Business Advisors",
          check: "One"
        },
        {
          id: 2,
          text: "Business Buyers",
          check: "Two"
        },
        {
          id: 3,
          text: "Business Brokers & Agents",
          check: "Three"
        },
        {
          id: 4,
          text: "Business Owners/Sellers",
          check: "Four"
        },
      ],
    }
  }
}
</script>

<style>
.account-title {
  background: url("../../assets/backgroundaccountimg.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  padding: 130px 0;
  z-index: 1;
}

.account-title:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 50%);
  z-index: 2;
}

.account-text {
  color: white;
  text-align: center;
  position: relative;
  z-index: 3;
}

.account-text h2 {
  font-size: 30px;
}

.account-text p {
  font-size: 14px;
}

.account-forms {
  display: flex;
  flex-wrap: wrap;
  background-color: #F6F8F9;
  padding-left: 225px;
  padding-right: 225px;
  padding-top: 50px;
  padding-bottom: 150px;
}

#signin, #registration {
  background-color: white;
  padding: 30px;
  border: #E6E9EC solid 1px;
  border-radius: 4px;
  margin: 15px;
  height: 100%;
}

#signin {
  flex: 1 1 40%;
}

#registration {
  flex: 1 1 50%;
}

#signin h2, #registration h2 {
  font-size: 18px;
  color: #0D263B;
  margin-bottom: 30px;
}

#registration p {
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 10px;
  color: #696969;
}

#registration span {
  font-size: 14px;
  color: black;
  font-weight: bold;
}

#signin .account-login, #signin .account-password, #registration .account-fn, #registration .account-ln,
#registration .account-email, #registration .account-ur, #registration .account-password, #registration .account-password-confirm {
  width: 100%;
  border: none;
  border-bottom: 2px #E6E9EC solid;
  font-size: 14px;
  padding: 10px 0;
  margin-bottom: 30px;
  color: #0D263B;
}

#registration input[type=text]:focus {
  border-color: #184997;
  border-bottom: 2px #184997 solid;
  outline: 0;
}

.password-checkbox {
  color: #696969;
}

#signin .account-checkbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

#registration .account-checkbox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 30px;
}

#signin .account-checkbox .checkbox, #registration .account-checkbox .checkbox {
  display: flex;
  align-items: center;
}

#signin .account-checkbox input[type=checkbox] {
  position: relative;
  cursor: pointer;
  appearance: none;
  border: #E6E9EC solid 1px;
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

#signin .account-checkbox input[type=checkbox]:checked:after {
  content: '';
  display: block;
  width: 4px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: -2px;
}

#signin .account-checkbox input[type=checkbox]:checked + .password-checkbox {
  color: black;
  transition: 0.5s;
}

#signin .account-checkbox input[type=checkbox]:checked {
  background-color: #184997;
}

#rememberpassword {
  display: flex;
  justify-content: center;
  align-items: center;
}

#signin button {
  width: 100%;
  border: none;
  background-color: #0D263B;
  color: white;
  font-size: 13px;
  text-transform: uppercase;
  padding: 20px;
  border-radius: 4px;
  font-weight: 500;
}

#registration select {
  margin-bottom: 50px;
  border: none;
  border-bottom: 2px #E6E9EC solid;
  font-size: 14px;
  color: #696969;
  padding-right: 175px;
  padding-top: 10px;
  padding-bottom: 10px;
}

#registration button {
  width: 100%;
  padding: 20px;
  border: none;
  background-color: #F2632C;
  text-transform: uppercase;
  color: white;
  font-size: 13px;
  font-weight: 500;
  border-radius: 4px;
}

#signin .forgot {
  font-size: 14px;
  color: #184997;
  border-bottom: 1px #184997 solid;
}

/* input attribute */
#registration .account-checkbox input[type=checkbox] {
  position: relative;
  cursor: pointer;
  appearance: none;
  border: #E6E9EC solid 1px;
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

#registration .account-checkbox input[type=checkbox]:checked:after {
  content: '';
  display: block;
  width: 4px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-left: 5px;
  margin-top: 2px;
}

#registration .account-checkbox input[type=checkbox]:checked + .password-checkbox {
  color: black;
  transition: 0.5s;
}

#registration .account-checkbox input[type=checkbox]:checked {
  background-color: #184997;
}

#registration .account-checkbox {
  font-size: 14px;
  line-height: 40px;
}
</style>