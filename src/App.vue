<template>
  <div id="app">
    <b-navbar variant="dark" type="dark">
      <b-navbar-nav>
        <b-nav-item ><router-link to="/" class="nav-link">Home</router-link></b-nav-item>
        <b-nav-item-dropdown class="nav-link" text="Reminders" right>
          <b-dropdown-item><router-link to="/AddReminder" class="dropdown-item">add a reminder</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/RemindersList" class="dropdown-item">reminder list</router-link></b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown class="nav-link" text="User" right>
          <b-dropdown-item ><router-link v-if="!isLoggedIn" to="/SignIn" class="dropdown-item">Login</router-link></b-dropdown-item>
          <b-dropdown-item ><router-link v-if="!isLoggedIn" to="/SignUp" class="dropdown-item">Sign up</router-link></b-dropdown-item>
          <b-dropdown-item @click="signOut" v-if="isLoggedIn">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  computed: {
    isLoggedIn(){
      return localStorage.getItem('token') != null
    }
  },
  methods:{
    signOut(){
      localStorage.removeItem('token')
      this.$router.go()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav{
  text-align: center;
  margin-bottom: 0.9rem;
}
#content{
  margin-top: 0.7rem;
  margin-right: 0.9rem;
  margin-left: 0.9rem;
}
</style>
