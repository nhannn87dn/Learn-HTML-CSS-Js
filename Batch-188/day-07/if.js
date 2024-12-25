/// ĐIỀU KHIỂN RẺ NHÁNH IF - ELSE - ELSE IF ///

/**
 * NẾU cúp điện
 * THÌ tôi được nghỉ học
 * 
 * chuyển thành ngôn ngữ lập trình
    if (cup_dien == true){
        console.log('THÌ tôi được nghỉ học');
    }
 */
//1. Cú pháp if đơn
/**
 * if (điều kiện cần kiểm tra){
 *    Các khối lệnh thực thì
 *    ==> khi điều kiện kiểm tra ĐÚNG = true
 * }
 *
 *
 */
//Vd1:
// let cup_dien = false;

// if (cup_dien == true) {
//   console.log("Được nghỉ học");
// }

//2. Cú pháp if đầy đủ
/**
 * if (điều kiện cần kiểm tra){
 *    Các khối lệnh thực thì
 *    ==> khi điều kiện kiểm tra ĐÚNG = true
 * }
 * else{
 *      Khối lệnh thực thì khi điện kiểm tra SAI = false
 * }
 *
 */

// let cup_dien = true;

// if (cup_dien == true) {
//   console.log("Được nghỉ học");
//   console.log("Được nghỉ học");
//   console.log("Được nghỉ học");
//   console.log("Được nghỉ học");
//   // Khối lệnh
// } else {
//   console.log("Đi học");
//   console.log("Đi học");
//   console.log("Đi học");
//   // Khối lệnh
// }

//Ví dụ khi thi bằng lái xe oto
// Được cấp bằng khi và chỉ khi đặt 85 / 100 điểm hạng B2

// diem_cua_ban = 75;

// if (diem_cua_ban >= 85) {
//   console.log("Đậu");
// } else {
//   console.log("Trượt");
// }

/* Vd 3: Khi mua hàng ở siệu thị: Nếu tổng đơn hàng
> 5tr thì được giảm giá 10%
Giả sử có Khách hàng A, họ mua được 2.8tr
*/
//orderTotal = 2.8;

// if (orderTotal >= 5) {
//   discount = 10;
// } else {
//   discount = 0;
// }

//Toán tử 3 ngôi là gì ?

// discount = orderTotal >= 5 ? 10 : 0; // 3 vế
// console.log(discount);

//3. Cú pháp if  - ele if - else
/**
 * if (điều kiện cần kiểm tra 1){
 *    Các khối lệnh thực 1 thì
 *    ==> khi điều kiện kiểm tra ĐÚNG = true
 * }
 * else if (điều kiện cần kiểm tra 2){
 *      Các khối lệnh thực 2
 * }
 * else{
 *      Khối lệnh thực thì khi
 *      tất cả điện kiểm tra SAI = false
 * }
 *
 */

/**
 * Xếp loại học tập cuối năm
 * - Nếu DTB >= 9 --> Xuất sắc
 * - Nếu DTB >= 8 --> Giỏi
 * - Nếu DTB >= 6.5 --> Khá
 * - Nếu DTB >= 5 --> Trung bình
 * - trường hợp Còn lại là YẾU
 */

// dtb = parseFloat(prompt("Nhập vào điểm TB của bạn: "));
// console.log(dtb);
// if (dtb >= 9) {
//   console.log("Xuất sắc");
// } else if (dtb >= 8) {
//   console.log("Giỏi");
// } else if (dtb >= 6.5) {
//   console.log("Khá");
// } else if (dtb >= 5) {
//   console.log("Trung bình");
// } else {
//   console.log("Yếu");
// }

//Kết luận: Dùng if, else if khi phải check
//nhiều điều kiện cùng 1 lúc

/// NESTED IF - IF lồng vào nhau ///

/**
 * Khi mua hàng ở siệu thị: 
 * - Nếu là khách hàng VIP và tổng đơn hàng
> 5tr thì được giảm giá 10%
 * 
 */
level = "VIP";
orderTotal = 6.5;
discount = 0; // Mặc định chiết là 0
if (level == "VIP") {
  if (orderTotal >= 5) {
    discount = 10;
  }
}
// cách tối ưu hơn
// if (level == "VIP" && orderTotal >= 5) {
//   discount = 10;
// }

// => if lồng trong if
console.log(discount);

/* 
Khi mua hàng ở siệu thị: 
 * - Nếu là khách hàng VIP thì được giảm giá 10%
 * - Nếu là khách hàng GOLD thì được giảm giá 7%
 * - Nếu là khách hàng SILVER thì được giảm giá 5%
 * - Còn lại thì 0%
*/
// if (level == "VIP") {
//   console.log(10);
// } else if (level == "GOLD") {
//   console.log(7);
// } else if (level == "SILVER") {
//   console.log(5);
// } else {
//   console.log(0);
// }

switch (level) {
  case "VIP":
    console.log(10);
    break; //Bỏ qua câu lệnh phía sau nó
  case "GOLD":
    console.log(7);
    break;
  case "SILVER":
    console.log(5);
    break;
  default:
    console.log(0);
}

/* Dùng switch case khi bạn cần check 1 biến 
với nhiều giá trị */
