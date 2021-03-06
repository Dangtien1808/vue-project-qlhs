import axios from "axios";

export default {
  getAll() {
    return axios
      .get("http://localhost:3000/levelclass")
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
