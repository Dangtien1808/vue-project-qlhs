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
                    v-model="student.hoten"
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
                    v-model="student.gioitinh"
                  >
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="ngaysinh"
                  class="col-sm-2 col-form-label"
                >Ngày Sinh</label>
                <div class="col-sm-4">
                  <input
                    type="date"
                    id="ngaysinh"
                    required
                    v-model="student.ngaysinh"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="sdt"
                  class="col-sm-2 col-form-label"
                >SDT</label>
                <div class="col-sm-4">
                  <input
                    type="tel"
                    id="sdt"
                    required
                    v-model="student.sdt"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="diachi"
                  class="col-sm-2 col-form-label"
                >Địa Chỉ</label>
                <div class="col-sm-4">
                  <textarea
                    class="form-control noresize"
                    rows="4"
                    id="diachi"
                    v-model="student.diachi"
                    :disabled="isNotEdit"
                  ></textarea>
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
                    @click="BackListStudent"
                    v-if="isNotEdit"
                  >Quay Lại</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="EditStudent"
                    v-if="!isNotEdit"
                  >Thay Đổi</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataEditStudent"
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
      student: {
        mahocsinh: "",
        hoten: "",
        ngaysinh: "",
        diachi: "",
        gioitinh: 0,
        sdt: ""
      },
      classText: "form-control-plaintext",
      isNotEdit: true
    };
  },
  computed: {
    ...mapGetters(["getCodeStudent", "getDetailStudent", "selectStudent"])
  },
  mounted() {
    if (this.getDetailStudent.mahocsinh != undefined) {
      this.resetDataEditStudent();
    } else {
      this.$router.push("/student");
    }
  },
  destroyed() {
    this.resetDetailStudent();
  },
  methods: {
    ...mapActions([
      "editStudent",
      "getInfoDetailStudent",
      "resetDetailStudent",
      "getLevelStudent",
      "fetchAllAccount"
    ]),
    EditStudent() {
      this.editStudent(this.student).then(req => {
        if (req) {
          alert("thay doi thanh cong!!!");
          this.resetDataEditStudent();
          this.setNotEdit();
          this.$router.push("/student");
        }
      });
    },
    BackListStudent() {
      this.$router.push("/student");
    },
    setEdit() {
      this.isNotEdit = false;
      this.classText = "form-control form-control-plaintext";
    },
    setNotEdit() {
      this.isNotEdit = true;
      this.classText = "form-control-plaintext";
    },
    resetDataEditStudent() {
      const that = this;
      that.student.mahocsinh = that.getDetailStudent.mahocsinh;
      that.student.hoten = that.getDetailStudent.hoten;
      that.student.ngaysinh = that.getDetailStudent.ngaysinh;
      that.student.diachi = that.getDetailStudent.diachi;
      that.student.gioitinh = that.getDetailStudent.gioitinh;
      that.student.sdt = that.getDetailStudent.sdt;
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
