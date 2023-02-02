/*
  1. Tạo sao khai báo biến
  2. Cách khai báo một biến
  3. Cách đặt tên biến
  4. Kiểu dữ liệu của biến
  5. Phạm vi sử dụng biến Scope

   Next: JavaScript Output

 */

// Global scope
//var x = 3;

let y = 3;
const z = 5; //constant
console.log("C1", c);
y = 34;
{
  var c = 10;
  console.log(y, z);
}

console.log("C2", c);
