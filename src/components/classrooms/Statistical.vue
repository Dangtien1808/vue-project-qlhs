<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Thêm Tài Khoản Giáo Viên</h2>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <button
            id="remove"
            class="btn btn-danger mr-3"
            @click="removeT"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Remove
          </button>
        </div>
        <table id="table"></table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isLogin: false
    };
  },
  computed: {
    ...mapGetters(["dataAccount"])
  },
  mounted() {
    this.fetchAllAccount();
    this.initTable();
  },
  methods: {
    ...mapActions(["fetchAllAccount"]),
    removeT() {
      alert(1);
    },
    initTable() {
      $("#table").bootstrapTable({
        columns: this.dataAccount.column,
        data: this.dataAccount.listItem,
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 20, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true,
        toolbar: "#toolbar"
      });
      $("#table").on("check.bs.table uncheck.bs.table ", () => {
        $("#remove").prop(
          "disabled",
          !$("#table").bootstrapTable("getSelections").length
        );
      });
      $("#table").on("refresh.bs.table", () => {
        $("#table").bootstrapTable("resetSearch");
      });
    }
  }
};
</script>

<style scoped>
</style>
