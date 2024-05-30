# Session-18-HTML5-Web-Storage

Xem thêm: 

- https://www.w3schools.com/jsref/prop_win_localstorage.asp
- https://www.w3schools.com/jsref/prop_win_sessionstorage.asp

## Giới thiệu

`localStorage` và `sessionStorage` là hai phần của Web Storage API, cung cấp cách lưu trữ dữ liệu phía client (trên trình duyệt) một cách dễ dàng và hiệu quả hơn so với việc sử dụng cookies.

## `localStorage` và `sessionStorage` là gì?

- **`localStorage`**: Dữ liệu được lưu trữ trong `localStorage` sẽ tồn tại vĩnh viễn cho đến khi bị xóa rõ ràng bởi người dùng hoặc bởi JavaScript. Dữ liệu này sẽ tồn tại ngay cả khi bạn đóng và mở lại trình duyệt.

- **`sessionStorage`**: Dữ liệu được lưu trữ trong `sessionStorage` chỉ tồn tại trong phiên làm việc hiện tại. Khi bạn đóng tab hoặc cửa sổ trình duyệt, dữ liệu sẽ bị xóa.

## API của `localStorage` và `sessionStorage`

Cả `localStorage` và `sessionStorage` đều chia sẻ cùng một API, bao gồm các phương thức chính sau:

- `setItem(key, value)`: Lưu trữ một cặp key-value.
- `getItem(key)`: Lấy giá trị đã lưu trữ cho key được chỉ định.
- `removeItem(key)`: Xóa mục đã lưu trữ với key được chỉ định.
- `clear()`: Xóa tất cả dữ liệu đã lưu trữ.
- `key(index)`: Lấy key tại vị trí index được chỉ định.
- `length`: Trả về số lượng cặp key-value đã lưu trữ.

## Ví dụ minh họa

### Sử dụng `localStorage`

```javascript
// Lưu trữ dữ liệu vào localStorage
localStorage.setItem('username', 'john_doe');

// Lấy dữ liệu từ localStorage
let username = localStorage.getItem('username');
console.log(username); // Output: john_doe

// Xóa dữ liệu từ localStorage
localStorage.removeItem('username');

// Xóa tất cả dữ liệu từ localStorage
localStorage.clear();
```

### Sử dụng `sessionStorage`

```javascript
// Lưu trữ dữ liệu vào sessionStorage
sessionStorage.setItem('sessionUser', 'jane_doe');

// Lấy dữ liệu từ sessionStorage
let sessionUser = sessionStorage.getItem('sessionUser');
console.log(sessionUser); // Output: jane_doe

// Xóa dữ liệu từ sessionStorage
sessionStorage.removeItem('sessionUser');

// Xóa tất cả dữ liệu từ sessionStorage
sessionStorage.clear();
```

## Sự khác biệt giữa `localStorage` và `sessionStorage`

| Đặc điểm          | `localStorage`                                            | `sessionStorage`                                     |
|-------------------|-----------------------------------------------------------|------------------------------------------------------|
| Thời gian tồn tại | Vĩnh viễn (cho đến khi bị xóa bởi người dùng hoặc script) | Chỉ tồn tại trong phiên làm việc hiện tại            |
| Phạm vi           | Toàn bộ trang web (bao gồm tất cả các tab và cửa sổ)      | Chỉ trong tab hoặc cửa sổ hiện tại                   |
| Dung lượng        | Thường là 5-10MB                                          | Thường là 5-10MB                                     |

## Ứng dụng thực tế

- **`localStorage`**: Phù hợp cho việc lưu trữ dữ liệu người dùng dài hạn như cài đặt cấu hình, giỏ hàng mua sắm, thông tin đăng nhập, v.v.
- **`sessionStorage`**: Phù hợp cho việc lưu trữ dữ liệu phiên ngắn hạn như thông tin biểu mẫu, dữ liệu tạm thời trong một phiên làm việc, v.v.

## Lưu ý bảo mật

- Dữ liệu lưu trữ trong `localStorage` và `sessionStorage` không được mã hóa, do đó không nên lưu trữ thông tin nhạy cảm như mật khẩu hoặc thông tin cá nhân mà không có biện pháp bảo mật bổ sung.
- Tránh lưu trữ thông tin có thể bị truy cập hoặc thay đổi bởi các tập lệnh độc hại (XSS).

### Kết luận

`localStorage` và `sessionStorage` là hai công cụ mạnh mẽ để lưu trữ dữ liệu phía client. Hiểu rõ sự khác biệt và cách sử dụng của chúng sẽ giúp bạn quản lý dữ liệu hiệu quả hơn trong các ứng dụng web của mình.