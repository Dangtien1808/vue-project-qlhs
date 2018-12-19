import * as types from "../mutation-types";

const state = {
  main: {
    name: "Dang Van Tien",
    position: "Web Developer",
    state: {
      color: "#3c763d",
      name: "Online"
    },
    createdAt: new Date()
  },
  isLogin: false
};
const actions = {
  setLogin({ commit }) {
    commit(types.FETCH_LOGIN);
  },
  setLogout({ commit }) {
    commit(types.FETCH_LOGOUT);
  }
};
const getters = {
  currentUser(state) {
    return state.main;
  },
  userLogin(state) {
    return state.isLogin;
  }
};
const mutations = {
  [types.FETCH_LOGIN](state) {
    state.isLogin = true;
  },
  [types.FETCH_LOGOUT](state) {
    state.isLogin = false;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
