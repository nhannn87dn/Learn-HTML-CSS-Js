# JavaScript-Loops-and-Array


## ⭐ 1. Array

- Array?
- Why use Array ?
- Working with Array: <https://www.w3schools.com/js/js_arrays.asp>
- Array Method: <https://www.w3schools.com/js/js_array_methods.asp>
- Array Search: <https://www.w3schools.com/js/js_array_search.asp>
- Array sort: <https://www.w3schools.com/js/js_array_sort.asp>
- Array iteration: <https://www.w3schools.com/js/js_array_iteration.asp>

Trong JavaScript, mảng (array) là một cấu trúc dữ liệu được sử dụng để lưu trữ và xử lý một tập hợp các giá trị theo thứ tự. Mảng có thể chứa các giá trị của bất kỳ kiểu dữ liệu nào, bao gồm số, chuỗi, đối tượng, mảng khác và thậm chí là hàm.

Để khai báo một mảng trong JavaScript, bạn có thể sử dụng cú pháp sau:

```javascript
const arrayName = [value1, value2, value3, ...];
```

Trong đó:

- `arrayName` là tên của mảng.
- `value1, value2, value3` là các giá trị được chứa trong mảng. Các giá trị này được phân tách bằng dấu phẩy và được đặt trong dấu ngoặc vuông `[]`.

Ví dụ, dưới đây là một mảng chứa các số nguyên:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Bạn có thể truy cập vào các phần tử trong mảng bằng cách sử dụng chỉ số của phần tử. Chúng ta biết rằng chỉ số trong mảng bắt đầu từ 0. Ví dụ:

```javascript
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3
```

Mảng là một phần quan trọng của JavaScript và rất hữu ích trong việc lưu trữ và xử lý dữ liệu. Bạn có thể tìm hiểu thêm về các phương thức và thuộc tính khác của mảng trong JavaScript trong tài liệu chính thức của JavaScript.


Trong JavaScript, các giá trị trong mảng có thể là bất kỳ kiểu dữ liệu nào, bao gồm:

1. Số (Number): Ví dụ: `1`, `3.14`, `-5`.

1. Chuỗi (String): Ví dụ: `'hello'`, `'world'`, `'123'`.

1. Boolean: Ví dụ: `true`, `false`.

1. Đối tượng (Object): Ví dụ: `{ name: 'John', age: 25 }`.

1. Mảng (Array): Ví dụ: `[1, 2, 3]`, `['apple', 'banana', 'orange']`.

1. Null: Ví dụ: `null`.

1. Undefined: Ví dụ: `undefined`.

1. Hàm (Function): Ví dụ: `function() { ... }`.

1. Và các kiểu dữ liệu khác như Symbol, BigInt (kể từ phiên bản JavaScript ES2020).

Ví dụ, dưới đây là một mảng chứa các giá trị của các kiểu dữ liệu khác nhau:

```javascript
const values = [1, 'hello', true, { name: 'John' }, [1, 2, 3], null, undefined, function() { console.log('Hello!'); }];
```

Trong ví dụ trên, mảng `values` chứa các giá trị số `1`, chuỗi `'hello'`, giá trị boolean `true`, đối tượng `{ name: 'John' }`, mảng `[1, 2, 3]`, giá trị null, giá trị undefined và một hàm in ra chuỗi `'Hello!'`.

Lưu ý rằng trong mảng, các phần tử không bắt buộc phải có cùng kiểu dữ liệu. Bạn có thể lưu trữ và truy cập các giá trị khác nhau trong cùng một mảng.

### Thêm mới phần tử vào Array

Trong JavaScript, có một số cách để thêm phần tử vào mảng. Dưới đây là một số phương thức thường được sử dụng để thêm phần tử vào mảng:

1. Sử dụng phương thức `push()`: Phương thức `push()` được sử dụng để thêm một hoặc nhiều phần tử vào cuối mảng. Ví dụ:

```javascript
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.push(5, 6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
```

2. Gán giá trị cho chỉ số không tồn tại: Bạn có thể gán giá trị cho một chỉ số không tồn tại trong mảng, và JavaScript sẽ tự động mở rộng mảng và thêm phần tử mới vào vị trí đó. Ví dụ:

