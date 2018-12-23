<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thông Tin Lớp Học</h2>
    </div>
    <div class="box-body">
      <div class="span12">
        <div class="row-fluid">
          <div id="content">
            <form>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="classname-detail"
                  class="col-sm-2 col-form-label"
                >Tên Lớp</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="classname-detail"
                    v-model="classes.tenlop"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="level-class-detail"
                  class="col-sm-2 col-form-label"
                >Khối</label>
                <div class="col-sm-4">
                  <select
                    :class="classText"
                    id="level-class-detail"
                    :disabled="isNotEdit"
                    v-model="classes.makhoi"
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
                  for="teacher-detail"
                  class="col-sm-2 col-form-label"
                >Giáo Viên Chủ Nhiệm</label>
                <div class="col-sm-4">
                  <select
                    :class="classText"
                    id="teacher-detail"
                    :disabled="isNotEdit"
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
                    placeholder="0123456789"
                    v-model="classes.sisotoida"
                    :class="classText"
                    :disabled="isNotEdit"
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
                    id="year-add"
                    required
                    v-model="classes.namhoc"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>

              <hr>
              <div class="form-group row">
                <label class="col-sm-4"></label>
                <div class="col-sm-5">
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="setEdit"
                    v-if="isNotEdit"
                  >Chỉnh Sửa</button><button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="BackListClass"
                    v-if="isNotEdit"
                  >Quay Lại</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="EditClass"
                    v-if="!isNotEdit"
                  >Thay Đổi</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataEditClass"
                    v-if="!isNotEdit"
                  >Nhập Lại</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    v-if="!isNotEdit"
                    @click="setNotEdit"
                  >Hủy</button>
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
        malop: "",
        tenlop: "",
        makhoi: 0,
        tenkhoi: "",
        giaovienchunhiem: "",
        hoten: "",
        sisotoida: 0,
        namhoc: ""
      },
      classText: "form-control-plaintext",
      isNotEdit: true
    };
  },
  computed: {
    ...mapGetters([
      "getCodeClass",
      "listLevelClass",
      "dataAccount",
      "getDetailClass",
      "selectClass"
    ])
  },
  mounted() {
    if (this.getDetailClass.malop != undefined) {
      this.resetDataEditClass();
      this.getLevelClass();
      this.fetchAllAccount();
    } else {
      this.$router.push("/classroom");
    }
  },
  destroyed() {
    this.resetDetailClass();
  },
  methods: {
    ...mapActions([
      "editClass",
      "getInfoDetailClass",
      "resetDetailClass",
      "getLevelClass",
      "fetchAllAccount"
    ]),
    EditClass() {
      this.editClass(this.classes).then(req => {
        if (req) {
          alert("thay doi thanh cong!!!");
          this.setNotEdit();
          this.$router.push("/classroom");
        }
      });
    },
    BackListClass() {
      this.$router.push("/classroom");
    },
    setEdit() {
      this.isNotEdit = false;
      this.classText = "form-control form-control-plaintext";
    },
    setNotEdit() {
      this.isNotEdit = true;
      this.classText = "form-control-plaintext";
    },
    resetDataEditClass() {
      const that = this;
      that.classes.malop = that.getDetailClass.malop;
      that.classes.tenlop = that.getDetailClass.tenlop;
      that.classes.makhoi = that.getDetailClass.makhoi;
      that.classes.tenkhoi = that.getDetailClass.tenkhoi;
      that.classes.sisotoida = that.getDetailClass.sisotoida;
      that.classes.giaovienchunhiem = that.getDetailClass.giaovienchunhiem;
      that.classes.hoten = that.getDetailClass.hoten;
      that.classes.namhoc = that.getDetailClass.namhoc;
    }
  }
};
</script>

<style scoped>
.custom-width-btn {
  width: 120px !important;
}
.custom-width-select {
  width: 100% !important;
}
.noresize {
  resize: none;
}
</style>
