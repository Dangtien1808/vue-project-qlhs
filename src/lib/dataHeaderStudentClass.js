module.exports = {
  column: [
    {
      checkbox: true,
      align: "center",
      valign: "middle"
    },
    {
      field: "mahocsinh",
      title: "Mã Học Sinh",
      valign: "middle",
      width: "15%",
      align: "center",
      visible: false
    },
    {
      field: "hoten",
      title: "Họ Tên",
      valign: "middle"
    },
    {
      field: "ngaysinh",
      title: "Ngày Sinh",
      align: "center",
      valign: "middle",
      width: "20%"
    },
    {
      field: "gioitinh",
      title: "Giới Tính",
      valign: "middle",
      width: "15%",
      formatter: function formatter(value) {
        if (value == 0) {
          return "Nam";
        } else return "Nữ";
      }
    }
  ]
};