```javascript
const fruits = ['apple', 'banana'];
fruits[2] = 'orange';
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

3. Sử dụng phương thức `unshift()`: Phương thức `unshift()` được sử dụng để thêm một hoặc nhiều phần tử vào đầu mảng. Ví dụ:

```javascript
const numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4]

numbers.unshift(-2, -1);
console.log(numbers); // Output: [-2, -1, 1, 2, 3, 4]
```

4. Sử dụng toán tử spread (`...`): Bạn có thể sử dụng toán tử spread để thêm phần tử từ một mảng khác vào mảng hiện tại. Ví dụ:

```javascript
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
const combined = [...numbers, ...moreNumbers];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

Lưu ý rằng các phương thức `push()`, `unshift()` và phép gán chỉ số không tồn tại làm thay đổi trực tiếp mảng gốc. Trong khi đó, toán tử spread tạo ra một mảng mới chứa các phần tử từ các mảng ban đầu.

### Thay đổi giá trị phần tử trong Array

Trong JavaScript, bạn có thể thay đổi giá trị của một phần tử trong mảng bằng cách truy cập vào phần tử đó và gán giá trị mới cho nó. Dưới đây là một số cách thường được sử dụng để thay đổi giá trị phần tử trong mảng:

1. Gán giá trị mới cho chỉ số của phần tử: Bạn có thể gán giá trị mới cho chỉ số của phần tử trong mảng bằng cách sử dụng toán tử gán (=). Ví dụ:

```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']
```

2. Sử dụng phương thức `splice()`: Phương thức `splice()` cho phép bạn thay đổi giá trị của một hoặc nhiều phần tử trong mảng. Ví dụ:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 10);
console.log(numbers); // Output: [1, 2, 10, 4, 5]
```

Trong ví dụ trên, `splice(2, 1, 10)` sẽ thay thế phần tử tại chỉ số 2 (giá trị 3) bằng giá trị mới là 10.

3. Sử dụng phương thức `map()`: Phương thức `map()` tạo ra một mảng mới với các giá trị đã được thay đổi dựa trên một hàm callback. Bạn có thể sử dụng `map()` để thay đổi giá trị của phần tử trong mảng. Ví dụ:

```javascript
const numbers = [1, 2, 3, 4, 5];
const updatedNumbers = numbers.map(num => num * 2);
console.log(updatedNumbers); // Output: [2, 4, 6, 8, 10]
```

Trong ví dụ trên, `map()` được sử dụng để nhân mỗi phần tử trong mảng `numbers` với 2 và tạo ra một mảng mới `updatedNumbers` chứa các giá trị mới.

Lưu ý rằng các phương thức `splice()` và `map()` không thay đổi trực tiếp mảng gốc, mà tạo ra một mảng mới hoặc thay đổi mảng theo yêu cầu.


### Xóa phần tử trong Array

Trong JavaScript, có một số cách để xóa phần tử khỏi mảng. Dưới đây là một số phương thức và phép toán thường được sử dụng:

1. Sử dụng phương thức `pop()`: Phương thức `pop()` xóa phần tử cuối cùng của mảng và trả về phần tử đã bị xóa. Ví dụ:

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedElement = numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
console.log(removedElement); // Output: 5
```

2. Sử dụng phương thức `shift()`: Phương thức `shift()` xóa phần tử đầu tiên của mảng và trả về phần tử đã bị xóa. Ví dụ:

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedElement = numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]
console.log(removedElement); // Output: 1
```

3. Sử dụng phương thức `splice()`: Phương thức `splice()` cho phép bạn xóa một hoặc nhiều phần tử từ mảng và trả về các phần tử đã bị xóa. Ví dụ:

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 2);
console.log(numbers); // Output: [1, 2, 5]
console.log(removedElements); // Output: [3, 4]
```

Trong ví dụ trên, `splice(2, 2)` sẽ xóa 2 phần tử từ chỉ số 2 trong mảng `numbers` và trả về một mảng chứa các phần tử đã bị xóa `[3, 4]`.

Lưu ý rằng cả `pop()`, `shift()` và `splice()` đều thay đổi trực tiếp mảng gốc.

