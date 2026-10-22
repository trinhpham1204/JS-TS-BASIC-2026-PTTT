//BÀI 1
// let errorMsg = "Error 404: Page not found";
// let start = errorMsg.indexOf("Page");
// let text = errorMsg.slice(start);
// console.log(text)

// BÀI 2:
//Cách 1
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";
// let start = rawText.indexOf("Order ID:") + "Order ID:".length;
// let end = rawText.indexOf("|");
// let orderId = rawText.slice(start, end).trim();
// console.log(orderId);

// Cách 2 => KHÔNG HAY VÌ LẤY ĐIỂM BẮT ĐẦU LÀ TEXT ORD THÌ KHI ĐỔI ORDERID SẼ PHẢI SỬA LẠI
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";
// let start = rawText.indexOf("ORD-");
// let end = rawText.indexOf("|");
// let orderId = rawText.slice(start, end).trim();
// console.log(orderId);

//Cách 3
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";
// let newText = rawText.trim()
// let start = newText.indexOf(":") + 2;
// let end = newText.indexOf("|")
// let orderId = newText.slice(start,end).trim()
// console.log(orderId);

//Cách 4
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";
// let result = rawText.slice(rawText.indexOf(":") + 1, rawText.indexOf("|")).trim();
// console.log(result);

//LẤY TRẠNG THÁI ĐI
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";
// let result = rawText.slice(rawText.indexOf("Status:")+ "Status:".length).trim();
// console.log(result);

//ID - Status
// let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";

// let orderId = rawText
//   .slice(rawText.indexOf("Order ID:") + "Order ID:".length, rawText.indexOf("|"))
//   .trim();

// let status = rawText
//   .slice(rawText.indexOf("Status:") + "Status:".length)
//   .trim();

// let result = orderId + " - " + status;
// console.log(result);

// let amount = "9.5"
// let newAmount = String(amount);
// let AmountFinal = 9.5.toFixed(2).padStart(6,"0");
// console.log(AmountFinal);


let amount = 9.5
let AmountFinal = amount.toFixed(2).padStart(6,"0");
console.log(AmountFinal);


