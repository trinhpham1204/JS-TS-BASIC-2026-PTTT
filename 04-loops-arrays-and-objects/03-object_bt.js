// Bài tập
let apiResponse = {
  userId: 9999,
  userName: "neko_auto",
  role: "admin",
  isActive: "yes", // Đang là kiểu String chứ không phải Boolean
};

// 1. Dùng Object.keys để đếm xem API trả về bao nhiêu trường
// 2. Dùng Object.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
// 3. Kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof). Nếu sai kiểu, in ra cảnh báo
// 4. Dùng Object.values + includes để kiểm tra xem có giá trị nào là "admin"

let totalField = Object.keys(apiResponse).length;

if (typeof apiResponse.isActive === "boolean") {
  console.log(
    `Type of isActive is boolean, actual value is "${apiResponse.isActive}"`,
  );
} else {
  console.log(
    `Type of isActive not is boolean, actual value is  "${apiResponse.isActive}"`,
  );
}
let role = Object.values(apiResponse).includes("admin");
console.log(`Tổng số trường trong object là: ${totalField}`);
console.log(`Có userid, ${Object.hasOwn(apiResponse, "userId")}`);
console.log(`Có email, ${Object.hasOwn(apiResponse, "email")}`);
console.log(`Có role, ${Object.hasOwn(apiResponse, "role")}`);
console.log(
  `Có giá trị là admin, ${Object.values(apiResponse).includes("admin")}`,
);
//Cách 2 khi muốn check nhiều trường bắt buộc
// //let apiResponse = { userId: 9999, userName: "neko_auto", role: "admin", isActive: "yes" };

// const requiredFields = ["userId", "email", "role"];

// // Lọc ra những key NÀO KHÔNG TỒN TẠI (có dấu ! ở trước Object.hasOwn)
// const missingFields = requiredFields.filter(
//   (key) => !Object.hasOwn(apiResponse, key),
// );

// if (missingFields.length > 0) {
//   console.log(
//     `Lỗi: Thiếu các trường bắt buộc sau: ${missingFields.join(", ")}`,
//   );
//   // Kết quả in ra: Lỗi: Thiếu các trường bắt buộc sau: email
// } else {
//   console.log("Tuyệt vời! Đã nhận đủ các trường bắt buộc.");
// }
