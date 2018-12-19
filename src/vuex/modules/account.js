import * as types from "../mutation-types";
import { services } from "../api";
import dataAccount from "../../lib/dataAccount";
const state = {
  main: { column: dataAccount.column, listItem: [] }
};

const getters = {
  dataAccount(state) {
    return state.main;
  }
};

const actions = {
  fetchAllAccount({ commit }) {
    return services.account
      .getAllAccount()
      .then(response => {
        commit(types.FETCH_ACCOUNT, response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
const mutations = {
  [types.FETCH_ACCOUNT](state, accounts) {
    state.main.listItem = accounts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
