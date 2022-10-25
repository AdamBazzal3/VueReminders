import http from "../Http-common";

class RemindersRepository {

  getAll() {
    return http.get("/restricted/reminders", {
      headers: {  
        "Authorization": "Bearer "+localStorage.getItem('token'),
      }
    });
  }
  Post(reminder) {
    return http.post('/restricted/reminders', reminder, {
      headers: {  
        "Authorization": "Bearer "+localStorage.getItem('token'),
      }
    });
  }
  Put(id, reminder) {
    return http.put('/restricted/reminders/'+id, reminder,{
      headers: {  
        "Authorization": "Bearer "+localStorage.getItem('token'),
      }
    });
  }
  getReminderById(id){
    return http.get('/restricted/reminders/'+id, {
      headers: {  
        "Authorization": "Bearer "+localStorage.getItem('token'),
      }
    })
  }
  delete(id){
    return http.delete('/restricted/reminders/'+id,{
      headers: {  
        "Authorization": "Bearer "+localStorage.getItem('token'),
      }
    })
  }

}

export default new RemindersRepository();  