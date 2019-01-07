<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thêm Học Sinh</h2>
    </div>
    <div class="box-body">
      <div class="span12">
        <div class="row-fluid">
          <div id="content">
            <form>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="name-add"
                  class="col-sm-2 col-form-label"
                >Tên Học Sinh</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="name-add"
                    required
                    v-model="student.hoten"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="date-add"
                  class="col-sm-2 col-form-label"
                >Ngày Sinh</label>
                <div class="col-sm-4">
                  <input
                    type="date"
                    id="date-add"
                    class="form-control"
                    v-model="student.ngaysinh"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="sex-add"
                  class="col-sm-2 col-form-label"
                >Giới Tính</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    id="sex-add"
                    v-model="student.gioitinh"
                    required
                  >
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="phone-add"
                  class="col-sm-2 col-form-label"
                >SĐT</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="phone-add"
                    class="form-control"
                    v-model="student.sdt"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="address-add"
                  class="col-sm-2 col-form-label"
                >Địa Chỉ</label>
                <div class="col-sm-4">
                  <textarea
                    class="form-control noresize"
                    rows="4"
                    id="address-add"
                    v-model="student.diachi"
                  ></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-5"></label>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="AddStudents"
                  >Thêm Học Sinh</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataStudent"
                  >Nhập Lại</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="callBack"
                  >Quay Lại</button>
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      student: {
        hoten: "",
        ngaysinh: "",
        gioitinh: 0,
        diachi: "",
        sdt: ""
      }
    };
  },
  computed: {},
  mounted() {},
  methods: {
    ...mapActions(["AddStudent"]),
    callBack() {
      this.$router.push("/student");
    },
    AddStudents() {
      this.AddStudent(this.student).then(req => {
        if (req) {
          alert("Them Học Sinh " + this.student.hoten + " Thanh Cong!!!");
          this.$router.push("/student");
        } else {
          alert("Them Học Sinh " + this.student.hoten + " Thất Bại!!!");
        }
      });
    },
    resetDataStudent() {
      this.student = {
        hoten: "",
        ngaysinh: "",
        gioitinh: 0,
        diachi: "",
        sdt: ""
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
