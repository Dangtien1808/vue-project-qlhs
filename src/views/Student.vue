<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Học Sinh</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Danh Sách Học sinh">
            <AddStudent/>
          </b-tab>
          <b-tab title="Thông Tin Học Sinh">
            <ListStudent/>
          </b-tab>
          <b-tab title="Thêm Học Sinh">
            <DetailStudent/>
          </b-tab>
          <b-tab title="Bảng Điểm">
            <StatisticalPointStudent/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>


<script>
import AddStudent from "../components/students/Add.vue";
import DetailStudent from "../components/students/Detail.vue";
import ListStudent from "../components/students/List.vue";
import StatisticalPointStudent from "../components/students/StatisticalPoint.vue";

export default {
  components: {
    AddStudent,
    DetailStudent,
    ListStudent,
    StatisticalPointStudent
  }
};
</script>

<style scoped>
</style>
