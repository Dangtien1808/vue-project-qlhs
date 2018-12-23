<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thêm Học Sinh Vào Lớp Học</h2>
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
            class="col-sm-3  pt-2 color-class"
          ><b>Nhập Mã Học Sinh Cần Thêm</b></label>
          <div class="col-sm-2">
            <input
              type="number"
              id="student-class"
              class="form-control color-class"
              v-model="MaHocSinh"
            >
          </div>
        </div>
        <hr>
        <div class="form-group row">
          <label class="col-sm-5"></label>
          <div class="col-sm">
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="Add"
            >Thêm Lớp</button>
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="ResetData"
            >Nhập Lại</button>
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="ComeBack"
            >Quay Lại</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
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
      MaHocSinh: 0
    };
  },
  components: {
    // VueBootstrapTypeahead
  },
  computed: {
    ...mapGetters(["getDetailClass"])
  },
  mounted() {
    if (this.getDetailClass.malop != undefined) {
      this.SetDataClass();
    } else {
      this.$router.push("/classroom/statistical");
    }
  },
  methods: {
    ...mapActions(["AddStudentClass"]),
    ComeBack() {
      this.$router.push("/classroom/statistical");
    },
    Add() {
      this.AddStudentClass({
        malop: this.classes.malop,
        mahocsinh: this.MaHocSinh,
        gvphutrach: this.classes.giaovienchunhiem
      }).then(res => {
        if (res) {
          alert("Them Thanh Cong!!!");
          this.$router.push("/classroom/statistical");
        } else {
          alert("Them That Bai!!!");
        }
      });
    },
    ResetData() {
      this.MaHocSinh = 0;
    },
    SetDataClass() {
      const that = this;
      that.classes.malop = that.getDetailClass.malop;
      that.classes.tenlop = that.getDetailClass.tenlop;
      that.classes.makhoi = that.getDetailClass.makhoi;
      that.classes.tenkhoi = that.getDetailClass.tenkhoi;
      that.classes.sisotoida = that.getDetailClass.sisotoida;
      that.classes.giaovienchunhiem = that.getDetailClass.giaovienchunhiem;
      that.classes.hoten = that.getDetailClass.hoten;
      that.classes.namhoc = that.getDetailClass.namhoc;
      that.MaHocSinh = 0;
    }
  }
};
</script>

<style scoped>
</style>
