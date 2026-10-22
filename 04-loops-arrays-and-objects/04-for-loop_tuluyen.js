// Bộ bài tập thực chiến này được thiết kế riêng bám sát các kiến thức bạn vừa tổng hợp, đi từ việc làm quen cú pháp cho đến các tình huống thực tế khi viết code và làm automation test.

// ---

// ## PHẦN 1: CƠ BẢN, LÀM QUEN (BÀI 1 ĐẾN BÀI 15)

// ### Nhóm 1: Vòng lặp `while`

// * **Bài 1:** Khởi tạo một biến `energy = 10`.
//  Viết vòng lặp `while` in ra dòng chữ "Đang chạy test case..." và mỗi lần lặp thì giảm `energy` đi 2 đơn vị.
// Vòng lặp dừng khi `energy` không còn lớn hơn 0.
let energy = 10;
let no = 1;
while (energy > 0) {
  console.log(`Đang chạy testcase ${no}`);
  energy -= 2;
  no++;
}
// * **Bài 2:** Viết một vòng lặp `while` để nhân đôi một số `let n = 3` liên tục cho đến khi `n` vượt quá số 50.
//  In ra giá trị cuối cùng của `n`.
let n = 3;
while (n <= 50) {
  n *= 2;
}
console.log(`Gía trị cuối cùng của n = ${n}`);

// * **Bài 3:** Giả lập hành động click vào một nút trên website:
//  Cho `let clickCount = 0`.
//  Viết vòng lặp `while` tăng `clickCount` lên 1 sau mỗi lần lặp và in ra "Click lần thứ X".
//  Vòng lặp dừng lại sau khi đã click đủ 5 lần.
let clickCount = 0;
while (clickCount < 5) {
  clickCount++;
  console.log(`Click lần thứ ${clickCount}`);
}

// ### Nhóm 2: Mảng (Array) & Các phương thức cơ bản

// * **Bài 4:** Tạo một mảng gồm 3 tên trình duyệt: `"chrome"`, `"firefox"`, `"safari"`.
//  Hãy dùng phương thức để thêm `"edge"` vào cuối mảng
// và in ra tổng số lượng phần tử hiện tại của mảng bằng thuộc tính thích hợp.
let browser = ["chrome", "firefox", "safari"];
browser.push("egde");
console.log(browser);
console.log(`Tổng số phần tử trong mảng: ${browser.length}`);

// * **Bài 5:** Cho một mảng `let danhSachLoi = ["Lỗi 404", "Lỗi 500", "Lỗi Auth"]`.
//  Dùng phương thức kiểm tra xem chuỗi `"Lỗi 404"` có nằm trong mảng không.
//  In ra kết quả (`true` hoặc `false`).
let danhSachLoi = ["Lỗi 404", "Lỗi 500", "Lỗi Auth"];
let coLoi = danhSachLoi.includes("Lỗi 404");
console.log(coLoi);

// * **Bài 6:** Cho mảng `let tags = ["Hot", "Trend", "Sale"]`.
//  Dùng một phương thức để rút phần tử cuối cùng ra,
//  sau đó dùng tiếp phương thức khác để gộp 2 phần tử còn lại thành một chuỗi duy nhất dạng `"Hot - Trend"`.
let tags = ["Hot", "Trend", "Sale"];
tags.pop();
let gopChuoi = tags.join(" - ");
console.log(gopChuoi);

// ### Nhóm 3: Đối tượng (Object) & Các phương thức cơ bản

// Bài 7:Tạo một object `deviceTest` mô tả một điện thoại gồm các thuộc tính: `ten` (iPhone 15), `heDieuHanh` (iOS), `pin` (100).
//  Hãy dùng dấu chấm `.` để in ra tên thiết bị và cập nhật lại pin thành 95.
let deviceTest = {
  ten: "iphone 15",
  heDieuHanh: "iOs",
  pin: 100,
};
console.log(`Tên thiết bị là: ${deviceTest.ten}`);
deviceTest.pin = 95;
console.log("Thiết bị sau khi cập nhật pin:", deviceTest);

// Bài 8: Tạo một object `locator` có một thuộc tính chứa dấu gạch ngang là `"x-path": "//button[@id='submit']"`.
//  Hãy dùng dấu ngoặc vuông `[]` để lấy và in ra giá trị của thuộc tính này.

let locator = {
  "x-path": "//button[@id='submit']",
};
//Được nhưng chưa đúng đề bài dùng []
//let newLocator = Object.values(locator);
//console.log(newLocator);
//Như này mới đúng
let giaTriXpath = locator["x-path"];
console.log(giaTriXpath);

