// // PHẦN I: XỬ LÝ CHUỖI (STRING) — Làm sạch và Trích xuất dữ liệu Web
// // Mức độ: Tiếp cận giao diện và bóc tách Text từ Element.

// // Bài 1 (Cơ bản): Làm sạch Email đăng ký

// // Ngữ cảnh: Khi user nhập thông tin vào Form, họ thường vô tình bấm dư khoảng trắng ở đầu hoặc cuối.

// // Yêu cầu: Cho chuỗi let inputEmail = "  test_user@gmail.com  ";. Hãy làm sạch chuỗi này và chuyển tất cả thành chữ thường để chuẩn bị gửi API.

// // Kết quả mong đợi: "test_user@gmail.com"
// let inputEmail = "  test_user@gmail.com  ";
// inputEmail = inputEmail.trim().toLowerCase();
// console.log(inputEmail);

// let inputEmail = "  test_user@gmail.com  ";
// let cleanedEmail = inputEmail.trim().toLowerCase();
// console.log(cleanedEmail); // Kết quả: "test_user@gmail.com"

// // // Bài 2 (Trung cấp): Kiểm tra thông báo thành công (Assertion)

// // // Ngữ cảnh: Sau khi click button "Add to Cart", hệ thống hiển thị thông báo: "Sản phẩm hiển thị đã được thêm vào giỏ hàng thành công!".

// // // Yêu cầu: Cho chuỗi thông báo trên, hãy viết code kiểm tra xem thông báo đó có chứa từ khóa "thành công" hay không (Trả về true/false).
// // let message = "Sản phẩm hiện tại đã được thêm vào giỏ hàng thành công!";
// // let isSuccess = message.includes("thành công");
// // console.log(isSuccess);

// // let message = "Sản phẩm hiển thị đã được thêm vào giỏ hàng thành công!";
// // let isSuccess = message.indexOf("thành công") !== -1;
// // console.log(isSuccess); // Kết quả: true


// // // Bài 3 (Trung cấp): Trích xuất Mã đơn hàng (Format ID)

// // // Ngữ cảnh: Trên giao diện hiển thị chuỗi: "Mã hóa đơn của bạn là: ORD_2026_99X".

// // // Yêu cầu: Hãy dùng hàm cắt chuỗi để lấy chính xác phần mã "ORD_2026_99X".

// let text = "Mã hóa đơn của bạn là: ORD_2026_99X";
// let orderId = text.slice(-12);
// console.log(orderId); // Kết quả: "ORD_2026_99X"

// let text = "Mã hóa đơn của bạn là: ORD_2026_99X";
// // Tìm vị trí của dấu hai chấm, sau đó cộng thêm 2 ký tự (để bỏ qua dấu hai chấm và khoảng trắng)
// let startIndex = text.indexOf(":") + 2; 
// let orderId = text.substring(startIndex);
// console.log(orderId); // Kết quả: "ORD_2026_99X"

// let text = "Mã hóa đơn của bạn là: ORD_2026_99X";
// // Bước 1: Cắt chuỗi thành một mảng gồm 2 phần tử
// let cacPhanTu = text.split(": "); 
// // Lúc này biến cacPhanTu đang chứa: ["Mã hóa đơn của bạn là", "ORD_2026_99X"]
// // Bước 2: Lấy phần tử ở vị trí số 1 ra
// let orderId = cacPhanTu[1]; 
// console.log(orderId); // Kết quả: "ORD_2026_99X"

// // Bài 4 (Nâng cao): Tạo Log File Automation chuẩn hóa

// // Ngữ cảnh: Bạn cần in ra log chạy test case dạng: [INFO] - [TestCase_01].

// // Yêu cầu: Cho biến số thứ tự let tcNumber = 1;. Hãy biến số này thành chuỗi có độ dài bằng 3, đệm số 0 ở trước (thành "001") rồi nối thành chuỗi log: "[TestCase_001]" bằng hàm padStart.

// let tcNumber = 1;
// let newTcNumber = String(tcNumber).padStart(3,"0"); 
// console.log(`[INFO] - [TestCase_${newTcNumber}]`);