Đây chỉ là một số phương thức và phép toán thường được sử dụng để xóa phần tử khỏi mảng trong JavaScript. Có nhiều cách khác nhau để thao tác với mảng, bạn có thể tìm hiểu thêm trong tài liệu chính thức của JavaScript.
## ⭐ 2. Loops - Vòng lặp

### 2.1 For loop

**Khái niệm**

Vòng lặp `for` là một cấu trúc điều khiển trong ngôn ngữ lập trình để lặp lại một khối mã nhiều lần. Nó cho phép thực hiện một tập hợp các câu lệnh lặp lại một số lần xác định hoặc lặp qua các phần tử trong một cấu trúc dữ liệu như mảng.

Cú pháp của vòng lặp `for` nhìn chung như sau:

```javascript
for (initialization; condition; iteration) {
  // Các câu lệnh được lặp lại
}
```

Giải thích từng phần của cú pháp:

- `initialization`: Đây là phần khởi tạo, nơi bạn khởi tạo các biến đếm và các giá trị ban đầu. Thường là một câu lệnh gán giá trị ban đầu cho biến đếm.
- `condition`: Điều kiện kiểm tra trước mỗi lần lặp. Nếu điều kiện này đúng, khối mã bên trong vòng lặp sẽ được thực thi. Nếu điều kiện sai, vòng lặp sẽ kết thúc.
- `iteration`: Câu lệnh được thực hiện sau mỗi lần lặp. Thường là một câu lệnh để tăng hoặc giảm giá trị của biến đếm.

Quá trình hoạt động của vòng lặp `for` như sau:

1. Bước khởi tạo: Phần khởi tạo được thực hiện một lần duy nhất khi vòng lặp bắt đầu. Nó được sử dụng để khởi tạo biến đếm và thiết lập các giá trị ban đầu.
1. Kiểm tra điều kiện: Sau mỗi lần lặp, điều kiện kiểm tra được kiểm tra. Nếu điều kiện là đúng, khối mã bên trong vòng lặp được thực thi. Nếu điều kiện là sai, vòng lặp kết thúc và quá trình tiếp tục với các câu lệnh sau vòng lặp.
1. Thực thi khối mã: Trong mỗi lần lặp, khối mã bên trong vòng lặp được thực thi.
1. Bước lặp: Sau khi thực thi khối mã, bước lặp được thực hiện. Thông thường, nó là một câu lệnh để tăng hoặc giảm giá trị của biến đếm. Sau đó, quá trình quay lại bước kiểm tra điều kiện.

Với vòng lặp `for`, bạn có thể kiểm soát rõ ràng số lần lặp và có thể truy cập vào các chỉ số hoặc phần tử trong một mảng một cách dễ dàng.

**Tại sao lại cần đến vòng lặp**

```js
const students = ["Alice", "Bob", "Carol", "Dave", "Eve"];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
```

Để in ra tên tất cả thành viên thì cần rất rất nhiều lệnh. Nếu mà danh sách đó có cả ngàn tên thì sao ?

Bằng cách sử dụng vòng lặp for, bạn có thể giảm bớt sự lặp lại và giải quyết tình huống này một cách đơn giản và linh hoạt hơn. Dưới đây là ví dụ sử dụng vòng lặp for để in ra tên của từng sinh viên trong mảng:

```js
const students = ["Alice", "Bob", "Carol", "Dave", "Eve"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
```

Mảng `students` có tăng bao nhiêu đi nữa thì vòng lặp vẫn không thay đổi.

Kết quả của ví dụ trên sẽ là in ra tên của từng sinh viên:

```bash
Alice
Bob
Carol
Dave
Eve
```

### 2.2 For in loop

Vòng lặp `for...in` là một cấu trúc điều khiển trong ngôn ngữ lập trình dùng để lặp qua các thuộc tính của một đối tượng. Nó cho phép bạn truy cập lần lượt vào từng thuộc tính của đối tượng và thực thi một khối mã tương ứng.

Thường dùng lặp qua một Object

Cú pháp của vòng lặp `for...in` nhìn chung như sau:

```javascript
for (variable in object) {
  // Các câu lệnh được lặp lại
}
```

