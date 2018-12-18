import * as types from "../mutation-types";

const state = {
  main: {}
};

const mutations = {
  [types.FETCH_ACCOUNT](state, accounts) {
    state.main = accounts;
  }
};

export default {
  state,
  mutations
};
