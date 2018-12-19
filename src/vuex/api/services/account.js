import dataAccount from "../../../lib/dataAccount";

export default {
  getAllAccount() {
    return new Promise((resolve, reject) => {
      if (dataAccount.listItem) {
        resolve(dataAccount.listItem);
      } else {
        reject(false);
      }
    });
  }
};
