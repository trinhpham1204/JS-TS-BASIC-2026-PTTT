// PHẦN 1: KHÁI NIỆM CƠ BẢN & CÁC KIỂU KHAI BÁO HÀM
// 1. Parameter vs Argument
// 🟢 Bài 1.1: Trong đoạn code này đâu là Parameter và đâu là Argument?
function logInfo(name, age) {}
logInfo("An", 25);
//Trả lời:
// Parameter (Tham số): name, age (các biến được định nghĩa ở phần khai báo hàm).
// Argument (Đối số): "An", 25 (các giá trị thực tế truyền vào khi gọi hàm).

// 🟢 Bài 1.2: Sửa lại lời gọi hàm calculate(10, "subtract", 5) bị sai thứ tự đối số thành đúng thứ tự khai báo function calculate(action, num1, num2).
//Trả lời:
calcultate("subtract", 10, 5);

// 🟡 Bài 1.3: Dự đoán kết quả in ra khi truyền thiếu Argument:
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5));
//Trả lời:
// Kết quả: NaN
// Giải thích: Tham số a nhận giá trị 5, tham số b không được truyền đối số nên mặc định mang giá trị undefined. Phép toán 5 * undefined trả về NaN (Not a Number).

// 🟡 Bài 1.4: Dự đoán kết quả in ra khi truyền thừa Argument:
function showFirst(a) {
  console.log(a);
}
showFirst(10, 20, 30);
//Trả lời:
// Kết quả: 10
// Giải thích: Hàm chỉ khai báo 1 tham số a nên nó nhận giá trị của đối số đầu tiên (10). Các đối số thừa (20, 30) bị bỏ qua (vẫn có mặt trong đối tượng arguments nhưng không gán vào tham số đặt tên).

// 🔴 Bài 1.5: Viết hàm validateUser(username, role) kiểm tra đúng kiểu dữ liệu của Argument (phải là string), nếu sai thì trả về "Invalid Argument".

function validateUser(username, role) {
  if (typeof username !== "string" || typeof role !== "string") {
    return "Invalid Argument";
  }
  return `User: ${username} - Role: ${role}`;
}
const res1 = validateUser("123", "Admin");
console.log(res1);
// Cách này sai do không return để dừng hàm khi truyền argument không phải là string vẫn cho ra dc kết quả
// Invalid Argument
//User: 1 - Role: fsggf
// function validateUser1(username, role) {
//   if (typeof username !== "string" || typeof role !== "string") {
//     console.log("Invalid Argument");
//     // Không có return ở đây!
//   }
//   return `User: ${username} - Role: ${role}`;
// }
// console.log(validateUser1(1, "fsf"));

// 2. Từ khóa return
// 🟢 Bài 2.1: Một hàm không chứa từ khóa return sẽ mặc định trả về giá trị gì? Viết 1 ví dụ minh họa.
//Trả lời: Một hàm không chứa từ khóa return (hoặc chỉ có return; trống) mặc định trả về giá trị undefined.
function xinChao() {
  return;
}
const ketQua = xinChao();
console.log(ketQua);

function xinChao2() {
  console.log("hihi");
}
const ketQua2 = xinChao2();
console.log(ketQua2);

// 🟢 Bài 2.2: Viết hàm square(x) nhận vào một số và dùng return trả về bình phương của số đó.
function square(x) {
  return x ** 2;
}
const binhPhuong = square(5);
console.log(binhPhuong);

// Mẹo nhớ toán tử số mũ trong JS
// Bình phương (x^2): Viết x ** 2 (hoặc x * x)
// Lập phương (x^3): Viết x ** 3 (hoặc x * x * x)
// Gấp 2 lần: Viết x * 2

// 🟡 Bài 2.3: Tại sao dòng console.log("Done") trong hàm sau không bao giờ được chạy?
// Trả lời: Giải thích: Khi pass có giá trị truthy, câu lệnh return "PASSED" lập tức kết thúc việc thực thi hàm và thoát ra ngoài. Do đó, dòng console.log("Done") đằng sau return sẽ trở thành mã không thể chạm tới (unreachable code).
function checkStatus(pass) {
  if (pass) {
    return "PASSED";
  }
  console.log("Done");
}
// cách ngắn gọn hơn khi return sớm:
// function checkStatus1(pass) {
//   if (pass) return "PASSED";
//   console.log("Done");
// }
// 🟡 Bài 2.4: Sửa bẫy xuống dòng sau return khiến hàm trả về undefined:
// Trả lời:
// function getObject() {
//   return
//   { status: 200 }
// }
// Trả lời:
//Nguyên nhân: JavaScript có cơ chế ASI (Automatic Semicolon Insertion). Khi từ khóa return đứng một mình trên 1 dòng, JS sẽ tự động thêm dấu ; ngay sau return, làm hàm trả về undefined.
//Cách sửa: Đưa dấu mở ngoặc nhọn { lên cùng dòng với return:
function getObject() {
  return {
    status: 200,
  };
}

// 🔴 Bài 2.5: Viết hàm runTestCase(tc) áp dụng tư duy Early Return để thoát sớm nếu tc.disabled === true.
// Dữ liệu mẫu 1: Test case bị tắt (disabled)
const testCase01 = {
  id: "TC_01",
  name: "Đăng nhập thành công",
  disabled: true,
  steps: ["Nhập email", "Nhập mật khẩu", "Bấm nút Đăng nhập"],
};

// Dữ liệu mẫu 2: Test case hoạt động bình thường
const testCase02 = {
  id: "TC_02",
  name: "Thêm sản phẩm vào giỏ hàng",
  disabled: false,
  steps: ["Chọn sản phẩm A", "Bấm Thêm vào giỏ"],
};

// Dữ liệu mẫu 3: Dữ liệu rỗng / Không hợp lệ
const testCase03 = null;

