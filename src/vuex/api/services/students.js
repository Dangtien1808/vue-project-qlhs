import axios from "axios";

export default {
  getStudent(request = {}) {
    return axios
      .get("http://localhost:3000/students", request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  deleteStudent(id = "") {
    return axios
      .post("http://localhost:3000/students/delete", { mahocsinh: id })
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  addStudent(data = {}) {
    return axios
      .post("http://localhost:3000/students/add", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getDetail(malop) {
    return axios
      .get("http://localhost:3000/students/info/" + malop)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  editStudent(data) {
    return axios
      .post("http://localhost:3000/students/changedetail", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
