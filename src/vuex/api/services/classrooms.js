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
  getListStuden(malop) {
    return axios
      .get("http://localhost:3000/class/" + malop + "/students")
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
  },
  AddStudent(data) {
    return axios
      .post("http://localhost:3000/studentclass/add", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  deleteStudent(data) {
    return axios
      .post("http://localhost:3000/studentclass/delete", data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getClassesByCodeStudent(mahocsinh) {
    return axios
      .get("http://localhost:3000/studentclass?mahocsinh=" + mahocsinh)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getInfoPoint(data) {
    return axios
      .get(
        `http://localhost:3000/studentclass/infoPoint?mahocsinh=${
          data.mahocsinh
        }&malop=${data.malop}&mamon=${data.mamon}&hocki=${data.hocki}`
      )
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  getTablePoint(data) {
    return axios
      .get(
        `http://localhost:3000/studentclass/tablePoint?malop=${
          data.malop
        }&mamon=${data.mamon}&hocki=${data.hocki}`
      )
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
  setInfoPoint(data) {
    return axios
      .post(`http://localhost:3000/studentclass/editPoint`, data)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
