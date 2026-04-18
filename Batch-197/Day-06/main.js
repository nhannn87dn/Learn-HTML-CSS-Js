//Khai báo biến
// Cú pháp:
let name = "Nhân";
const age = 38;
const Age = 40
var address = "Hà Nội";



//gán lại giá trị mới cho biến khi khai báo với let và var
name = "Hà";
address = "Hồ Chí Minh";
//age = 40; // lỗi

//var và let khác nhau gì ? (scope)
// - var có phạm vi toàn cục hoặc phạm vi hàm, trong khi let có phạm vi khối.
// - var có thể được khai báo lại trong cùng một phạm vi, trong khi let không cho phép khai báo lại.
// - var được hoisted (nâng lên đầu phạm vi) và khởi tạo với giá trị undefined, trong khi let cũng được hoisted nhưng không được khởi tạo.




console.log(name);
console.log(address);
console.log(age);
console.log(Age);

// Lí do vì sao lại đặt biến ?
// Biến giúp chúng ta lưu trữ thông tin, 
// dữ liệu để sử dụng lại nhiều lần trong chương trình 
// mà không cần phải gõ lại giá trị đó. 
// Điều này giúp tiết kiệm thời gian và công sức 
// khi viết mã, đồng thời làm cho mã dễ đọc và bảo trì hơn. 
// Biến cũng cho phép chúng ta thực hiện các phép toán và
//  xử lý dữ liệu một cách linh hoạt, giúp chương trình trở nên 
// mạnh mẽ và hiệu quả hơn.