// let tcNumber = 1;
// let paddedNumber = tcNumber.toString().padStart(3, "0"); // "001"
// let logMessage = "[TestCase_" + paddedNumber + "]";
// console.log(logMessage); // Kết quả: "[TestCase_001]"

// // 🔢 PHẦN II: ÉP KIỂU & XỬ LÝ SỐ (NUMBER & MATH) — Tính toán giá tiền và Số lượng
// // Mức độ: Xử lý dữ liệu giỏ hàng, hóa đơn, định dạng tiền tệ.

// // Bài 5 (Cơ bản): Chuyển đổi Text từ Web thành Số để tính toán

// // Ngữ cảnh: Bạn dùng công cụ Automation lấy text từ ô "Số lượng sản phẩm" và nhận được chuỗi "15".

// // Yêu cầu: Ép chuỗi "15" này về kiểu Số (Number) rồi cộng thêm 5 sản phẩm nữa xem tổng bằng bao nhiêu.

// // Bài 6 (Trung cấp): Bóc tách giá tiền chứa đơn vị tệ

// // Ngữ cảnh: Giá sản phẩm lấy từ Web về có dạng chuỗi: "150.50$" hoặc "120px".

// // Yêu cầu: Hãy dùng hàm ép kiểu thích hợp để lọc lấy phần số thập phân (150.50) hoặc số nguyên (120) để đem đi đối chiếu.

// // Bài 7 (Trung cấp): Xác thực tổng tiền hiển thị (Làm tròn số)

// // Ngữ cảnh: Hệ thống tính toán một khoản thuế ra kết quả là 45.36789$. Tuy nhiên giao diện Web chỉ hiển thị 2 số sau dấu phẩy và có làm tròn.

// // Yêu cầu: Hãy xử lý số trên để trả về chuỗi định dạng đúng chuẩn giao diện hiển thị.

// // Kết quả mong đợi: "45.37"

// // Bài 8 (Nâng cao): Tạo dữ liệu ngẫu nhiên cho Test Case (Data Driven)

// // Ngữ cảnh: Bạn muốn kiểm thử tính năng đăng ký tài khoản, mỗi lần chạy test cần một cái tên hoặc số điện thoại ngẫu nhiên để không bị trùng (Unique Data).

// // Yêu cầu: Viết công thức tạo ra một số nguyên ngẫu nhiên nằm trong khoảng từ 1000 đến 9999.

// // ⚡ PHẦN III: TOÁN TỬ TOÁN HỌC & TOÁN TỬ GÁN — Tính tổng và Cập nhật trạng thái
// // Mức độ: Tính toán lũy tiến, kiểm tra logic giỏ hàng.

// // Bài 9 (Cơ bản): Tính tổng giá trị giỏ hàng

// // Ngữ cảnh: Khách hàng mua 3 sản phẩm giá 50$ và 2 sản phẩm giá 30$.

// // Yêu cầu: Viết biểu thức toán học tính tổng số tiền khách hàng phải trả.

// // Bài 10 (Trung cấp): Kiểm tra phân trang (Pagination - Chia lấy dư)

// // Ngữ cảnh: Danh sách sản phẩm có tổng cộng 25 mục. Mỗi trang hiển thị tối đa 10 mục.

// // Yêu cầu: Dùng toán tử toán học để tính xem trang cuối cùng sẽ còn lại dư bao nhiêu sản phẩm hiển thị.

// // Bài 11 (Trung cấp): Lũy tiến số lượng Test Case Pass

// // Ngữ cảnh: Bạn có biến let passCount = 0;. Sau khi chạy xong Suite 1, có thêm 8 test case Pass. Sau Suite 2, có thêm 5 test case Pass nữa.

// // Yêu cầu: Sử dụng toán tử gán rút gọn (+=) để cập nhật biến passCount qua 2 giai đoạn trên.

// // Bài 12 (Nâng cao): Ép kiểu ngầm định khi cộng trừ

