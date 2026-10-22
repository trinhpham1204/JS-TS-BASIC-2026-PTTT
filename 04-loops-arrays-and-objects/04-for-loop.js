for (let i = 1; i <= 5; i++) {
  console.log(`Đang chạy vòng thứ ${i}`);
}

//
let soLuongAccount = 3;

for (let i = 1; i <= soLuongAccount; i++) {
  let emailTest = `nguoiDung_${i}@gmail.com`;
  console.log(`Đã tạo tài khoản ${emailTest}`);
}

//Duyệt array bằng index
let sanPham2 = ["Quần đùi", "Áo cộc", "váy"];

for (let i = 0; i < sanPham2.length; i++) {
  console.log(`Sản phẩm #${i + 1} : ${sanPham2[i]}`);
}

//Duyệt object
let config2 = {
  browser: "Firefox",
  timeout: 2000,
  headless: true,
};

// Object ko dùng đc for cổ điển
let keys = Object.keys(config2);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  let value = config2[key];
  console.log(`${key}: ${value}`);
}

/*
Trace thực thi:
1. Tạo object config2 với 3 thuộc tính:
    - browser = "Firefox"
    - timeout = 2000
    - headless = true

2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:
    keys = ["browser", "timeout", "headless"]

3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).
    - Lần 1: i = 0
      key = "browser"
      value = config2["browser"] = "Firefox"
      In ra: browser: Firefox

    - Lần 2: i = 1
      key = "timeout"
      value = config2["timeout"] = 2000
      In ra: timeout: 2000

    - Lần 3: i = 2
      key = "headless"
      value = config2["headless"] = true
      In ra: headless: true

4. Sau lần lặp cuối, i tăng thành 3.
   Điều kiện 3 < 3 là sai nên vòng lặp dừng.
*/
//Những lối kinh điểm hay gặp
let arr = ["A", "B", "C"];

for (let i2 = 0; i2 < arr.length; i2++) {
  console.log(arr[i2]);
}
//console.log(i); Error: i is not define
// biến i chit tồn tại trong dấu ngoặc nhọn -> khi ra ngoài ko tồn tại vì khai báo biến i trong vòng lặp for chứ ko phải khai báo phía ngoài

//Bài tập:
//Mình muốn tạo nhanh 5 mã đơn hàng để test màn hình quản lý đơn hàng
//dữ liệu đầu vào
let soLuongDon = 5;

// Yêu cầu
//1. Dùng for cổ điển lặp từ 1 > 5
// mỗi vòng tạo biến maDonHang theo mẫu ORDER-1, ORDER-2....
// in từng mã đơn hàng ra màn hình
for (let i3 = 1; i3 <= soLuongDon; i3++) {
  let maDonHang = `ORDER-${i3}`;
  console.log(maDonHang);
}

// Vòng lặp for of
let fruits = ["Táo", "Cam", "Ôỉ"];
for (i4 = 0; i4 < fruits.length; i4++) {
  console.log(fruits[i4]);
}
//viết theo cách mới
for (let fruit of fruits) {
  console.log(fruit);
}
//Các cadch dung thường gặp
//Duyệt array đơn giản
//Duyệt string

let matKhau = "Neko@123";
for (kyTu of matKhau) {
  console.log(kyTu);
}
//Duyệt array of object
let danhSachUsers = [
  { ten: "Neko", role: "admin" },
  { ten: "Neko2", role: "guest" },
  { ten: "Neko3", role: "user" },
];
for (let user of danhSachUsers) {
  console.log(`User: ${user.ten} - Quyền: ${user.role}`);
}

let config3 = { browser: "Chrome", timeout: "10000" };
for (let cap of Object.entries(config3)) {
  console.log(`${cap[0]} - ${cap[1]}`);
}

// Cách 2:
let config = { browser: "Chrome", timeout: "10000" };
for (let key of Object.keys(config)) {
  console.log(`${key}: ${config[key]}`);
}

let danhSachUrls = ["/login", "/dashboard", "/profile"];
// dùng for of mỗi vòng lặp lấy ra 1 url và in ra câu Đang kiểm tra: url
for (let url of danhSachUrls) {
  console.log(`Đang kiểm tra: ${url}`);
}

