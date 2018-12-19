<template>
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
            v-model="user.username"
          >
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Mật khẩu</label>
          <input
            type="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="******"
            v-model="user.password"
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  beforeCreate: function() {
    if (this.$session.exists()) {
      this.$router.push("/");
    }
  },
  methods: {
    ...mapActions(["setLogin"]),
    login() {
      if (this.user.username === "admin" && this.user.password === "123123") {
        this.$session.start();
        this.$session.set("username", this.user.username);
        this.setLogin();
        this.$router.push("/");
        return;
      }
    }
  }
};
</script>