// Bài 9: Cho object `let config = { url: "tiki.vn", timeout: 5000, headless: true }`.
//  Hãy dùng phương thức của Object để lấy ra một mảng chứa toàn bộ các **Key** (tên thuộc tính) của object này
//  và in ra màn hình.
let config = {
  url: "tiki.vn",
  timeout: 5000,
  headless: true,
};
let key = Object.keys(config);
console.log(key);

// ### Nhóm 4: Các vòng lặp `for`, `for...of`, `for...in`

// Bài 10: Dùng vòng lặp **`for` cổ điển** để in ra các số chẵn từ 2 đến 10 (2, 4, 6, 8, 10).
//Cách này vẫn đúng nhưng đề bài k yêu cầu tạo thêm mảng, và đã nói sẵn từ 2-10 nên đặ ti =2 thì sát hơn
// let soChan = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     soChan.push(i);
//   }
// }
// console.log(soChan);

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Bài 11: Cho mảng `let listUrls = ["google.com", "facebook.com", "tiki.vn"]`.
//  Hãy dùng vòng lặp **`for...of`** để in lần lượt từng đường dẫn ra màn hình.
let listUrls = ["google.com", "facebook.com", "tiki.vn"];
for (url of listUrls) {
  console.log(urls);
}

// Bài 12: Cho object `let testResult = { total: 10, passed: 8, failed: 2 }`.
//  Hãy dùng vòng lặp `for...in` để duyệt qua các thuộc tính
// và in ra dòng chữ theo định dạng: `Thuộc tính X có giá trị là Y`.
let testResult = { total: 10, passed: 8, failed: 2 };
for (let result in testResult) {
  console.log(`Thuộc tính ${result} có giá trị là ${testResult[result]}`);
}

// ### Nhóm 5: Câu lệnh Điều khiển `break` và `continue`

// Bài 13: Viết vòng lặp chạy từ 1 đến 10.
//  Dùng câu lệnh điều kiện kết hợp với `break` để vòng lặp dừng ngay lập tức khi biến đếm bằng số 6.
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

// Bài 14: Cho mảng các mã giảm giá `let coupons = [10, 0, 20, 0, 50]`.
let coupons = [10, 0, 20, 0, 50];
//  Duyệt mảng bằng `for...of`, nếu gặp mã giảm giá bằng `0` thì dùng `continue` để bỏ qua không in,
//  chỉ in các mã giảm giá có giá trị lớn hơn 0.
for (let newCoupon of coupons) {
  if (newCoupon === 0) {
    continue;
  }
  console.log(newCoupon);
}

// Bài 15: Cho mảng điểm số `let scores = [7, 8, -2, 9, 10]`.
//  Viết vòng lặp duyệt mảng, hễ gặp điểm số âm (`< 0`) đầu tiên thì in ra thông báo "Dữ liệu lỗi!" rồidừng hẳn vòng lặp.
let scores = [7, 8, -2, 9, 10];
for (let score of scores) {
  if (score < 0) {
    console.log("Dữ liệu lỗi!");
    break;
  }
  console.log(`Các điểm hợp lệ là: ${score}`);
}

// ## PHẦN 2: NÂNG CAO CẤP 1 (BÀI 16 ĐẾN BÀI 18)

// Bài 16 (Xử lý Array of Objects):
// Cho danh sách sản phẩm lấy từ giỏ hàng:
// Hãy dùng vòng lặp `for...of` để tính tổng số tiền của toàn bộ giỏ hàng (Công thức: `Tổng tiền += gia * soLuong`).
let gioHang = [
  { ten: "Chuột", gia: 200, soLuong: 1 },
  { ten: "Bàn phím", gia: 500, soLuong: 2 },
  { ten: "Lót chuột", gia: 50, soLuong: 0 },
];

let tongTien = 0;
for (let sanPham of gioHang) {
  tongTien += sanPham.gia * sanPham.soLuong; // tương ứng tongTien = tongTien + sanPham.gia * sanPham.soLuong;
}
console.log(tongTien);

// Bài 17 (Lọc dữ liệu Object):
// Cho một object chứa trạng thái kiểm thử của các tính năng:
// Hãy dùng vòng lặp `for...in` để tìm và in ra danh sách các tính năng bị **"failed"**.
let features = {
  login: "passed",
  register: "failed",
  cart: "passed",
  payment: "failed",
};
// Cách này oki nhưng mà khi dùng hàm include sau này nếu có thêm các trang thái not_failed thì sẽ bị đánh lừa bởi code (nên dùng so sánh ===)
// for (let feature in features) {
//   if (features[feature].includes("failed")) {
//     console.log(feature);
//   }
// }

