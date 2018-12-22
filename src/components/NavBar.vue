<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/">
      <div class="logo logo-header">
        <span class="logo-mini">
          <img
            class="logoMain-mini"
            src="../assets/images.jpg"
          >
        </span>
        <span class="logo-lg">
          <img
            class="logoMain-lg"
            src="../assets/images.jpg"
          >
        </span>
      </div>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a
        href="#"
        class="sidebar-toggle"
        data-toggle="push-menu"
        role="button"
      >
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- ./Sidebar toggle button-->
      <!-- Navbar Center Header -->
      <div class="navbar-custom-menu">
        <h2 style="color:blue">
          <span>Trường Trung Học Phổ Thông DVT</span>
        </h2>
      </div>
      <!-- ./Navbar Center Header -->
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account -->
          <li
            v-if="isLogin"
            class="dropdown user user-menu"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="~admin-lte/dist/img/user2-160x160.jpg"
                class="user-image"
                alt="User Image"
              >
              <span class="hidden-xs">{{ currentUser.hoten }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <label class="col-sm-4 mr-1"><b>Họ Tên:</b></label>
                  <div class="col-sm"> <b>{{currentUser.hoten}}</b></div>
                </row>
                <row>
                  <label class="col-sm-4 mr-1"><b>email:</b></label>
                  <div class="col-sm"> <b>{{currentUser.email}}</b></div>
                </row>
                <row>
                  <label class="col-sm-4 mr-1"><b>SĐT:</b></label>
                  <div class="col-sm"> <b>{{currentUser.sdt}}</b></div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <router-link to="/profile">
                    <a
                      href="#"
                      class="btn btn-default btn-flat btn-outline-info"
                    >
                      <i class="fa fa-user"></i>
                      <span>&nbsp; Thông Tin</span>
                    </a>
                  </router-link>
                </div>
                <div class="pull-right">
                  <a
                    href="#"
                    class="btn btn-default btn-flat btn-outline-dark"
                    @click="logout()"
                  >
                    <i class="fa fa-user"></i>
                    <span>&nbsp; Đăng Xuất</span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <!-- ./User Account -->
          <!-- Login -->
          <li
            v-else
            class="dropdown user user-menu"
          >
            <router-link to="/login">
              <a
                class="btn btn-outline-primary"
                @click="login()"
              >
                <i class="fa fa-user"></i>
                <span>&nbsp; Đăng Nhập</span>
              </a>
            </router-link>
          </li>
          <!-- ./Login -->
        </ul>
      </div>
      <!-- ./Navbar Right Menu -->
    </nav>
  </header>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["currentUser"]),
    ...mapState({
      isLogin: state => state.user.main.isLogin
    })
  },
  mounted() {},
  methods: {
    ...mapActions(["setLogout"]),
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.setLogout().then(req => {
        if (req) {
          this.$session.destroy();
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
.btn {
  line-height: 1.2 !important;
}
.label {
  line-height: 3 !important;
}
.logo-header {
  background-color: #ffffff !important;
  height: 70px !important;
}
.logoMain-mini {
  height: 30px !important;
  width: 40px !important;
  margin-top: 10px;
}
.logoMain-lg {
  border-radius: 10% !important;
  height: 70px !important;
  width: 140px !important;
}
.user-body {
  background-color: gray;
  color: white;
}
.dropdown-menu {
  width: 360px !important;
}
</style>
