<template>
    <b-card
    :header="r.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 m-auto"
  >
    <b-card-text>
      {{this.r.description}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </template>
  
  <script>
  import RemindersRepository from '../Repository/RemindersRepository'
  export default {
    data() {  
      return { 
          r: {
            name: "",
            description: "",
          }
      };  
    },  
    async created() {
        const response = await RemindersRepository.getReminderById(parseInt(this.$route.params.id))
        this.r = await response.data
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  