console.log("Các tính năng bị lỗi (failed) gồm:");

for (let featureName in features) {
  let trangThai = features[featureName];
  if (trangThai === "failed") {
    console.log(`- Tính năng: ${featureName}`);
  }
}

// Bài 18 (Tìm kiếm nâng cao):
// Cho mảng danh sách tài khoản user hệ thống:
// Yêu cầu: Tạo một mảng rỗng `validAdmins = []`.
//  Duyệt qua danh sách trên, tìm những user nào vừa có `role là "admin"` vừa có `status là "active"` thì đưa vào mảng `validAdmins`.
//  In ra danh sách đó và số lượng phần tử tìm được.
let userList = [
  { id: 1, role: "user", status: "active" },
  { id: 2, role: "admin", status: "banned" },
  { id: 3, role: "editor", status: "active" },
  { id: 4, role: "admin", status: "active" },
];
let validAdmins = [];
// for (let user of userList) {
//   let newrole = user[role];
//   let newstatus = user[status];
//   if (newrole === "admin" && newstatus === "active") {
//     validAdmins.push(userList[id]);
//   }
//   console.log(validAdmins);
// }
//Sửa lỗi trên
// for (let user of userList) {
//   // Dùng [] thì phải có dấu nháy '', và phải gọi từ biến 'user'
//   let newrole = user['role'];
//   let newstatus = user['status'];

//   if (newrole === "admin" && newstatus === "active") {
//     validAdmins.push(user); // Đẩy nguyên cái object 'user' vào mảng
//   }
// }
// console.log(validAdmins);

//Cách này ngắn gọn nên dùng
for (let user2 of userList) {
  if (user2.role === "admin" && user2.status === "active") {
    validAdmins.push(user2);
  }
}
console.log("Danh sách Admin hợp lệ:", validAdmins);
console.log(`Số lượng Admin tìm được là: ${validAdmins.length}`);
// ## PHẦN 3: NÂNG CAO & CẠM BẪY (BÀI 19 ĐẾN BÀI 22)
// Các bài tập này chứa các đoạn code cố tình viết sai logic hoặc sai cú pháp dựa trên các lỗi phổ biến.
//  Nhiệm vụ của bạn là **chỉ ra lỗi sai và sửa lại cho đúng.

// Bài 19 (Bẫy vòng lặp trên Mảng):
// Một bạn học viên muốn in ra các phần tử trong mảng giá sản phẩm nhưng code lại bị in ra các số `0, 1, 2` thay vì giá tiền
// Hãy sửa lại code này bằng cách thay đổi loại vòng lặp cho đúng chuẩn xử lý mảng:
let listGia = [15000, 20000, 35000];
for (let gia of listGia) {
  console.log(gia); // Lỗi: In ra 0, 1, 2
}

// Bài 20 (Bẫy logic đảo ngược với `continue`):
// Bạn Tester muốn lọc ra các sản phẩm lỗi (có thuộc tính `isError: true`) để đưa vào danh sách kiểm tra.
//  Code dưới đây đang bị lỗi logic khiến danh sách trả về toàn sản phẩm không lỗi.
//  Hãy sửa lại điều kiện của `if`:

let logs = [
  { id: 101, isError: true },
  { id: 102, isError: false },
  { id: 103, isError: true },
];
let listError = [];
for (let item of logs) {
  if (item.isError === false) {
    continue;
  }
  listError.push(item);
}
console.log(listError); // Bị sai: Ra sản phẩm không lỗi

// Bài 21 (Bẫy gọi Key động bằng dấu chấm):
// Cho object thông tin cấu hình bên dưới.
// Bạn học viên muốn dùng một biến tạm `let keyCanLay = "environment"` để lấy ra giá trị `"staging"`.
// Tuy nhiên đoạn code dưới đây báo kết quả là `undefined`.
//  Hãy sửa lại dòng số 8 cho đúng:

let systemConfig = {
  version: "1.0.4",
  environment: "staging",
  dbConnected: true,
};

let keyCanLay = "environment";
console.log(systemConfig[keyCanLay]); // Lỗi: undefined

