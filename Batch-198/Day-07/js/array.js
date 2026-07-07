//Kiểu dữ liệu mảng
// các phần tử được đặt trong cặp ngoặc vuông
// phần tử của mảng có thể number, string, boolean, undefined, null
// Các phần tử được đánh số từ trái qua phải bắt đầu là 0
const arr = [1, "orange", true, false, undefined, null];
console.log(arr); //object

//1. Truy cập đến phần tử của mảng
//dựa vào vị trí index của phẩn tử
console.log(arr[1]);
//2. Thay đổi giá trị của phần tử trong mảng
// Thay true thành "apple"
console.log('<<=== before ===>>',arr);
arr[2] = "apple"; //gán giá trị mới
console.log('<<=== after ===>>',arr);
//3. Thêm phần tử mới vào mảng ?


const fruits = ['cam', 'tao'];

let html = "";
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
    html += fruits[index] + " ";
}
console.log(html);