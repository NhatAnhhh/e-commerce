export function formatDate(dateString) {
  // Tạo một đối tượng Date từ chuỗi ngày tháng
  var date = new Date(dateString);

  // Lấy các giá trị ngày, tháng và năm từ đối tượng Date
  var day = date.getDate();
  var month = date.getMonth() + 1; // Giá trị tháng là từ 0 đến 11, nên cần cộng thêm 1
  var year = date.getFullYear();

  // Trả về chuỗi ngày tháng đã được định dạng lại
  return day + '/' + month + '/' + year;
}
