<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thêm Tài Khoản Giáo Viên</h2>
    </div>
    <div class="box-body">
      <div class="span12">
        <div class="row-fluid">
          <div id="content">
            <form>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="classname-add"
                  class="col-sm-2 col-form-label"
                >Tên Lớp</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="classname-add"
                    placeholder="10a1"
                    required
                    v-model="classes.tenlop"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="level-class-add"
                  class="col-sm-2 col-form-label"
                >Chọn Khối</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    id="level-class-add"
                    v-model="classes.makhoi"
                    required
                  >
                    <option
                      v-for="levelClass in listLevelClass"
                      :key="levelClass.makhoi"
                      :value="levelClass.makhoi"
                    >{{levelClass.tenkhoi}}</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="teacher-add"
                  class="col-sm-2 col-form-label"
                >Giáo Viên Chủ Nhiệm</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    id="teacher-add"
                    v-model="classes.giaovienchunhiem"
                    required
                  >
                    <option
                      v-for="teacher in dataAccount"
                      :key="teacher.taikhoan"
                      :value="teacher.taikhoan"
                    >{{teacher.hoten}}</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="Siso-add"
                  class="col-sm-2 col-form-label"
                >Sí Số Tối Đa</label>
                <div class="col-sm-4">
                  <input
                    type="number"
                    id="Siso-add"
                    class="form-control"
                    placeholder="0123456789"
                    v-model="classes.sisotoida"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="year-add"
                  class="col-sm-2 col-form-label"
                >Năm Học</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="year-add"
                    required
                    v-model="classes.namhoc"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-5"></label>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="AddClassrooms"
                  >Thêm Lớp</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataClassroom"
                  >Nhập Lại</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      classes: {
        tenlop: "",
        makhoi: 0,
        giaovienchunhiem: "",
        sisotoida: 0,
        namhoc: ""
      }
    };
  },
  computed: {
    ...mapGetters(["listLevelClass", "dataAccount"])
  },
  mounted() {
    this.getLevelClass().then(req => console.log(req));
    this.fetchAllAccount().then(req => console.log(req));
  },
  methods: {
    ...mapActions(["getLevelClass", "fetchAllAccount", "AddClassroom"]),
    AddClassrooms() {
      this.AddClassroom(this.classes).then(req => {
        if (req) {
          alert("Them Lớp " + this.classes.tenlop + " Thanh Cong!!!");
        }
      });
    },
    resetDataClassroom() {
      this.classes = {
        tenlop: "",
        makhoi: 0,
        giaovienchunhiem: "",
        sisotoida: 0,
        namhoc: ""
      };
    }
  }
};
</script>

<style scoped>
.custom-width-btn {
  width: 140px !important;
}
.custom-width-select {
  width: 100% !important;
}
.noresize {
  resize: none;
}
</style>
