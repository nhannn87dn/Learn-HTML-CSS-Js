//Các hàm dựng sẵn của JavaScript
//alert("Hello, World!"); // Hiển thị hộp thoại thông báo
//Khi nào thì dùng alert ?
/* Khi bạn muốn thông báo cho người dùng một thông tin quan 
trọng mà họ cần biết ngay lập tức, 
ví dụ như lỗi, cảnh báo hoặc thông tin xác nhận.
*/

// const isConfirm = confirm("Bạn có chắc chắn muốn xóa không?"); // Hiển thị hộp thoại xác nhận

// console.log(isConfirm); // true nếu người dùng nhấn OK, false nếu nhấn Cancel

// const name = prompt("Nhập tên của bạn:"); // Hiển thị hộp thoại nhập liệu
// console.log(`Tên của bạn là: ${name}`); // Hiển thị tên người dùng nhập vào

const x = prompt("Nhập số x:"); // Hiển thị hộp thoại nhập liệu
const y = prompt("Nhập số y:"); // Hiển thị hộp thoại nhập liệu

//lệnh để kiểm tra kiểu dữ liệu của biến
console.log(typeof x, typeof y); // Hiển thị kiểu dữ liệu của x và y

console.log(typeof parseInt(x), typeof parseInt(y));

console.log(parseInt(x) + parseInt(y)); // Hiển thị kết quả cộng chuỗi --> nối chuỗi