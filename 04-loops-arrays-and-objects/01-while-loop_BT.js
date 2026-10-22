// Trong AT sẽ có cơ chế retry - thử lại tối đa N lần
//Viết code tìm nút thanh toán, cứ 1sec tìm 1 lần, tìm tối đa 5 lằn. nếu thấy thì dừng. nếu quá 5 lần thì báo lỗi

// let maxRetry = 5; //so lan thu toi da
// let currentRetry = 1; //Lan thu hien tai
// let isFound = false; //Trang thai tim thay nut

// while (isFound === false && currentRetry <= maxRetry) {
//   console.log(`Đang tìm nút thanh toán trên màn hình ...`);

//   //Giả lập tìm kiếm (là cho tỉ lệ tìm kiếm  < 0.8)
//   let toolGiaLap = Math.random();
//   let searchResult = toolGiaLap > 1;

//   console.log(`Search result : ${toolGiaLap}`);

//   if (searchResult === true) {
//     isFound = true; //Tìm thấy rồi. Đổi trạng thái để thoát vòng lặp
//     console.log("NGON! Đã tìm thấy nút thanh toán. Bấm click ngay");
//   } else {
//     console.log("Khong thay, chuan bi thu lai");
//     currentRetry++; //Tăng số lần thử lên 1 (bước nhảy)
//   }
// }

// //xử lý kết quả

// if (isFound === false) {
//   console.log(`TEST FAIL, Đã thử 5 lần nhưgn mạng lag quá, ko thấy nút đâu`);
// }
//Bài tập nhỏ:
// Có 1 hệ thống đăng nhập. -> rule là; hệ thốgn cho phép nhập sai MK tối đa 3 lần. nếu nhập đsung trước khi hết lượt
// -> hiển thị Đăng nhập thành công. Nếu sai -> khóa tài khoản

let matKhauDung = "1234";
let maxLanThu = 3;

// Yêu cầu:
// 1 dùng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
// 2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bằng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else
// Nếu nhập đúng in ra "Đăng nhập thành công"
// Nếu nhập sai in ra sai mật khẩu
// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa
let currentLanThu = 1;
isLogin = false;

while (isLogin === false && currentLanThu <= maxLanThu) {
  console.log(`Lần nhập thứ: ${currentLanThu}`);

  let matKhauNhap;
  if (currentLanThu === 1) {
    matKhauNhap = "0000";
  } else if (currentLanThu === 2) {
    matKhauNhap = "9999";
  } else {
    matKhauNhap = "1111";
  }
  console.log(`Người dùng nhập vào: ${matKhauNhap}`);
  if (matKhauNhap === matKhauDung) {
    isLogin = true;
    console.log("=> Đăng nhập thành công");
  } else {
    console.log("=> Đăng nhập thất bại");
    currentLanThu++;
  }
}
if (isLogin === false) {
  console.log(`Tài khoản bị khóa`);
}
