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
          <button @click="login" type="button" class="btn btn-primary">Đăng Nhập</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      var self = this;
      if (self.user.username === "nndkhoa" && self.user.password === "123") {
        localStorage.access_token = "nndkhoa_token";
        self.$router.push("/");
        return;
      }
    }
  }
};
</script>
