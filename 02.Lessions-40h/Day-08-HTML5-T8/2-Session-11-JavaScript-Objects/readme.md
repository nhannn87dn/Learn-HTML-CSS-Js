# JavaScript Functions and Objects

## ⭐ 2. Objects

Trong JavaScript, Object (đối tượng) là một cấu trúc dữ liệu linh hoạt và mạnh mẽ. Nó cho phép bạn tổ chức dữ liệu theo dạng cặp key-value (khóa-giá trị) và thực hiện các hoạt động và tác vụ liên quan đến đối tượng đó.

Một object trong JavaScript được tạo bằng cách sử dụng cú pháp đối tượng (object literal) hoặc thông qua từ khóa `new` kết hợp với constructor function. Dưới đây là một số ví dụ về cách tạo và sử dụng object trong JavaScript:

1. **Object Literal**:
```javascript
var person = {
  name: "John",
  age: 30,
  address: "123 Street, City",
  sayHello: function() {
    console.log("Hello!");
  }
};

console.log(person.name); // Output: "John"
person.sayHello(); // Output: "Hello!"
```

2. **Constructor Function**:
```javascript
function Person(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.sayHello = function() {
    console.log("Hello!");
  };
}

var person = new Person("John", 30, "123 Street, City");
console.log(person.name); // Output: "John"
person.sayHello(); // Output: "Hello!"
```

3. **Thêm và truy cập các thuộc tính của object**:
```javascript
var car = {};
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;

console.log(car.make); // Output: "Toyota"
```

4. **Truy cập và thay đổi giá trị của thuộc tính**:
```javascript
var person = {
  name: "John",
  age: 30,
};

console.log(person.age); // Output: 30

person.age = 35;
console.log(person.age); // Output: 35
```

5. **Xóa thuộc tính khỏi object**:
```javascript
var person = {
  name: "John",
  age: 30,
};

console.log(person.age); // Output: 30

delete person.age;
console.log(person.age); // Output: undefined
```

6. **Vòng lặp qua các thuộc tính của object**:
```javascript
var person = {
  name: "John",
  age: 30,
  address: "123 Street, City",
};

for (var key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// address: 123 Street, City
```

Object trong JavaScript cung cấp khả năng linh hoạt và mạnh mẽ để bạn có thể tổ chức và làm việc với dữ liệu theo cặp key-value. Nó là một phần quan trọng của ngôn ngữ và được sử dụng rộng rãi trong phát triển ứng dụng web và JavaScript.


## ⭐ Built-in Objects

Browser Objects là một tập hợp các đối tượng được cung cấp bởi trình duyệt web trong môi trường JavaScript. Các đối tượng này cung cấp các tính năng và chức năng để tương tác với trình duyệt, tài liệu HTML và CSS, quản lý sự kiện và thực hiện các tác vụ liên quan đến giao diện người dùng.

Dưới đây là một số Browser Objects quan trọng và chức năng chính của chúng:

1. **Document Object**: Đối tượng Document đại diện cho cấu trúc HTML hiện tại và cho phép truy cập và thao tác các phần tử HTML trên trang.

```javascript
// Truy cập và thay đổi nội dung của một phần tử
var element = document.getElementById("myElement");
element.innerHTML = "New content";
```

2. **Window Object**: Đối tượng Window đại diện cho cửa sổ trình duyệt và cung cấp các phương thức để tương tác với cửa sổ và trang web.

```javascript
// Mở một cửa sổ mới
window.open("https://www.example.com");

// Đặt thời gian chờ để thực hiện một hành động
window.setTimeout(function() {
  console.log("Timeout expired");
}, 3000);
```

3. **Navigator Object**: Đối tượng Navigator cung cấp thông tin về trình duyệt và hệ điều hành đang chạy trình duyệt.

```javascript
// Kiểm tra nếu trình duyệt là Chrome
if (navigator.userAgent.indexOf("Chrome") !== -1) {
  console.log("This is Chrome browser");
}

// Lấy thông tin về ngôn ngữ trình duyệt
var language = navigator.language;
console.log("Browser language:", language);
```

4. **Location Object**: Đối tượng Location cung cấp thông tin về URL hiện tại và cho phép điều hướng và tương tác với URL.

```javascript
// Chuyển hướng đến một URL khác
location.href = "https://www.example.com";

// Lấy thông tin về hostname
var hostname = location.hostname;
console.log("Hostname:", hostname);
```

5. **Event Object**: Đối tượng Event đại diện cho một sự kiện xảy ra trên trang và cung cấp thông tin về sự kiện đó.

```javascript
// Xử lý sự kiện click trên một phần tử
document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("Button clicked");
  console.log("Event type:", event.type);
});
```

Các đối tượng trình duyệt khác nhau có thể cung cấp thêm các đối tượng và chức năng riêng. Việc tìm hiểu và sử dụng các Browser Objects giúp bạn tương tác và điều khiển các thành phần của trang web trong JavaScript một cách linh hoạt và mạnh mẽ.


