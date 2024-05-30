//Cách định nghĩa 1 funtion
/*
function: là từ khóa tạo function
helloWorld: tên mình đặt cho function
(): để liệt các tham số đầu vào
{}: chứa khối lệnh để thực hiện khi gọi function
*/
function helloWorld() {
  // câu lệnh bên trong khối
  console.log("hello world");
  console.log("hello world 1");
  console.log("hello world 2");
  console.log("hello world 3");
}
/*
Cách sử dụng
*/
helloWorld(); //< === gọi hàm, thực thì các câu lệnh bên trong khối

//Hàm có định nghĩa tham số đầu vào
//Hàm tính tổng 2 số a,b
//a và b --> được gọi là tham số
function sum(a, b) {
  console.log(a + b);
}
//Cách gọi khi hàm có tham số đầu vào
//2,3 ==> được gọi là đối số
sum(2, 3);

function sayHelloByName(name) {
  console.log("Hello " + name);
}
sayHelloByName("Mạnh");
sayHelloByName("Hiệp");
//Cách đặt tên hàm = cách đặt tên biến
//Đặt theo quy tắc camelCase

//hàm có return
//Ví dụ: tạo hàm tính Tích của 2 số x, y
function tich(x, y) {
  return x * y;
}
/*
Với hàm có sử dụng return
bạn phải đặt một biến phụ để hứng kết quả của hàm trả về
*/
tich(2, 3); // ==> nó chỉ thực hiện phép tính, ko làm gì thêm
const result = tich(2, 3); //thực hiện và trả lại kết quả tính cho biến return
console.log("result", result);

/*
ngoài cách dùng từ khóa function
còn 1 cách khác ==> arrow function ES6
*/
let hieu = (c, d) => {
  //cú phép dùng dấu mũi tên suy ra ==> arrow function
  return c - d;
};
//Cách gọi hàm dạng arrow function
const result2 = hieu(5, 3);
console.log("result2 5-3", result2);