// Yêu cầu xử lý (Áp dụng tư duy Early Return)
// Viết hàm runTestCase(tc) tuân theo các bước kiểm tra theo thứ tự:
// Kiểm tra 1: Nếu không truyền tc (hoặc tc là null/undefined), dừng hàm ngay và trả về chuỗi: "Skipped: Không có dữ liệu test".
// Kiểm tra 2: Nếu tc.disabled === true, dừng hàm ngay và trả về chuỗi: "Skipped: Test case bị vô hiệu hóa".
// Thực thi logic chính: Nếu vượt qua 2 bước trên, in lần lượt các bước trong tc.steps ra màn hình console và trả về chuỗi: "Executed: Thành công".
function runTestCase(tc) {
  if (!tc) {
    return "Skipped: Không có dữ liệu test";
  }
  if (tc.disabled) {
    return "Skipped: Test case bị vô hiệu hóa";
  }
  console.log(`Đang thực thi: ${tc.id} ${tc.name}: `);
  tc.steps.forEach((step, index) => {
    console.log(`Bước ${index + 1}: ${step}`);
  });

  return "Executed: Thành công";
}
const testSuite = [testCase01, testCase02, testCase03];
console.log(testSuite);

console.log("=== BẮT ĐẦU CHẠY DANH SÁCH TEST CASES ===");
testSuite.forEach((tc, index) => {
  console.log(`>>> Kiểm tra Test Case ${index + 1}:`);

  const result = runTestCase(tc);
  console.log(`=> Kết quả: ${result}`);
  console.log("--------------");
});

// 3. Có () vs Không () khi làm việc với Function
// 🟢 Bài 3.1: Phân biệt ý nghĩa của myFunc và myFunc().
// Trả lời: myFunc là cầm cái hàm, còn myFunc() là thực thi cái hàm

// 🟢 Bài 3.2: Dự đoán kiểu dữ liệu của a và b: function getNum() { return 100; } const a = getNum; const b = getNum();
// Trả lời: kiểu dữ liệu của a là function, b là number

// 🟡 Bài 3.3: Giải thích tại sao setTimeout(sayHello(), 2000) lại in chữ "Hello" ngay lập tức chứ không chờ 2 giây.
//Trả lời: Nguyên nhân: Dấu () sau sayHello() khiến JS thực thi hàm sayHello() ngay lập tức khi đọc đến dòng code này $\rightarrow$ In ra chữ "Hello" liền. Hàm sayHello() không return gì nên trả về undefined. Sau đó setTimeout(undefined, 2000) chạy nên sau 2 giây không có gì xảy ra nữa.

// 🔴 Bài 3.5: Viết hàm Higher-Order Function withLogging(fn) nhận vào tên hàm trần fn và trả về một hàm mới thực thi fn đồng thời in log trước khi chạy.
// Hàm 1: Tính tổng 2 số
// 1. Hàm tạo vỏ bọc (Higher-Order Function)
function withLogging(fn) {
  return function (...args) {
    console.log(`[LOG] Đang chạy với tham số:`, args);
    const result = fn(...args);
    console.log(`[LOG] Kết quả trả về:`, result);
    return result;
  };
}

// 2. Hàm tính toán gốc
function tinhtong(a, b) {
  return a + b;
}

// 3. Tạo hàm mới đã được bọc Log
const tinhtongCoLog = withLogging(tinhtong);

// 4. Kích hoạt chạy thử với tham số 5 và 10
console.log("=== BẮT ĐẦU CHẠY ===");
const ketQua3 = tinhtongCoLog(5, 10);
console.log("Kết quả nhận được ngoài cùng:", ketQua);
// 4. Function Declaration
// 🟢 Bài 4.1: Viết một hàm sayWelcome(name) dùng cú pháp Function Declaration.
sayWelcome();
function sayWelcome() {
  console.log("hihi");
}

sayWelcome("An");
function sayWelcome1(name) {
  console.log(`Xin chào ${name}, chúc bạn một ngày tốt lành!`);
}

// 🟢 Bài 4.2: Giải thích tại sao đoạn code gọi sum(2, 3) trước khi khai báo function sum(a, b) lại không bị lỗi.
//Trả lời:
// Giai đoạn Biên dịch (Parsing Phase): Trước khi chạy code, JS Engine quét qua file và tìm tất cả các khai báo hàm dạng function sum(...). Nó đưa toàn bộ định nghĩa của hàm này lên đầu phạm vi (scope) và lưu vào bộ nhớ RAM.
// Giai đoạn Thực thi (Execution Phase): Khi đến dòng sum(2, 3), hàm sum đã nằm sẵn trong bộ nhớ rồi nên máy tính gọi chạy bình thường mà không hề gặp lỗi ReferenceError.

// 🟡 Bài 4.3: Chuyển đoạn code lặp lại dưới đây thành 1 Function Declaration tái sử dụng:
// console.log("Check element A"); console.log("Check element B");

function checkElement(name) {
  console.log(`Check element ${name}`);
}
checkElement("A");
checkElement("B");

// 🟡 Bài 4.4: Đoạn code sau in ra gì?
//  Giải thích bẫy ghi đè Function Declaration:

// function test() { return 1; }
// function test() { return 2; }
// console.log(test());
//Trả lời:
// Kết quả in ra: 2
// Giải thích:
// Khi Hoisting quét qua file, nó thấy 2 hàm trùng tên test(). Hàm khai báo sau sẽ ghi đè (overwrite) hoàn toàn hàm khai báo trước trong bộ nhớ. Khi lệnh test() chạy ở runtime, nó thực thi phiên bản mới nhất (hàm trả về 2).
// Lưu ý: Đây là lý do trong thực tế người ta ít khi dùng trùng tên hàm, hoặc dùng const test = ... (Function Expression) để tránh vô tình bị ghi đè.