Giải thích từng phần của cú pháp:

- `variable`: Đây là biến mà bạn sẽ sử dụng để lưu trữ tên của từng thuộc tính trong đối tượng. Trong mỗi lần lặp, giá trị của biến này sẽ thay đổi thành tên của thuộc tính hiện tại.
- `object`: Đây là đối tượng mà bạn muốn lặp qua các thuộc tính của nó.

Quá trình hoạt động của vòng lặp `for...in` như sau:

1. Mỗi thuộc tính của đối tượng được lặp qua một cách tuần tự.
1. Trong mỗi lần lặp, tên thuộc tính được gán cho biến `variable`.
1. Khối mã bên trong vòng lặp được thực thi.
1. Quá trình lặp tiếp tục cho đến khi tất cả các thuộc tính của đối tượng đã được lặp qua.

Dưới đây là một ví dụ để giải thích vòng lặp `for...in`:

```javascript
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

Trong ví dụ trên, chúng ta sử dụng vòng lặp `for...in` để lặp qua các thuộc tính của đối tượng `person`. Trong mỗi lần lặp, tên thuộc tính được gán cho biến `key`. Trong khối mã bên trong vòng lặp, chúng ta sử dụng `person[key]` để truy cập vào giá trị của thuộc tính hiện tại và in ra tên thuộc tính cùng với giá trị tương ứng.

Kết quả của ví dụ trên sẽ là:

```
name: John
age: 30
gender: male
```

Như vậy, vòng lặp `for...in` cho phép bạn lặp qua từng thuộc tính của một đối tượng và thực hiện các thao tác mong muốn trên từng thuộc tính đó.

### 2.3 For of loop

Vòng lặp `for...of` là một cấu trúc điều khiển trong ngôn ngữ lập trình dùng để lặp qua các phần tử của một đối tượng có khả năng lặp lại (iterable), chẳng hạn như mảng, chuỗi, hoặc đối tượng có giao diện người dùng (DOM).

Cú pháp của vòng lặp `for...of` nhìn chung như sau:

```javascript
for (variable of iterable) {
  // Các câu lệnh được lặp lại
}
```

Giải thích từng phần của cú pháp:

- `variable`: Đây là biến mà bạn sẽ sử dụng để lưu trữ giá trị của từng phần tử trong đối tượng có khả năng lặp lại.
- `iterable`: Đây là đối tượng có khả năng lặp lại (iterable) mà bạn muốn lặp qua các phần tử của nó.

Quá trình hoạt động của vòng lặp `for...of` như sau:

1. Vòng lặp sẽ lặp qua từng phần tử của đối tượng có khả năng lặp lại.
1. Trong mỗi lần lặp, giá trị của phần tử được gán cho biến `variable`.
1. Khối mã bên trong vòng lặp được thực thi.
1. Quá trình lặp tiếp tục cho đến khi tất cả các phần tử của đối tượng đã được lặp qua.

Dưới đây là một ví dụ để giải thích vòng lặp `for...of`:

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
```

Trong ví dụ trên, chúng ta sử dụng vòng lặp `for...of` để lặp qua các phần tử trong mảng `numbers`. Trong mỗi lần lặp, giá trị của phần tử được gán cho biến `number`. Trong khối mã bên trong vòng lặp, chúng ta sử dụng `console.log(number)` để in ra giá trị của phần tử hiện tại.

Kết quả của ví dụ trên sẽ là:

```
1
2
3
4
5
```

Như vậy, vòng lặp `for...of` cho phép bạn lặp qua từng phần tử của một đối tượng có khả năng lặp lại và thực hiện các thao tác mong muốn trên từng phần tử đó.

### 2.4 While loop

Vòng lặp `while` là một cấu trúc điều khiển trong ngôn ngữ lập trình dùng để lặp lại một khối mã cho đến khi một điều kiện được đưa ra trở thành sai (false). Cú pháp của vòng lặp `while` nhìn chung như sau:

```javascript
while (condition) {
  // Các câu lệnh được lặp lại
}
```

Giải thích từng phần của cú pháp:

