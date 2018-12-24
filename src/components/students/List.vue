<template>

  <div class="box box-info">
    <div class="box-header with-border text-center">
      <h2 class="box-title">Danh Sách Lớp Học</h2>
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <div id="toolbar">
          <button
            id="addStudent"
            class="btn btn-success mr-3"
            @click="addStudent"
          >
            <i class="glyphicon glyphicon-remove"></i>Thêm Học Sinh
          </button>
          <button
            id="detailStudent"
            class="btn btn-warning mr-3"
            @click="detailStudent"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Chi Tiết Thông Tin Học Sinh
          </button>

          <button
            id="statisticalStudent"
            class="btn btn-info mr-3"
            @click="statisticalStudent"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Bảng Điểm Học Sinh
          </button>

          <button
            id="removeStudent"
            class="btn btn-danger mr-3"
            @click="removeStudent"
            disabled
          >
            <i class="glyphicon glyphicon-remove"></i> Xóa Học Sinh
          </button>
        </div>
        <table id="table1"></table>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dataHeaderStudent from "../../lib/dataHeaderStudent";

export default {
  data() {
    return {
      isLogin: false
    };
  },
  computed: {
    ...mapGetters(["dataStudent"])
  },
  mounted() {
    this.fetchStudent()
      .then(res => {
        if (res) {
          this.initTable();
        }
      })
      .catch(error => console.log(error));
  },
  methods: {
    ...mapActions([
      "fetchStudent",
      "deleteStudents",
      "setCheckBoxStudent",
      "setCodeSelectStudent",
      "getInfoDetailStudent"
    ]),
    addStudent() {
      this.$router.push("/student/add");
    },
    detailStudent() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.mahocsinh;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailStudent(id[0]).then(res => {
          if (res) {
            this.$router.push("/student/detail");
          }
        });
      }
    },
    statisticalStudent() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.mahocsinh;
      });
      if (ids != null) {
        let id = ids;
        this.getInfoDetailStudent(id[0]).then(res => {
          if (res) {
            this.$router.push("/student/statistical");
          }
        });
      }
    },
    removeStudent() {
      let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
        row
      ) {
        return row.mahocsinh;
      });
      if (ids != null) {
        let id = ids;
        this.deleteStudents(id[0])
          .then(res => {
            if (res) {
              this.fetchStudent()
                .then(res => {
                  if (res) {
                    $("#table1").bootstrapTable("remove", {
                      field: "mahocsinh",
                      values: id
                    });
                    $("#removeStudent").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#detailStudent").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    $("#statisticalStudent").prop(
                      "disabled",
                      !$("#table1").bootstrapTable("getSelections").length
                    );
                    this.setCheckBoxStudent(false);
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
        columns: [...dataHeaderStudent.column],
        data: [...that.dataStudent],
        classes: "table table-hover",
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 15, "all"],
        search: true,
        singleSelect: true,
        showRefresh: true,
        toolbar: "#toolbar",
        sortName: "mahocsinh",
        sortOrder: "desc"
      });
      $("#table1").on("check.bs.table uncheck.bs.table ", () => {
        let ids = $.map($("#table1").bootstrapTable("getSelections"), function(
          row
        ) {
          return row.malop;
        });
        if (ids.length != 0) {
          that.setCodeSelectStudent(ids[0]);
          that.getInfoDetailStudent(ids[0]).then(res => console.log(res));
        } else {
          that.setCodeSelectStudent(0);
        }
        that.setCheckBoxStudent(
          $("#table1").bootstrapTable("getSelections").length
        );

        $("#removeStudent").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#detailStudent").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
        $("#statisticalStudent").prop(
          "disabled",
          !$("#table1").bootstrapTable("getSelections").length
        );
      });
      $("#table1").on("refresh.bs.table", () => {
        $("#table1").bootstrapTable("resetSearch");
      });
      this.setCheckBoxStudent(false);
    }
  }
};
</script>

<style scoped>
</style>
