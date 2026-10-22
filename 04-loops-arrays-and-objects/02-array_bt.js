let gioHang = [
  "Bàn phím cơ",
  "Chuột gamin",
  "Màn hình 27 inch",
  "Tai nghe bluetooth",
];

//1. In ra tổng số sản phẩm
// 2. In ra sản phẩm đầu tiên
//3. In ra tên sản phẩm cuối cùng
//4. thêm 1 cái lót chuột vào cuối giỏ hàng

console.log(gioHang.length);
console.log(gioHang[0]);
console.log(gioHang[gioHang.length - 1]);
gioHang.push("lót chuột");
console.log(gioHang);

let config = { browser: "Chrome", timeout: 5000 };
//Ko in ra dc
console.log(`Ban đầu ${config}`);

console.log("Ban đầu", config);

config.timeout = 10000;
console.log("Sau khi sửa timeout", config);

//thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
config.isHeadless = true;
console.log("Sau khi thêm isHeadless", config);

//Xóa dữ liệu (dùng từ khóa delete)
delete config.browser;

console.log("Sau khi xóa browser");
