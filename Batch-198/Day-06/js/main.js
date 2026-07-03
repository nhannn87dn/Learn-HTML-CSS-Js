console.log('Hello, World!');
console.log('line 2');

//Cách khai báo biến trong JS

//1.Sử dụng từ khoá var
var name = "John Doe"; //chữ, chuỗi --> string 
/**
 * name: tên biến
 * John Doe: giá trị của biến * 
 */
//2.Sử dụng từ khoá let
let age = 30; // số --> number

//3.Sử dụng từ khoá const (hằng số)
const PI = 3.14; // số --> number

//còn có các kiểu dữ liệu khác như:
//  boolean, array, object, null, undefined, symbol, bigint
let isStudent = true; // boolean
let user = null; // null
let address; // undefined

//Cách đặt tên biến trong JS
//0. Tên biến có thể chứa chữ cái, số, dấu gạch dưới (_), dấu $
//1. Tên biến phải bắt đầu bằng chữ cái, dấu gạch dưới (_)
//2. Tên biến không được bắt đầu bằng số
//3. Tên biến không được chứa khoảng trắng
//4. Tên biến không được trùng với từ khoá của JS
//5. Tên biến nên có ý nghĩa, dễ hiểu

//Ví dụ :
//let 1name = "John"; // sai, bắt đầu bằng số
let name1 = "John"; // đúng
//let first name = "John"; // sai, chứa khoảng trắng
let first_name = "John"; // đúng snake_case
let firstName = "John"; // đúng, camelCase
let getProductById = "John"; // đúng, camelCase
let GetProductById = "John"; // đúng, PascalCase

//let var = "John"; // sai, trùng với từ khoá của JS

let a = 'Nhân'; // đúng, tên biến ngắn gọn
let b = true; // đúng, tên biến ngắn gọn

//Sự khác nhau giữa var, let và const ?
var x= 5; // thì mình có thể khai báo lại biến x = giá trị mới
let y = 10; // thì mình có thể khai báo lại biến y = giá trị mới

console.log('before', x); // 5

//khái báo lại :
x = 1;
y = 2;

console.log('after', x); // 1

const z = 5; // thì mình KHÔNG thể khai báo lại biến z = giá trị mới
//z = 1;
console.log('after', z); // 1

