import * as types from "../mutation-types";
import { services } from "../api";

const state = {
  main: { data: [] }
};
const actions = {
  addGiaoVien(ctx, data) {
    return new Promise((resolve, reject) => {
      services.teachers
        .addTeachers(data)
        .then(res => {
          console.log(res.status);
          if (res.status === 201) {
            console.log(res.data);
            if (res.data.taikhoan) {
              console.log(res.data.taikhoan);
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          reject(false);
          console.log(error);
        });
    });
  }
};
const getters = {
  danhsachGiaoVien(state) {
    return state.main.data;
  }
};
const mutations = {
  [types.FETCH_LOGIN](state, data) {
    state.main.data = data;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
