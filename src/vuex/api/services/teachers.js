import axios from "axios";

export default {
  addTeachers(data = {}) {
    return axios
      .post("http://localhost:3000/teachers/add", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  loadinfo(id) {
    return axios
      .get("http://localhost:3000/teachers/?username=" + id)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  editUser(data) {
    return axios
      .post("http://localhost:3000/users/changedetail", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  changePassword(data) {
    return axios
      .post("http://localhost:3000/users/changepwd", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
