<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Quản Lý Danh Tài Khoản</h3>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <button id="insert" class="btn btn-primary ml-3">
            <i class="glyphicon glyphicon-plus icon-plus"></i> Insert
          </button>
          <button id="detail" class="btn btn-info ml-3">
            <i class="glyphicon glyphicon-align-center icon-plus"></i> Detail
          </button>
          <button id="remove" class="btn btn-danger ml-3" @click="removeT()">
            <i class="glyphicon glyphicon-import"></i> Remove
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
    this.initTable();
    this.fetchAllAccount();
  },
  methods: {
    ...mapActions(["fetchAllAccount"]),
    removeT() {
      alert(1);
    },
    initTable() {
      this.fetchAllAccount();
      console.log(this.$store.state.account.main);
      $("#table").bootstrapTable({
        columns: ,
        data: this.dataAccount,
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
    },
    getIdSelections() {
      return $.map($("#table").bootstrapTable("getSelections"), ({ id }) => id);
    }
  }
};
</script>