// // Ngữ cảnh: Hãy giải thích (bằng cách ghi ra kết quả) đoạn log sau sẽ in ra gì và tại sao: console.log("Price: " + 100 + 50); và console.log("200" - "50");. Đây là lỗi rất hay gặp khi Automation Engineer lấy data sai kiểu từ Excel/Json.

// // ⚖️ PHẦN IV: TOÁN TỬ SO SÁNH — Viết các câu lệnh khẳng định (Assertions)
// // Mức độ: Verify kết quả thực tế (Actual) với kết quả mong đợi (Expected).

// // Bài 13 (Cơ bản): Kiểm tra số lượng phần tử tìm thấy

// // Ngữ cảnh: Bạn cần đảm bảo trên trang tìm kiếm phải hiển thị ít nhất 1 sản phẩm. Bạn đếm được let productCount = 5;.

// // Yêu cầu: Viết biểu thức so sánh để trả về true nếu số lượng sản phẩm lớn hơn hoặc bằng 1.

// // Bài 14 (Trung cấp): Lỗi kiểm tra "Lỏng lẻo" (== vs ===)

// // Ngữ cảnh: Kết quả từ API trả về id dạng Số: 200. Nhưng Text lấy từ Web về lại là chuỗi "200".

// // Yêu cầu: Viết 2 phép so sánh sử dụng == và === giữa hai giá trị này. Giải thích tại sao trong Automation khuyên dùng ===.

// // Bài 15 (Trung cấp): Kiểm tra trạng thái Kích hoạt (Disabled/Enabled Button)

// // Ngữ cảnh: Thuộc tính của một Button hiển thị là let isSubmitting = "true". Bạn cần đối chiếu nó với giá trị boolean true.

// // Yêu cầu: Phép so sánh "true" === true có giúp bạn xác thực đúng không? Hãy sửa lại cho đúng logic.

// // Bài 16 (Nâng cao): So sánh giá trị biên (Boundary Value Testing)

// // Ngữ cảnh: Một ô nhập liệu chỉ cho phép mật khẩu từ 6 đến 18 ký tự. User nhập mật khẩu có độ dài là 6.

// // Yêu cầu: Viết biểu thức so sánh độ dài mật khẩu này có hợp lệ (nằm trong biên cho phép) hay không.

// // 🧠 PHẦN V: TOÁN TỬ LOGIC & TĂNG GIẢM — Xử lý luồng chạy phức tạp (Conditions)
// // Mức độ: Điều hướng kịch bản test dựa trên nhiều điều kiện đồng thời.

// // Bài 17 (Cơ bản): Điều kiện chạy Test trên môi trường Staging

// // Ngữ cảnh: Test case chỉ được chạy nếu môi trường là "STAGING" VÀ tài khoản là "ADMIN".

// // Yêu cầu: Cho let env = "STAGING"; và let role = "USER";. Viết biểu thức logic kiểm tra xem test case này có được chạy không.

// // Bài 18 (Trung cấp): Kiểm tra chính sách miễn phí vận chuyển (Phép HOẶC)

// // Ngữ cảnh: Khách hàng được Freeship nếu Tổng hóa đơn >= 500.000đ HOẶC họ là thành viên "VIP".

// // Yêu cầu: Cho let total = 350000; và let memberType = "VIP";. Viết biểu thức kiểm tra điều kiện Freeship của khách hàng này.

// // Bài 19 (Nâng cao): Đảo ngược trạng thái hiển thị (Toán tử !)

// // Ngữ cảnh: Bạn viết một hàm kiểm tra xem một phần tử loading có biến mất khỏi màn hình hay chưa. Biến let isLoadingVisible = true;.

// // Yêu cầu: Viết biểu thức sử dụng toán tử phủ định ! để thể hiện logic: "Tiếp tục thực hiện bước tiếp theo khi KHÔNG CÒN hiển thị loading".

// // Bài 20 (Nâng cao): Phân biệt i++ và ++i khi đếm số bước Test thành công

// // Ngữ cảnh: Bạn tạo một vòng lặp để đếm số bước kiểm thử (Step).

// // Yêu cầu: Hãy dự đoán giá trị của step và result sau khi thực hiện đoạn code sau:

