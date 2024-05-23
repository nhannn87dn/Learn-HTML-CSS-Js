# Bài tập cơ bản

## Task 1

* Sử dụng hàm prompt() để lấy giá trị đầu vào cho 2 biến username, password.
* Kiểm tra nếu username bằng `aptech`, và password bằng `38yenbai` thì hiển thị ra console lời nhắn: "Bạn đã đăng nhập thành công", các trường hợp còn lại "Username hoặc mật khẩu không hợp lệ"



## Task 2

- Sử dụng HTML tạo ra một button có tên là Delete, sử dụng JavaScript để bắt sự kiện onclick, hiển thị hộp thoại xác nhận với lời nhắn: "Bạn có chắc chắn muốn xóa record này không ?"
- Kiểm tra kết quả xác nhận: Nếu OK xóa thì, hiển thị console "Đã xóa"
- Nếu Cancle Hủy thì hiển thị console.log: "Không xóa"


## Task 3

Cho biết anh Nguyễn Văn A, quê ở Đà Nẵng, 45 tuổi. Đợt 30/4 rồi anh ta có đi Bana Hill chơi cùng với con trai 6 tuổi. Giá vé cho người Đà Nẵng là 350.000/1 người lớn, 200.000/ 1 trẻ em trên 5 tuổi.

Trong vai trò là người lập trình phần mềm bán vé. Hãy code cách thức tính tiền thanh toán cho nghiệp vụ nói trên.

Gợi ý:

- Đặt các biến cần thiết
- Dùng if để kiểm tra, và dùng các toán tử toán học để tính toán.


## Task 4 - Bill tính tiền

**Yêu cầu:**

- Tính huống thực tế có một danh sách sản phẩm khách hàng đã mua: 

    + Áo bull Size M, 2 sản phẩm, giá 160.000đ
    + Áo khoác gió NorthFace Size L, 1 sản phẩm - giá 
    600.000đ
    + Quần Jean Nam Size 30 , 1 sản phẩm, giá 350.
    
- Hãy Dùng mảng và vòng lặp để code thể hiện đơn hàng trên
- In ra màn hình sách sản phẩm với kiểu table (Dùng `document.write()`)
- Tạo thêm cột thành tiền cho từng dòng bằng số lượng x đơn  giá
- In giá trị tổng tiền vào cuối bill


## Task 5 - Tìm hiểu về Mảng

* Định nghĩa một mảng đơn giản gồm 5 phần tử là số từ 1 - 5
* Hiển thị ra console giá trị phần từ đầu tiên trong mảng trên
* Hãy thêm một phần từ mới vào cuối mảng, và hiển thị danh sách mảng mới ra console
* Lấy số lượng phần tử của mảng trên show ra console
* Render ra console giá trị từng phần tử của mảng trên như bên dưới

```js
/* Output:
1
2
3
4
5
6
*/
```

## Task 6 - Mảng với cú pháp ES6

* Bước 1: Định nghĩa một mảng gồm 5 hãng xe hơi mà bạn biết và in kết quả ra console
* Bước 2: Bạn hãy thay đổi tên hãng xe xếp thứ 2 trong mảng bạn vừa định nghĩa ở bước 1 và in kết quả ra console
* Bước 3: Định nghĩa một mảng mới có chứa 5 hãng xe nói trên và bạn thêm vào cuối mảng mới này một hãng xe thứ 6 và in kết quả ra console
* Bước 4: Gộp 2 mảng ở bước 1 và bước 3 lại thành một mảng mới, và in kết quả ra console



## Task 7 - Render danh sách

Cho một biến danh sách hãng xe hơi

```js
 const cars = ['Toyota', 'Honda', 'Kia', 'BMW', 'Audi', 'Mitsubishi'];

```

Hãy hiển thị danh sách hãng xe ra màn hình bằng thẻ ul li với `document.write` và `console.log()`


## Task 8 - Tạo và truy cập mảng

1. Tạo một mảng chứa tên của năm thành phố.
2. In ra tên của thành phố đầu tiên và cuối cùng trong mảng.


## Task 9 - Thêm và xóa phần tử trong mảng

1. Tạo một mảng chứa các số từ 1 đến 5.
2. Thêm số 6 vào cuối mảng.
3. Thêm số 0 vào đầu mảng.
4. Xóa phần tử đầu tiên và phần tử cuối cùng của mảng.
5. In ra mảng kết quả.


## Task 10 - Duyệt và thao tác trên mảng

1. Tạo một mảng chứa các số nguyên từ 1 đến 10.
2. Sử dụng vòng lặp để tính tổng các số trong mảng.
3. In ra tổng các số trong mảng.



## Task 11 - Sử dụng phương thức mảng

1. Tạo một mảng chứa các chuỗi ký tự: "apple", "banana", "cherry", "date".
2. Sử dụng phương thức mảng để:
   - Sắp xếp mảng theo thứ tự bảng chữ cái.
   - Tìm phần tử "cherry" trong mảng và in ra chỉ số của nó.
   - Tạo một mảng mới chứa các phần tử từ chỉ số 1 đến chỉ số 3 của mảng ban đầu.



## Task 12 - Sử dụng phương thức `map`, `filter`, `reduce`

1. Tạo một mảng chứa các số từ 1 đến 10.
2. Sử dụng phương thức `map` để tạo một mảng mới mà mỗi phần tử là bình phương của phần tử trong mảng gốc.
3. Sử dụng phương thức `filter` để tạo một mảng mới chỉ chứa các số chẵn từ mảng gốc.
4. Sử dụng phương thức `reduce` để tính tổng các phần tử trong mảng gốc.
