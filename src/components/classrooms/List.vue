<template>

  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Danh Sách Lớp Học</h2>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <button
            id="AddClass"
            class="btn btn-success mr-3"
            @click="addClass"
          >
            <i class="glyphicon glyphicon-remove"></i>Thêm Lớp Mới
          </button>

          <button
            id="statisticalClass"
            class="btn btn-info mr-3"
            @click="statisticalClass"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Danh Sách Học Sinh Của Lớp
          </button>
          <button
            id="inputPoint"
            class="btn btn-dark mr-3"
            @click="inputPoint"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Nhập Điểm
          </button>
          <button
            id="TablePoint"
            class="btn btn-info mr-3"
            @click="TablePoint"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Xem Bảng Điểm
          </button>

          <button
            id="detailClass"
            class="btn btn-warning mr-3"
            @click="detailClass"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Thông Tin Lớp Học
          </button>

          <button
            id="removeClass"
            class="btn btn-danger mr-3"
            @click="removeClass"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Xóa Lớp Học
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
    ...mapActions([
      "fetchAllClass",
      "deleteClass",
      "setCheckBoxClass",
      "setCodeSelectClass",
      "getInfoDetailClass"
    ]),
    addClass() {
      this.$router.push("/classroom/add");
    },
    TablePoint() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailClass(id[0]).then(res => {
          if (res) {
            this.$router.push("/classroom/tablePoint");
          }
        });
      }
    },
    detailClass() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailClass(id[0]).then(res => {
          if (res) {
            this.$router.push("/classroom/detail");
          }
        });
      }
    },
    statisticalClass() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailClass(id[0]).then(res => {
          if (res) {
            this.$router.push("/classroom/statistical");
          }
        });
      }
    },
    inputPoint() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailClass(id[0]).then(res => {
          if (res) {
            this.$router.push("/classroom/listStudent");
          }
        });
      }
    },
    removeClass() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.malop;
      });
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
                    $("#removeClass").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#inputPoint").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#TablePoint").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#detailClass").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#statisticalClass").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    this.setCheckBoxClass(false);
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
        columns: [...dataHeaderClass.column],
        data: [...that.dataClass],
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true,
        toolbar: "#toolbar",
        sortName: "namhoc",
        sortOrder: "desc"
      });
      $("#table1").on("check.bs.table uncheck.bs.table ", () => {
        let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
          row
        ) {
          return row.malop;
        });
        if (ids.length != 0) {
          that.setCodeSelectClass(ids[0]);
          that.getInfoDetailClass(ids[0]).then(res => console.log(res));
        } else {
          that.setCodeSelectClass(0);
        }
        // that.getInfoDetailClass(ids[0]).then(res => console.log(res));
        that.setCheckBoxClass(
          $("#table1").bootstrapTable("getSelections").length
        );

        $("#removeClass").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#inputPoint").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#TablePoint").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#detailClass").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#statisticalClass").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
      });
      $("#table1").on("refresh.bs.table", () => {
        $("#table1").bootstrapTable("resetSearch");
      });
      this.setCheckBoxClass(false);
    }
  }
};
</script>
