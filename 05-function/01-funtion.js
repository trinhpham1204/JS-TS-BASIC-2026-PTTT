const { use } = require("react");

//taiKhoan va matKhau la tham so (cai pheu cho san)
function dangNhap(taiKhoan, matKhau) {
  console.log(`Đăng nhập user: ${taiKhoan}`);
  console: "Đăng nhập user: adminNeko";
  console.log(`Đăng nhập password: ${matKhau}`);
  console: "Đăng nhập password: abc";
  console.log("Click nút login");
  console: "Click nút login";
}

console.log("TC01");
console: "TC01";

//Khởi động hàm và nhét nguyên liệu thật (đối số) vào:
dangNhap("adminNeko", "abc");
console.log("TC02");
console: "TC02";
dangNhap("adminNeko2", "abc2");

function tinhTongTien(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

let tienThanhToan = tinhTongTien(100, 2);
console.log(tienThanhToan);

//trong function
// return result -> trả giá trị ra bên ngoài -> tienThanhToan

function laySoMayMan() {
  return 8;
}
let ketQua = laySoMayMan();
console.log(laySoMayMan);

function layTenHienThi() {
  return "neko";
}
let tenHienThi = layTenHienThi();

function laAdult(tuoi) {
  return tuoi >= 18;
}
console.log(laAdult(20));
console.log(laAdult(6));

function demoReturn() {
  console.log("Bat dau");
  return "Xong";
  console.log("dong nay k chay");
}
console.log(demoReturn());

//Ví dụ
// Yêu cầu viết 1 hàm tên là cleanPrice(rawString)
// Hàm này nhận vào là 1 chuỗi giá tiền lấy từ UI
// VD:"" Giá 25.000.000 VND  ". Hàm phải tự động dọn dẹp và return về 1 số number nguyên
// Nếu đầu vào là falsy thì trả về 0 luôn

//test case
// sp1 = "Giá: 1.500.000 VND ";
// sp2 = "   250.000 VND ";
// sp1 = "";
// output
//1500000
//250000
//0
// Giai BT
//Cách 1:
function cleanPrice(rawString) {
  if (!rawString) {
    return 0;
  }
  const cleanNumber = rawString
    .replace("Giá:", "")
    .replace("VND", "")
    .replaceAll(".", "")
    .trim();
  return Number(cleanNumber);
}

let sp1 = "   Giá: 1.500.000 VND   ";
let sp2 = "   250.000 VND";
let sp3 = "";

console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));
// Cách 2
// function cleanPrice(rawString) {
//   if (!rawString) {
//     return 0;
//   }
//   let result = "";
//   for (let kyTu of rawString) {
//     if (kyTu >= 0 && kyTu <= 9) {
//       result += kyTu;
//     }
//   }
//   return Number(result);
// }
// let sp1 = "Giá: 1.500.000 VND ";
// let sp2 = "   250.000 VND ";
// let sp3 = "";

// console.log(cleanPrice(sp1)); // output: 1500000
// console.log(cleanPrice(sp2)); // output: 250000
// console.log(cleanPrice(sp3)); // output: 0

//Cách 3:
// Xóa hết kí tự không phải số, chỉ giữ lại các kí tự số.
// function cleanPrice(rawString) {
//   if (!rawString) {
//     return 0;
//   }
//   let cleanNumber = rawString.replace(/\D/g, "");
//   return Number(cleanNumber);
// }

// let sp1 = " Giá: 1.500.000 VND ";
// let sp2 = " 250.000 VND";
// let sp3 = "";

// console.log(cleanPrice(sp1));
// console.log(cleanPrice(sp2));
// console.log(cleanPrice(sp3));

//Cách 4
// function cleanPrice(rawString) {
//     // 1. Nếu đầu vào là falsy (chuỗi rỗng "", null, undefined,...) thì trả về 0 luôn
//     if (!rawString) {
//         return 0;
//     }

//     let ketQuaChuoi = "";

//     // 2. Duyệt qua từng ký tự, chỉ nhặt các ký tự là số từ '0' đến '9'
//     for (let i = 0; i < rawString.length; i++) {
//         let kyTu = rawString[i];
//         if (kyTu >= '0' && kyTu <= '9') {
//             ketQuaChuoi += kyTu;
//         }
//     }

