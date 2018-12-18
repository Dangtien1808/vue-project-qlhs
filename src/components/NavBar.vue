<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/">
      <div class="logo logo-header">
        <span class="logo-mini">
          <img class="logoMain-mini" src="../assets/images.jpg">
        </span>
        <span class="logo-lg">
          <img class="logoMain-lg" src="../assets/images.jpg">
        </span>
      </div>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" v-on:click="setPage" data-toggle="push-menu" role="button">
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
          <li v-if="isLogin" class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ currentUser.name }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img
                  src="~admin-lte/dist/img/user2-160x160.jpg"
                  class="img-circle"
                  alt="User Image"
                >

                <p>
                  {{ currentUser.name }} - {{ currentUser.position }}
                  <small>{{ currentUser.createdAt }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <router-link to="/profile">
                    <a href="#" class="btn btn-default btn-flat btn-outline-info">
                      <i class="fa fa-user"></i>
                      <span>&nbsp; Thông Tin</span>
                    </a>
                  </router-link>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat btn-outline-dark" @click="logout()">
                    <i class="fa fa-user"></i>
                    <span>&nbsp; Đăng Xuất</span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <!-- ./User Account -->
          <!-- Login -->
          <li v-else class="dropdown user user-menu">
            <router-link to="/login">
              <a class="btn btn-outline-primary" @click="login()">
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
import { mapGetters } from "vuex";
export default {
  name: "NavBar",

  data() {
    return {
      isToggle: false,
      isLogin: true
    };
  },
  mounted() {},
  methods: {
    login() {
      this.isLogin = true;
    },
    logout() {
      this.isLogin = false;
      this.$router.push("/login");
    },
    setPage() {
      this.isToggle = !this.isToggle;
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
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
</style>
