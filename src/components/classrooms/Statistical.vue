<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h3 class="box-title">Danh Sách Học Sinh Thuộc Lớp</h3>
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
              ><b>Mã Lớp</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="code-class"
                  class="form-control-plaintext color-class "
                  v-model="classes.malop"
                  readonly
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="name-class"
                class="col-sm-5 pt-2"
              ><b>Tên Lớp</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="name-class"
                  class="form-control-plaintext color-class"
                  v-model="classes.tenlop"
                  readonly
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="year-class"
                class="col-sm-5 pt-2"
              ><b>Năm Học</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="year-class"
                  class="form-control-plaintext color-class"
                  v-model="classes.namhoc"
                  readonly
                >
              </div>
            </div>

          </div>
          <div class="col-sm-4">
            <div class="form-group row">
              <label
                for="teacher-class"
                class="col-sm-6 pt-2"
              ><b>Giáo Viên Chủ Nhiệm</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="teacher-class"
                  class="form-control-plaintext color-class "
                  v-model="classes.hoten"
                  readonly
                >
              </div>
            </div>

            <div class="form-group row">
              <label
                for="level-class"
                class="col-sm-6  pt-3"
              ><b>Khối</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="level-class"
                  class="form-control-plaintext color-class"
                  v-model="classes.tenkhoi"
                  readonly
                >
              </div>
            </div>
          </div>
        </div>
        <div id="toolbar">
          <button
            id="AddStudentClass"
            class="btn btn-success mr-3"
            @click="addStudentClass"
          >
            <i class="glyphicon glyphicon-remove"></i>Thêm Học Sinh
          </button>

          <button
            id="removeStudentClass"
            class="btn btn-danger mr-3"
            @click="removeStudentClass"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Xóa Học Sinh Khỏi Lớp
          </button>
          <button
            type="button"
            class="btn btn-primary mr-3 custom-width-btn"
            @click="ComeBack"
          >Quay Lại</button>
        </div>
        <table id="table"></table>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dataHeaderStudentClass from "../../lib/dataHeaderStudentClass";
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
      }
    };
  },
  computed: {
    ...mapGetters(["getStudentsClass", "getDetailClass"])
  },
  mounted() {
    if (this.getDetailClass.malop != undefined) {
      this.setDataClass();
      this.getListStudentClass(this.classes.malop)
        .then(res => {
          if (res) {
            this.initTable();
          }
        })
        .catch(error => console.log(error));
    } else {
      this.$router.push("/classroom");
    }
  },
  methods: {
    ...mapActions(["getListStudentClass", "deleteStudentClass"]),
    ComeBack() {
      this.$router.push("/classroom");
    },
    addStudentClass() {
      this.$router.push("/classroom/addstudent");
    },
    removeStudentClass() {
      let lstMaHocSinh = $.map(
        $("#table").bootstrapTable("getSelections"),
        function(row) {
          return row.mahocsinh;
        }
      );
      if (lstMaHocSinh != null) {
        let MaHocSinh = lstMaHocSinh[0];
        this.deleteStudentClass({
          malop: this.classes.malop,
          mahocsinh: MaHocSinh,
          gvphutrach: this.classes.giaovienchunhiem
        })
          .then(res => {
            if (res) {
              this.getListStudentClass()
                .then(res => {
                  if (res) {
                    $("#table").bootstrapTable("remove", {
                      field: "mahocsinh",
                      values: lstMaHocSinh
                    });
                    $("#removeStudentClass").prop(
                      "disabled",
                      !$("#table").bootstrapTable("getSelections").length
                    );

                    lstMaHocSinh = null;
                    alert("Thanh Cong!!!");
                  }
                })
                .catch(error => console.log(error));
            }
          })
          .catch(err => console.log(err));
      }
    },
    initTable() {
      let that = this;
      $("#table").bootstrapTable({
        columns: [...dataHeaderStudentClass.column],
        data: [...that.getStudentsClass],
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true,
        toolbar: "#toolbar",
        detailView: true,
        detailFormatter: function detaiFormatter(index, row) {
          let gioitinh = row.gioitinh == 1 ? "Nữ" : "Nam";
          let html = `
          <h4 class="ml-5">Thông Tin Cá Nhân</h4>
          <div class="row">
            <div class="col-sm-4">
              <div class="row">
                <label class="col-sm-4">Mã Học Sinh: </label>
                <label> ${row.mahocsinh}</label>
              </div>
              <div class="row">
                <label class="col-sm-4">Tên Học Sinh: </label>
                <label> ${row.hoten}</label>
              </div>
              <div class="row">
                <label class="col-sm-4">Ngày Sinh: </label>
                <label> ${row.ngaysinh} </label>
              </div>
               <div class="row">
                <label class="col-sm-4">Giới Tính: </label>
                <label> ${gioitinh} </label>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="row">
                <label class="col-sm-4">SĐT: </label>
                <label> ${row.sdt}</label>
              </div>
              <div class="row">
                <label class="col-sm-4">Địa Chỉ: </label>
                <label> ${row.diachi}</label>
              </div>
            </div>
          </div>`;
          return html;
        }
      });
      $("#table").on("check.bs.table uncheck.bs.table ", () => {
        $("#removeStudentClass").prop(
          "disabled",
          !$("#table").bootstrapTable("getSelections").length
        );
      });
      $("#table").on("refresh.bs.table", () => {
        $("#table").bootstrapTable("resetSearch");
      });
    },
    setDataClass() {
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
.color-class {
  color: blue;
  font-size: 18px;
}
</style>
