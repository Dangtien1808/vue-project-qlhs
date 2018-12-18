<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Tài Khoản Giáo Viên</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card v-model="indexTab">
          <b-tab title="Danh Sách Tài Khoản">
            <ListAccount/>
          </b-tab>
          <b-tab title="Chi Tiết Tài Khoản">
            <EditAccount/>
          </b-tab>
          <b-tab title="Thêm Tài Khoản">
            <AddAccount/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import AddAccount from "../components/accounts/Add.vue";
import EditAccount from "../components/accounts/Edit.vue";
import ListAccount from "../components/accounts/List.vue";

export default {
  data() {
    return {
      indexTab: 1
    };
  },
  components: {
    AddAccount,
    EditAccount,
    ListAccount
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
