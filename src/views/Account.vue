<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Lớp Học</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1">
            <AddAccount/>
          </b-tab>
          <b-tab title="Tab 2">
            <EditAccount/>
          </b-tab>
          <b-tab title="Tab 3">
            <ListAccount/>
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
  components: {
    AddAccount,
    EditAccount,
    ListAccount
  }
};
</script>

<style scoped>
</style>