// 🔴 Bài 4.5: Áp dụng cấu trúc file automation: Viết luồng test chính ở trên và tập hợp các hàm helper (Function Declaration) ở cuối file.

// 1. LUỒNG TEST CHÍNH (Đẩy lên đầu cho dễ đọc)
runTest();

// 2. HELPER FUNCTIONS (Đẩy xuống cuối file nhờ Hoisting)
function runTest() {
  logStep("Login");
  logStep("Checkout");
}

function logStep(step) {
  console.log(`Step: ${step}`);
}

// 5. Function Expression
// 🟢 Bài 5.1: Viết cú pháp Function Expression gán hàm tính hiệu 2 số vào biến const subtract.
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(1, 2));
// 🟢 Bài 5.2: Vì sao nên gán Function Expression vào const thay vì var hoặc let?
//Trả lời
// Bảo vệ hàm khỏi bị gán lại: Dùng const đảm bảo biến giữ hàm không bao giờ bị vô tình thay đổi thành giá trị khác (như subtract = 10 hay subtract = null) ở đoạn code phía sau.
// Ngăn chặn khai báo trùng tên: Khác với var (cho phép khai báo đè im lặng), const sẽ bắn lỗi SyntaxError ngay lập tức nếu bạn lỡ tay tạo một biến trùng tên trong cùng scope.

// 🟡 Bài 5.3: Đoạn code sau bị lỗi gì? Vì sao?
exec();
const exec = function () {
  console.log("Run");
};
//Trả lời:
// Loại lỗi: ReferenceError: Cannot access 'exec' before initialization
// Nguyên nhân: Khai báo biến với const rơi vào Vùng chết tạm thời (Temporal Dead Zone - TDZ) từ đầu scope cho tới khi chạy tới dòng khởi tạo. Khi bạn gọi exec() ở dòng 1, biến exec chưa hề được khởi tạo giá trị hàm nên JS Engine lập tức chặn lại và báo lỗi.

// 🟡 Bài 5.4: Chuyển Function Declaration sang Function Expression.
// function multiply(a, b) {
//   return a * b;
// }
const multiply1 = function (a, b) {
  return a * b;
};
const result = multiply1(5, 7);
console.log(result);

// 🔴 Bài 5.5: Tạo mảng tasks chứa 3 Function Expression khác nhau, dùng vòng lặp thực thi tuần tự từng hàm.
//Cách 1:
const tasks = [
  function () {
    console.log("Task 1");
  },
  function () {
    console.log("Task 2");
  },
  function () {
    console.log("Task 3");
  },
];
//tasks.forEach((task) => task());

