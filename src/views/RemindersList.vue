<template>  
    <div class="overflow-auto">
      <br>
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="reminders"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      striped 
      hover
    >
    <template v-slot:cell(actions)="{ item }">
      <b-button @click="editItem(item)" >Edit</b-button>&nbsp;
      <b-button @click="remove(item)" variant="danger">delete</b-button>&nbsp;
      <b-button @click="view(item)" variant="success">view</b-button>
    </template>
  </b-table>
  </div> 
</template> 
  
<script>
  import RemindersRepository from '../Repository/RemindersRepository';
    export default {
          data() {  
              return { 
                  perPage: 3,
                  currentPage: 1, 
                  reminders: [], 
                  fields: ["name", "description", "remindMeAt", "actions"]
              };  
          },  
          async created()  
          {  
              await this.retrievereminders();  
          },  
          computed: {
            rows() {
                return this.reminders.length
            }
          },
          methods: {  
              async retrievereminders() {  
                  await RemindersRepository
                  .getAll()
                  .then(response => {  
                      this.reminders = response.data;  
                      console.log(response.data);  
                  })  
                  .catch(e => {  
                      alert(e.message);  
                  });
              },
              editItem(item) { this.$router.push({ path: `/UpdateReminder/${item.id}` }) },
              async remove(item) { 
                await RemindersRepository.delete(item.id)
                window.location.reload();
              },
              view(item){
                this.$router.push({ path: `/ViewReminder/${item.id}` })
              }
          },
      }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import'~bootstrap/dist/css/bootstrap.css';
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
  th{
    text-align: center;
  }
  </style>
  