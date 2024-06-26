# JavaScript Functions and Objects

## ⭐ 1. Functions

Trong JavaScript, Functions (hàm) là một khối mã được đặt tên và có thể được gọi để thực hiện một tác vụ cụ thể. Chúng là một phần quan trọng trong việc tổ chức mã và tái sử dụng mã trong chương trình.

Để định nghĩa một hàm trong JavaScript, bạn có thể sử dụng cú pháp sau:

```javascript
function functionName(parameter1, parameter2, ...) {
  // Mã thực hiện tác vụ
  // return (nếu muốn trả về giá trị)
}
```

Trong đó:

- `functionName` là tên của hàm.
- `parameter1`, `parameter2`, ... là danh sách các tham số mà hàm có thể nhận vào (tuỳ chọn).
- Mã thực hiện tác vụ được đặt trong cặp dấu ngoặc nhọn `{}`.

Dưới đây là một số kiểu hàm phổ biến trong JavaScript:

1. **Hàm không tham số và không trả về giá trị**:
```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Output: "Hello!"
```

2. **Hàm có tham số và không trả về giá trị**:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: "Hello, John!"
```

3. **Hàm có tham số và trả về giá trị**:

```javascript
function add(a, b) {
  return a + b;
}

var result = add(3, 4);
console.log(result); // Output: 7
```

4. **Hàm vô danh (Anonymous Function)**:

```javascript
var multiply = function(a, b) {
  return a * b;
};

var result = multiply(2, 5);
console.log(result); // Output: 10
```

5. **Hàm nặc danh (Arrow Function)** (ES6):

```javascript
var divide = (a, b) => a / b;

var result = divide(10, 2);
console.log(result); // Output: 5
```

6. **Hàm callback**:

```javascript
function fetchData(callback) {
  // Mô phỏng việc lấy dữ liệu từ máy chủ
  var data = "Data from server";
  callback(data);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData); // Output: "Processing data: Data from server"
```

Trên đây là một số kiểu hàm phổ biến trong JavaScript. Hàm cho phép bạn tái sử dụng mã, tạo các tác vụ độc lập và tổ chức mã của mình một cách hiệu quả.

---

## ⭐ 2. Object

[Xem ngay](../2-Session-11-JavaScript-Objects/readme.md)