//Cách 2:
for (const task of tasks) {
  task();
}
// 6. Arrow Function
// 🟢 Bài 6.1: Chuyển sang Arrow Function đầy đủ.
const add = function (a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;
const add3 = (a, b) => {
  return a + b;
};
// 🟢 Bài 6.2: Rút gọn Arrow Function  thành dạng 1 dòng.
const double = (x) => {
  return x * 2;
};

const double2 = (x) => x * 2;
// 🟡 Bài 6.3: Sửa lỗi trả về undefined khi return Object literal 1 dòng:
// const getUser = () => {
//   name: "Admin";
// };
const getUser0 = () => {
  ({ name: "Admin" });
};

const getUser = () => {
  return { name: "Admin" };
};

// 🟡 Bài 6.4: Khi nào Arrow Function bắt buộc phải dùng ngoặc tròn () cho phần tham số?

// Không có tham số nào: const sayHi = () => "Hello";
// Có từ 2 tham số trở lên: const sum = (a, b) => a + b;
// Dùng tham số mặc định (Default Parameters): const greet = (name = "Guest") => name;
// Dùng Rest Parameters hoặc Destructuring: const logAll = (...args) => args; hoặc const getName = ({ name }) => name;

// 🔴 Bài 6.5: Viết lại đoạn callback callback lồng nhau sau thành Arrow Function 1 dòng:

const numbers = [1, 2, 3];
const result3 = numbers
  .map(function (n) {
    return n * 2;
  })
  .filter(function (n) {
    return n > 2;
  });

const result4 = numbers.map((n) => n * 2).filter((n) => n > 2);
console.log(result4);

// PHẦN 2: KỸ THUẬT XỬ LÝ THAM SỐ NÂNG CAO
// 7. Default Parameter
// 🟢 Bài 7.1: Khai báo hàm setPort(port) có giá trị mặc định của port là 8080.
function setPort(port = 8080) {
  return port;
}
console.log(setPort());
// 🟢 Bài 7.2: Kết quả in ra là gì khi truyền undefined vs null vào tham số mặc định:
function test(a = 10) {
  console.log(a);
}
test(undefined);
test(null);
//Trả lời:
// test(undefined): In ra 10 (vì undefined đại diện cho việc "không truyền giá trị", kích hoạt Default Parameter)
// test(null): In ra null (vì null là một giá trị hợp lệ biểu thị "giá trị rỗng", không kích hoạt Default Parameter).

// 🟡 Bài 7.3: Sửa thiết kế sai quy tắc đặt Default Parameter ở đầu hàm:
//function createUser(role = "guest", username) {}

function createUser(role = "guest", username) {}
// Khi bạn gọi createUser("An"):
// JavaScript sẽ gán "An" cho vị trí thứ nhất là role (role thành "An").
// Vị trí thứ hai username không được truyền gì nên bị undefined.
// Để dùng được giá trị mặc định "guest", bạn bắt buộc phải viết thủ công chữ undefined vào vị trí đầu tiên:
// createUser(undefined, "An"); // Code xấu và gượng ép

// 🟡 Bài 7.4: Tham số mặc định có thể là kết quả gọi hàm khác không? Cho ví dụ.
// Cách bạn đang viết: Bạn gọi hàm tinhGiaTriMacDinh(5, 10) ở ngoài, lưu số 15 vào biến giaTriMD, rồi gán biến giaTriMD làm giá trị mặc định.
// Cách chuẩn nhất của Bài 7.4: Đặt trực tiếp lệnh gọi hàm tinhGiaTriMacDinh(5, 10) ngay vị trí tham số d.
// Cái này tự làm chỉ đúng 80%
function tinhGiaTriMacDinh(a, b) {
  return a + b;
}
// function tinhHieu(c, d = giaTriMD) {
//   return d - c;
// }
// const giaTriMD = tinhGiaTriMacDinh(5, 10);
// const giaTriHieu = tinhHieu(1);
// console.log(giaTriMD);
// console.log(giaTriHieu);
//Cách đúng yêu cầu
function tinhHieu2(c, d = tinhGiaTriMacDinh(5, 10)) {
  return d - c;
}
const result5 = tinhHieu2(2);
console.log(result5);

// 🔴 Bài 7.5: Viết hàm createReport(title, date = new Date().toISOString()) tự động lấy mốc thời gian hiện tại nếu người dùng không truyền date.
function createReport(title, date = new Date().toISOString()) {
  return { title, date };
}
const report = createReport("Thêm 1 mặt hàng vào giỏ");
console.log(`Report: ${report.title} - Thời gian: ${report.date}`);
//Nếu muốn theo định dạng 10:28:20 2/9/2026 thì sài hàm .toLocaleString("vi-VN") thay cho .toISOString()

// 8. Rest Parameter (...args)
// 🟢 Bài 8.1: Viết hàm countArgs(...args) trả về tổng số lượng tham số được truyền vào.
function countArgs(...args) {
  return args.length;
}
const count = countArgs(1, 2, 5, 7);
console.log(count);

// 🟢 Bài 8.2: Rest parameter ...args bên trong thân hàm có kiểu dữ liệu là gì?
//Trả lời:
// Bên trong hàm, ...args là một Mảng thực sự (Array), sở hữu đầy đủ các phương thức mảng như .map(), .filter(), .reduce(), .length.
//So sánh Parameter thường và Rest parameter
// 1. Parameter thường: Chỉ lấy đủ số lượng biến đã khai báo
function addNormal(a, b) {
  return a + b;
}
console.log(addNormal(5, 10, 20, 30)); // In ra: 15 (Số 20, 30 bị ngó lơ hoàn toàn)

// 2. Rest Parameter: Gom tất cả vào một mảng, truyền bao nhiêu số cũng được
function addRest(...numbers) {
  // numbers = [5, 10, 20, 30]
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(addRest(5, 10, 20, 30)); // In ra: 65

// 🟡 Bài 8.3: Đoạn code sau bị lỗi cú pháp gì?
// function logData(...args, action) {}
// SyntaxError: Rest parameter must be last formal parameter
//Nhiệm vụ của Rest parameter là gom toàn bộ các đối số còn lại từ vị trí của nó trở đi. Nếu bạn đặt thêm tham số nào khác đằng sau nó, chương trình sẽ rơi vào trạng thái vô lý vì không thể biết đâu là phần gom dư và đâu là tham số cuối.
function logData(action, ...args) {}

// 🟡 Bài 8.4: Viết hàm sumAll(first, ...others) tính tổng tất cả tham số truyền vào.
function sumAll(first, ...others) {
  const tinhTong = others.reduce((sum, giaTri) => sum + giaTri, first);
  return tinhTong;
}
console.log(sumAll(3, 5, 63, 4, 7));

// 🔴 Bài 8.5: Viết hàm wrapper Logging Wrapper in ra log trước và sau khi chạy
function tinhTong(a, b) {
  return a + b;
}

function loggingWrapper(func) {
  return function (...agrs) {
    console.log(`Đang gọi hàm với tham số ${agrs}`);
    const result6 = func(...agrs);
    console.log(`Kết quả: ${result6}`);
    return result6;
  };
}
const tinhtongCoLog2 = loggingWrapper(tinhTong);
tinhtongCoLog2(6, 7);
// 🔴 Bài 8.6: Viết hàm nhanTatCa(...numbers) tính tích (phép nhân) của tất cả các số được truyền vào.
// Ví dụ: nhanTatCa(2, 3, 4): Trả về 24.
// Gợi ý tư duy: numbers là mảng. Bạn có thể dùng .reduce() với giá trị khởi tạo là 1 (hoặc dùng vòng lặp for...of).
//C1:
function nhanTatCa(...numbers) {
  return numbers.reduce((tich, giatri) => tich * giatri, 1);
}
console.log(nhanTatCa(1, 5, 6, 7));

//C2:
function nhanTatCa2(...numbers) {
  let tich2 = 1;
  for (let item of numbers) {
    tich2 = item * tich2;
  }
  return tich2;
}
console.log(nhanTatCa2(1, 5, 6, 7));
// 🔴 Bài 8.7: Viết hàm locSoLonHon(nguong, ...numbers) nhận vào một số nguong và một danh sách các số.
// Hàm trả về một mảng chứa các số lớn hơn nguong.
// Ví dụ: locSoLonHon(10, 5, 15, 8, 20, 3): Trả về mảng [15, 20].
// Gợi ý tư duy: nguong lấy số đầu tiên (10), numbers sẽ gom các số còn lại thành mảng [5, 15, 8, 20, 3]. Bạn dùng .filter() trên mảng numbers.

function locSoLonHon(nguong, ...numbers) {
  return numbers.filter((number) => number > nguong);
}
console.log(locSoLonHon(10, 5, 30, 7, 5, 8, 100));

// 🔴 Bài 8.8:Viết hàm Wrapper gapDoiKetQua(fn) nhận vào một hàm fn bất kỳ.
// Hàm wrapper này trả về một hàm mới chạy fn rồi nhân đôi kết quả trả về của fn.
function tinhTien(a) {
  return a;
}

function gapDoiKetQua(fn) {
  return function (...args) {
    const ketQuaGoc = fn(...args);
    return ketQuaGoc * 2;
  };
}
const ketQuaNe = gapDoiKetQua(tinhTien);
console.log(ketQuaNe(2));
// 🔴 Bài 8.9:Wrapper Báo Cáo Thời Gian (Timer Wrapper)
// Mục tiêu: Viết một wrapper để biết một hàm chạy hết bao nhiêu mili-giây.
// Đề bài: Viết hàm Wrapper withTimer(fn).
// Nó trả về một hàm mới bọc hàm fn.
// Trước khi gọi fn, in ra: "Bắt đầu đo thời gian...".
// Chạy fn và lưu kết quả.
// Sau khi fn chạy xong, in ra: "Đã chạy xong!".
// Cuối cùng, trả về kết quả của hàm fn.
function tinhT(a, b) {
  return a + b;
}

function withTimer(fn) {
  return function (...args) {
    const start = performance.now();
    console.log("Bắt đầu đo thời gian...");
    const ketQua4 = fn(...args);
    const end = performance.now();
    console.log(`Hàm chạy hết: ${end - start} ms`);
    console.log("Đã chạy xong!");
    return ketQua4;
  };
}
const final = withTimer(tinhT);
console.log(final(1, 6));

// 🔴 Bài 8.10:Mục tiêu: Viết một wrapper để kiểm tra dữ liệu đầu vào trước khi cho phép chạy hàm gốc.
// Đề bài: Viết hàm Wrapper chiNhanSoDuong(fn).
// Hàm mới này sẽ nhận vào các tham số (...args).
// Nó dùng vòng lặp (hoặc .some()) kiểm tra mảng args:
// Nếu có bất kỳ số âm nào (ví dụ -1, -5), nó in ra "Lỗi: Không được nhập số âm!" và trả về 0 (KHÔNG chạy hàm fn).
// Nếu tất cả đều là số dương, nó mới cho phép chạy fn(...args) và trả về kết quả bình thường.
function tinhDienTich(chieuDai, chieuRong) {
  return chieuDai * chieuRong;
}
function chiNhanSoDuong(fn) {
  return function (...numbers) {
    for (let number of numbers) {
      if (number < 0) {
        console.log("Lỗi: Không được nhập số âm!");
        return 0;
      }
    }
    return fn(...numbers);
  };
}
const ketqua5 = chiNhanSoDuong(tinhDienTich);
console.log(ketqua5(-5, 10));
//------------
//Ví dụ phân biệt Rest parameter và Spread Operator
const hehe = [1, 3];
const hihi = [5, 6];
// const mangGop = [...hehe, ...hihi];
// function gopVaTinhTong(...numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }
// const ketqua6 = gopVaTinhTong(...mangGop);
// console.log(ketqua6);

// 1. Dùng Rest Parameter (...nums) để gom các số lẻ truyền vào
function tinhTong2(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
// 2. Dùng Spread Operator (...hehe, ...hihi) rã trực tiếp 2 mảng vào đối số
console.log(tinhTong(...hehe, ...hihi)); // In ra: 15
//-----------
// 9. Options Object
// 🟢 Bài 9.1: Chuyển hàm 4 tham số setup(url, width, height, isHeadless) sang dùng Options Object.
//Trả lời:
// Cách Mới (Dùng Options Object {} + Chống sập = {})
// Khai báo hàm (kết hợp cài sẵn giá trị mặc định):

function showToast({
  title = "Thông báo",
  message = "",
  duration = 3000,
  type = "info",
  isClosable = true,
} = {}) {
  // <--- Thêm = {} ở đây để mua "bảo hiểm" chống crash
  console.log(
    `[${type.toUpperCase()}] ${title} (${duration}ms) - Closable: ${isClosable}`,
  );
}
// Sức mạnh 1: Tự giải thích code (Self-documenting)
// showToast({
//   title: "Thành công",
//   message: "Đã lưu bài viết",
//   duration: 5000,
//   type: "success",
//   isClosable: true
// });
// 👉 Đọc vào hiểu ngay thuộc tính nào mang ý nghĩa gì, không bao giờ lo nhầm vị trí.

// Sức mạnh 2: Chỉ truyền đúng thứ mình cần, bỏ qua cái còn lại
// Muốn đổi isClosable thành false? Chỉ truyền đúng 2 thuộc tính:
showToast({ title: "Cảnh báo", isClosable: false });
// 👉 Các tham số còn lại (message, duration, type) sẽ tự động lấy giá trị mặc định mà bạn đã cài sẵn!

// Sức mạnh 3: An toàn tuyệt đối khi gọi hàm rỗng
// Gọi hàm không truyền bất kỳ đối số nào:
showToast();
// In ra: [INFO] Thông báo (3000ms) - Closable: true
// 👉 Nhờ có = {} ở cuối tham số, app không bị sập mà sẽ tự chạy với toàn bộ cài đặt mặc định!

// 🟢 Bài 9.2: Ưu điểm lớn nhất của Options Object khi hàm có nhiều hơn 3 tham số là gì?
// Ưu điểm vượt trội của Spread Operator với Object là giúp bạn tạo ra Object mới từ Object cũ một cách an toàn (không làm hỏng dữ liệu gốc) với cú pháp cực kỳ ngắn gọn.
//Không phụ thuộc vào thứ tự truyền tham số.
//Dễ dàng bỏ qua các tham số không bắt buộc mà không cần truyền undefined

// 🟡 Bài 9.3: Sửa lỗi crash TypeError khi gọi hàm init() không truyền đối số:
// function init({ env, debug }) {}
//Trả lời:
//Khi KHÔNG CÓ = {}
//function init({ env, debug }) {}
//init(); // Gọi hàm không truyền đối số -> Dữ liệu nhận vào là undefined
// Lúc này, hậu trường JS sẽ cố gắng thực hiện phép bóc tách: { env, debug } = undefined

// Vì undefined không phải là Object, JS không thể thò tay vào bên trong để lấy env hay debug.
// 💥 Kết quả: Nổ lỗi TypeError: Cannot destructure property 'env' of 'undefined' và sập app!

// 🟡 Bài 9.4: Kết hợp Options Object với Default values cho từng thuộc tính:
// browser (default "chrome"), timeout (default 3000).
function ahha({ browser = "chrome", timeout = 3000 } = {}) {
  console.log(
    `Dang chạy trên trình duyệt ${browser}; thời gian chờ: ${timeout}`,
  );
}
ahha({ browser: "fixfox" });
ahha();
// 🔴 Bài 9.5: Viết hàm configurePipeline(userOpts) gộp userOpts với cấu hình mặc định defaultOpts.
// Cấu hình mặc định của hệ thống
const defaultOpts = {
  retries: 3,
  verbose: false,
  env: "development",
};
function configurePipeline(userOpts = {}) {
  const finalOpts = {
    ...defaultOpts,
    ...userOpts,
  };
  return finalOpts;
}
console.log(configurePipeline());
console.log(configurePipeline({ env: "Prod" }));

// 10. Destructuring & Spread Operator
// 🟢 Bài 10.1: Dùng Array Destructuring lấy ra 2 phần tử đầu tiên từ
const coords = [10, 20, 30];
const [x, y] = coords; //Theo quy tắc gán trong JS (Biến_Mới = Nguồn_Dữ_Liệu), vế bên phải dấu = luôn là nguồn dữ liệu có sẵn (ở đây là mảng coords), vế bên trái là nơi nhận dữ liệu.
console.log(x);
console.log(y);

// 🟢 Bài 10.2: Dùng Object Destructuring lấy ra title từ
const res = { title: "Home", status: 200 };
const { title } = res; //object theo key trong object nên chỉ cần note ra key cần lấy là dc res.title
console.log(title);

// 🟡 Bài 10.3: Dùng Spread Operator để sao chép object
// const config = { timeout: 1000 }; và đè timeout: 5000.
const config = {
  apiUrl: "https://api.example.com",
  timeout: 1000,
  retry: 3,
  theme: "dark",
};
const newconfig = { ...config, timeout: 5000 };

// 🟡 Bài 10.4: Spread Operator có làm thay đổi Object/Array gốc ban đầu không?
// Không. Spread Operator tạo ra một bản sao nông (Shallow Copy) hoàn toàn mới ở tầng ngoài cùng trong bộ nhớ, giữ cho Object/Array gốc nguyên vẹn (tính bất biến - Immutability).

// 🔴 Bài 10.5: Destructuring lồng nhau (nested) ngay tại tham số hàm để lấy id từ user.data.id:function printUserId(response) {}
const apiResponse = {
  status: 200,
  message: "Success",
  data: {
    id: "USR-888",
    name: "Nguyễn Văn A",
    role: "admin",
  },
};
function printUserId({ data: { id } = {} } = {}) {
  return id;
}
console.log(printUserId(apiResponse));

// 11. Function Overloading trong JavaScript
// 🟢 Bài 11.1: JavaScript có hỗ trợ Function Overloading gốc (native) giống như Java hay C# không?

// 🟢 Bài 11.2: Điều gì xảy ra khi viết 2 hàm cùng tên function test(a) {} và function test(a, b) {} trong cùng scope?

// 🟡 Bài 11.3: Viết 1 hàm formatInput(data) mô phỏng Overloading: nếu data là string thì uppercase, nếu là number thì làm tròn.

// 🟡 Bài 11.4: Mô phỏng Overloading dựa vào số lượng argument truyền vào bằng cách kiểm tra undefined.

// 🔴 Bài 11.5: Viết hàm findElement(selectorOrElement): nếu đầu vào là string thì trả về document.querySelector(selectorOrElement), nếu là Object/DOM Element thì trả về chính nó.

// PHẦN 3: NGỮ CẢNH THIS & QUY TẮC HOISTING
// 12. this trong Hàm thường
// 🟢 Bài 12.1: Trong method của Object, từ khóa this trỏ đến đối tượng nào?

// 🟢 Bài 12.2: Giá trị của this khi gọi một hàm độc lập (không strict mode) trong trình duyệt là gì?

// 🟡 Bài 12.3: Giải thích tại sao đoạn code sau in ra undefined:

// JavaScript
// const car = { brand: "Toyota", getBrand() { return this.brand; } };
// const fn = car.getBrand;
// console.log(fn());
// 🟡 Bài 12.4: Nêu 3 phương thức củng cố/ràng buộc ngữ cảnh this cố định cho hàm thường.

// 🔴 Bài 12.5: Sửa lỗi mất this trong hàm lồng hàm bằng phương pháp lưu biến trung gian (self/that).

// JavaScript
// const app = {
//   name: "MyApp",
//   start() {
//     const self = this;
//     function log() { console.log(self.name); }
//     log();
//   }
// };
// 13. this trong Arrow Function
// 🟢 Bài 13.1: Arrow Function có this riêng của nó không?

// 🟢 Bài 13.2: Dùng bind() hoặc call() có thể đổi ngữ cảnh this của Arrow Function được không?

// 🟡 Bài 13.3: Giải thích bẫy code in ra undefined sau:

// JavaScript
// const user = { name: "Tester", getName: () => this.name };
// console.log(user.getName());
// 🟡 Bài 13.4: Chuyển callback hàm thường trong setTimeout sang Arrow Function để giữ đúng this:

// JavaScript
// const timer = { seconds: 0, start() { setTimeout(function() { console.log(this.seconds); }, 1000); } };
// 🔴 Bài 13.5: Phân tích giá trị this qua 3 tầng hàm: Object Method (Hàm thường) -> Arrow Function -> Arrow Function.

// 14. Hoisting: Function Declaration
// 🟢 Bài 14.1: Hoisting là gì?

// 🟢 Bài 14.2: Function Declaration được hoisted như thế nào?

// 🟡 Bài 14.3: Dự đoán kết quả: a(); function a() { console.log(1); } function a() { console.log(2); }

// 🟡 Bài 14.4: Tại sao viết các hàm Helper bằng Function Declaration ở cuối file lại giúp code chính gọn gàng hơn?

// 🔴 Bài 14.5: Dự đoán hành vi Hoisting của Function Declaration nằm trong khối if(false) ở chế độ Strict Mode.

// 15. Hoisting: Variable (var vs let/const)
// 🟢 Bài 15.1: Biến var khi được hoisted sẽ mang giá trị mặc định là gì?

// 🟢 Bài 15.2: Vùng Temporal Dead Zone (TDZ) áp dụng cho từ khóa khai báo biến nào?

// 🟡 Bài 15.3: Dự đoán output của 2 đoạn code sau:
// Code A: console.log(x); var x = 5;
// Code B: console.log(y); let y = 5;

// 🟡 Bài 15.4: Dự đoán lỗi khi gọi Function Expression dùng const trước dòng gán: fn(); const fn = function() {};

// 🔴 Bài 15.5: Dự đoán kết quả đoạn code bẫy thứ tự Hoisting giữa var và function cùng tên:

// JavaScript
// var myVar = 10;
// function myVar() {}
// console.log(typeof myVar);
// PHẦN 4: CALLBACK & ARRAY CALLBACK METHODS
// 16. Hàm Callback
// 🟢 Bài 16.1: Định nghĩa ngắn gọn Hàm Callback.

// 🟢 Bài 16.2: Viết hàm process(data, callback) gọi callback(data) sau khi nhận dữ liệu.

// 🟡 Bài 16.3: Sửa lỗi truyền callback sai quy tắc: fetchData(onSuccess()).

// 🟡 Bài 16.4: Viết hàm mathOp(a, b, opCallback) cho phép truyền vào các phép tính khác nhau.

// JavaScript
// function mathOp(a, b, opCallback) { return opCallback(a, b); }
// mathOp(5, 3, (x, y) => x + y);
// 🔴 Bài 16.5: Viết hàm tự chế myFilter(arr, callback) mô phỏng lại cách hoạt động của .filter().

// JavaScript
// function myFilter(arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) result.push(arr[i]);
//   }
//   return result;
// }
// 17. Bẫy var + Async Callback
// 🟢 Bài 17.1: Đoạn code sau in ra gì? for(var i=1; i<=3; i++) { setTimeout(() => console.log(i), 1000); }

// 🟢 Bài 17.2: Tại sao tất cả callback trong đoạn code trên lại cùng nhìn thấy giá trị 4?

// 🟡 Bài 17.3: Sửa bẫy trên bằng cách đơn giản nhất (thay từ khóa biến).

// 🟡 Bài 17.4: Sửa bẫy trên bằng cách dùng IIFE (Immediately Invoked Function Expression) tạo Closure.

// JavaScript
// for (var i = 1; i <= 3; i++) {
//   (function(index) {
//     setTimeout(() => console.log(index), 1000);
//   })(i);
// }
// 🔴 Bài 17.5: Sửa bài toán chạy 3 test case bất đồng bộ bằng forEach mảng để giữ đúng chỉ số.

// JavaScript
// ["TC1", "TC2", "TC3"].forEach((tc, index) => {
//   setTimeout(() => console.log(`${index + 1}: ${tc}`), 1000);
// });
// 18. Array Method: map()
// 🟢 Bài 18.1: Phương thức map() trả về mảng mới hay sửa đổi trực tiếp mảng cũ?

// 🟢 Bài 18.2: Nhân đôi tất cả phần tử trong mảng [1, 2, 3] dùng map().

// 🟡 Bài 18.3: Đoạn code sau tạo ra mảng chứa giá trị gì? [1, 2].map(x => { x * 2; })

// 🟡 Bài 18.4: Trích xuất mảng chứa các email từ mảng đối tượng users = [{email: "a@g.com"}, {email: "b@g.com"}].

// 🔴 Bài 18.5: Dùng map() kết hợp Spread Operator để thêm thuộc tính status: "PROCESSED" cho từng object trong mảng.

// 19. Array Method: filter()
// 🟢 Bài 19.1: Callback của filter() bắt buộc phải trả về kiểu dữ liệu gì để giữ lại phần tử?

// 🟢 Bài 19.2: Lọc các số chẵn từ mảng [1, 2, 3, 4, 5] dùng filter().

// 🟡 Bài 19.3: filter() trả về gì nếu không có phần tử nào thỏa mãn điều kiện?

// 🟡 Bài 19.4: Lọc danh sách các test case bị hỏng: tcs = [{id: 1, passed: true}, {id: 2, passed: false}].

// 🔴 Bài 19.5: Kết hợp .filter() và .map() trên mảng sản phẩm để lấy tên của các sản phẩm có giá lớn hơn 100.

// 20. Array Method: find()
// 🟢 Bài 20.1: Phương thức find() trả về một Mảng hay một Phần tử?

// 🟢 Bài 20.2: Tìm phần tử đầu tiên lớn hơn 10 trong mảng [5, 12, 8, 130] dùng find().

// 🟡 Bài 20.3: find() trả về giá trị gì nếu không tìm thấy phần tử nào thỏa mãn?

// 🟡 Bài 20.4: Phân biệt kết quả trả về giữa arr.filter(x => x === 1) và arr.find(x => x === 1).

// 🔴 Bài 20.5: Viết hàm getTestCase(tcList, id) trả về test case tìm thấy, nếu không thấy thì trả về object mặc định { id, status: "NOT_FOUND" }.

// JavaScript
// function getTestCase(tcList, id) {
//   return tcList.find(tc => tc.id === id) || { id, status: "NOT_FOUND" };
// }
// PHẦN 5: SCOPE, SCOPE CHAIN & CLOSURE
// 21. Global Scope
// 🟢 Bài 21.1: Biến thuộc Global Scope được khai báo ở đâu?

// 🟢 Bài 21.2: Biến Global có thể truy cập được từ bên trong một hàm không?

// 🟡 Bài 21.3: Tác hại của việc lạm dụng biến Global trong dự án là gì?

// 🟡 Bài 21.4: Dự đoán kết quả in ra (Hiện tượng Variable Shadowing):

// JavaScript
// const x = "GLOBAL";
// function test() { const x = "LOCAL"; console.log(x); }
// test();
// 🔴 Bài 21.5: Sửa lỗi tạo biến Global vô ý do quên từ khóa khai báo: function setVal() { score = 100; }

// 22. Function Scope
// 🟢 Bài 22.1: Biến khai báo bên trong một hàm bằng var có Scope là gì?

// 🟢 Bài 22.2: Có thể truy cập biến thuộc Function Scope từ bên ngoài hàm đó được không?

// 🟡 Bài 22.3: Vòng đời (lifecycle) của biến thuộc Function Scope diễn ra như thế nào?

// 🟡 Bài 22.4: Hai hàm khác nhau có thể khai báo 2 biến cùng tên const temp = 10 mà không gây lỗi không? Vì sao?

// 🔴 Bài 22.5: Phân tích xem có mấy biến a độc lập được tạo ra trong code sau:

// JavaScript
// function f1() { const a = 1; }
// function f2() { const a = 2; }
// const a = 3;
// 23. Block Scope
// 🟢 Bài 23.1: Những từ khóa khai báo biến nào tuân thủ quy tắc Block Scope?

// 🟢 Bài 23.2: Cặp ngoặc nào tạo ra một Block Scope?

// 🟡 Bài 23.3: Đoạn code sau in ra gì?

// JavaScript
// if (true) { var a = 10; let b = 20; }
// console.log(a);
// console.log(b);
// 🟡 Bài 23.4: Khối ngoặc nhọn trần { const secret = 123; } có tạo thành Block Scope không?

// 🔴 Bài 23.5: Tối ưu hóa biến tạm bằng Block Scope để tránh lộ biến ra bên ngoài file.

// JavaScript
// {
//   const tempConfig = { env: "test" };
//   // Xử lý với tempConfig ở đây
// } // tempConfig tự động bị xóa khỏi bộ nhớ sau cặp ngoặc
// 24. Bẫy: Object vs Scope
// 🟢 Bài 24.1: Cặp ngoặc nhọn {} của Object literal có tạo ra Scope không?
// 🟢 Bài 24.2: Scope trả lời cho câu hỏi gì, còn Object trả lời cho câu hỏi gì?
// 🟡 Bài 24.3: Dự đoán kết quả in ra của code sau:  JavaScriptconst val = "Global";
// const obj = { val: "Object", getVal: function() { console.log(val); } };
// obj.getVal();
// 🟡 Bài 24.4: Để hàm trong obj ở bài 24.3 in ra "Object", bạn phải sửa dòng console log như thế nào?
// 🔴 Bài 24.5: Phân tích lỗi tìm biến trong method của Object khi quên dùng từ khóa this.
// 25. Scope Chain🟢 Bài 25.1: Scope Chain tìm kiếm biến theo chiều nào?
// 🟢 Bài 25.2: Hàm cha có thể nhìn thấy và dùng biến khai báo trong hàm con không?
// 🟡 Bài 25.3: Dự đoán giá trị in ra:  JavaScriptconst a = 1;
// function outer() {
//   const a = 2;
//   function inner() { console.log(a); }
//   inner();
// }
// outer();
// 🟡 Bài 25.4: Báo lỗi ReferenceError: x is not defined xảy ra khi Scope Chain tìm đến đâu?
// 🔴 Bài 25.5: Phân tích Scope Chain của hàm fn khi nó được định nghĩa ở Scope A nhưng lại được gọi thực thi ở Scope B.  26. Closure
// 🟢 Bài 26.1: Closure là gì?
// 🟢 Bài 26.2: Đoạn code sau có sử dụng Closure không?  JavaScriptfunction outer() {
//   const msg = "Hello";
//   return function() { console.log(msg); };
// }
// 🟡 Bài 26.3: Viết hàm createCounter() dùng Closure trả về hàm tăng số đếm lên 1 mỗi lần gọi.  JavaScriptfunction createCounter() {
//   let count = 0;
//   return function() { count++; return count; };
// }
// 🟡 Bài 26.4: Hai instance tạo từ Closure c1 = createCounter() và c2 = createCounter() có dùng chung biến count không?
// 🔴 Bài 26.5: Viết hàm memoize(fn) áp dụng Closure để lưu lại kết quả tính toán của hàm fn (caching), giúp tránh phải tính toán lại nếu đối số truyền vào bị trùng lặp.  JavaScriptfunction memoize(fn) {
//   const cache = {};
//   return function(arg) {
//     if (arg in cache) {
//       return cache[arg];
//     }
//     const result = fn(arg);
//     cache[arg] = result;
//     return result;
//   };
// }
