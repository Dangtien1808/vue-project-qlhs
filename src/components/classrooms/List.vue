<template>
  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Danh Sách Lớp Học</h2>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <button
            id="remove1"
            class="btn btn-danger mr-3"
            @click="removeClass"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Remove
          </button>
        </div>
        <table id="table1"></table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dataHeaderClass from "../../lib/dataHeaderClass";

export default {
  data() {
    return {
      isLogin: false
    };
  },
  computed: {
    ...mapGetters(["dataClass"])
  },
  mounted() {
    this.fetchAllClass()
      .then(res => {
        if (res) {
          this.initTable();
        }
      })
      .catch(error => console.log(error));
  },
  methods: {
    ...mapActions(["fetchAllClass", "deleteClass", "setCheckBoxClass"]),
    removeClass() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
      console.log(ids);
      if (ids != null) {
        let id = ids;
        this.deleteClass(id[0])
          .then(res => {
            if (res) {
              this.fetchAllClass()
                .then(res => {
                  if (res) {
                    $("#table1").bootstrapTable("remove", {
                      field: "malop",
                      values: id
                    });
                    $("#remove1").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
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
      $("#table1").bootstrapTable({
        columns: dataHeaderClass.column,
        data: that.dataClass,
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true,
        toolbar: "#toolbar"
      });
      $("#table1").on("check.bs.table uncheck.bs.table ", () => {
        that.setCheckBoxClass(
          $("#table1").bootstrapTable("getSelections").length
        );

        $("#remove1").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
      });
      $("#table1").on("refresh.bs.table", () => {
        $("#table1").bootstrapTable("resetSearch");
      });
    }
  }
};
</script>

<style scoped>
</style>
