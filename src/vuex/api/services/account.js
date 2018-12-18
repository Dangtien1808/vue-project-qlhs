import dataAccount from "../../../lib/dataAccount";

export default {
  getAllAccount() {
    return new Promise((resolve, reject) => {
      if (dataAccount) {
        resolve(dataAccount);
      } else {
        reject(false);
      }
    });
  }
};
