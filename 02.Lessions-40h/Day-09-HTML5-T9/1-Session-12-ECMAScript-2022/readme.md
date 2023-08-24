# ECMAScript-2022

## async/await

Async/await là một cú pháp trong JavaScript được sử dụng để làm việc với các hàm bất đồng bộ (asynchronous functions) một cách đồng bộ (synchronous-like). Nó cung cấp một cách dễ đọc và dễ hiểu hơn để xử lý các hoạt động không đồng bộ và đợi cho đến khi chúng hoàn thành trước khi tiếp tục thực hiện các công việc khác.

Cách sử dụng async/await:

1. Định nghĩa một hàm bất đồng bộ và đánh dấu nó với từ khóa `async`. Ví dụ:

```javascript
async function fetchData() {
  // Code xử lý bất đồng bộ
}
```

2. Trong hàm bất đồng bộ, sử dụng từ khóa `await` trước một biểu thức bất đồng bộ (promise). Điều này đảm bảo rằng hàm sẽ tạm dừng và chờ đợi kết quả của biểu thức bất đồng bộ trước khi tiếp tục thực hiện các lệnh tiếp theo. Ví dụ:

```javascript
async function fetchData() {
  const result = await fetch('https://example.com/api/data');
  // Tiếp tục xử lý khi kết quả đã sẵn có
}
```

Trong ví dụ trên, `fetch()` là một hàm bất đồng bộ trả về một promise. Sử dụng `await` trước `fetch()` đảm bảo rằng hàm `fetchData()` sẽ tạm dừng cho đến khi kết quả từ `fetch()` được trả về (hoặc promise hoàn thành) trước khi tiếp tục thực hiện các lệnh tiếp theo.

3. Khi sử dụng `await`, chúng ta có thể gán giá trị trả về từ biểu thức bất đồng bộ cho một biến. Ví dụ:

```javascript
async function fetchData() {
  const response = await fetch('https://example.com/api/data');
  const data = await response.json();
  // Tiếp tục xử lý khi dữ liệu đã sẵn có
}
```

Trong ví dụ trên, sau khi nhận được phản hồi từ `fetch()`, chúng ta sử dụng `await` để chờ đợi dữ liệu được trích xuất từ phản hồi bằng cách sử dụng `response.json()`.

Async/await giúp làm cho việc xử lý bất đồng bộ trở nên dễ đọc hơn và tránh việc sử dụng các callback hoặc quản lý promise một cách rườm rà. Nó cung cấp một cú pháp tương đối tương tự với việc viết code đồng bộ, trong đó chúng ta có thể sử dụng các câu lệnh tuần tự thay vì phải viết các callback hoặc xử lý then/catch cho các promise.


## Object.hasOwnProperty()

`Object.hasOwnProperty()` là một phương thức trong JavaScript được sử dụng để kiểm tra xem một đối tượng có chứa một thuộc tính cụ thể hay không. Nó trả về một giá trị boolean, true hoặc false, tùy thuộc vào việc thuộc tính đó có tồn tại trong đối tượng hay không.

Cú pháp của `hasOwnProperty()` là:

```javascript
object.hasOwnProperty(property)
```

- `object`: Đối tượng mà chúng ta muốn kiểm tra thuộc tính.
- `property`: Thuộc tính mà chúng ta muốn kiểm tra xem có tồn tại trong đối tượng hay không.

Ví dụ, giả sử chúng ta có một đối tượng `person` như sau:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

Chúng ta có thể sử dụng `hasOwnProperty()` để kiểm tra xem `person` có chứa thuộc tính `age` hay không:

```javascript
console.log(person.hasOwnProperty('age')); // true
console.log(person.hasOwnProperty('gender')); // false
```

Kết quả sẽ là `true` vì `person` có thuộc tính `age`, và `false` vì `person` không có thuộc tính `gender`.

Phương thức `hasOwnProperty()` chỉ kiểm tra xem thuộc tính có tồn tại trực tiếp trong đối tượng đó hay không, không kiểm tra những thuộc tính được thừa kế từ các đối tượng cha thông qua chuỗi nguyên mẫu (prototype chain).

## string.matchAll(regexp)

Phương thức `matchAll()` trong JavaScript được sử dụng để tìm tất cả các kết quả khớp với một biểu thức chính quy (regular expression) trong một chuỗi. Nó trả về một trình lặp (iterator) chứa tất cả các kết quả khớp được tìm thấy.

Dưới đây là cú pháp để sử dụng `matchAll()`:

```javascript
string.matchAll(regexp)
```

- `string`: Chuỗi mà các kết quả khớp với biểu thức chính quy sẽ được tìm kiếm.
- `regexp`: Một biểu thức chính quy để so khớp với chuỗi.

Phương thức `matchAll()` trả về một trình lặp (iterator) chứa một mảng các kết quả khớp. Mỗi kết quả khớp là một mảng chứa chuỗi khớp cùng với bất kỳ nhóm nắm bắt (captured groups) được định nghĩa trong biểu thức chính quy.

Dưới đây là một ví dụ minh họa về việc sử dụng `matchAll()`:

```javascript
const str = 'Xin chào, tên tôi là John. Tôi sống ở New York.';
const regex = /\b\w+\b/g;
const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(match[0]);
}
```

Trong ví dụ này, chúng ta có một chuỗi `str` và một biểu thức chính quy `regex` khớp với từng từ riêng lẻ. Chúng ta sử dụng phương thức `matchAll()` trên chuỗi với biểu thức chính quy. Trình lặp trả về sau đó được lặp qua bằng vòng lặp `for...of`, và mỗi kết quả khớp được ghi vào console.

Kết quả của ví dụ sẽ là:

```
Xin
chào
tên
tôi
là
John
Tôi
sống
ở
New
York
```

Lưu ý rằng `matchAll()` trả về một trình lặp (iterator) thay vì một mảng. Điều này cho phép bạn lười (lazy) lấy các kết quả khớp một cách tuần tự thay vì tạo một mảng toàn bộ các kết quả cùng một lúc.

Trong biểu thức chính quy trên

```js
const regex = /\b\w+\b/g;
```

`/g` chính là d flag mà chúng ta sẽ bàn tới sau đây.

***

Trong biểu thức chính quy (regular expression) trong JavaScript, cờ `d` (d-flag) là một cờ (flag) được sử dụng để kích hoạt chế độ "tìm kiếm liên tục" (global search mode).

Khi cờ `d` được sử dụng, biểu thức chính quy sẽ tìm kiếm tất cả các kết quả khớp trong chuỗi đầu vào thay vì dừng lại sau khi tìm thấy kết quả đầu tiên. Cờ `d` cho phép tìm kiếm toàn bộ chuỗi.

Ví dụ, giả sử chúng ta có một biểu thức chính quy `/a/g` và một chuỗi đầu vào là `"banana"`. Khi sử dụng cờ `d`, biểu thức chính quy sẽ tìm kiếm tất cả các ký tự `"a"` trong chuỗi và trả về một mảng chứa tất cả các kết quả khớp:

```javascript
const regex = /a/g;
const input = "banana";
const matches = input.match(regex);
console.log(matches); // ["a", "a", "a"]
```

Lưu ý rằng nếu không sử dụng cờ `d`, biểu thức chính quy chỉ trả về kết quả khớp đầu tiên:

```javascript
const regex = /a/;
const input = "banana";
const match = input.match(regex);
console.log(match); // ["a"]
```

Để sử dụng cờ `d`, bạn chỉ cần thêm `g` vào sau biểu thức chính quy, ví dụ: `/pattern/g`.