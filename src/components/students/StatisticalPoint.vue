<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Xem Bảng Điểm Học Sinh</h2>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div class="row mr-auto ">
          <div class="col-sm-1"></div>
          <div class="col-sm-4">
            <div class="form-group row">
              <label
                for="code-class"
                class="col-sm-5 pt-2"
              ><b>Mã Học Sinh</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="code-class"
                  class="form-control-plaintext color-class "
                  v-model="student.mahocsinh"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="name-class"
                class="col-sm-5 pt-2"
              ><b>Họ Tên Học Sinh</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="name-class"
                  class="form-control-plaintext color-class"
                  v-model="student.hoten"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="year-class"
                class="col-sm-5 pt-2"
              ><b>Ngày Sinh</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="year-class"
                  class="form-control-plaintext color-class"
                  v-model="student.ngaysinh"
                  disabled
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="sex-add"
                class="col-sm-5 pt-2"
              ><b>Giới Tính</b></label>

              <div class="col-sm">
                <select
                  class="form-control-plaintext color-class"
                  id="sex-add"
                  v-model="student.gioitinh"
                  required
                  disabled
                >
                  <option value="0">Nam</option>
                  <option value="1">Nữ</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group row">
              <label
                for="phone-add"
                class="col-sm-5 pt-2"
              ><b>SĐT</b></label>

              <div class="col-sm">
                <input
                  type="text"
                  id="phone-add"
                  class="form-control-plaintext color-class"
                  v-model="student.sdt"
                  disabled
                >
              </div>
            </div>

            <div class="form-group row">
              <label
                for="address-add"
                class="col-sm-5 pt-2"
              ><b>Địa Chỉ</b></label>
              <div class="col-sm">
                <textarea
                  class="form-control-plaintext color-class noresize"
                  rows="4"
                  id="address-add"
                  v-model="student.diachi"
                  disabled
                ></textarea>
              </div>
            </div>

          </div>
        </div>
        <hr>
        <div class="form-group row mr-auto">
          <div class="col-sm-1"></div>
          <label
            for="student-class"
            class="col-sm-3  pt-2 color-class"
          ><b>Chọn Lớp</b></label>
          <div
            class="col-sm-2"
            v-if="getListClassByCodeStudent.length >0"
          >
            <!-- <vue-bootstrap-typeahead
              :data="getListClassByCodeStudent"
              size="sm"
              :serializer="s => {return s.malop+'-'+ s.tenlop + '-' + s.namhoc}"
              placeholder="Nhập Lớp..."
              v-model="txtClass"
              :minMatchingChars="1"
              @hit="classes = $event"
            ></vue-bootstrap-typeahead> -->
            <select
              class="form-control-plaintext color-class"
              id="sex-add"
              v-model="classes"
              required
            >
              <option
                v-for="item in getListClassByCodeStudent"
                :key="item.malop"
                :value="item.malop"
              >{{item.tenlop}}</option>
            </select>
          </div>
          <div
            class="col-sm-2"
            v-else
          >
            <label class="pt-2"><b style="color:red">Học Sinh Chưa Có Lớp</b></label>
          </div>
        </div>
        <hr>
        <div class="form-group row mr-auto">
          <label class="col-sm-5"></label>
          <div class="col-sm">
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="GetTablePoint"
            >Xem Điểm</button>

            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="ComeBack"
            >Quay Lại</button>
          </div>
        </div>
        <hr>
        <h4>Điểm Học Kì 1</h4>
        <table id="table-hk1"></table>
        <hr>
        <h4>Điểm Học Kì 2</h4>
        <table id="table-hk2"></table>
      </div>
    </div>
  </div>
</template>

<script>
// import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import dataHeaderTablePoint from "../../lib/dataHeaderTablePoint";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      student: {
        hoten: "",
        ngaysinh: "",
        gioitinh: 0,
        diachi: "",
        sdt: ""
      },
      classes: 0
    };
  },
  components: {
    // VueBootstrapTypeahead
  },
  computed: {
    ...mapGetters([
      "getDetailStudent",
      "getListClassByCodeStudent",
      "dataTablePointStudent"
    ])
  },
  mounted() {
    if (this.getDetailStudent.mahocsinh != undefined) {
      this.SetDataStudent();
      this.getClassesByCodeStudents(this.getDetailStudent.mahocsinh).then(
        res => {
          if (res) {
            console.log(res);
          }
        }
      );
    } else {
      this.$router.push("/student");
    }
  },
  methods: {
    ...mapActions(["getClassesByCodeStudents", "getTablePointStudents"]),
    SetDataStudent() {
      const that = this;
      that.student.mahocsinh = that.getDetailStudent.mahocsinh;
      that.student.hoten = that.getDetailStudent.hoten;
      that.student.gioitinh = that.getDetailStudent.gioitinh;
      that.student.ngaysinh = that.getDetailStudent.ngaysinh;
      that.student.sdt = that.getDetailStudent.sdt;
      that.student.diachi = that.getDetailStudent.diachi;
      that.classes = 0;
    },
    GetTablePoint() {
      let that = this;
      if (that.classes != 0) {
        that
          .getTablePointStudents({
            mahocsinh: that.student.mahocsinh,
            malop: that.classes
          })
          .then(res => {
            if (res) {
              $("#table-hk1").bootstrapTable({
                columns: [...dataHeaderTablePoint.columnHK1],
                data: [...that.dataTablePointStudent],
                classes: "table table-hover",
                sortName: "mamon",
                sortOrder: "desc"
              });
              $("#table-hk2").bootstrapTable({
                columns: [...dataHeaderTablePoint.columnHK2],
                data: [...that.dataTablePointStudent],
                classes: "table table-hover",
                sortName: "mamon",
                sortOrder: "desc"
              });
            }
          });
      }
    },
    ComeBack() {
      this.$router.push("/student");
    }
  }
};
</script>

<style scoped>
.color-class {
  color: blue;
  font-size: 18px;
}

.noresize {
  resize: none;
}
</style>
