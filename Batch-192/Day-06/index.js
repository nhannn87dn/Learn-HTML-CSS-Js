//Khai báo biến = định nghĩa biến
var x=2; // ==> định nghĩa biến
let y = 5;
const z= 6;
//2. Sự khác nhau giữa các cách định nghĩa biến trên là gì ?
//2.1 Cách gán lại giá trị cho biến
x = 5;
y = 2;
// ko gọi là định nghĩa, 
// mà gọi là gán lại giá trị mới cho biến
//console.log(x); //In ra giá trị của biến hiện tại
//2.2 var, let==> có thể gán lại giá trị cho biến
//còn với const thì ko thể gán lại

//2.3 Só sánh var và let
// Khác nhau ở chỗ là phạm vi sử dụng

//Cặp ngoặc nhọn --> khối lệnh
var j = 1; //bên ngoài khối
let i = 2;
{
    //trong khối
    console.log(j); //in ra 2
    console.log(i);

    //Khai báo bên trong khối
    var m = 3;
    let n = 4;
}
//ngoài khối
console.log('m = ',m);

let my_name = 'Nhan'; //string = chuỗi
let firstName = "Nguyen"; //string
let my_age = 35; //number
let is_male = true; //boolean: đúng true, sai: false
let is_female = false;
let haveRich = null; //null

//các lệnh OUTPUT dữ liệu
document.writeln('Học');
document.writeln('javascript');
// Chèn nội dung vào trước thẻ body đóng
document.writeln('<p>Học <strong>JS</strong> căn bản</p>');

// Chèn một đoạn code html vào element có id là root
document
.getElementById('root')
.innerHTML = '<p>Học <strong>JS</strong> căn bản</p>';
//Tương tự: getElementByClassName, getElementByTagname
