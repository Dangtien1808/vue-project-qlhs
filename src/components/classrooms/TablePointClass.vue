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
        <hr>
        <div class="form-group row mr-auto">
          <div class="col-sm-1"></div>
          <label
            for="student-class"
            class="col-sm-2  pt-2 color-class"
          ><b>Chọn Học Kì</b></label>
          <div class="col-sm-3">
            <select
              id="hocki"
              class="form-control"
              style="width:100%"
              v-model="hocki"
            >
              <option value="1">Học Kì 1</option>
              <option value="2">Học Kì 2</option>
            </select>
          </div>
        </div>
        <div class="form-group row mr-auto">
          <div class="col-sm-1"></div>
          <label
            for="student-class"
            class="col-sm-2  pt-2 color-class"
          ><b>Chọn Môn Học</b></label>
          <div class="col-sm-3">
            <select
              class="form-control"
              id="technique-add"
              v-model="mamon"
            >
              <option
                v-for="subject in listSubjects"
                :key="subject.mamon"
                :value="subject.mamon"
              >{{subject.tenmon}}</option>
            </select>
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
        <div class="row">
          <h4>Bảng Điểm</h4>
          <div class="pull-right">
            <JsonExcel
              class="btn btn-default"
              :data="[...getDataTablePoint]"
              :fields="[...dataHeaderTablePoint.columnTablePoint]"
              name="bangdiem.xls"
            >
              Xuất Báo Cáo
            </JsonExcel>
          </div>
        </div>
        <table id="table"></table>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import dataHeaderTablePoint from "../../lib/dataHeaderTablePoint";
import { mapGetters, mapActions } from "vuex";
import JsonExcel from "json-to-excel";

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
      mamon: 1,
      hocki: 1
    };
  },
  components: {
    JsonExcel
  },
  computed: {
    ...mapGetters(["getDetailClass", "listSubjects", "getDataTablePoint"])
  },
  mounted() {
    if (this.getDetailClass.malop != undefined) {
      this.setDataClass();
      this.getSubjects().then(req => console.log(req));
      this.InitTable();
    } else {
      this.$router.push("/classroom");
    }
  },
  methods: {
    ...mapActions(["getSubjects", "getTablePointByClass"]),
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
    },
    GetTablePoint() {
      this.getTablePointByClass({
        malop: this.classes.malop,
        mamon: this.mamon,
        hocki: this.hocki
      }).then(req => {
        if (req) {
          $("#table").bootstrapTable("load", this.getDataTablePoint);
        }
      });
    },
    InitTable() {
      $("#table").bootstrapTable({
        columns: [...dataHeaderTablePoint.columnTablePoint],
        data: [...this.getDataTablePoint],
        classes: "table table-hover",
        sortName: "mamon",
        sortOrder: "desc",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"]
      });
    },
    ComeBack() {
      this.$router.push("/classroom");
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
