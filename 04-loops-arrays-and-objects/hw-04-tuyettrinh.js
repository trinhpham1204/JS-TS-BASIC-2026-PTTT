// Bài 1
// Tình huống: Bạn viết script test tự động kiểm tra API /users/1.
//  Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.
// Yêu cầu:
// Với mỗi key, kiểm tra:
// Giá trị có phải null hoặc "" (chuỗi rỗng) không? → In cảnh báo trường rỗng.
// Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.
// Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra.
// Dữ liệu đầu vào:
let apiResponse = {
  userId: 101,
  username: "neko_tester",
  email: null,
  isActive: "true", // Bug: phải là boolean, không phải string
  phone: "",
  role: "admin",
};
let totalErrors = 0;
for (let key in apiResponse) {
  let value = apiResponse[key];
  if (value === null || value === "") {
    console.log(`Trường ${key} bị null hoặc rỗng`);
    totalErrors++;
  }

  if (key === "isActive" && typeof value !== "boolean") {
    console.log(`Trường isActive không phải boolean, ${apiResponse[key]}`);
    totalErrors++;
  }
}
console.log("-----------------------------------------");
console.log(`=> Kết quả: Tìm thấy tổng cộng ${totalErrors} lỗi dữ liệu.`);

// Bài 2
// Tình huống: Bạn có danh sách URL cần test.
//  Một số URL bị rỗng (bỏ qua), một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập, test tiếp vô nghĩa.
// Yêu cầu:
// Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.
// Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.
// Nếu bình thường → in kết quả PASS.
// Đếm tổng URL đã test được (không tính URL bị bỏ qua).
// Dữ liệu đầu vào:
let testUrls = [
  { url: "/api/users", status: 200 },
  { url: "", status: null },
  { url: "/api/products", status: 200 },
  { url: "/api/orders", status: 500 },
  { url: "/api/reviews", status: 200 },
];
let totalUrl = 0;
for (let item of testUrls) {
  if (item.url === "") {
    console.log("URL rỗng");
    continue;
  }
  if (item.status === 500) {
    console.log("Lỗi nghiêm trọng");
    totalUrl++;
    break;
  } else {
    console.log("PASS");
    totalUrl++;
  }
}
console.log(`Tổng số Url đã test ${totalUrl}`);
