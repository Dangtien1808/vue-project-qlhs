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
              ><b>Mã Học Sinh</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="code-class"
                  class="form-control-plaintext color-class "
                  v-model="student.mahocsinh"
                  readonly
                >
              </div>
            </div>
            <div class="form-group row">
              <label
                for="teacher-class"
                class="col-sm-5 pt-2"
              ><b>Tên Học Sinh</b></label>
              <div class="col-sm">
                <input
                  type="text"
                  id="teacher-class"
                  class="form-control-plaintext color-class "
                  v-model="student.hoten"
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
            <div class="form-group row">
              <label
                for="year-class"
                class="col-sm-6 pt-2"
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
              :disabled="isSelect"
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
              :disabled="isSelect"
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
        <div
          class="info-point"
          v-if="isSelect"
        >
          <div class="form-group row">
            <label class="col-sm-3"></label>
            <label
              for="diem-mieng"
              class="col-sm-2 col-form-label"
            >Điểm Miệng</label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="diem-mieng"
                required
                v-model="infoPoint.diemmieng"
              >
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3"></label>
            <label
              for="diem-15phut"
              class="col-sm-2 col-form-label"
            >Điểm 15 phút</label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="diem-15phut"
                placeholder=""
                required
                v-model="infoPoint.diem15phut"
              >
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3"></label>
            <label
              for="diem-1tiet"
              class="col-sm-2 col-form-label"
            >Điểm 1 tiết</label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="diem-1tiet"
                placeholder=""
                required
                v-model="infoPoint.diem1tiet"
              >
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3"></label>
            <label
              for="diem-gk"
              class="col-sm-2 col-form-label"
            >Điểm Giữa Kì</label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="diem-gk"
                placeholder=""
                required
                v-model="infoPoint.diemgk"
              >
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-3"></label>
            <label
              for="diem-ck"
              class="col-sm-2 col-form-label"
            >Điểm Cuối Kì</label>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="diem-ck"
                placeholder=""
                required
                v-model="infoPoint.diemck"
              >
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5"></label>
          <div
            class="col-sm"
            v-if="!isSelect"
          >

            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="getInfoPoint"
            >Nhận Thông Tin Điểm</button>

            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="ComeBack"
            >Quay Lại</button>
          </div>
          <div
            class="col-sm"
            v-else
          >
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="SetInfoPoint"
            >Cập Nhật</button>
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="SetDataClass"
            >Nhập Lại</button>
            <button
              type="button"
              class="btn btn-primary mr-3 custom-width-btn"
              @click="resetChoose"
            >Chọn Lại</button>

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
      student: {
        mahocsinh: "",
        hoten: ""
      },
      mamon: 1,
      hocki: 1,
      infoPoint: {
        machitiet: 0,
        diemmieng: "",
        diem15phut: "",
        diem1tiet: "",
        diemgk: 0,
        diemck: 0
      },
      isSelect: false
    };
  },
  components: {},

  computed: {
    ...mapGetters([
      "getDetailClass",
      "dataStudent",
      "getDetailStudent",
      "listSubjects",
      "getDetailPoint"
    ])
  },
  mounted() {
    if (this.getDetailClass.malop != undefined) {
      this.SetDataClass();
      this.getSubjects().then(req => console.log(req));
      this.fetchStudent().then(res => {
        if (res) {
          console.log(res);
        }
      });
    } else {
      this.$router.push("/classroom/statistical");
    }
  },
  methods: {
    ...mapActions([
      "getInfoPointStudent",
      "fetchStudent",
      "getSubjects",
      "setInfoPointStudent"
    ]),
    ComeBack() {
      this.$router.push("/classroom/listStudent");
    },

    resetChoose() {
      this.isSelect = false;
    },
    SetInfoPoint() {
      this.setInfoPointStudent(this.infoPoint).then(res => {
        if (res) {
          this.getInfoPoint();
          this.$router.push("/classroom/listStudent");
        } else {
          alert("cập nhật thất bại!!");
        }
      });
    },
    getInfoPoint() {
      this.getInfoPointStudent({
        malop: this.classes.malop,
        mahocsinh: this.student.mahocsinh,
        mamon: this.mamon,
        hocki: this.hocki
      }).then(res => {
        if (res) {
          this.SetDataClass();
          this.isSelect = true;
        } else {
          this.isSelect = false;
        }
      });
    },
    ResetData() {},
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
      that.student.mahocsinh = that.getDetailStudent.mahocsinh;
      that.student.hoten = that.getDetailStudent.hoten;

      that.infoPoint.machitiet = that.getDetailPoint.machitiet;
      that.infoPoint.diemmieng = that.getDetailPoint.diemmieng;
      that.infoPoint.diem15phut = that.getDetailPoint.diem15phut;
      that.infoPoint.diem1tiet = that.getDetailPoint.diem1tiet;
      that.infoPoint.diemgk = that.getDetailPoint.diemgk;
      that.infoPoint.diemck = that.getDetailPoint.diemck;
    }
  }
};
</script>

<style scoped>
</style>
