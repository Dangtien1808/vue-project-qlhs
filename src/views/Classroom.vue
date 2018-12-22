<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Lớp Học</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Danh Sách Lớp">
            <ListClass />
          </b-tab>
          <b-tab
            title="Thông Tin Lớp Học"
            :disabled="selectClass"
          >
            <DetailClass />
          </b-tab>
          <b-tab title="Thêm Lớp Học">
            <AddClass />
          </b-tab>
          <b-tab title="Thống Kê Kết Quả Học Tập">
            <StatisticalClass />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import AddClass from "../components/classrooms/Add.vue";
import DetailClass from "../components/classrooms/Detail.vue";
import ListClass from "../components/classrooms/List.vue";
import StatisticalClass from "../components/classrooms/Statistical.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AddClass,
    DetailClass,
    ListClass,
    StatisticalClass
  },
  computed: {
    ...mapGetters(["selectClass"])
  },
  beforeCreate() {
    if (!this.$session.get("username")) {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
</style>
