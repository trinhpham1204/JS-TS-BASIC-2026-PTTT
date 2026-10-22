JavaScript;
//Hình thái 1: return ra 1 hàm khác -- cổ điển

function taoMayChao(ten) {
  function loiChao() {
    console.log(`Xin chao, ${ten}`);
  }
  return loiChao;
}

const chaoNeko = taoMayChao("Neko");

chaoNeko();

//taoMayChao("Neko")
// + tao bien Neko
// + tao Ham loi chao
// + return loiChao ra ngoai

// chaoNeko()
// loiChao van nho ten = Neko

// Hình thái 2: CallBack chạy trễ sau đó - ko cần return
// kiểu này hay gặp trong setTimeout, setInterval

function demoHenGio() {
  let message = "Tôi vẫn còn sống";

  setTimeout(function () {
    console.log(message);
  }, 100);
}

demoHenGio();

//Hình thái 3: Dùng object có sẵn scoopt bên ngoài
const testContext = {
  env: "staging",
  retry: 0,
};

function taoLoggerKetQua() {
  return function (testName) {
    console.log(
      `${testName} - ${testContext.env} - retry ${testContext.retry}`,
    );
  };
}
const logResult = taoLoggerKetQua();

logResult("Login");

testContext.retry = 2;

logResult("login");
//Vì sao đây vẫn là closure??/
// hafm đc return nằm trong hàm cha
// dùng biến testContext từ bên ngoài
// khi chạy nó vẫn truy cập đc testContext
//-> điểm lưu ý: closure ko sao chép nguyên object -> nó giữ quyền truy cập tới bến/tham chiếu đang trỏ tới objetc

//Hình thái 4: Trả về object có methos dùng chung biến ngoài
function taoBoDem() {
  let count = 0;
  return {
    tang() {
      count++;
      console.log("Count = ${count");
    },
    reset() {
      count = 0;
      console.log("reset xong");
    },
  };
}
const boDem = taoBoDem();
boDem.tang();
boDem.tang();
boDem.tang();
boDem.tang();

//Closure giải quyết vấn đề gì
//Global scope = ai cũng truy cập được

let soThuTu = 0;

function taoIdTest() {
  soThuTu++;
  return `USERT_TEST_${soThuTu}`;
}

console.log(taoIdTest());
console.log(taoIdTest());

soThuTu = 999;

console.log(taoIdTest());

function mayTaoId() {
  ///khai bao bien dem
  let soThuTu = 0;
  function tangId() {
    soThuTu++;
    return `USER_TEST_${soThuTu}`;
  }
  return tangId;
}

const layIdMoi = mayTaoId();
console.log(layIdMoi());
console.log(layIdMoi());

// khi mayTaoId chạy xong -> theo qy tắc scope , biến soThuTu sẽ chết.
// NHƯNG!!! vì chúng ta đã tạo ra return tangId, và hàm tangId đang closure (bao đóng)
// biênd soThuTu vào balo kí ức. Do đó biến soThuTu bất tử và tiếp tục tăng lên mỗi lần
// gọi layIdMoi()

//Ứng dnjg data factory
function taoNhaMaySinhEmail(domain) {
  let dem = 0;

  return function () {
    dem++;
    return `Tester_${dem}@${domain}`;
  };
}

const sinhEmailStaging = taoNhaMaySinhEmail("staging.neko.vn");
const sinhEmailProd = taoNhaMaySinhEmail("neko.com");

console.log(sinhEmailStaging());
console.log(sinhEmailStaging());
console.log(sinhEmailProd());

//bài tập
//viết 1 hàm taoBoDem(tenNut) trả về 1 object với 2 method
// - click() - tăng số lần click lên 1 và in ra "tên nút số click clicks"
// - reset () - đặt lại click - 0 và in a "tên nút reset"

// ví dụ kết quả mong muốn
// const nutLogin = taoBoDem("Login Button");
// nutLogin.click() -> login button: 1 clicks
// nutLogin.click() -> login button: 2 clicks
//nutLogin.reset()
// nutLogin.click() -> login button: 1 clicks
function taoBoDem11(tenNut) {
  let soLanClick = 0;
  return {
    click() {
      soLanClick++;
      console.log(`${soLanClick} clicks`);
    },
    reset() {
      soLanClick = 0;
      console.log("reset Xong");
    },
  };
}

const nutLogin = taoBoDem1("Login Button");
nutLogin.click();
nutLogin.click();
nutLogin.reset();
