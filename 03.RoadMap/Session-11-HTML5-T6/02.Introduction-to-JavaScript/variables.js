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

let y = 2;

const z = 5;

{
 //block scope
 let x = 1;
 //console.log(x);

 function myfun(){
    console.log(x);

    let a = 0;
 }

 myfun();

}