// Bài 22 (Bẫy dùng `break`/`continue` sai chỗ):
// Đoạn code dưới đây sử dụng hàm `forEach` (một hàm duyệt mảng khác) và cố gắng dừng vòng lặp khi gặp số `3`.
// Khốn nỗi hệ thống lại quăng ra lỗi `SyntaxError: Illegal break statement`.
// Hãy viết lại toàn bộ đoạn logic này bằng một vòng lặp khác đã học để câu lệnh `break` hoạt động bình thường:

let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//   if (num === 3) {
//     break; // Lỗi hệ thống tại đây!
//   }
//   console.log(num);
// });

for (let num of numbers) {
  if (num === 3) {
    break;
  }
  console.log(num);
}
// -----------
// PHẦN 4: HÀM (FUNCTION) - VŨ KHÍ TÁI SỬ DỤNG CODE
// Bài 23: Hàm tính tỷ lệ kiểm thử thành công (Pass Rate)
// Trong Automation Test, việc tính tỷ lệ Pass là cực kỳ quan trọng.
//  Hãy viết một hàm đặt tên là tinhTyLePass nhận vào 2 tham số: soCustomPass (số lượng test case pass) và tongSoTestCase.
// Yêu cầu: Hàm phải tính toán và trả về (return) chuỗi kết quả có dạng: "Tỷ lệ Pass là: [Số phần trăm]%" (ví dụ: Tỷ lệ Pass là: 80%).

// Boilerplate code để bồ test:

// JavaScript
// function tinhTyLePass(soCustomPass, tongSoTestCase) {
//   // Viết logic của bồ ở đây
// }

// Chạy thử hàm:
// console.log(tinhTyLePass(8, 10)); // Mong đợi: "Tỷ lệ Pass là: 80%"
// console.log(tinhTyLePass(15, 20)); // Mong đợi: "Tỷ lệ Pass là: 75%"

// Bài 24: Chuyển đổi sang Arrow Function
// Arrow Function (hàm mũi tên =>) là cú pháp viết hàm siêu ngắn gọn, được dùng tới 90% trong các framework test hiện đại như Playwright hay Cypress.

// Yêu cầu: Hãy biến đổi hàm đổi chữ hoa thông thường dưới đây thành một Arrow Function rút gọn:

// JavaScript
// // Hàm gốc (truyền thống):
// function chuanHoaMoiTruong(envName) {
//   return envName.toLowerCase().trim();
// }

// // Yêu cầu: Hãy viết lại hàm trên bằng cú pháp Arrow Function (=>)
// // let chuanHoaMoiTruong = ...
// Bài 25: Tham số mặc định (Default Parameters)
// Đôi khi Test Runner chạy mà quên không truyền tên trình duyệt, mình cần cấu hình để hệ thống tự chọn một trình duyệt mặc định để test không bị lỗi.

// Yêu cầu: Viết một hàm tên là khoiDongBrowser nhận vào một tham số là browserName. Nếu người dùng gọi hàm mà không truyền giá trị cho browserName, hàm sẽ tự động lấy giá trị mặc định là "chrome". Hàm trả về chuỗi: "Đang mở trình duyệt: [Tên trình duyệt]".

// JavaScript
// function khoiDongBrowser(browserName = "điền_gì_đó_ở_đây") {
//   // Viết logic trả về chuỗi ở đây
// }

// console.log(khoiDongBrowser("firefox")); // Mong đợi: "Đang mở trình duyệt: firefox"
// console.log(khoiDongBrowser());          // Mong đợi: "Đang mở trình duyệt: chrome"
// Bài 26: Hàm thực chiến - Bộ lọc Test Case
// Hãy kết hợp kiến thức về Mảng ở chương trước với Hàm ở chương này để làm một bài nâng cao.

// Yêu cầu: Viết một hàm tên là locTestCaseTheoTrangThai nhận vào 2 tham số: danhSachTest (một mảng các object) và trangThaiCanLoc (chuỗi dạng "passed" hoặc "failed"). Hàm này sẽ lọc và trả về một mảng mới chứa các test case khớp với trạng thái yêu cầu.

// JavaScript
// let danhSachGoc = [
//   { id: 1, name: "Login", status: "passed" },
//   { id: 2, name: "Payment", status: "failed" },
//   { id: 3, name: "Cart", status: "passed" }
// ];

// function locTestCaseTheoTrangThai(danhSachTest, trangThaiCanLoc) {
//   // Viết logic lọc mảng ở đây và return về mảng kết quả
// }

// // Chạy thử hàm:
// console.log(locTestCaseTheoTrangThai(danhSachGoc, "passed"));
// // Mong đợi trả về mảng có 2 phần tử: Login và Cart