## ⭐ JavaScript Promises


JavaScript Promises là một cơ chế để xử lý các tác vụ bất đồng bộ trong JavaScript. Nó giúp đơn giản hóa việc xử lý các hoạt động không đồng bộ như tải dữ liệu từ máy chủ, gửi yêu cầu AJAX, hoặc đọc và ghi dữ liệu từ cơ sở dữ liệu.

Promises được định nghĩa bởi một đối tượng Promise và có thể có một trong ba trạng thái sau:

1. **Pending (Đang chờ)**: Trạng thái ban đầu của một Promise. Nó đang chờ để hoàn thành hoặc bị từ chối.
2. **Fulfilled (Đã thực hiện)**: Promise đã hoàn thành thành công và trả về một giá trị kết quả.
3. **Rejected (Bị từ chối)**: Promise đã bị từ chối vì một lý do nào đó và trả về một giá trị lỗi.

Để tạo một Promise, bạn sử dụng cú pháp sau:

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Thực hiện công việc bất đồng bộ
  // Nếu thành công, gọi hàm resolve(result)
  // Nếu thất bại, gọi hàm reject(error)
});
```

Các hàm `resolve` và `reject` được sử dụng để xác định kết quả của Promise. Sau khi Promise được tạo, bạn có thể sử dụng các phương thức `then()` và `catch()` để xử lý kết quả hoặc lỗi.

Dưới đây là một ví dụ về cách sử dụng Promise trong JavaScript:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      if (data) {
        resolve(data); // Promise fulfilled
      } else {
        reject("Error fetching data"); // Promise rejected
      }
    }, 2000);
  });
}

fetchData()
  .then(result => {
    console.log("Data:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });
```

Trong ví dụ trên, `fetchData()` trả về một Promise. Nếu việc lấy dữ liệu thành công, Promise sẽ được thực hiện và kết quả được truyền vào hàm `then()`. Ngược lại, nếu có lỗi xảy ra, Promise sẽ bị từ chối và lỗi sẽ được truyền vào hàm `catch()`.

JavaScript Promises cung cấp một cách tiện lợi và mạnh mẽ để xử lý các tác vụ bất đồng bộ trong JavaScript. Chúng giúp viết mã dễ đọc hơn và tránh những callback hell (đống callback lồng nhau) khi làm việc với các hoạt động không đồng bộ.


## ⭐ JSON

JSON (JavaScript Object Notation) là một định dạng dữ liệu phổ biến được sử dụng để truyền thông tin giữa máy chủ và trình duyệt hoặc giữa các hệ thống khác nhau. Nó dựa trên cú pháp JavaScript và dễ dàng đọc và viết cho con người và dễ dùng cho máy móc.

JSON sử dụng cặp key-value (khóa-giá trị) để lưu trữ và truyền dữ liệu. Dữ liệu trong JSON có thể là kiểu dữ liệu nguyên thủy như số, chuỗi, boolean, null, hoặc có thể là các cấu trúc dữ liệu phức tạp hơn như object và array.

Dưới đây là một số ví dụ về cú pháp JSON:

1. **Object**:
```json
{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Street",
    "city": "City"
  }
}
```

2. **Array**:
```json
[
  "apple",
  "banana",
  "orange"
]
```

3. **Số, chuỗi, boolean và null**:
```json
{
  "number": 42,
  "text": "Hello, world!",
  "isTrue": true,
  "isNull": null
}
```

JSON rất phổ biến trong việc truyền dữ liệu qua mạng với các công nghệ như AJAX và RESTful API. Nó cung cấp một định dạng dữ liệu đơn giản, nhẹ nhàng và dễ dùng cho việc trao đổi thông tin giữa các ứng dụng.

Trong JavaScript, chúng ta có các phương thức để chuyển đổi giữa JSON và đối tượng JavaScript. Phương thức `JSON.stringify()` được sử dụng để chuyển đổi một đối tượng JavaScript thành chuỗi JSON, và phương thức `JSON.parse()` được sử dụng để chuyển đổi một chuỗi JSON thành đối tượng JavaScript.

Dưới đây là một ví dụ về cách sử dụng JSON trong JavaScript:

```javascript
// Chuyển đổi đối tượng JavaScript thành chuỗi JSON
var person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Street",
    city: "City"
  }
};
var json = JSON.stringify(person);
console.log(json);

// Chuyển đổi chuỗi JSON thành đối tượng JavaScript
var json = '{"name":"John","age":30,"address":{"street":"123 Street","city":"City"}}';
var person = JSON.parse(json);
console.log(person.name);
```

JSON là một định dạng dữ liệu phổ biến và quan trọng trong việc truyền thông tin giữa các ứng dụng. Nó đã trở thành một tiêu chuẩn ngành và được hỗ trợ rộng rãi trong nhiều ngôn ngữ lập trình, bao gồm JavaScript.