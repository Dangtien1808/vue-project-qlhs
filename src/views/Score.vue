<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Điểm Học Sinh</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Thông Tin Điểm Môn Học">
            <TablePoints/>
          </b-tab>
          <b-tab title="Nhập Điểm">
            <InputPoints/>
          </b-tab>
          <b-tab title="Chỉnh Sửa Điểm">
            <EditPoints/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>


<script>
import TablePoints from "../components/pointscore/TablePoints.vue";
import InputPoints from "../components/pointscore/InputPoints.vue";
import EditPoints from "../components/pointscore/EditPoints.vue";

export default {
  components: {
    TablePoints,
    InputPoints,
    EditPoints
  }
};
</script>

<style scoped>
</style>
