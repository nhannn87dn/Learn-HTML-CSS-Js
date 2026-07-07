/*
let count = 0;

//count < 5 điều kiện cần kiểm tra
while (count < 5) { //false
    // Câu lệnh thực thi khi điều kiện ĐÚNG (true)
  console.log(count);
  count++; //tăng lên 1 đơn vị
}
*/

let count = 5;
// Làm một cái gì đó trong khi điều kiện vẫn còn đúng.
// Luôn thực thi khối lần 1 lần dù chưa cần check điều kiện.
do {
  console.log(count);
  count++;
} while (count < 5);