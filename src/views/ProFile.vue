<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Thông Tin Cá Nhân</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Thông Tin">
            <EditInfo />
          </b-tab>
          <b-tab title="Đổi Mật Khẩu">
            <ChangePassword />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import ChangePassword from "../components/profile/ChangePassword.vue";
import EditInfo from "../components/profile/EditInfo.vue";

export default {
  components: {
    EditInfo,
    ChangePassword
  }
};
</script>

<style scoped>
</style>
