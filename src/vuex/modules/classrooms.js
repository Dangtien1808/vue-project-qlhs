import * as types from "../mutation-types";
import { services } from "../api";
import dataClass from "../../lib/dataHeaderClass";
const state = {
  main: { column: dataClass.column, listItem: [], isSelect: false }
};

const getters = {
  headerDataClass(state) {
    return state.main.column;
  },
  dataClass(state) {
    return state.main.listItem;
  },
  selectClass(state) {
    return state.main.isSelect;
  }
};

const actions = {
  fetchAllClass({ commit }) {
    return new Promise((resolve, reject) => {
      services.classrooms
        .getAllClass()
        .then(response => {
          if (response.status == 200) {
            commit(types.FETCH_CLASSROOMS, response.data);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  deleteClass(ctx, id) {
    return new Promise((resolve, reject) => {
      services.classrooms
        .deleteClass(id)
        .then(response => {
          if (response.status == 200) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  setCheckBoxClass(ctx, flag) {
    if (flag) {
      ctx.commit(types.FETCH_UNCHECK_CLASSROOMS, false);
    } else {
      ctx.commit(types.FETCH_CHECKED_CLASSROOMS, true);
    }
  }
  // addAccount(ctx, data) {
  //   return new Promise((resolve, reject) => {
  //     services.teachers
  //       .addAccount(data)
  //       .then(res => {
  //         console.log(res.status);
  //         if (res.status === 201) {
  //           console.log(res.data);
  //           if (res.data.taikhoan) {
  //             console.log(res.data.taikhoan);
  //             resolve(true);
  //           } else {
  //             resolve(false);
  //           }
  //         } else {
  //           resolve(false);
  //         }
  //       })
  //       .catch(error => {
  //         reject(false);
  //         console.log(error);
  //       });
  //   });
  // }
};

const mutations = {
  [types.FETCH_CLASSROOMS](state, classes) {
    state.main.listItem = classes;
  },
  [types.FETCH_UNCHECK_CLASSROOMS](state, flag) {
    state.main.isSelect = flag;
  },
  [types.FETCH_CHECKED_CLASSROOMS](state, flag) {
    state.main.isSelect = flag;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
