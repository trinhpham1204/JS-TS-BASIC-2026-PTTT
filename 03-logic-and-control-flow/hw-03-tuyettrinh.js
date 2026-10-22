// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.

// Dữ liệu đầu vào:

// let rawProjectName = "   Neko CRM   ";
// let rawEnvName = "   ";
// let rawPassRate = "82";
// let rawHasReport = "true";
// let rawCriticalMessage = "   ";
// let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

// Yêu cầu:
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
// Ép rawPassRate sang Number.
// Ép rawHasReport sang Boolean đúng cách.

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true
// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true
// In báo cáo ra console.

// Expected output
// Project:         Neko CRM
// Environment:     Development
// Browser:         chrome
// Engine:          Chromium

// Pass Rate:       82.00%
// Grade:           GOOD
// Report:          Có report
// Critical Bug:    Không có bug nghiêm trọng

// Ready:           YES
// ----------------

let rawProjectName = "   Neko CRM   ";
let rawEnvName = "   ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = "   ";
let browserUsed = "chrome";

// 1. Dùng .trim() để làm sạch tên project
let projectName = rawProjectName.trim();

// 2. Dùng .trim() để làm sạch tên evrname. Kiểm tra environment trống -> gán mặc định "Development"
//Cách 1: Dùng toán tử 3 ngôi và so sánh tuyệt đối (===)
let EnvName = rawEnvName.trim();
let environment = EnvName === "" ? "Development" : EnvName;

// 3. Ép rawPassRate sang Number
let passRate = Number(rawPassRate);

// 4. Ép rawHasReport sang Boolean đúng cách. Lưu ý: Không dùng Boolean("false") vì chuỗi không rỗng luôn trả về true. Phải so sánh nghiêm ngặt:
let hasReport = rawHasReport === "true";

// 5. Tạo hasCriticalBug theo quy tắc:
// cách 1: Kiểm tra: Nếu rawCriticalMessage tồn tại (không null/undefined) VÀ sau khi trim không bị rỗng
let hasCriticalBug;
if (rawCriticalMessage && rawCriticalMessage.trim() !== "") {
  hasCriticalBug = true; // Đoạn này viết true luôn cho ngắn gọn, không cần "true" === "true"
} else {
  hasCriticalBug = false;
}

// 6. Xếp hạng Grade bằng if / else if
let grade;
if (passRate >= 95) {
  grade = "EXCELLENT";
} else if (passRate >= 80) {
  grade = "GOOD";
} else if (passRate >= 60) {
  grade = "NEEDS IMPROVEMENT";
} else {
  grade = "CRITICAL";
}

// 7. Xác định Engine bằng switch/case (toLowecase vì đề bài là viết thường thì tránh dữ liệu có chữ cái viết hoa sẽ và unknown)
let engine;
switch (browserUsed.toLocaleLowerCase()) {
  case "chrome":
  case "edge":
    engine = "Chromium";
    break;
  case "firefox":
    engine = "Gecko";
    break;
  case "safari":
    engine = "WebKit";
    break;
  default:
    engine = "Unknown";
}

// 8. Dùng toán tử 3 ngôi cho message report
let reportMessage = hasReport ? "Có report" : "Chưa có report";

// 9. Xác định isReadyToRelease

let isReadyToRelease = passRate >= 80 && !hasCriticalBug && hasReport;

console.log(`Project:         ${projectName}`);
console.log(`Environment:     ${environment}`);
console.log(`Browser:         ${browserUsed}`);
console.log(`Engine:          ${engine}`);
console.log("");
console.log(`Pass Rate:       ${passRate.toFixed(2)}%`);
console.log(`Grade:           ${grade}`);
console.log(`Report:          ${reportMessage}`);
console.log(
  `Critical Bug:    ${hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng"}`,
);
console.log("");
console.log(`Ready:           ${isReadyToRelease ? "YES" : "NO"}`);
