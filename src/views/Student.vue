<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Học Sinh</div>
    <div class="card-body">
      <b-card no-body>
        <router-view></router-view>
      </b-card>
    </div>
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

<style scoped>
</style>
