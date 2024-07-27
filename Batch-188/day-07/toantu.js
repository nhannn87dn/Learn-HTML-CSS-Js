let x = 5;
let y = 2;

/* Toán tử cộng + */
console.log("x + y =", x + y);
/* Toán tử trừ - */
console.log("x - y =", x - y);
/* Toán tử nhân * */
console.log("x * y =", x * y);
/* Toán tử nhân / */
console.log("x / y =", x / y);
/* Toán tử chia lấy dư % */
console.log("x % y =", x % y);

////////////////////////

// a = 1;
// a = a + 1; //tăng lên 1 đơn vị
// console.log("a", a);

/// TOÁN TỬ SO SÁNH ///
a = 5;
b = 2;
c = "5";
/* So sánh xem a có = b không ? */

console.log("a == b", a == b); // false
console.log("a != b", a != b); // true
/* so sánh với 3 dấu = 
==> so sánh về mặt giá trị + kiểu dữ liệu 
*/
console.log("a === c", a === c); // false
/* so sánh với 2 dấu = 
==> chỉ so sánh về mặt giá trị */
console.log("a == c", a == c); //true

/// TOÁN TỬ LOGIC ///

i = 5;
j = 2;

//console.log("i > 1 && j > 0", i > 1 && j > 0); // true
console.log("i > 8 && j < 5", i > 8 && j < 5); // false

console.log(!(i > 6)); // true

console.log(!(i < 6)); // false

console.log(i >= 6 || i < 9);

/// TOÁN TỬ ĐẶC BIỆT ///
console.log(1, 2, 3, 4, 5);
