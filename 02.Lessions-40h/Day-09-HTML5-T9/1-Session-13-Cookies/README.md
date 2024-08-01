# Cookie

### Giới Thiệu về Cookie

Cookie là các tệp tin nhỏ được lưu trữ trên máy tính của người dùng bởi trình duyệt web. Chúng được sử dụng để lưu trữ thông tin nhỏ, chẳng hạn như tùy chọn người dùng hoặc thông tin phiên đăng nhập, giúp trang web có thể nhận diện và ghi nhớ người dùng trong các lần truy cập sau.

### Thành phần của Cookie

1. **Tên và Giá Trị**:

   - Mỗi cookie có một tên và một giá trị. Tên của cookie phải là duy nhất trong miền (domain) của nó.

2. **Thời Gian Hết Hạn (Expiration Date)**:

   - Cookie có thể được thiết lập với một ngày hết hạn cụ thể. Nếu không được thiết lập, cookie sẽ hết hạn khi phiên trình duyệt kết thúc (session cookie).

3. **Domain và Path**:

   - Cookie có thể được giới hạn trong một miền (domain) và một đường dẫn (path) cụ thể trên máy chủ. Điều này giúp xác định phạm vi trang web mà cookie có hiệu lực.

4. **Thuộc Tính Bảo Mật (Secure, HttpOnly, SameSite)**:
   - `Secure`: Cookie chỉ được gửi qua kết nối HTTPS.
   - `HttpOnly`: Cookie không thể truy cập thông qua JavaScript, giúp ngăn chặn các cuộc tấn công XSS.
   - `SameSite`: Cookie chỉ được gửi với các yêu cầu cùng nguồn gốc, giúp ngăn chặn các cuộc tấn công CSRF.

### Cách Sử Dụng Cookie trong JavaScript

```js
document.cookie =
  "tên_cookie=giá_trị_cookie; expires=ngày_hết_hạn; path=đường_dẫn; domain=miền; Secure; HttpOnly; SameSite";
```

Bạn có thể sử dụng JavaScript để tạo, đọc và xóa cookie một cách dễ dàng. Dưới đây là một số ví dụ cụ thể:

#### 1. Thiết Lập Cookie

```javascript
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Thiết lập một cookie với tên "username" và giá trị "john_doe" trong 7 ngày
setCookie("username", "john_doe", 7);
```

#### 2. Đọc Cookie

```javascript
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Đọc giá trị của cookie "username"
const username = getCookie("username");
console.log(username); // "john_doe"
```

#### 3. Xóa Cookie

```javascript
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Xóa cookie "username"
eraseCookie("username");
```

#### 4. Thiết Lập Cookie với Các Thuộc Tính Bảo Mật

```javascript
function setSecureCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name +
    "=" +
    (value || "") +
    expires +
    "; path=/; Secure; HttpOnly; SameSite=Strict";
}

// Thiết lập một cookie an toàn với tên "session_id" và giá trị "abc123" trong 7 ngày
setSecureCookie("session_id", "abc123", 7);
```

### Kết Luận

Cookies là một công cụ mạnh mẽ để lưu trữ thông tin tạm thời trên trình duyệt của người dùng. Hiểu và sử dụng đúng cách các đặc tính của cookie sẽ giúp bạn quản lý thông tin người dùng hiệu quả và bảo mật hơn. Hãy luôn chú ý đến các thuộc tính bảo mật như `Secure`, `HttpOnly`, và `SameSite` để bảo vệ dữ liệu của người dùng khỏi các cuộc tấn công bảo mật phổ biến.
