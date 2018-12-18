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
                <label for="username" class="col-sm-2 col-form-label">Tài Khoản</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    class="form-control-plaintext"
                    id="username"
                    v-model="user.username"
                    disabled
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label for="password" class="col-sm-2 col-form-label">Mật Khẩu</label>
                <div class="col-sm-4">
                  <input
                    type="password"
                    class="form-control-plaintext"
                    id="password"
                    placeholder="******"
                    v-model="user.password"
                    disabled
                  >
                </div>
              </div>
              <hr>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label class="col-sm-2 col-form-label" for="member-name">Họ Tên</label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="member-name"
                    required
                    v-model="user.membername"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label for="email" class="col-sm-2 col-form-label">Thư Điện Tử</label>
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
                <label for="bithday" class="col-sm-2 col-form-label">Ngày Sinh</label>
                <div class="col-sm-4">
                  <input
                    type="date"
                    id="bithday"
                    required
                    v-model="user.bithday"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label for="tellphone" class="col-sm-2 col-form-label">SDT</label>
                <div class="col-sm-4">
                  <input
                    type="tel"
                    id="tellphone"
                    required
                    v-model="user.tellphone"
                    :class="classText"
                    :disabled="isNotEdit"
                  >
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-3"></label>
                <label for="address" class="col-sm-2 col-form-label">Địa Chỉ</label>
                <div class="col-sm-4">
                  <textarea
                    class="form-control noresize"
                    rows="4"
                    id="address"
                    model="user.address"
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
export default {
  data() {
    return {
      user: {
        membername: "Đặng Văn Tiến",
        username: "vantien",
        email: "dangvantien1808@gmail.com",
        bithday: "2018-12-17",
        tellphone: "0123456789",
        address:
          "123/3 ấp Mường Mu, xã Mường Thanh, Huyện Mường Chu, tỉnh Mường Mường A"
      },
      classText: "form-control-plaintext",
      isNotEdit: true
    };
  },
  computed: {},
  mounted() {},
  methods: {
    EditUser() {
      console.log(2);
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
      console.log(1);
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
