import axios from "axios";

export default {
  getAllAccount(request = {}) {
    return axios
      .get("http://localhost:3000/teachers", request)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  deleteAccount(id = "") {
    return axios
      .post("http://localhost:3000/teachers/delete", { taikhoan: id })
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  addAccount(data = {}) {
    return axios
      .post("http://localhost:3000/teachers/add", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