//     // 3. Ép kiểu chuỗi số vừa lọc được thành số Number nguyên
//     return Number(ketQuaChuoi);
// }

// // === Chạy thử các Test Case ===
// let sp1 = "Giá: 1.500.000 VND ";
// let sp2 = "   250.000 VND ";
// let sp3 = "";

// console.log(cleanPrice(sp1)); // output: 1500000
// console.log(cleanPrice(sp2)); // output: 250000
// console.log(cleanPrice(sp3)); // output: 0

xinChao();
function xinChao() {
  console.log("Hoisting");
}

//hoisting function declaration
// let loginStatus = checkLoginStatus();
// console.log(loginStatus);

// function checkLoginStatus() {
//   return true;
// }

//function expection
const checkLoginStatus = function () {
  return true;
};
const loginStatus = checkLoginStatus();
console.log(loginStatus);

const utils = {
  lamSach: function (text) {
    return text.trim().toLowerCase();
  },
};

console.log(utils.lamSach(" HELLLO "));

const moiTruong = "staging";

const layUrl =
  moiTruong === "staging"
    ? function () {
        return "https://staging.neko.vn";
      }
    : function () {
        return "https://neko.vn";
      };

console.log(layUrl());

// viết theo kiểu function expression (cũ)
const tinhTongExpression = function (a, b) {
  return a + b;
};

//chuyển sang arrow

const tinhTongArrow = (a, b) => {
  return a + b;
};

//rút gọn nữa

const tinhTongSieuNgan = (a, b) => a + b;

//cách sử dụng thực tế
// câu hỏi là lúc nào nên dùng loại nào??
// viet method bên trong object
const sanPham = {
  ten: "iphone 17",
  gia: 2000000,

  //cách 1: function expression kiểu cổ điển

  hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 2: để viết 1 hàm. method shorthand -> NÊN DÙNG

  hienThiShorthand() {
    console.log(`${this.ten} - ${this.gia} VND`);
  },

  //cách 3. ko SỬ DỤNG ARROW KHI VIẾT METHOD TRONG OBJECT
  hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
  },
};
sanPham.hienThiExpression();
sanPham.hienThiShorthand();
sanPham.hienThiArrow();

//Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi. ví dụ 1 object tên cart có dữ liệu item và method getSummary() để mô tả chi
const cart = {
  item: 3,
  getSummary() {
    return `có ${this.item} sản phẩm`;
    return "có 3 sản phẩm";
  },
};

console.log(cart.getSummary());
console: "có 3 sản phẩm";
//object config: ví dụ object có cấu hình, timeout, baseurrl -> có 1 method buildUrl () để ghép link hoàn chỉnh
//object formatter có các method formatPrice, formatDate() -> objet tiện ích

//ví dụ : 1 object cụ thể, viết nhanh dùng ngay -> method bên trong object là hợp lý (THƯỜNG THÌ TỈ LỆ SỬ DỤNG TRONG AT là chủ yếu)
// nhưng nếu nhiều object cùng form như cart1, cart2 , cart3 -> dùng CLASS dễ tổ chức hơn

//B. Truyền làm call back -> call back là truyền 1 hàm vào chỗ khác để nó được gọi getSummary
const giaSanPham = [15000, 20000, 40000];

//declaration
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);

//expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

//Sự thật là arrow function hoàn toàn thay thế fuction expression ở rất nhiều code base
// cả 2 đều dùng const. và không hoisting nhưng arrow thì ngắn hơn gấp bội
// function expression chỉ xuất hiện ở 1 số trường hợp
//code cũ khi arow chưa ra đời thì người ta dùng nhiều
// => Kết luận: code mới chỉ nhớ 2 loại declacration và arrow

// nếu khai báo 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm trước
//cách xử lý;
function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(`${message}`);
    return;
  }
  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  console.log(`target ko hợp lệ`);
}

guiThongBao("deployxong");

guiThongBao("deploy xong", 101);

