<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Đổi Mật khẩu Cá Nhân</h2>
    </div>
    <div class="box-body">
      <div class="span12">
        <div class="row-fluid">
          <div id="content">
            <form>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="username-change-password"
                  class="col-sm-2 col-form-label"
                >Tài Khoản</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="username-change-password"
                    v-model="user.taikhoan"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="password"
                  class="col-sm-2 col-form-label"
                >Mật Khẩu Hiện Tại</label>
                <div class="col-sm-4">
                  <div class="form-group pass_show">
                    <input
                      type="password"
                      value="vantien"
                      class="form-control"
                      placeholder="Mật Khẩu Cũ"
                      v-model="passwordOld"
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="password"
                  class="col-sm-2 col-form-label"
                >Mật Khẩu Mới</label>
                <div class="col-sm-4">
                  <div class="form-group pass_show">
                    <input
                      type="password"
                      value="vantien"
                      class="form-control"
                      placeholder="Mật Khẩu Mới"
                      v-model="passwordNew"
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label
                  for="password"
                  class="col-sm-2 col-form-label"
                >Nhập Lại Mật Khẩu</label>
                <div class="col-sm-4">
                  <div class="form-group pass_show">
                    <input
                      type="password"
                      value="vantien"
                      class="form-control"
                      placeholder="Nhập Lại Mật Khẩu"
                      v-model="repasswordNew"
                    >
                  </div>
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label class="col-sm-4"></label>
                <div class="col-sm-4">
                  <button
                    @click="ChangePassword"
                    type="button"
                    class="btn btn-primary mr-3 custom-width-btn"
                  >Thay Đổi Mật Khẩu</button>
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
      user: {
        taikhoan: this.$session.get("username")
      },
      passwordOld: "",
      passwordNew: "",
      repasswordNew: ""
    };
  },
  computed: {},
  mounted() {},
  methods: {
    ...mapActions(["changePassword"]),
    ChangePassword() {
      if (this.passwordOld == "") {
        alert("Mật Khẩu cũ không được để trống!!!!");
      } else if (this.passwordNew == "")
        alert("Mật Khẩu mới không được để trống!!!!");
      else if (this.passwordNew != this.repasswordNew)
        alert("Mật Khẩu nhập lại không chính xác!!!!");
      else if (
        this.passwordOld != this.passwordNew &&
        this.passwordNew == this.repasswordNew
      ) {
        this.changePassword({
          taikhoan: this.user.taikhoan,
          matkhau: this.passwordNew
        }).then(req => {
          if (req) {
            alert("đổi mật khẩu thành công!!!!");
          } else {
            alert("đổi mật khẩu thất bại!!!!");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.custom-width-btn {
  width: 100% !important;
}
</style>
