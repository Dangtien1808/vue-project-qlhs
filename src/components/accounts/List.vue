<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Quản Lý Danh Tài Khoản</h3>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <label
            id="remove"
            class="btn btn-danger ml-3"
            @click="removeT"
          >
            <i class="glyphicon glyphicon-remove"></i> Remove
          </label>
        </div>
        <table id="table"></table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    this.initTable();
  },
  methods: {
    removeT() {
      alert(1);
    },
    initTable() {
      $("#table").bootstrapTable({
        columns: this.dataAccount.column,
        data: this.dataAccount.listItem,
        classes: "table table-hover",
        pagination: true,
        pageSize: 3,
        pageList: [3, 6, 9, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true
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
