<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thêm Lớp Học</h2>
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
                    v-model="user.username"
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
                    v-model="user.password"
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
                    v-model="user.membername"
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
                    v-model="user.bithday"
                  >
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
                    v-model="user.tellphone"
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
                    model="user.address"
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
                  >
                    <option
                      value
                      selected
                    ></option>
                    <option value="toan">Toán</option>
                    <option value="ly">Lý</option>
                    <option value="hoa">Hóa</option>
                    <option value="anhvan">Anh Văn</option>
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
export default {
  data() {
    return {
      user: {
        membername: "",
        username: "",
        email: "",
        bithday: "",
        tellphone: "",
        address: {
          street: "",
          city: "",
          Country: ""
        }
      },
      classText: "form-control-plaintext",
      isNotEdit: true
    };
  },
  computed: {},
  mounted() {},
  methods: {
    AddUserUser() {
      console.log(2);
    },
    resetDataAddtUser() {
      console.log(1);
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
