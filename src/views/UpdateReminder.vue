<template>
  <div>
    <b-form @submit="updateReminder">
      <b-form-group
        id="input-group-1"
        label="name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="remind Me At:" label-for="input-3">
        <b-form-datepicker id="input-3" v-model="form.remindMeAt" class="mb-2" :state="isValidDate"></b-form-datepicker>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
  
<script>
import RemindersRepository from '../Repository/RemindersRepository';
export default { 
  data() {  
    return {
        form: {
          id: '',
          name: '',
          remindMeAt: '',
          description: '',
        },
      }
  }, 
  async created(){
    const response = await RemindersRepository.getReminderById(parseInt(this.$route.params.id))
    this.form = await response.data
  },
  computed:{
    isValidDate() {
      return this.form.remindMeAt !== '';
    }
  },
  methods: {  
      updateReminder() {  
        //alert(this.form.remindMeAt)
          RemindersRepository
          .Put(this.form.id, {
            name: this.form.name,
            remindMeAt: this.form.remindMeAt,
            description: this.form.description,
          })
          .then(() => {  
               console.log("reminder registered")
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
  