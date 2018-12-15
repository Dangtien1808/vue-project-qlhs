<template>
  <div class="card">
    <div class="card-header h5">Quản Lý Lớp Học</div>
    <div class="card-body">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Tab 1">
            <AddClass/>
          </b-tab>
          <b-tab title="Tab 2">
            <ListClass/>
          </b-tab>
          <b-tab title="Tab 3">
            <DetailClass/>
          </b-tab>
          <b-tab title="Tab 4">
            <StatisticalClass/>
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

export default {
  components: {
    AddClass,
    DetailClass,
    ListClass,
    StatisticalClass
  }
};
</script>

<style scoped>
</style>
