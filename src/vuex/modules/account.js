import * as types from "../mutation-types";
import { services } from "../api";
import dataAccount from "../../lib/dataAccount";
const state = {
  main: { column: dataAccount.column, listItem: [] }
};

const getters = {
  headerDataAccount(state) {
    return state.main.column;
  },
  dataAccount(state) {
    return state.main.listItem;
  }
};

const actions = {
  fetchAllAccount({ commit }) {
    return new Promise((resolve, reject) => {
      services.account
        .getAllAccount()
        .then(response => {
          if (response.status == 200) {
            commit(types.FETCH_ACCOUNT, response.data);
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
  deleteAccount(ctx, id) {
    return new Promise((resolve, reject) => {
      services.account
        .deleteAccount(id)
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
  addAccounts(ctx, data) {
    return new Promise((resolve, reject) => {
      services.account
        .addAccount(data)
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
