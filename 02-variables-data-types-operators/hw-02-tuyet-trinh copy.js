// Bài 1: 		
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."		
	let rawOriginalPrice = 	" 1.000.000 đ "
    let discountPercent = 20
    let uiActualPrice = " 800.000 đ "

    let originalPrice = Number(rawOriginalPrice.replace("đ", "").replaceAll(".", "").trim());
    uiActualPrice =  Number(uiActualPrice.replace("đ", "").replaceAll(".", "").trim());
    let expectedPrice = (originalPrice * (100 - discountPercent)) / 100;
    console.log("Giá gốc sau khi làm sạch:", originalPrice);
    console.log("Giá mong đợi sau giảm:", expectedPrice);
    if (uiActualPrice === expectedPrice) 
    {console.log(`PASSED: Giá thực tế bằng giá mong đợi là ${expectedPrice} đ`);
    }
    else
    console.log(`FAILED: Sai logic! Mong đợi ${expectedPrice} đ nhưng thực tế là ${uiActualPrice} đ`);
    
// Một chút "góp ý" từ góc nhìn Automation xịn sò:
// Để đoạn code này trở thành một hàm (function) có thể tái sử dụng nhiều lần cho các ca kiểm thử (Test cases) khác nhau trên Shopee, bạn có thể đóng gói nó lại như thế này:

// JavaScript
// function verifyDiscountLogic(rawOriginalPrice, discountPercent, rawActualPrice) {
//     // Hàm xử lý chuỗi giá tiền thành số
    const cleanPrice = (rawPrice) => Number(rawPrice.replace("đ", "").replaceAll(".", "").trim());

    let originalPrice = cleanPrice(rawOriginalPrice);
    let uiActualPrice = cleanPrice(rawActualPrice);
    let expectedPrice = (originalPrice * (100 - discountPercent)) / 100;

    if (uiActualPrice === expectedPrice) {
        console.log(`✅ PASSED: Giá thực tế trùng khớp giá mong đợi (${expectedPrice} đ)`);
    } else {
        console.log(`❌ FAILED: Mong đợi ${expectedPrice} đ nhưng UI hiển thị ${uiActualPrice} đ`);
    }

// Giờ muốn test case nào chỉ cần gọi 1 dòng:
verifyDiscountLogic(" 1.000.000 đ ", 20, " 800.000 đ "); 
verifyDiscountLogic(" 50.000 đ ", 10, " 45.000 đ ");
        
// Bài 2:		
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).

// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."		
// Dữ liệu đầu vào		
// "let tenSanPham = ""   macbook pro m3   "";
// let giaGoc = ""Price: 30,000,000 vnđ"";
// let soLuong = ""Sl: 2 máy"";
// let maGiamGia = ""DISCOUNT CODE: 10% OFF"";"		
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:		
		
// HÓA ĐƠN THANH TOÁN - ID: #0002		
// Sản phẩm: MACBOOK PRO M3		
// Đơn giá: 30000000		
// Số lượng: 2		
// Tổng tiền (Gốc): 60000000		
// Giảm giá: 10%		
// THÀNH TIỀN: 54.000.000 VNĐ

let quantity = Number(soLuong.replace(/\D/g, ""));
let cleanPrice = Number(giaGoc.replace(/\D/g, ""));
let discountPercent2 = Number(maGiamGia.replace(/\D/g, ""));
let originalPriceTotal = quantity * cleanPrice
let total = originalPriceTotal - (originalPriceTotal * discountPercent2/100);
console.log(`HÓA ĐƠN THANH TOÁN - ID: #0002`);
console.log(`Sản phẩm: ${tenSanPham.toLocaleUpperCase().trim()}`);
console.log(`Đơn giá: ${cleanPrice}`);
console.log(`Số lượng: ${quantity}`);
console.log(`Tổng tiền (Gốc): ${originalPriceTotal} `);
console.log(`Giảm giá: ${discountPercent2}%`);
console.log(`THÀNH TIỀN: ${total.toLocaleString('vi-VN')} VNĐ`);

//TỐI ƯU dùng hàm helper
let quantity = Number(soLuong.replace(/\D/g, ""));
let cleanPrice = Number(giaGoc.replace(/\D/g, ""));
let discountPercent2 = Number(maGiamGia.replace(/\D/g, ""));
let originalPriceTotal = quantity * cleanPrice
let Total = originalPriceTotal - (originalPriceTotal * discountPercent2/100);
console.log(`HÓA ĐƠN THANH TOÁN - ID: #0002`);
console.log(`Sản phẩm: ${tenSanPham.toLocaleUpperCase().trim()}`);
console.log(`Đơn giá: ${cleanPrice}`);
console.log(`Số lượng: ${quantity}`);
console.log(`Tổng tiền (Gốc): ${originalPriceTotal} `);
console.log(`Giảm giá: ${discountPercent2}%`);
console.log(`THÀNH TIỀN: ${Total.toLocaleString('vi-VN')} VNĐ`);