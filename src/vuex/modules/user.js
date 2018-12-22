import * as types from "../mutation-types";
import { services } from "../api";

const state = {
  main: { data: {}, isLogin: false }
};
const actions = {
  setLogin(ctx, data) {
    return new Promise((resolve, reject) => {
      services.users
        .login(data)
        .then(res => {
          if (res.status === 200) {
            if (res.data.is_login) {
              ctx.commit(types.FETCH_LOGIN, res.data.users);
              resolve(true);
            } else {
              ctx.commit(types.FETCH_LOGOUT);
              resolve(false);
            }
          } else {
            ctx.commit(types.FETCH_LOGOUT);
            resolve(false);
          }
        })
        .catch(error => {
          ctx.commit(types.FETCH_LOGOUT);
          reject(false);
          console.log(error);
        });
    });
  },
  setIsLogin({ commit }) {
    commit(types.FETCH_IS_LOGIN);
  },
  setLogout({ commit }) {
    return new Promise(resolve => {
      commit(types.FETCH_LOGOUT);
      resolve(true);
    });
  },
  loadInfoUser(ctx, username) {
    return new Promise(resolve => {
      services.users
        .loadinfo(username)
        .then(res => {
          ctx.commit(types.FETCH_INFO_USER, res.data);
          resolve(true);
        })
        .catch(error => {
          resolve(false);
          console.log(error);
        });
    });
  },
  editUser(ctx, data) {
    return new Promise(resolve => {
      services.users.editUser(data).then(res => {
        if (res.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  changePassword(ctx, data) {
    return new Promise(resolve => {
      services.users.changePassword(data).then(res => {
        if (res.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
};
const getters = {
  currentUser(state) {
    return state.main.data;
  },
  currentUserEdit(state) {
    return state.main.data;
  },
  userLogin(state) {
    return state.main.isLogin;
  }
};
const mutations = {
  [types.FETCH_LOGIN](state, data) {
    state.main.data = data;
    state.main.isLogin = true;
  },
  [types.FETCH_LOGOUT](state) {
    state.main.isLogin = false;
  },
  [types.FETCH_IS_LOGIN](state) {
    state.main.isLogin = true;
  },
  [types.FETCH_INFO_USER](state, data) {
    state.main.data = data[0];
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