- `condition`: Đây là một biểu thức hoặc một điều kiện logic. Các câu lệnh bên trong vòng lặp sẽ được lặp lại miễn là điều kiện này đúng (true).

Quá trình hoạt động của vòng lặp `while` như sau:

1. Đầu tiên, điều kiện được kiểm tra. Nếu điều kiện là đúng, các câu lệnh bên trong vòng lặp được thực thi.
1. Sau khi thực thi các câu lệnh bên trong vòng lặp, điều kiện lại được kiểm tra một lần nữa.
1. Nếu điều kiện vẫn là đúng, các câu lệnh bên trong vòng lặp lại được thực thi. Quá trình này lặp đi lặp lại cho đến khi điều kiện trở thành sai.
1. Khi điều kiện trở thành sai, vòng lặp dừng lại và quá trình tiếp tục với các câu lệnh nằm sau vòng lặp.

Dưới đây là một ví dụ để giải thích vòng lặp `while`:

```javascript
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

Trong ví dụ trên, chúng ta sử dụng vòng lặp `while` để in ra các số từ 0 đến 4. Ban đầu, biến `count` có giá trị là 0. Vòng lặp sẽ lặp lại miễn là `count` nhỏ hơn 5. Trong mỗi lần lặp, giá trị của `count` được in ra và sau đó tăng lên 1 (`count++`).

Kết quả của ví dụ trên sẽ là:

```
0
1
2
3
4
```

Vòng lặp `while` thích hợp khi bạn muốn lặp lại một khối mã mà số lần lặp không xác định trước và phụ thuộc vào một điều kiện. Bạn cần đảm bảo rằng điều kiện sẽ trở thành sai (false) tại một thời điểm nào đó để tránh vòng lặp vô tận.

### 2.5 Do While loop

Vòng lặp `do...while` là một cấu trúc điều khiển trong ngôn ngữ lập trình dùng để lặp lại một khối mã ít nhất một lần và sau đó tiếp tục lặp lại cho đến khi một điều kiện được đưa ra trở thành sai (false). Cú pháp của vòng lặp `do...while` nhìn chung như sau:

```javascript
do {
  // Các câu lệnh được lặp lại
} while (condition);
```

Giải thích từng phần của cú pháp:

- `condition`: Đây là một biểu thức hoặc một điều kiện logic. Các câu lệnh bên trong vòng lặp sẽ được lặp lại miễn là điều kiện này đúng (true).

Quá trình hoạt động của vòng lặp `do...while` như sau:

1. Đầu tiên, các câu lệnh bên trong vòng lặp được thực thi.
1. Sau khi thực thi các câu lệnh, điều kiện được kiểm tra. Nếu điều kiện là đúng, vòng lặp tiếp tục và các câu lệnh bên trong được thực thi lại. Quá trình này lặp đi lặp lại cho đến khi điều kiện trở thành sai.
1. Khi điều kiện trở thành sai, vòng lặp dừng lại và quá trình tiếp tục với các câu lệnh nằm sau vòng lặp.

Điểm khác biệt giữa vòng lặp `do...while` và vòng lặp `while` là vòng lặp `do...while` đảm bảo rằng khối mã bên trong được thực thi ít nhất một lần, ngay cả khi điều kiện ban đầu là sai.

Dưới đây là một ví dụ để giải thích vòng lặp `do...while`:

```javascript
let count = 0;

do {
  console.log(count);
  count++;
} while (count < 5);
```

Trong ví dụ trên, chúng ta sử dụng vòng lặp `do...while` để in ra các số từ 0 đến 4. Ban đầu, biến `count` có giá trị là 0. Khối mã bên trong vòng lặp được thực thi, sau đó `count` được tăng lên 1. Điều kiện `count < 5` được kiểm tra, và nếu nó đúng, vòng lặp tiếp tục và lặp lại quá trình trên. Quá trình này lặp đi lặp lại cho đến khi `count` đạt giá trị 5 và điều kiện trở thành sai.

Kết quả của ví dụ trên sẽ là:

```
0
1
2
3
4
```

Vòng lặp `do...while` thích hợp khi bạn muốn đảm bảo rằng một khối mã được thực thi ít nhất một lần, và sau đó lặp lại nếu điều kiện vẫn đúng.