//Câu lệnh rẻ nhánh có điều kiện if statement

/*
Nếu hôm nay cúp điện --> IF
Thì được nghỉ học
còn không thì phải học
*/
let x = -5;

/*
Nếu x > 0 
thì in ra x là số dương
Còn nếu x = 0 thì in ra x là số 0
còn lại in ra x là số âm
*/
if(x > 0) {
    //thì, khối lệnh bên trong sẽ chạy khi điều kiện được đáp ứng
    console.log('x la so duong 1');
    console.log('x la so duong 2');
    console.log('x la so duong 3');
    // n câu lệnh
}
else if(x == 0){
    console.log('x la so 0');
}
else {
    console.log('x la so am');
}
// câu lệnh if đơn


/*
Có DTB = 7.5
Nếu mà DTB >= 9 thì HS xuất sắc
Nếu mà DTB >=8 VÀ DTB < 9 ==> HS giỏi
Nếu mà DTB >= 6.5 và DTB < 8 là HS Khá
Nếu mà DTB >= 4.5 và DTB < 6.5 thì Trung Bình
Còn lại là HS Yếu.
*/
const dtb = 7.5;
if(dtb >= 9){
    console.log('Xuat sac');
}
else if(dtb >= 8 && dtb < 9){
    console.log('Gioi');
}
else if(dtb >= 6.5 && dtb < 8){
    console.log('Gioi');
}
else if(dtb >= 4.5 && dtb < 6.5){
    console.log('Gioi');
}else{
    console.log('yeu');
}

/*
Cho một biến x = giá trị nhập từ người dùng (prompt())
hãy kiểm tra x.
- Nếu x không phải là số thì in ra: Vui lòng nhập vào giá trị kiểu số
- Nếu x > 0 thì in ra x là số dương
- Nếu x < 0 thì in ra x là số âm
- Còn lại in ra vui lòng nhập vào một số khác 0.
*/
const j = prompt('Nhap vao j: ')

if(isNaN(j)){
    console.log('Vui long nhap vao gia la so');
}
// j da la so
else{
    if(j > 0){
        console.log('so duong');
    }
    else if(j < 0){
        console.log('so am');
    }
    else{
        console.log('so 0');
    }
}