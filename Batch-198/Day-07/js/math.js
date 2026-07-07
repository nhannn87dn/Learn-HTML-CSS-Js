const x = 5;
const y = 2;
const z = "5";

//Toản tử Logical
console.log(x > 3 && y > 0); //
//            true &&  true ==> true 
console.log(x > 3 && y > 6); //
//            true &&  false ==> false 
//toán tử phủ định NOT !
console.log(!(x > 3)); //false
//toán tử OR ||
console.log(x > 0 || x  == 4); // true



console.log('====================');

//Toán tử quan hệ
console.log('x == z', x == z); //true --> chỉ so sánh về giá trị
console.log('x === z', x === z); //false --> so sánh cả giá trị + kiểu dữ liệu


// Toán tử so sánh bằng ==
console.log(x == y); //false
//Toản tử so sánh không bằng ( phủ định)
console.log(x != y); //true
//
console.log(x > y); //true
//phep chia
console.log('x / y = ', x / y);
// Chia lay phan du
console.log('x % y = ', x % y);

