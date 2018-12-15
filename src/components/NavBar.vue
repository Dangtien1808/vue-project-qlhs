<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/">
      <div class="logo logo-header">
        <span class="logo-mini">
          <i class="fa fa-home"></i>
        </span>
        <span class="logo-lg">
          <img class="logoMain" src="../assets/images.jpg">
        </span>
      </div>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" v-on:click="setPage" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu pull-left">
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
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import logo from "../assets/images.jpg";
export default {
  name: "NavBar",

  data() {
    return {
      isToggle: false,
      logo: logo
    };
  },
  mounted() {},
  methods: {
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
  /* padding-top: 10px !important; */
  /* background-color: #222d32 !important; */
  background-color: #ebeef0 !important;
  height: 70px !important;
}
.logoMain {
  border-radius: 10% !important;
  height: 70px !important;
  width: 140px !important;
}
</style>
