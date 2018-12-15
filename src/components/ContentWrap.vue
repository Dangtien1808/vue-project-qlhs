<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <router-view></router-view>
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
export default {
  name: "ContentWrap",
  created() {}
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
