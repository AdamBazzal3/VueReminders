<template>
    <div>
      <h1>Sign In</h1><br>
      <b-form @submit="signIn">
        <b-form-group
          id="input-group-1"
          label="username:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="user.username"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-2" label="password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="user.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </template>
    
  <script>
  import UserRepository from '../Repository/UserRepository';
  export default {
    data() {  
      return {
          user: {
            username: '',
            password: '',
          },
        }
    }, 
    methods: {
        signIn(e) {
            e.preventDefault();  
            UserRepository
            .signIn(this.user)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.$router.push({
                    name: 'home'
                })
                this.$router.go()
            })  
            .catch(e => {  
                alert(e.message);  
            });
        }
    },
  }
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  label {
      display: inline-block;
      margin-bottom: .9rem;
  }
  </style>
    