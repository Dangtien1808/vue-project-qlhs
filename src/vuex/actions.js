import * as types from "./mutation-types";
import { services } from "./api";

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products
    .getAll()
    .then(response => {
      console.log(response);
      commit(types.FETCH_PRODUCT, response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const fetchAllAccount = ({ commit }) => {
  return services.account
    .getAllAccount()
    .then(response => {
      commit(types.FETCH_ACCOUNT, response);
    })
    .catch(error => {
      console.log(error);
    });
};
