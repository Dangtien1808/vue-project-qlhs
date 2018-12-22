<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Tài Khoản Giáo Viên</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Danh Sách Tài Khoản">
            <ListAccount />
          </b-tab>
          <b-tab title="Thêm Tài Khoản">
            <AddAccount />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import AddAccount from "../components/accounts/Add.vue";
import ListAccount from "../components/accounts/List.vue";

export default {
  data() {
    return {};
  },
  components: {
    AddAccount,
    ListAccount
  },
  beforeCreate() {
    if (!this.$session.get("username")) {
      this.$router.push("/login");
    }
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
