<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thông Tin Cá Nhân</h2>
    </div>
    <div class="box-body">
      <div class="span12">
        <div class="row-fluid">
          <div id="content">
            <form>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="taikhoan"
                  class="col-sm-2 col-form-label"
                >Tài Khoản</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="taikhoan"
                    v-model="user.taikhoan"
                    disabled
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="matkhau"
                  class="col-sm-2 col-form-label"
                >Mật Khẩu</label>
                <div class="col-sm-4">
                  <input
                    type="password"
                    class="form-control-plaintext"
                    id="matkhau"
                    placeholder="******"
                    v-model="user.matkhau"
                    disabled
                  >
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  class="col-sm-2 col-form-label"
                  for="hoten"
                >Họ Tên</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="hoten"
                    required
                    v-model="user.hoten"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="email"
                  class="col-sm-2 col-form-label"
                >Thư Điện Tử</label>
                <div class="col-sm-4">
                  <input
                    type="email"
                    id="email"
                    required
                    v-model="user.email"
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
                    v-model="user.sdt"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
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
                    v-model="user.ngaysinh"
                    :class="classText"
                    :disabled="isNotEdit"
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
                    v-model="user.gioitinh"
                    :disabled="isNotEdit"
                  >
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
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
                    v-model="user.diachi"
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
                  >Chỉnh Sửa</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="EditUser"
                    v-if="!isNotEdit"
                  >Thay Đổi</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                    @click="resetDataEditUser"
                    v-if="!isNotEdit"
                  >Nhập Lại</button>
                  <button
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
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
      user: {
        taikhoan: "",
        matkhau: "",
        email: "",
        hoten: "",
        ngaysinh: "",
        sdt: "",
        diachi: "",
        gioitinh: 0
      },
      classText: "form-control-plaintext",
      isNotEdit: true
    };
  },
  computed: {
    ...mapGetters(["currentUserEdit"])
  },
  mounted() {
    this.resetDataEditUser();
  },
  methods: {
    ...mapActions(["editUser", "loadInfoUser"]),
    EditUser() {
      this.editUser(this.user).then(req => {
        if (req) {
          alert("thay doi thanh cong!!!");
          this.setNotEdit();
        }
      });
    },
    setEdit() {
      this.isNotEdit = false;
      this.classText = "form-control form-control-plaintext";
    },
    setNotEdit() {
      this.isNotEdit = true;
      this.classText = "form-control-plaintext";
    },
    resetDataEditUser() {
      const that = this;
      that.loadInfoUser(that.$session.get("username")).then(res => {
        if (res) {
          that.user.taikhoan = that.currentUserEdit.taikhoan;
          that.user.email = that.currentUserEdit.email;
          that.user.hoten = that.currentUserEdit.hoten;
          that.user.ngaysinh = that.currentUserEdit.ngaysinh;
          that.user.sdt = that.currentUserEdit.sdt;
          that.user.diachi = that.currentUserEdit.diachi;
          that.user.gioitinh = that.currentUserEdit.gioitinh;
        }
      });
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
