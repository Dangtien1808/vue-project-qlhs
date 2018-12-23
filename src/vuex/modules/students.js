import * as types from "../mutation-types";
import { services } from "../api";
import dataStudent from "../../lib/dataHeaderStudent";
const state = {
  main: { column: dataStudent.column, listItem: [], isSelect: false },
  codeStudent: 1,
  detailStudent: {}
};

const getters = {
  headerDataStudent(state) {
    return state.main.column;
  },
  dataStudent(state) {
    return state.main.listItem;
  },
  selectStudent(state) {
    return state.main.isSelect;
  },
  getCodeStudent(state) {
    return state.codeStudent;
  },
  getDetailStudent(state) {
    return state.detailStudent;
  }
};

const actions = {
  fetchStudent({ commit }) {
    return new Promise((resolve, reject) => {
      services.students
        .getStudent()
        .then(response => {
          if (response.status == 200) {
            commit(types.FETCH_STUDENTS, response.data);
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
  deleteStudents(ctx, id) {
    return new Promise((resolve, reject) => {
      services.students
        .deleteStudent(id)
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
  resetDetailStudent(ctx) {
    ctx.commit(types.FETCH_RESET_DETAIL_STUDENTS);
  },
  setCheckBoxStudent(ctx, flag) {
    if (flag) {
      ctx.commit(types.FETCH_UNCHECK_STUDENTS, false);
    } else {
      ctx.commit(types.FETCH_CHECKED_STUDENTS, true);
    }
  },
  setCodeSelectStudent(ctx, id) {
    ctx.commit(types.FETCH_CODE_STUDENTS, id);
  },
  AddStudent(ctx, data) {
    return new Promise((resolve, reject) => {
      services.students
        .addStudent(data)
        .then(res => {
          if (res.status === 201) {
            if (res.data.insertId) {
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
  },
  getInfoDetailStudent(ctx, id) {
    return new Promise(resolve => {
      services.students
        .getDetail(id)
        .then(res => {
          if (res.status == 200) {
            ctx.commit(types.FETCH_DETAIL_STUDENTS, res.data);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(error => {
          resolve(false);
          console.log(error);
        });
    });
  },
  editStudent(ctx, data) {
    return new Promise(resolve => {
      services.students.editStudent(data).then(res => {
        if (res.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
};

const mutations = {
  [types.FETCH_STUDENTS](state, classes) {
    state.main.listItem = classes;
  },
  [types.FETCH_UNCHECK_STUDENTS](state, flag) {
    state.main.isSelect = flag;
  },
  [types.FETCH_CHECKED_STUDENTS](state, flag) {
    state.main.isSelect = flag;
  },
  [types.FETCH_DETAIL_STUDENTS](state, data) {
    state.detailStudent = data[0];
  },
  [types.FETCH_RESET_DETAIL_STUDENTS](state) {
    state.detailStudent = {};
  },
  [types.FETCH_CODE_STUDENTS](state, id) {
    state.codeStudent = id;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
