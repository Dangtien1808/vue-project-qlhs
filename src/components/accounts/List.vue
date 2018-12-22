<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Danh Sách Tài Khoản Giáo Viên</h2>
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
    ...mapGetters(["dataAccount", "headerDataAccount"])
  },
  mounted() {
    this.fetchAllAccount()
      .then(res => {
        if (res) {
          this.initTable();
        }
      })
      .catch(error => console.log(error));
  },
  methods: {
    ...mapActions(["fetchAllAccount", "deleteAccount"]),
    removeT() {
      let ids = $.map($("#table").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.taikhoan;
      });
      if (ids != null) {
        let id = ids;
        this.deleteAccount(id[0])
          .then(res => {
            if (res) {
              this.fetchAllAccount()
                .then(res => {
                  if (res) {
                    $("#table").bootstrapTable("remove", {
                      field: "taikhoan",
                      values: id
                    });
                    $("#remove").prop(
                      "disabled",
                      !$("#table").bootstrapTable("getSelections").length
                    );
                    ids = null;
                    alert("Thanh Cong!!!");
                  }
                })
                .catch(error => console.log(error));
            }
          })
          .catch(err => console.log(err));
      }
    },
    initTable() {
      let that = this;
      $("#table").bootstrapTable({
        columns: that.headerDataAccount,
        data: that.dataAccount,
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"],
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
