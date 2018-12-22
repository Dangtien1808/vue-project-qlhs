import * as types from "../mutation-types";
import { services } from "../api";

const state = {
  main: []
};
const actions = {
  getLevelClass(ctx) {
    return new Promise((resolve, reject) => {
      services.subjects
        .getAll()
        .then(res => {
          resolve(true);
          if (res.status === 200) {
            if (res.data) {
              ctx.commit(types.FETCH_LEVELCLASS, res.data);
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
  listLevelClass(state) {
    return state.main;
  }
};
const mutations = {
  [types.FETCH_LEVELCLASS](state, data) {
    state.main = data;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
