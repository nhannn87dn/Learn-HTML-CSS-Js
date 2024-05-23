# JavaScript-Operators-and-Statements

## ⭐ Basics of Operators

### 1. Arithmetic operators

Dưới đây là một bảng thể hiện các toán tử số học trong JavaScript:

| Toán tử | Mô tả           | Ví dụ                   |
| ------- | --------------- | ----------------------- |
| +       | Cộng            | 5 + 3 (8)               |
| -       | Trừ             | 5 - 3 (2)               |
| \*      | Nhân            | 5 * 3 (15)              |
| /       | Chia            | 6 / 3 (2)               |
| %       | Chia lấy dư     | 7 % 3 (1)               |
| ++      | Tăng một đơn vị | let a = 5; a++; (a = 6) |
| --      | Giảm một đơn vị | let b = 3; b--; (b = 2) |
| \*\*    | Lũy thừa        | 2 \*\* 3 (8)            |

Ví dụ sử dụng các toán tử số học trong JavaScript:

```javascript
let a = 5;
let b = 3;

console.log(a + b);      // 8
console.log(a - b);      // 2
console.log(a * b);      // 15
console.log(a / b);      // 1.6666666666666667
console.log(a % b);      // 2
console.log(++a);        // 6 (tăng giá trị của a lên 1 đơn vị)
console.log(--b);        // 2 (giảm giá trị của b xuống 1 đơn vị)
console.log(2 ** 3);     // 8 (2 lũy thừa 3)
```

Lưu ý rằng các toán tử số học thường áp dụng cho các giá trị số trong JavaScript. Khi sử dụng các toán tử số học với các giá trị không phải số, JavaScript sẽ cố gắng chuyển đổi chúng thành số nếu có thể.

### 2. Relational operators

Dưới đây là một bảng thể hiện các toán tử so sánh trong JavaScript:

| Toán tử | Mô tả                                        | Ví dụ             |
| ------- | -------------------------------------------- | ----------------- |
| ==      | Bằng (so sánh giá trị)                       | 5 == 5 (true)     |
| ===     | Bằng (so sánh giá trị và kiểu dữ liệu)       | 5 === '5' (false) |
| !=      | Không bằng                                   | 5 != 3 (true)     |
| !==     | Không bằng (so sánh giá trị và kiểu dữ liệu) | 5 !== '5' (true)  |
| >       | Lớn hơn                                      | 5 > 3 (true)      |
| \<      | Nhỏ hơn                                      | 3 \< 5 (true)     |
| >=      | Lớn hơn hoặc bằng                            | 5 >= 5 (true)     |
| \<=     | Nhỏ hơn hoặc bằng                            | 3 \<= 5 (true)    |

Ví dụ sử dụng các toán tử so sánh trong JavaScript:

```javascript
const a = 5;
const b = 3;

console.log(a == b);   // false
console.log(a === '5');  // false
console.log(a != b);   // true
console.log(a !== '5'); // true
console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 5);   // true
console.log(b <= 3);   // true
```

Lưu ý rằng `==` so sánh giá trị của hai biến mà không quan tâm đến kiểu dữ liệu, trong khi `===` so sánh cả giá trị và kiểu dữ liệu. Khi làm việc với kiểu dữ liệu nguyên thủy (primitive types) như số, chuỗi, boolean, thì thường nên sử dụng `===` để tránh nhầm lẫn và có kết quả chính xác hơn.

### 3. Logical operators

- List: && (AND) , ! (NOT) , || (OR)

Dưới đây là một bảng thể hiện các toán tử logic trong JavaScript:

| Toán tử | Mô tả                      | Ví dụ                                               |
| ------- | -------------------------- | --------------------------------------------------- |
| &&      | Và (AND)                   | true && false (false)                               |
| \|\|    | Hoặc (OR)                  | true \|\| false (true)                              |
| !       | Phủ định (NOT)             | !true (false)                                       |
| ??      | Toán tử nullish coalescing | a ?? b (nếu a là null hoặc undefined, thì trả về b) |

Ví dụ sử dụng các toán tử logic trong JavaScript:

```javascript
const a = true;
const b = false;

console.log(a && b);       // false
console.log(a || b);       // true
console.log(!a);           // false

const value = null;
const defaultValue = "Default Value";

console.log(value ?? defaultValue);  // "Default Value"
```

Toán tử `&&` trả về `true` nếu cả hai toán hạng đều đúng, ngược lại trả về `false`. Toán tử `||` trả về `true` nếu một trong hai toán hạng đúng, trả về `false` nếu cả hai đều sai. Toán tử `!` trả về giá trị đảo ngược của toán hạng (nếu là `true` thì trả về `false` và ngược lại).

