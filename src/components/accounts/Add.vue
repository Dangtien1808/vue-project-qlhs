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
                  for="username-add"
                  class="col-sm-2 col-form-label"
                >Tài Khoản</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="username-add"
                    placeholder="admin"
                    required
                    v-model="user.taikhoan"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="password-add"
                  class="col-sm-2 col-form-label"
                >Mật Khẩu</label>
                <div class="col-sm-4">
                  <input
                    type="password"
                    class="form-control"
                    id="password-add"
                    placeholder="******"
                    required
                    v-model="user.matkhau"
                  >
                </div>
              </div>

              <hr>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  class="col-sm-2 col-form-label"
                  for="member-name-add"
                >Họ và Tên</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    id="member-name-add"
                    v-model="user.hoten"
                    required
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="email-add"
                  class="col-sm-2 col-form-label"
                >Thư Điện Tử</label>
                <div class="col-sm-4">
                  <input
                    type="email"
                    id="email-add"
                    class="form-control"
                    placeholder="admin@gmail.com"
                    required
                    v-model="user.email"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="bithday-add"
                  class="col-sm-2 col-form-label"
                >Ngày Sinh</label>
                <div class="col-sm-4">
                  <input
                    type="date"
                    id="bithday-add"
                    class="form-control"
                    v-model="user.ngaysinh"
                  >
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="gioitinh"
                  class="col-sm-2 col-form-label"
                >gioitinh</label>
                <div class="col-sm-4">
                  <select
                    id="gioitinh"
                    class="form-control"
                    v-model="user.gioitinh"
                    required
                  >
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="tellphone-add"
                  class="col-sm-2 col-form-label"
                >SDT</label>
                <div class="col-sm-4">
                  <input
                    type="tel"
                    id="tellphone-add"
                    class="form-control"
                    placeholder="0123456789"
                    v-model="user.sdt"
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
                    v-model="user.diachi"
                  ></textarea>
                </div>
              </div>

              <hr>

              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="technique-add"
                  class="col-sm-2 col-form-label"
                >Môn Học Phụ Trách</label>
                <div class="col-sm-4">
                  <select
                    class="form-control"
                    id="technique-add"
                    v-model="user.monhoc"
                    required
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

              <div class="form-group row">
                <label class="col-sm-5"></label>
                <div class="col-sm">
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="AddUserUser"
                  >Thêm Tài Khoản</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataAddtUser"
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
      user: {
        taikhoan: "",
        matkhau: "",
        email: "",
        hoten: "",
        ngaysinh: "",
        sdt: "",
        diachi: "",
        gioitinh: 0,
        monhoc: 0
      }
    };
  },
  computed: {
    ...mapGetters(["listSubjects"])
  },
  mounted() {
    this.getSubjects().then(req => console.log(req));
  },
  methods: {
    ...mapActions(["getSubjects", "addAccount"]),
    AddUserUser() {
      this.addAccount(this.user).then(req => {
        if (req) {
          alert("Them Giao Vien " + this.user.hoten + " Thanh Cong!!!");
        }
      });
    },
    resetDataAddtUser() {
      this.user = {
        taikhoan: "",
        matkhau: "",
        email: "",
        hoten: "",
        ngaysinh: "",
        sdt: "",
        diachi: "",
        gioitinh: 0,
        monhoc: 0
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
