import axios from "axios";

export default {
  getAllClass(request = {}) {
    return axios
      .get("http://localhost:3000/class", request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  deleteClass(id = "") {
    return axios
      .post("http://localhost:3000/class/delete", { malop: id })
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  addClass(data = {}) {
    return axios
      .post("http://localhost:3000/class/add", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getDetail(malop) {
    return axios
      .get("http://localhost:3000/class/info/" + malop)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  editClass(data) {
    return axios
      .post("http://localhost:3000/class/changedetail", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