Toán tử `??` được sử dụng để xác định giá trị mặc định trong trường hợp toán hạng bên trái là `null` hoặc `undefined`. Nếu toán hạng bên trái không phải là `null` hoặc `undefined`, toán tử `??` trả về giá trị của toán hạng bên trái. Nếu toán hạng bên trái là `null` hoặc `undefined`, toán tử `??` trả về giá trị của toán hạng bên phải.

Lưu ý rằng toán tử `&&`, `||`, và `!` thường được sử dụng để kiểm tra và điều khiển luồng điều khiển trong các biểu thức điều kiện và câu lệnh rẽ nhánh.


### Toán tử `&&` (Và)

| Toán hạng bên trái | Toán hạng bên phải | Kết quả |
| ------------------ | ------------------ | ------- |
| `true`             | `true`             | `true`  |
| `true`             | `false`            | `false` |
| `false`            | `true`             | `false` |
| `false`            | `false`            | `false` |

Ví dụ:

```javascript
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false
```

### Toán tử `||` (Hoặc)

| Toán hạng bên trái | Toán hạng bên phải | Kết quả |
| ------------------ | ------------------ | ------- |
| `true`             | `true`             | `true`  |
| `true`             | `false`            | `true`  |
| `false`            | `true`             | `true`  |
| `false`            | `false`            | `false` |

Ví dụ:

```javascript
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false
```


### 4. Assignment operators

- using the equal to operator = <<https://www.w3schools.com/js/js_assignment.asp>

## ⭐ String Javascript

- Work with string

## ⭐ Regular Expression

Doc: <https://www.w3schools.com/js/js_regexp.asp>

Regular Expression (Regex) là một công cụ mạnh mẽ trong lập trình được sử dụng để tìm kiếm và xác định các mẫu (pattern) trong chuỗi ký tự. Regex cho phép bạn tạo ra các quy tắc linh hoạt để tìm kiếm, so khớp và thay thế các chuỗi dựa trên các tiêu chí nhất định.

Cú pháp chung của một biểu thức chính quy trong JavaScript là `/pattern/`, trong đó `pattern` là mẫu bạn muốn tìm kiếm. Dưới đây là một số ký hiệu và ví dụ về cách sử dụng regex trong JavaScript:

1. **Tìm một từ trong chuỗi**: Bạn có thể sử dụng regex để tìm kiếm một từ cụ thể trong một chuỗi.
```javascript
var str = "Hello, welcome to JavaScript.";
var pattern = /welcome/;
var result = str.match(pattern);
console.log(result); // Output: ["welcome"]
```

2. **Tìm kiếm theo mẫu**: Regex cho phép bạn tìm kiếm các ký tự hoặc chuỗi theo một mẫu cụ thể.
```javascript
var str = "Hello, 12345 is a number.";
var pattern = /\d+/;
var result = str.match(pattern);
console.log(result); // Output: ["12345"]
```

3. **So khớp một nhóm ký tự**: Regex cho phép bạn so khớp với một nhóm ký tự cụ thể bằng cách sử dụng các ký hiệu như `[]`.
```javascript
var str = "Hello, my name is John.";
var pattern = /[aeiou]/;
var result = str.match(pattern);
console.log(result); // Output: ["e", "o", "a", "e", "i", "o"]
```

4. **Thay thế các chuỗi**: Regex cũng cho phép bạn thay thế các chuỗi dựa trên một mẫu.
```javascript
var str = "Hello, my name is John.";
var pattern = /John/;
var result = str.replace(pattern, "Alice");
console.log(result); // Output: "Hello, my name is Alice."
```

5. **Kiểm tra định dạng Email**: Regex rất hữu ích để kiểm tra xem một chuỗi có phù hợp với định dạng email hay không.
```javascript
var email = "example@example.com";
var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isValid = pattern.test(email);
console.log(isValid); // Output: true
```

Trên đây chỉ là một số ví dụ đơn giản về cách sử dụng regex trong JavaScript. Regex rất mạnh mẽ và linh hoạt, cho phép bạn tạo ra các mẫu phức tạp hơn để tìm kiếm, so khớp và thay thế các chuỗi theo nhu cầu của bạn.

## ⭐ if Statement

Trong JavaScript, if là một câu lệnh điều kiện được sử dụng để thực thi một khối mã chỉ khi một điều kiện xác định là đúng (true). Nếu điều kiện là sai (false), khối mã sẽ được bỏ qua và chương trình sẽ tiếp tục thực thi các câu lệnh tiếp theo sau khối if.

### If đơn

Cú pháp cơ bản của câu lệnh if như sau:

```js
if (condition) {
  // Mã thực thi khi điều kiện là đúng (true)
}
```
Khi `condition` trả về `TRUE` thì khối lệnh bên trong cặp ngoặc `{}` sẽ được THỰC THI.