//Vòng lặp for in
for (let key in config3) {
  console.log(`${key}: ${config3[key]}`);
}
//Dùng vòng lặp nào cho array và object
// white: không biết trước số lần lặp -> lặp đến khi điều kiện sai
// for cổ điển: biết chính xác số lần lặp -> kiểm soát tuyệt đối biến đếm
// có array, chỉ cần giá trị -> for...of
// có array, cần cả index... -> for cổ điển
// duyệt object ...-> dùng for ò + biến hình hoặc for in

//Ví dụ
let products = [
  { ten: "iphone", gia: "20000" },
  { ten: "airpods", gia: "30000" },
  { ten: "macbook", gia: "10000" },
];
// Yêu cầu: sử dụng for of + for in để in ra tên và giá products
// mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm đầu ra

// 1. Dùng for...of để lặp qua từng Object (sản phẩm) trong Array
for (let product of products) {
  // 2. Dùng for...in để lặp qua từng key ("ten", "gia") của Object hiện tại
  for (let key in product) {
    // Sử dụng cú pháp ngoặc vuông product[key] đã học để lấy giá trị động
    console.log(`${key}: ${product[key]}`);
  }

  // 3. In dấu phân cách sau khi chạy xong thông tin của một sản phẩm
  console.log("---");
}

//break
// từ 1 -> 100 mình muốn tìm số chia hết cho 7 đầu tiên
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`Tìm thấy ${i}`);
    break;
  }
}

//tim sản phẩm hết hàng đầu tiên
//bỏ qua sản phẩm hết hàng
// in ra sản phẩm còn hàng

let sanPham3 = [
  { ten: "iphone", conHang: true },
  { ten: "airpods", conHang: false },
  { ten: "macbook", conHang: true },
];

for (let sp of sanPham3) {
  if (sp.conHang === false) {
    console.log(`Tìm thấy sản phẩm hết hàng, sp ${sp.ten}`);
    break;
  }
}
//cách 2:
for (let sp of sanPham3) {
  if (!sp.conHang) {
    console.log(`Tìm thấy sản phẩm hết hàng, sp ${sp.ten}`);
    break;
  }
}

//continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Số lẻ ${i}`);
}

// dung include và continue trong aray -> bỏ qua field nhạy cảm dựa trên fielAndi -> in ra key và value hợp lệ
let userInfo = {
  ten: "neko",
  email: "neko@gmail.com",
  password: "abc123",
  role: "admin",
};

let fieldAndi = ["password"];
let newUserInfor = {};
//cách 1:
for (let key in userInfo) {
  if (fieldAndi.includes(key)) {
    continue;
  }
  newUserInfor[key] = userInfo[key];
}
console.log(newUserInfor);
//cách 2:
// for (let key in userInfo) {
//   if (!fieldAndi.includes(key)) {
//     newUserInfor[key] = userInfo[key];
//   }
// }
// console.log(newUserInfor);

// Ví dụ: Mình đang test trang tiki, lấy được danh sách giá 6 sản phẩm
// yêu cầu:
// lọc ra những sản phẩm có giá lớn hơn 100k và đếm xem có bao nhiêu sản phẩm và sp vip

let danhSachGia = [5000, 120000, 80000, 30000, 15000, 50000];
// Yêu cầu:
// tạo 1 array rỗng dánhachVip
//Nếu giá >100k thì ta cho sản phẩm vào danh sách vip
// và làm tiếp yêu cầu đề bài, là in ra danh dách vip và số lượng
// Cách 1
let danhSachVip = [];
for (let gia of danhSachGia) {
  if (gia > 100000) {
    danhSachVip.push(gia);
  }
}
console.log(danhSachVip);
console.log(`Số lượng sp vip là ${danhSachVip.length}`);

//Cách 2
// let danhSachVip = [];
// for (let gia of danhSachGia) {
//   if (gia <= 100000) {
//     continue;
//   }
//   danhSachVip.push(gia);
// }
// console.log(danhSachVip);
// console.log(`Số lượng sp vip là ${danhSachVip.length}`);
