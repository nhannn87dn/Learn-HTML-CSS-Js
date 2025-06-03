var myName = 'Nhan';
myName = 'Tuấn';
//In ra giá trị của biến vào cửa số console
console.log(myName);
/**
 * BIẾN là gì --> biến đổi.
 * var từ khóa để khai báo biến
 * myName là tên biến
 * 'Nhan' --> giá trị mà bạn gán cho biến
 * 
 */

//2. Các cách khai báo biến trong JS
var myAge = 38; // number --> dữ kiểu số
let myCompany = 'Softech Aptech';// string --> dữ liệu kiểu chuỗi
const isTeacher =  true; // boolean --> kiểu logic true/false

console.log('typeof myAge==>', typeof myAge);


//3. Các kiểu dữ liệu trong JS
// number, string, boolean, array, undefine, null, object, function...
//4. Phân biệt các cách khai báo biến
// var, let, const khác nhau thế nào ?
//4.1 var, let giống nhau về cách sử dụng
// Cho phép bạn gán lại giá trị mới cho biến
var x = 0;
x = 2; // gán lại
let y = 2;
y = 5;
console.log('x=',x,'y=',y);
//Còn const thì sao ? const là HẰNG SỐ --> BẤT BIẾN
//Mỗi khi bạn định nghĩa biến với const thì ko thể gán lại giá
//trị mới
const z = 10;
//z=5; //js báo lỗi khi runtime (khi thự thi)
//5. Cách đặt tên biến sao cho đúng chuẩn ?
// hãy đặt một biến để biểu diễn tên đầy đủ của bạn 
const myFullName = 'Lê ANh Tuấn'
//Các TH sau là đúng:
let $me ='abc'; //OK
let _under = 'bala'; //OK
let Abc = 'ABC'; //OK
//Các TH sau là sai quy tắc
//let 88ancv = 'dsds'; // lỗi syntax
//let const = 'const'
//6. Phong cách đặt tên biến -->
//6.1 camelCase --> con lạc đã (Phổ biến trong JS)
/*
    từ đầu tiên viết thường, Kí tự đầu tiên của từ thứ 2 trở đi viết HOA
    Ví dụ: myProfile, getProductList
*/
//6.2 PascalCase -->
/*
    Các từ viến liền nhau, kí tự đầu tiên mỗi từ là viết HOA
    Ví dụ: MyProfile, GetProductList
*/
//6.3 snake-case --> (Kiểu con rắn)
/**
 * Tất cả viết thường, mỗi từ cách nhau dấu gạch dưới
 * Ví dụ: my_profile, get_product_list
 */

//7. Các lệnh output trong JS --> single comment
//7.1 console.log
//7.2 Phương thức write()
//document.write('Học JS thật dễ')
//7.3 Phương thức writeln()
document.writeln('Học JS thật dễ')
document.writeln("Học JS \n thật dễ")
console.log("\tHọc JS \n thật dễ")
//i'm a teacher
console.log('"Hôm qua em đến trường, Mẹ giắt tay từng bước"');
console.log("i'm a teacher")
//alert() -=--> Hiển thị một message - lời nhắn
//alert('Đặt mua hàng thành công !')
//confirm() --> Xác nhận một hành động ?
//const isConfirm = confirm('Bạn có chắc muốn xóa user này không ?')
//return boolean;
//isConfirm là biến để hứng giá trị mà người dùng chọn
//console.log('isConfirm',isConfirm);
// const i  = prompt('Nhập vào giá trị của i');
// const j  = prompt('Nhập vào giá trị của j');
// console.log('<<=== 🚀 i +j ===>>',parseInt(i) + parseInt(j), );

console.log(eval("5 + 5 + 2"));