Ví dụ: 

```js
const num = 10;

if (num > 0) {
  console.log("Số dương");
}
```

### If Else

Cú pháp cơ bản của câu lệnh if else như sau:


```js
if (condition) {
  // Mã thực thi khi điều kiện là đúng (true)
} else {
  // Mã thực thi khi điều kiện là sai (false)
}
```

Khi `condition` trả về `TRUE` thì khối lệnh bên trong cặp ngoặc `{}` của `if` sẽ được THỰC THI.

Khi `condition` trả về `FALSE` thì khối lệnh bên trong cặp ngoặc `{}` của `if` sẽ được BỎ QUA và khối lệnh bên trong `{}` của `else` sẽ được THỰC THI

Ví dụ: 

```js
const num = 10;

if (num > 0) {
  console.log("Số dương");
} else {
  console.log("Số âm hoặc bằng 0");
}
```

### If else if và else


Ví dụ: 

```js
const num = 10;

if (num > 0) {
  console.log("Số dương");
} else if (num < 0) {
  console.log("Số âm");
} else {
  console.log("Số không");
}
```

### Toán tử 3 ngôi

Là một cú pháp rút gọn hơn về cách code của if else

```js
let sex = 0;
if(sex === 0){
  let sexLabel = 'Nữ'
}else{
  let sexLabel = 'Nam'
}
```
Thì với 3 ngôi ==> nó ngắn gọn hơn:

```js
  let sex = 0;
  let sexLabel = sex === 0 ? "Nữ" : 'Nam';
```

## ⭐ switch-case

Trong JavaScript, `switch-case` là một cấu trúc điều khiển được sử dụng để thực hiện các hành động khác nhau dựa trên giá trị của một biểu thức. Nó cung cấp một cách thay thế cho việc sử dụng nhiều câu lệnh `if-else` liên tiếp.

Cú pháp cơ bản của câu lệnh `switch-case` như sau:

```javascript
switch (expression) {
  case value1:
    // Mã thực thi khi expression có giá trị bằng value1
    break;
  case value2:
    // Mã thực thi khi expression có giá trị bằng value2
    break;
  case value3:
    // Mã thực thi khi expression có giá trị bằng value3
    break;
  default:
    // Mã thực thi khi expression không bằng bất kỳ giá trị case nào
}
```

Giải thích từng thành phần của câu lệnh `switch-case`:

- `expression`: Đây là biểu thức mà bạn muốn so sánh. Giá trị của biểu thức sẽ được so sánh với các giá trị trong các trường hợp (`case`) để xác định mã nào sẽ được thực thi.

- `value1, value2, value3`: Đây là các giá trị mà biểu thức sẽ được so sánh với. Nếu giá trị của biểu thức khớp với một giá trị case, mã trong khối tương ứng sẽ được thực thi. Nếu giá trị không khớp với bất kỳ giá trị case nào, mã trong khối `default` (tùy chọn) sẽ được thực thi.

- `break`: Câu lệnh `break` được sử dụng để thoát khỏi câu lệnh `switch` sau khi mã trong một khối `case` đã được thực thi. Nếu không có câu lệnh `break`, mã sẽ tiếp tục thực thi các khối `case` khác mà không kiểm tra giá trị.

- `default` (tùy chọn): Khối mã trong `default` sẽ được thực thi khi giá trị của biểu thức không khớp với bất kỳ giá trị case nào.

Ví dụ:

```javascript
const fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Đây là quả táo");
    break;
  case "banana":
    console.log("Đây là quả chuối");
    break;
  case "orange":
    console.log("Đây là quả cam");
    break;
  default:
    console.log("Không biết quả này là gì");
}
```

Trong ví dụ trên, chúng ta sử dụng câu lệnh `switch-case` để kiểm tra giá trị của biến `fruit`. 

- Nếu `fruit` là `"apple"`, câu lệnh `console.log("Đây là quả táo")` sẽ được thực thi. 
- Nếu `fruit` là `"banana"`, câu lệnh `console.log("Đây là quả chuối")` sẽ được thực thi. 
- Nếu `fruit` là `"orange"`, câu lệnh `console.log("Đây là quả cam")` sẽ được thực thi. 
- Nếu `fruit` không khớp với bất kỳ giá trị case nào, câu lệnh `console.log("Không biết quả này là gì")` sẽ được thực thi.


Lưu ý rằng switch-case chỉ phù hợp khi bạn cần so sánh giá trị cụ thể của biểu thức và không thích hợp cho việc kiểm tra các biểu thức phức tạp hoặc điều kiện logic phức tạp. Trong những trường hợp đó, câu lệnh if-else có thể là lựa chọn tốt hơn.
