<template>
  <div>
    <div class="card">
      <div class="card-header h5">Đăng Nhập</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Tài khoản</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="taikhoan01"
              v-model="user.taikhoan"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="******"
              v-model="user.matkhau"
            >
          </div>
          <div class="form-group">
            <button
              @click="login"
              type="button"
              class="btn btn-primary"
            >Đăng Nhập</button>
          </div>
        </form>
      </div>
    </div>
    <b-modal
      id="modalPopover"
      centered
      title="Thông Báo !"
      v-model="show"
      ok-only
    >
      <p class="my-4">{{msg}}</p>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        taikhoan: "",
        matkhau: ""
      },
      show: false,
      msg: ""
    };
  },

  computed: {},
  beforeCreate: function() {
    if (this.$session.get("username")) {
      this.$router.push("/");
    }
  },
  methods: {
    ...mapActions(["setLogin"]),
    login() {
      const that = this;
      if (that.user.taikhoan === "") {
        that.msg = "Tài khoản Trống!";
        that.show = true;
      }
      if (that.user.matkhau === "") {
        that.msg = "Mật Khẩu Trống!";
        that.show = true;
      }
      if (that.user.taikhoan !== "" && that.user.matkhau !== "") {
        that.setLogin(that.user).then(req => {
          if (req) {
            that.$session.start();
            that.$session.set("username", that.user.taikhoan);
            that.$router.push("/");
          } else {
            that.msg = "Thông Tin Tài Khoản Không Hợp Lệ!";
            that.show = true;
          }
        });
      }
    }
  }
};
</script>
