# Giới thiệu về Javascript

Intro: <https://www.w3schools.com/js/js_versions.asp>
## 1. Variables - BIẾN

- Doc: <https://www.w3schools.com/js/js_variables.asp>
- Declaring Variables and Scope (<https://www.w3schools.com/js/js_scope.asp>)
- Variable Naming Rules


Dưới đây là một bài giảng về cách định nghĩa biến, quy tắc đặt biến, sự khác nhau giữa các cách đặt biến và tại sao cần phải đặt biến trong JavaScript:

**Cách định nghĩa biến trong JavaScript:**

Trước khi sử dụng một biến trong JavaScript, bạn cần phải định nghĩa nó. Để định nghĩa một biến, bạn sử dụng từ khóa `var`, `let` hoặc `const`, sau đó là tên biến và giá trị khởi tạo (nếu có).

Ví dụ:
```javascript
var age = 25; // định nghĩa biến age và gán giá trị 25 cho nó
let name = "John"; // định nghĩa biến name và gán giá trị "John" cho nó
const PI = 3.14; // định nghĩa biến PI và gán giá trị 3.14 cho nó
```

**Quy tắc đặt biến trong JavaScript:**

- Tên biến phải bắt đầu bằng một chữ cái (a-z hoặc A-Z), dấu gạch dưới (_) hoặc ký tự đô-la ($).
- Tên biến chỉ có thể chứa các ký tự chữ cái, chữ số (0-9), dấu gạch dưới (_) hoặc ký tự đô-la ($).
- Tên biến phân biệt chữ hoa và chữ thường (ví dụ: `age` và `Age` là hai biến khác nhau).
- Không được sử dụng các từ khóa đã được JavaScript định nghĩa (như `if`, `for`, `function`, v.v.) làm tên biến.

Ví dụ:
```javascript
var myVariable; // tên biến hợp lệ
var 123abc; // tên biến không hợp lệ (bắt đầu bằng số)
var my-variable; // tên biến không hợp lệ (sử dụng dấu gạch ngang)
```

**Sự khác nhau giữa các cách đặt biến:**

1. `var`: Trước phiên bản ECMAScript 6 (ES6), `var` là cách duy nhất để định nghĩa biến trong JavaScript. Biến được khai báo bằng `var` có phạm vi hoặc toàn cục (nếu được khai báo ngoài bất kỳ hàm nào) hoặc phạm vi cục bộ (nếu được khai báo trong một hàm). Biến `var` có thể được khai báo lại và gán giá trị mới.

2. `let`: `let` được giới thiệu trong ES6 và cung cấp một cách để khai báo biến với phạm vi cục bộ trong một khối mã. Biến `let` có thể được khai báo lại, nhưng không thể khai báo lại trong cùng một phạm vi.

3. `const`: `const` cũng được giới thiệu trong ES6 và tương tự như `let`, nhưng với sự khác biệt là giá trị của biến `const` không thể được thay đổi sau khi nó được gán.

**Tại sao cần phải đặt biến:**

Việc đặt biến trong JavaScript cho phép lưu trữ và tham chiếu đến các giá trị và đối tượng khác nhau trong quá trình thực thi mã. Điều này mang lại nhiều lợi ích quan trọng:

1. Lưu trữ dữ liệu: Biến cho phép bạn lưu trữ các giá trị như số, chuỗi, mảngvà đối tượng để sử dụng và xử lý trong mã JavaScript.

2. Đặt tên có ý nghĩa: Sử dụng biến có tên mô tả cho phép mã của bạn trở nên dễ đọc và dễ hiểu hơn. Bằng cách đặt tên biến mô tả chức năng và nội dung của chúng, bạn có thể làm cho mã của mình dễ theo dõi và bảo trì.

3. Thay đổi giá trị: Biến cho phép bạn thay đổi giá trị của chúng trong quá trình thực thi. Điều này rất hữu ích khi bạn cần lưu trữ và cập nhật thông tin trong suốt quá trình chạy chương trình.

4. Quản lý phạm vi: Biến có thể có phạm vi toàn cục hoặc cục bộ. Việc quản lý phạm vi giúp bạn kiểm soát việc truy cập và sử dụng các biến trong các phần khác nhau của mã của bạn, đồng thời tránh xung đột và lỗi không mong muốn.

5. Tối ưu hóa mã: Sử dụng biến cho phép bạn lưu trữ các giá trị trung gian và kết quả tính toán. Điều này giúp tối ưu hóa mã của bạn bằng cách tránh việc tính toán lặp đi lặp lại và sử dụng kết quả đã tính toán trước đó.


## 3. Data Types in JavaScript

- boolean, null, number, string, array, object, function
- Doc: <https://www.w3schools.com/js/js_datatypes.asp>


Tất nhiên! Dưới đây là các kiểu dữ liệu trong JavaScript kèm theo ví dụ xen kẽ:

1. **Number (Số)**:

Đại diện cho các giá trị số. Các số có thể là số nguyên hoặc số thập phân. Ví dụ: 10, 3.14, -5

```javascript
var age = 25;
var price = 9.99;
var temperature = -5;
```

2. **String (Chuỗi)**:

Đại diện cho các chuỗi ký tự. Chuỗi được bao quanh bởi dấu nháy đơn (' ') hoặc dấu nháy kép (" "). Ví dụ: 'Hello', "World".

```javascript
var name = "John";
var message = 'Hello, world!';
var address = "123 Main Street";
```

3. **Boolean (Logic)**:

Đại diện cho giá trị đúng (true) hoặc sai (false). Boolean thường được sử dụng trong các biểu đồ điều kiện. Ví dụ: true, false.

```javascript
var isStudent = true;
var hasPermission = false;
```

4. **Null**:

Đại diện cho một giá trị null hoặc không tồn tại. Đây là một kiểu dữ liệu đặc biệt chỉ có giá trị duy nhất là null.

```javascript
var nullValue = null;
```

5. **Undefined**:

Đại diện cho một biến chưa được gán giá trị. Khi một biến được khai báo nhưng chưa được gán giá trị, giá trị mặc định của nó là undefined.

```javascript
var undefinedValue;
var uninitializedVariable;
```

6. **Object (Đối tượng)**:

Đại diện cho một đối tượng có chứa nhiều thuộc tính và phương thức. Đối tượng có thể được tạo bằng cách sử dụng cặp dấu ngoặc nhọn { } hoặc từ các lớp đối tượng được định nghĩa trước.

```javascript
var person = { name: "John", age: 25 };
var car = { brand: "Toyota", year: 2022, color: "blue" };
```

7. **Array (Mảng)**:

Đại diện cho một tập hợp các giá trị được xếp theo một thứ tự nhất định. Mảng được định nghĩa bằng cách sử dụng cặp dấu ngoặc vuông [ ] và các phần tử trong mảng được ngăn cách bằng dấu phẩy.

```javascript
var numbers = [1, 2, 3, 4];
var fruits = ["apple", "banana", "orange"];
```

8. **Function (Hàm)**:

Đại diện cho một khối mã có thể được gọi và thực thi. Hàm có thể nhận tham số và trả về một giá trị. Hàm có thể được định nghĩa bằng từ khóa function. Ví dụ:

```javascript
function add(a, b) {
  return a + b;
}

var greet = function(name) {
  console.log("Hello, " + name + "!");
};
```

9. **Symbol**:

Đây là một kiểu dữ liệu mới được giới thiệu trong phiên bản ECMAScript 6. Mỗi giá trị Symbol là duy nhất và không thể thay đổi. Các Symbol thường được sử dụng để định nghĩa các thuộc tính riêng tư trong đối tượng.

```javascript
var id = Symbol("id");
var key = Symbol();
```

Đây là một số ví dụ cơ bản về các kiểu dữ liệu trong JavaScript. Bạn có thể sử dụng các biến này để lưu trữ và xử lý thông tin trong chương trình JavaScript của mình.


## 4. JavaScript Output

Doc: <https://www.w3schools.com/js/js_output.asp>


Trong JavaScript, có một số phương thức Output được sử dụng để hiển thị thông tin ra màn hình. Dưới đây là giới thiệu về một số phương thức Output phổ biến và ví dụ minh họa cho mỗi phương thức:

1. **console.log()**: Phương thức này được sử dụng để ghi thông tin ra bảng điều khiển (console). Nó thường được sử dụng cho mục đích gỡ lỗi (debugging) hoặc hiển thị thông tin cho mục đích phát triển.
```javascript
var name = "John";
var age = 25;
console.log("Name: " + name);
console.log("Age: " + age);
```
Output:
```
Name: John
Age: 25
```

2. **alert()**: Phương thức này được sử dụng để hiển thị thông báo popup trên trình duyệt. Nó thường được sử dụng để cung cấp thông báo cần chú ý cho người dùng.
```javascript
var message = "Hello, world!";
alert(message);
```
Output: (Hiển thị cửa sổ popup với nội dung "Hello, world!")

3. **document.write()**: Phương thức này được sử dụng để viết thông tin trực tiếp vào tài liệu HTML. Nó thường được sử dụng để hiển thị nội dung động trên trang web.
```javascript
var title = "Welcome to my website!";
document.write("<h1>" + title + "</h1>");
```
Output: (Hiển thị tiêu đề "Welcome to my website!" dưới dạng tiêu đề cấp 1 trên trang web)

Lưu ý: Khi sử dụng phương thức `document.write()`, nếu gọi nó sau khi tài liệu HTML đã được tải, nó sẽ ghi đè toàn bộ nội dung của tài liệu HTML. Do đó, hãy sử dụng phương thức này cẩn thận.

Các phương thức Output này giúp bạn hiển thị thông tin ra màn hình trong quá trình phát triển ứng dụng JavaScript của mình. Tùy thuộc vào mục đích sử dụng và môi trường, bạn có thể lựa chọn phương thức phù hợp để thực hiện việc Output.

## 5. Using Comments

Comment trong JavaScript là cách để thêm chú thích và giải thích mã nguồn của bạn. Comment không được thực thi và không ảnh hưởng đến việc chạy chương trình, nó chỉ là một phần của mã để giúp lập trình viên và người đọc hiểu rõ hơn về ý nghĩa và cách hoạt động của mã.

Dưới đây là hai loại comment phổ biến trong JavaScript:

1. **Single line Comment (Comment trên một dòng)**:

 Comment này chỉ áp dụng cho một dòng duy nhất. Bất cứ điều gì xuất hiện sau dấu // trên cùng một dòng sẽ được coi là comment và sẽ không được thực thi.

```javascript
// Đây là một comment trên một dòng
var name = "John"; // Đây là một comment sau một dòng mã
```

2. **Multi-line Comments (Comment trên nhiều dòng)**:

 Comment này có thể sử dụng để chú thích trên nhiều dòng và được bao quanh bởi /* và */. Tất cả các dòng nằm giữa /* và */ sẽ được coi là comment.

```javascript
/* Đây là một comment trên
   nhiều dòng */
var age = 25;

/*
   Đây là một comment trên nhiều dòng
   có thể sử dụng để giải thích chi tiết về mã
*/
```

Tại sao lại sử dụng comment? Dưới đây là một số lợi ích của việc sử dụng comment trong mã JavaScript:

- **Giải thích mã nguồn**: Comment giúp bạn giải thích ý nghĩa và cách hoạt động của mã. Điều này hữu ích cho bạn và những người khác đọc và hiểu mã nguồn dễ dàng hơn.

- **Gỡ lỗi và sửa lỗi**: Comment có thể giúp bạn tạm thời bỏ qua hoặc tắt một phần của mã để tìm lỗi hoặc kiểm tra cách hoạt động của mã. Bằng cách comment một phần mã, bạn có thể kiểm tra hiệu quả các phần khác của chương trình.

- **Giao tiếp và hợp tác**: Khi bạn làm việc với nhóm hoặc chia sẻ mã nguồn với người khác, comment là một phần quan trọng để giao tiếp ý tưởng, giải thích và đưa ra hướng dẫn cho những người khác.

- **Tài liệu và bảo trì**: Comment cũng có thể được sử dụng để tạo tài liệu cho mã nguồn. Bằng cách cung cấp các comment chính xác và chi tiết, bạn có thể tạo ra một tài liệu dễ hiểu và hỗ trợ bảo trì mã nguồn.

Việc sử dụng comment là một thói quen tốt trong quá trình lập trình để làm cho mã nguồn dễ đọc, dễ hiểu và dễ duy trì.

## 6. What Built-in Functions ?

Dưới đây là giới thiệu về một số phương thức JavaScript phổ biến và ví dụ về cách sử dụng chúng:

1. **alert()**: Phương thức `alert()` được sử dụng để hiển thị một thông báo popup trên trình duyệt và thông báo cho người dùng.
```javascript
alert("Xin chào! Đây là một thông báo!");
```

2. **confirm()**: Phương thức `confirm()` được sử dụng để hiển thị một thông báo popup yêu cầu người dùng xác nhận hoặc hủy bỏ một hành động.
```javascript
var result = confirm("Bạn có chắc muốn xóa?");
if (result) {
  console.log("Người dùng đã xác nhận xóa.");
} else {
  console.log("Người dùng đã hủy bỏ xóa.");
}
```

3. **parseInt()**: Phương thức `parseInt()` được sử dụng để chuyển đổi một chuỗi thành một số nguyên dựa trên hệ số cơ số được định nghĩa.
```javascript
var numberString = "10";
var number = parseInt(numberString);
console.log(number); // Output: 10
```

4. **eval()**: Phương thức `eval()` được sử dụng để đánh giá một biểu thức JavaScript được đưa vào dưới dạng chuỗi.
```javascript
var x = 5;
var y = 10;
var expression = "x + y";
var result = eval(expression);
console.log(result); // Output: 15
```
Lưu ý: Việc sử dụng `eval()` cần thận trọng, vì nó có thể thực thi bất kỳ mã JavaScript nào trong chuỗi đầu vào và có thể gây lỗ hổng bảo mật nếu không được sử dụng đúng cách.

5. **prompt()**: Phương thức `prompt()` được sử dụng để hiển thị một hộp thoại yêu cầu người dùng nhập dữ liệu.
```javascript
var name = prompt("Vui lòng nhập tên của bạn:");
console.log("Xin chào, " + name + "!");
```

6. **console.log()**: Phương thức `console.log()` được sử dụng để ghi thông tin ra bảng điều khiển (console). Nó thường được sử dụng để gỡ lỗi (debugging) hoặc hiển thị thông tin cho mục đích phát triển.
```javascript
var message = "Đây là một thông điệp ghi ra console.";
console.log(message);
```

Các phương thức trên giúp bạn tương tác với người dùng, chuyển đổi kiểu dữ liệu hoặc ghi thông tin ra màn hình để phục vụ mục đích phát triển và gỡ lỗi trong JavaScript. Việc sử dụng chúng phụ thuộc vào nhu cầu và yêu cầu cụ thể của ứng dụng của bạn.

## 7. JavaScript Events and Event Handlers

- <https://www.w3schools.com/js/js_events.asp>
- <https://www.w3schools.com/jsref/dom_obj_event.asp>


Trong JavaScript, bạn có thể gắn các sự kiện (events) cho các phần tử HTML bằng cách sử dụng các thuộc tính "on" như `onclick`, `onmouseover`, `onsubmit`, vv. Khi một sự kiện xảy ra trên phần tử, mã JavaScript được chỉ định trong thuộc tính "on" tương ứng sẽ được thực thi.

Dưới đây là một số sự kiện phổ biến và cách sử dụng chúng:

1. **onclick**: Sự kiện `onclick` xảy ra khi một phần tử được nhấp chuột.
```html
<button onclick="myFunction()">Nhấp vào đây</button>

<script>
function myFunction() {
  alert("Nút đã được nhấp!");
}
</script>
```

2. **onmouseover**: Sự kiện `onmouseover` xảy ra khi con trỏ chuột di chuyển vào phần tử.
```html
<div onmouseover="myFunction()">Di chuột vào đây</div>

<script>
function myFunction() {
  console.log("Con trỏ chuột đã đi vào phần tử!");
}
</script>
```

3. **onsubmit**: Sự kiện `onsubmit` xảy ra khi một form được gửi đi (submit).
```html
<form onsubmit="myFunction()">
  <input type="text" name="username">
  <input type="submit" value="Gửi">
</form>

<script>
function myFunction() {
  alert("Form đã được gửi!");
}
</script>
```

4. **onkeyup**: Sự kiện `onkeyup` xảy ra khi người dùng nhấn và nhả phím trên bàn phím.
```html
<input type="text" onkeyup="myFunction()">

<script>
function myFunction() {
  var input = document.querySelector("input[type='text']");
  console.log("Giá trị nhập vào là: " + input.value);
}
</script>
```

Các sự kiện `on` khác nhau có thể được gắn lên các phần tử HTML như button, div, form, input và nhiều phần tử khác. Bằng cách sử dụng cú pháp `on<event>` và chỉ định mã JavaScript trong các thuộc tính tương ứng, bạn có thể thực hiện các hành động phản hồi khi các sự kiện xảy ra trên trang web của bạn.

## 8. Intro Jquery

- JQuery giúp đơn giản việc theo tác với HTML DOM
- <https://www.w3schools.com/js/js_htmldom.asp>


jQuery là một thư viện JavaScript phổ biến và mạnh mẽ được thiết kế để đơn giản hóa việc tương tác với HTML, xử lý sự kiện, thay đổi nội dung trang web và thực hiện các tác vụ khác. Nó cung cấp một cú pháp gọn nhẹ và dễ sử dụng, giúp viết mã JavaScript ngắn gọn và dễ đọc hơn.

Dưới đây là một số tính năng và lợi ích chính của jQuery:

1. **DOM manipulation (Thao tác với DOM)**: jQuery cung cấp các phương thức và hàm để lựa chọn và thao tác các phần tử HTML trong trang web. Bạn có thể dễ dàng thêm, xóa, sửa đổi nội dung, thuộc tính và CSS của các phần tử.

2. **Event handling (Xử lý sự kiện)**: jQuery giúp xử lý các sự kiện trên trang web một cách dễ dàng bằng cách cung cấp các phương thức để gắn kết các bộ xử lý sự kiện cho các phần tử HTML. Điều này cho phép bạn phản hồi và xử lý các sự kiện như nhấp chuột, di chuột, gửi biểu mẫu và nhiều hơn nữa.

3. **AJAX support (Hỗ trợ AJAX)**: jQuery cung cấp các phương thức đơn giản để thực hiện các yêu cầu AJAX, gửi và nhận dữ liệu từ máy chủ một cách bất đồng bộ. Điều này giúp tải nội dung một cách linh hoạt và cải thiện trải nghiệm người dùng.

4. **Animation effects (Hiệu ứng chuyển động)**: jQuery cung cấp các hiệu ứng chuyển động như ẩn hiện, trượt, phai mờ và nhiều hiệu ứng khác. Bạn có thể dễ dàng tạo các hiệu ứng tương tác và chuyển động đáng chú ý trên trang web của bạn.

5. **Cross-browser compatibility (Tương thích với nhiều trình duyệt)**: jQuery được thiết kế để hoạt động tương thích trên nhiều trình duyệt web phổ biến, giúp đơn giản hóa việc phát triển đa nền tảng.

Dưới đây là ví dụ đơn giản về việc sử dụng jQuery để ẩn hiện một phần tử khi người dùng nhấp chuột vào một nút:

```html
<!DOCTYPE html>
<html>
<head>
  <title>jQuery Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      $("#myButton").click(function() {
        $("#myElement").toggle();
      });
    });
  </script>
</head>
<body>

  <button id="myButton">Nhấp vào đây</button>
  <div id="myElement">Phần tử ẩn hiện</div>

</body>
</html>
```

Trong ví dụ trên, chúng ta đã sử dụng jQuery để chọn phần tử có id là "myButton" và gắn một hàm xử lý sự kiện `click` cho nút đó. Khi người dùng nhấp vào nút, phương thức `toggle()` được gọi trên phần tử có id là "myElement", dẫn đến việc ẩn hoặc hiện phần tử đó.

jQuery cung cấp nhiều tính năng và tiện ích khác để làm việc với JavaScript vàgiúp tạo ra trải nghiệm tương tác động và phản hồi trên trang web của bạn một cách dễ dàng và hiệu quả.