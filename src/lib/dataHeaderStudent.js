// const FormetterGioiTinh(value){
// if(value){
//   return "Nữ";
// }else{
//   return "Nam";
// }
// }
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
      width: "10%",
      align: "center"
    },
    {
      field: "hoten",
      title: "Họ Tên Học Sinh",
      valign: "middle"
    },
    {
      field: "ngaysinh",
      title: "Ngày Sinh",
      align: "center",
      valign: "middle",
      searchable: false,
      width: "20%"
    },
    {
      field: "gioitinh",
      title: "Giới Tính",
      valign: "middle",
      formatter: function formatter(value) {
        if (value == 0) {
          return "Nam";
        } else return "Nữ";
      },
      searchable: false,
      width: "10%"
    },
    {
      field: "diachi",
      title: "Địa Chỉ",
      valign: "middle",
      searchable: false,
      width: "35%"
    }
  ]
};