//đây là phong cách viết 1 hàm nhiueef cách gọi
//return ở đây giống như
// "xử lý xong trường hợp này rồi -> thoát hàm luôn"
//vd:
function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}
//break ở đây chỉ dừng for, ko kết thúc function ngay

function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      return;
    }
    console.log(arr[i]);
  }
  console.log("Đã xong");
}
// gặp 5 là kết thúc luôn cả hàm
timSo([1, 2, 3, 4, 5]);
timSo2([1, 2, 3, 4, 5]);

function dangNhap1(user, pass, moiTruong = "staging") {
  console.log(`${moiTruong}: Đăng nhập ${user} - ${pass}`);
}
dangNhap1("MIDI", "234");
dangNhap1("ahaha", "2435", "dev");

function testUser(ten, tuoi = 25, email, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
testUser("neko", "neko@gmail.com");
testUser("neko", undefined, "neko@gmail.com");

//rest parameters
function tongTien(...danhSachGia) {
  //danhsachgia là 1 mảng
  let tong = 0;
  // [1000, 2000, 3000, 4000]
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log(tongTien(100000));
console.log(tongTien(1000, 2000, 3000, 4000));

//hàm nhận vào duy nhất 1 object là options
function taoUser(options) {
  //bóc tách (destructuring) object ra từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

//gọi hàm
taoUser({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});

//destruct
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

//bỏ qua phần tử ko cần
const [firstName, , city] = ["neko", 25, "hanoi"];

console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

//giá trị mặc định
console.log(c);

//object destruct
//=> cú pháp gặp nhiều nhất -> bóc tách thuộc tính object ra biến riêng biệt theo tên thuộc tính
//không theo thuộc tính như array

//const response = {status: 200, body: "ok", headers: {}};
// const status = response.status;

const { status, body } = { status: 200, body: "ok", headers: {} };

console.log(status);
console.log(body);

//đổi tên biến

const { status: statusCode, body: noiDung } = {
  status: 200,
  body: "ok",
  headers: {},
};
console.log(statusCode);

console.log(noiDung);

//giá trị mặc định + đổi tên
const { ten, tuoi = 18, vaTro: role = "viewer" } = { ten: "neko" };
console.log(ten);
console.log(tuoi);
console.log(role);

// destruct trong tham số hàm
// C1: (Trong Function): Destructuring ngay tại tham số hàm. Các biến ten, email, tuoi này nằm trong phạm vi (scope) của hàm hienThiUser và chỉ dùng được bên trong hàm đó.
function hienThiUser({ ten, email, tuoi = 18 }) {
  console.log(`${ten}, ${email}, ${tuoi}`);
}

hienThiUser({ ten: "Neko", email: "a" });

//Cách 2 (Khai báo biến độc lập): Destructuring trực tiếp một Object ở ngoài hàm để tạo ra các biến dùng cho phạm vi bên ngoài.
const { ten: ten2, email, tuoi: tuoi2 = 18 } = { ten: "Neko", email: "a" };

//destruct lồng (nested)
const apiResponse = {
  data: {
    user: { name: "neko", email: "neko@123" },
    token: "123",
  },
  status: 200,
};

const {
  data: {
    user: { name, email: email2 },
    token,
  },
  status: status2,
} = apiResponse;

console.log(name);
console.log(token);
console.log(status2);

//BÀI TẬP
// khi chạy AT nhận đc 1 danh sách KQ như sau:
const testRun = [
  [" login smoke ", { browser: " chromium ", env: " staging " }, " PASS "],
  [" checkout payment ", { browser: " firefox ", env: " prod " }, " FAIL "],
  [" search product ", { browser: " webkit ", env: " staging " }, " PASS "],
  [" ", { browser: " chromium ", env: " dev " }, " PASS "],
];
// // Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô

// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // {
// //   totalValid: 3,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging",
// //     "search produc - webkit - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }
// const testRun = [
//   [" login smoke ", { browser: " chromium ", env: " staging " }, " PASS "],
//   [" checkout payment ", { browser: " firefox ", env: " prod " }, " FAIL "],
//   [" search product ", { browser: " webkit ", env: " staging " }, " PASS "],
//   [" ", { browser: " chromium ", env: " dev " }, " PASS "],
// ];
function taoBaoCaoTest(testRuns) {
  // 1. Chỉ invalid bị gán lại giá trị nên dùng let
  let invalid = 0;

  // 2. Mảng dùng const vì chỉ thay đổi nội dung (push), không gán lại mảng khác
  const passed = [];
  const failed = [];

  for (const item of testRuns) {
    // 3. Destructuring lồng nhau bóc tách dữ liệu thô
    const [rawTestName, { browser, env }, rawStatus] = item;

    // 4. Chuẩn hóa dữ liệu (xóa khoảng trắng thừa)
    const testName = rawTestName.trim();
    const cleanBrowser = browser.trim();
    const cleanEnv = env.trim();
    const status = rawStatus.trim().toUpperCase();

    // 5. Guard Clause 1: Kiểm tra tên test rỗng
    if (!testName) {
      invalid++;
      continue;
    }

    // 6. Guard Clause 2: Kiểm tra trạng thái hợp lệ
    if (status !== "PASS" && status !== "FAIL") {
      invalid++;
      continue;
    }

    // 7. Tạo chuỗi báo cáo đã chuẩn hóa
    const formattedResult = `${testName} - ${cleanBrowser} - ${cleanEnv}`;

    // 8. Phân loại kết quả
    if (status === "PASS") {
      passed.push(formattedResult);
    } else {
      failed.push(formattedResult);
    }
  }

  // 9. Trả về kết quả
  return {
    totalValid: passed.length + failed.length,
    invalid: invalid,
    passed: passed,
    failed: failed,
  };
}

console.log(taoBaoCaoTest(testRun));

//spread operator -  sao chép và gộp mảng
const mangGoc = [1, 2, 3];
//clone mảng gốc -> dùng spread operator
const mangSaoChep = [...mangGoc];
mangSaoChep.push(9999);

console.log(mangGoc);
console.log(mangSaoChep);

//gộp 2 mảng lại -> 1
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];

const mangGop = [...mang1, ...mang2];
console.log(mangGop);

// [0, ... , 4,5]
// Chèn phần tử vào giữa
const mangMoi = [0, ...mangGoc, 4, 5];
console.log(mangMoi);

//spread với object - sao chép à ghi đè
const configMacDinh = {
  baseUrl: "https://staging.neko.vn",
  timeout: 30000,
  headless: true,
  retries: 2,
};

//ghi đè 2 field và giữ nguyên phần còn lại
const configProd = {
  ...configMacDinh,
  baseUrl: "https://neko.vn",
  retries: 0,
};

console.log(configProd);

const configDebug = { ...configMacDinh, headless: false };
// Toán tử spread trong tham số hàm

// Khai báo mảng chứa danh sách các mức giá.
const danhSachGia = [10000, 20000, 30000];

// Dùng toán tử spread (...) để tách từng phần tử trong mảng
// thành các đối số riêng lẻ truyền vào hàm Math.max().
const giaMax = Math.max(...danhSachGia);

// Cách viết bên dưới tương đương với dòng trên:
// const giaMax = Math.max(10000, 20000, 30000);

// Bài toán
// Cho dữ liệu đầu vào như sau:

// Cấu hình mặc định của bài tập
const configMacDinhBaiTap = {
  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
  timeout: 30000, // Thời gian chờ tối đa là 30 giây
  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện
  retries: 2, // Số lần thử lại khi có lỗi
};

// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
  timeout: 10000,
  headless: false,
};

// Danh sách tag mặc định
const tagsMacDinh = [" smoke ", " login "];

// Danh sách tag cần thêm
const tagsThem = [" check out ", " smoke ", " regression "];

// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = " Payment Flow ";

// Yêu cầu
// Viết hàm taoCauHinhChayTest().
// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.
// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.
// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.
// - Làm sạch tenSuiteRaw.
// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".
// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.
// - Trả về object có dạng sau:

// Kết quả mong đợi
// {
//   suiteName: "Payment Flow",
//   config: {
//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging
//     timeout: 10000, // Thời gian chờ tối đa là 30 giây
//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện
//     retries: 2,
//   },
//   tags: ["smoke", "login", "checkout", "regression"],
//   slowestRespone: 3400
// }
function taoCauHinhChayTest() {
  const configCuoi = {
    ...configMacDinhBaiTap,
    ...configGhiDe,
  };
  const mixTags = [...tagsMacDinh, ...tagsThem];
  const tagCuoi = [];

  for (let tags of mixTags) {
    const cleanTags = tags.trim().toLowerCase();
    if (cleanTags !== "" && !tagCuoi.includes(cleanTags)) {
      tagCuoi.push(cleanTags);
    }
  }
  let tenSuite = tenSuiteRaw.trim();
  if (tenSuite === "") {
    tenSuite = "unknown-suite";
  }
  //hoặc 1:
  // const cleanSuite = tenSuiteRaw.trim();
  // const suiteName = cleanSuite || "unknown-suite";
  // hoặc 2: const tenSuite = tenSuiteRaw.trim() || "unknown-suite";
  const maxPhanHoi = Math.max(...tocDoPhanHoi);

  return {
    suiteName: tenSuite,
    config: configCuoi,
    tags: tagCuoi,
    slowestRespone: maxPhanHoi,
  };
}
console.log(taoCauHinhChayTest());

// VD call back
//Bước 1; Tạo "số điện thoại" -> call back

function quayLaiAn() {
  console.log("Tao quay lại đây !!!");
}

//Bước 2: Bồi bàn nhận calll back làm tham số

function choBanTrong(soDienThoaiCuaKhach) {
  console.log("Đang dọn bàn...");

  //Bước 3. xử lý xong -> lôi hàm ra và gọi để chạy
  //Đây chính là lúc callBack đc gọi lại
  soDienThoaiCuaKhach();
}

//Bước 4: Chạy -> ko có () sau quayLaiAn
choBanTrong(quayLaiAn);

//VD ca;bac 2
// 1. Tạo hàm thứ nhất
function xinChao2() {
  console.log("Xin chào!");
}

// 2. Tạo hàm thứ hai, nhận tham số `hamKhac`
function chayHam(hamKhac) {
  console.log("Chuẩn bị chạy...");

  // Bấm nút chạy hàm được truyền vào!
  hamKhac();
}

// 3. Chạy thử: Truyền xinChao vào chayHam
chayHam(xinChao2);

// Khi gõ chayHam(xinChao): Bạn bắt đầu kích hoạt hàm chayHam và đưa cái hàm xinChao vào làm tham số.
// Bên trong chayHam: Biến hamKhac bây giờ chính là hàm xinChao.
// Dòng console.log("Chuẩn bị chạy...") chạy trước $\rightarrow$ In ra: "Chuẩn bị chạy..."
// Đến dòng hamKhac(): Vì hamKhac đang giữ hàm xinChao, nên cặp ngoặc () sẽ bật công tắc gọi ngược lên hàm xinChao ở trên.
// Hàm xinChao được kích hoạt $\rightarrow$ In ra: "Xin chào!"

// VD phân biệt khi có () và không ()
function layDuLieuTest() {
  return "Dữ liệu test";
}

// có ngoặc tròn () --> hàm chạy ngay -> lấy kết quả -> ly sinh tố
const ketQuaChay = layDuLieuTest();
console.log(ketQuaChay); // console: "Dữ liệu test"
console.log(typeof ketQuaChay); // console: "string"

////ko có ngoặc tròn -> giao bản vẽ -> lấy bản thân cái máy

const copyHam = layDuLieuTest;
console.log(copyHam); // console: [Function: layDuLieuTest]
console.log(typeof copyHam); // console: "function"

console.log(copyHam()); // console: "Dữ liệu test"
console.log(typeof copyHam()); // console: string

//Callback có tham số
// Hàm nhận call back có thể truyền dữ liệu ngược lại cho

function thongBaoKetQua(tenBaiTest, ketQua) {
  console.log(`${tenBaiTest} - ${ketQua}`);
}

function chayTest(tenTest, callBack) {
  console.log(`đang chạy ${tenTest}`);

  //Giả lập: pass nếu test chứa logi fail nếu ko
  const pass = tenTest.includes("login");
  callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
}

chayTest("login thành công", thongBaoKetQua);
chayTest("đăng kí thiếu email", thongBaoKetQua);

function inTHongBao() {
  console.log("đã đợi xong");
}
setTimeout(inTHongBao, 3000);

function inThongBao() {
  console.log("đã đợi xong");
}

//là một Hàm nhận Callback (Higher-Order Function) có sẵn trong JavaScript.
//Nhiệm vụ của setTimeout là nhận hàm Callback của bạn + số mili-giây, chờ hết thời gian đó rồi tự động chèn cặp ngoặc () vào để kích hoạt hàm Callback mà bạn đã giao cho nó.
//cách1
// setTimeout(inThongBao, 5000);

//cáh2
// setTimeout(function () {
//   console.log("đã đợi xong");
// }, 3000);

//cách 3 -> dùng arrow function
setTimeout(() => {
  console.log("đã đợi xong");
}, 3000);

//Ứng dụng thực tế
//Array callback
//Call back thuong xảy ra ở hàm xử lý array
const giaSanPhamUI = [100000, 250000, 500000];
//Cach 1
const giaMoi1 = giaSanPhamUI.map((gia) => {
  return gia * 2;
});

console.log(giaMoi1);
//Cach 2
function giaNhanDoi(value) {
  return value * 2;
}
const giaMoi2 = giaSanPhamUI.map(giaNhanDoi);
console.log(giaMoi2);

//vd2
const users = [
  { ho: "nguyen", ten: "neko" },
  { ho: "Tran", ten: "New" },
];

const hoTen = users.map((u) => {
  return `${u.ho} ${u.ten}`;
});

console.log(hoTen);

//VD hàm filter
const sanPhamUI = [
  { ten: "Chuột", gia: 150000, tonKho: true },
  { ten: "Bàn phím", gia: 500000, tonKho: false },
  { ten: "Màn hình", gia: 3000000, tonKho: true },
  { ten: "Tai nghe", gia: 200000, tonKho: true },
];

// Lọc các sản phẩm còn hàng
// Dùng for lọc các sản phẩm còn hàng
// đầu ra là 1 mảng mới

// const sanPhamConHang = [];

// for (let i = 0; i < sanPhamUI.length; i++) {
//   if (sanPhamUI[i].tonKho === true) {
//     sanPhamConHang.push(sanPhamUI[i]);
//   }
// }

// console.log(sanPhamConHang);

const sanPhamConHangFilter = sanPhamUI.filter((sanPham) => {
  return sanPham.tonKho === true;
});
console.log(sanPhamConHangFilter);

//lọc giá nhỏ hơn 200000
const sanPhamGiaThap = sanPhamUI.filter((sanPham) => {
  return sanPham.gia < 200000;
});
console.log(sanPhamGiaThap);

// <200000 và còn hàng
const sanPhamGiaThapConHang = sanPhamUI.filter((sanPham) => {
  return sanPham.gia < 200000 && sanPham.tonKho === true;
});
console.log(sanPhamGiaThapConHang);

//Cơ chế return ngần khi viết ngắn gọn
// Cách 1: Viết đầy đủ
(sp) => {
  return sp.tonKho;
};

// Cách 2: Viết tắt (Implicit Return)
(sp) => sp.tonKho;
// Dòng (sp) => sp.tonKho trả về true hoặc false cho từng món hàng.
// Hàm .filter() nhận các giá trị true/false đó để lọc và gom các sản phẩm còn hàng thành một mảng mới chứa dữ liệu thật.
// Dấu bằng = sẽ gán cái mảng mới đó vào biến sanPhamConHang.

const users1 = [
  { id: 1, ten: "neko", role: "admin" },
  { id: 2, ten: "mew", role: "tester" },
  { id: 3, ten: "Cat", role: "tester" },
];

// Tìm phần tử có role là admin
const adminUser = users1.find((user) => {
  return user.role === "admin";
});
console.log(adminUser);

// Tìm phần tử có role là tester nhưng tên không phải là neko
const admin = users1.find(
  (user) => user.role === "tester" && user.ten !== "neko",
);
console.log(admin);
