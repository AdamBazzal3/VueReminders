import http from "../Http-common";

class UserRepository {
  signIn(user) {
    const formData = new FormData()
    formData.append('username', user.username)
    formData.append('password', user.password)
    return http.post('/sign-in', formData);
  }
  signUp(user) {
    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('username', user.username)
    formData.append('password', user.password)
    return http.post('/sign-up', formData);
  }
}

export default new UserRepository();  