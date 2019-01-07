<template>
  <div class="card">
    <div class="card-header h5">Thông Tin Nhà Trường</div>
    <div class="card-body"></div>
  </div>
</template>

<script>
export default {
  components: {},
  beforeCreate() {
    if (!this.$session.get("username")) {
      this.$router.push("/login");
    }
  }
};
</script>
