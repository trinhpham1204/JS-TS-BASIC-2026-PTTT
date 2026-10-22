// //BT nhỏ 1
// let loginStatus = "locked";

// //1. nếu loginStatus === 'sucess' -> in 'TEst pass: login thành công'
// //2. nếu loginStatus === 'locked' -> in 'Tài khoản bị khóa'
// //3. Các TH còn lại -> in 'Test fail: login thất bại'
// if (loginStatus === "sucess") {console.log('TEst pass: login thành công');
// }else if (loginStatus === "locked") {console.log('Tài khoản bị khóa');
// }else {console.log('Test fail: login thất bại')};

// //BT nhỏ 2
// let failedTests = 2;
// let suiteStatus = failedTests === 0 ? "PASS" : failedTests <= 2 ? "WARNING" : "FAIL";
// YC -> viết lại đoạn code trên bằng if/else if/else
// let failedTests = 2;
// let suiteStatus;
// if (failedTests === 0) {suiteStatus = "PASS"
// } else if (failedTests <=2) {suiteStatus = "WARNING"}
// else (suiteStatus = "FAIL")
// console.log (suiteStatus)

let failedTests = 3;
let suiteStatus;

if (failedTests === 0) {
  suiteStatus = "PASS";
} else if (failedTests <= 2) {
  suiteStatus = "WARNING";
} else {
  suiteStatus = "fail";
}
console.log(suiteStatus);
