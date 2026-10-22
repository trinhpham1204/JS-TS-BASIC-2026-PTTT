//Global scope
let tenMoiTruong = "STAGING";
let baseUrl = "https://staging.neko.vn";

function chayTest() {
  // hàm này bên trong nhưng vẫn nhìn thấy biến GLOBAL ở bên ngoài
  console.log(`Đang chạy test trên ${tenMoiTruong}`);
  console.log(`URL: ${baseUrl}`);
}

function chayTestKhac() {
  console.log(`Hàm khác cũng thấy ${tenMoiTruong}`);
}

chayTest();
chayTestKhac();

// NGUY HIỂM CỦA GLOBAL: nếu cả 2 đều sửa global -> dẫm chân lên nhau
let soLanClick = 0;

function testDangNhap() {
  soLanClick = 5;
}

function testDangKy() {
  soLanClick = 10;
}

testDangNhap();
testDangKy();
console.log(soLanClick);

//Function scope
//vd1
function taoTaiKhoan() {
  let matKhauBaoMat = "Secret123";
  let token = "abc-xyz";

  console.log(`Mật khẩu là ${matKhauBaoMat}`);
  console.log(`Token: ${token}`);
}

taoTaiKhoan();

console.log(matKhauBaoMat); // ❌ Báo lỗi ở dòng này!

//vd2
//Mỗi lần gọi hàm = tạo scope hàm hoàn toàn mới
function demSoLan() {
  let count = 0;
  count++;
  console.log(count);
}

//count mới đc tạo -> tăng lên 1 rồi tèo
demSoLan();

//count moi dc tao lai -> tang len 1 roi teo
demSoLan();

//Block scope
if (true) {
  let theNhieuTien = "Visa platinum";
  const soTien = 999999999999999;
  console.log(theNhieuTien);
}

for (let i = 0; i < 3; i++) {
  let tenSanPham = `SP - ${i}`;
  console.log(tenSanPham);
}

console.log(i); // Error: i is not defined
console.log(tenSanPham); // not run: earlier error at L66

//var -> không tôn trọng block scoop, phá vỡ quy tắc làm có thể gọi được biến trong block scoop
// if (true) {
//   var biMat = "Tôi lọt ra ngoài";
// }
// console.log(biMat);

//Cạm bẫy nhầm Object là scoop
/////Scope = vung song cua bien
if (true) {
  let secret = 123;
}

const user222 = {
  //property - thuộc tính bên trong object
  //JS ko tự biến ten thành biến riêng trong scope hiện tại
  ten: "neko",
};

console.log(user222.ten);

//scoop chain
let mau = "Đỏ"; //global

function ngoai() {
  //function scoop của ngoai() - hàm cha
  let size = "Lớn";

  function trong() {
    //function scoop của trong() - hàm con
    //trong() tìm biến theo scoop chain
    let gia = 100;
    console.log(gia);
    //tìm thấy ngay tại chỗ vì "gia" là của function trong()
    console.log(size);
    //không có ở đay -> leo ra ngoài tim -> "size" là của function ngoai()
    console.log(mau);
    //không có ở đay -> leo ra ngoài tim -> "mau" là scoop global
  }
  trong();
  //lỗi vì thăng cha không nhìn thấy thằng con
  console.log(gia);
}
ngoai();
console.log(size); //không được thực thì vì đã ngắt rồi
