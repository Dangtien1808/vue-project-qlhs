<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Học Sinh</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1">
            <AddStudent/>
          </b-tab>
          <b-tab title="Tab 2">
            <ListStudent/>
          </b-tab>
          <b-tab title="Tab 3">
            <DetailStudent/>
          </b-tab>
          <b-tab title="Tab 4">
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
