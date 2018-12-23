import * as types from "../mutation-types";
import { services } from "../api";
import dataClass from "../../lib/dataHeaderClass";
const state = {
  main: { column: dataClass.column, listItem: [], isSelect: false },
  listStudentClass: [],
  isSelectStudent: false,
  codeClass: 1,
  detailClass: {}
};

const getters = {
  getStudentsClass(state) {
    return state.listStudentClass;
  },
  headerDataClass(state) {
    return state.main.column;
  },
  dataClass(state) {
    return state.main.listItem;
  },
  selectClass(state) {
    return state.main.isSelect;
  },
  getCodeClass(state) {
    return state.codeClass;
  },
  getDetailClass(state) {
    return state.detailClass;
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
  resetDetailClass(ctx) {
    ctx.commit(types.FETCH_RESET_DETAIL_CLASSROOMS);
  },
  setCheckBoxClass(ctx, flag) {
    if (flag) {
      ctx.commit(types.FETCH_UNCHECK_CLASSROOMS, false);
    } else {
      ctx.commit(types.FETCH_CHECKED_CLASSROOMS, true);
    }
  },
  setCheckBoxStudentClass(ctx, flag) {
    if (flag) {
      ctx.commit(types.FETCH_UNCHECK_STUDENT_CLASSROOMS, false);
    } else {
      ctx.commit(types.FETCH_CHECKED_STUDENT_CLASSROOMS, true);
    }
  },
  setCodeSelectClass(ctx, id) {
    ctx.commit(types.FETCH_CODE_CLASS, id);
  },
  AddClassroom(ctx, data) {
    return new Promise((resolve, reject) => {
      services.classrooms
        .addClass(data)
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
  getInfoDetailClass(ctx, id) {
    return new Promise(resolve => {
      services.classrooms
        .getDetail(id)
        .then(res => {
          if (res.status == 200) {
            ctx.commit(types.FETCH_DETAIL_CLASS, res.data);
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
  getListStudentClass(ctx, id) {
    return new Promise(resolve => {
      services.classrooms
        .getListStuden(id)
        .then(res => {
          if (res.status == 200) {
            ctx.commit(types.FETCH_LIST_STUDENT_CLASS, res.data);
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
  editClass(ctx, data) {
    return new Promise(resolve => {
      services.classrooms.editClass(data).then(res => {
        if (res.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  AddStudentClass(ctx, data) {
    return new Promise(resolve => {
      services.classrooms.AddStudent(data).then(res => {
        if (res.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  deleteStudentClass(ctx, data) {
    return new Promise(resolve => {
      services.classrooms.deleteStudent(data).then(res => {
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
  [types.FETCH_CLASSROOMS](state, classes) {
    state.main.listItem = classes;
  },
  [types.FETCH_UNCHECK_CLASSROOMS](state, flag) {
    state.main.isSelect = flag;
  },
  [types.FETCH_CHECKED_CLASSROOMS](state, flag) {
    state.main.isSelect = flag;
  },
  [types.FETCH_UNCHECK_STUDENT_CLASSROOMS](state, flag) {
    state.isSelectStudent = flag;
  },
  [types.FETCH_CHECKED_STUDENT_CLASSROOMS](state, flag) {
    state.isSelectStudent = flag;
  },
  [types.FETCH_DETAIL_CLASS](state, data) {
    state.detailClass = data[0];
  },
  [types.FETCH_LIST_STUDENT_CLASS](state, data) {
    state.listStudentClass = data;
  },
  [types.FETCH_RESET_DETAIL_CLASSROOMS](state) {
    state.detailClass = {};
  },
  [types.FETCH_CODE_CLASS](state, id) {
    state.codeClass = id;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
