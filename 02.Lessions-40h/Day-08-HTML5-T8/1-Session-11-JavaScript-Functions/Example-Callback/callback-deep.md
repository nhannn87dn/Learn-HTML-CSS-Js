# Callback là gì?

Trong ngữ cảnh của JavaScript, một callback là một hàm được truyền như một đối số cho một hàm khác và được gọi lại (execute) sau khi một tác vụ hoặc một sự kiện hoàn thành. Callbacks thường được sử dụng để xử lý bất đồng bộ (asynchronous) và các tác vụ không đồng bộ trong JavaScript.

Nói một cách đơn giản: Callback là một hàm sẽ được thực hiện sau khi một hàm khác đã thực hiện xong - vì thế nó có tên là callback.


Cụ thể hơn: Trong JavaScript, hàm là đối tượng. Do đó, các hàm có thể lấy các hàm làm đối số và có thể được trả về bởi các hàm khác. Các hàm thực hiện điều này được gọi là higher - order function (Hàm bậc cao hơn). Bất kỳ hàm nào được truyền dưới dạng đối số được gọi là hàm callback.


Hơi khó hiểu một chút nhỉ? :D


Ok, vậy hãy thử xem qua ví dụ về hàm callback nào.


## Tại sao chúng ta cần hàm Callback?

Chúng ta cần hàm callback vì một lý do rất quan trọng - JavaScript là ngôn ngữ hướng sự kiện.


Điều này có nghĩa là thay vì chờ phản hồi trước khi tiếp tục, JavaScript sẽ tiếp tục thực thi trong khi lắng nghe các sự kiện khác.


Hãy xem xét một ví dụ cơ bản:


```js
function first(){
    console.log("Một");
}
function second(){
    console.log("Hai");
}
first();
second();

```

Trình biên dịch đọc mã từ trên xuống dưới, từ trái qua phải.

Hàm viết trước thì được thực hiện trước và hàm viết sau thì được thực hiện sau.

Chương trình này sẽ ghi nhật ký sau vào console:

```bash
// Một
// Hai
```

Tất cả đều tốt.

Nhưng cái gì sẽ xảy ra nếu hàm first chứa một số loại code không thể thực thi ngay lập tức?


Ví dụ: Một API request mà chúng ta phải gửi yêu cầu sau đó chờ 1 khoảng thời gian để nhận phản hồi?


Để mô phỏng hành động này, chúng ta sẽ sử dụng setTimeout


Đây là một hàm JavaScript gọi một hàm sau một khoảng thời gian nhất định.


Chúng ta sẽ tạm hoãn hàm của mình trong 5000 mili giây để mô phỏng API request.


Code Javascript mới của chúng ta sẽ trông như thế này

```js
function first(){
    // Mô phỏng delay code
    setTimeout( function(){
        console.log("Một");
    }, 5000 );
}
function second(){
    console.log("Hai");
}
```


Bạn không cần phải hiểu cách hàm setTimeout() hoạt động ngay bây giờ.


Tất cả vấn đề là bạn thấy là chúng ta đã di chuyển console.log(1); vào bên trong hàm setTimeout().


Vậy thì, bây giờ chúng ta gọi hàm thì điều gì sẽ xảy ra?

```js
first();
second();

// Hai
// Một
```

Mặc dù chúng ta đã gọi hàm first() trước tiên, nhưng lại nhận được kết quả sau hàm second().


Nó không phải là JavaScript đã không thực hiện các hàm của chúng ta theo thứ tự mà chúng ta muốn, mà là JavaScript đã không đợi phản hồi từ hàm first() trước khi chuyển sang thực hiện second().



Vậy tại sao mình lại cho bạn thấy điều này?


Bởi vì bạn có thể chỉ cần gọi một hàm khác và hy vọng chúng thực hiện theo đúng thứ tự.


Callback là một cách để đảm bảo code nhất định không thực thi cho đến khi code khác thực hiện xong

## Thử tạo hàm Callback trong Javascript

OK, bây giờ hãy thử tạo một hàm callback trong JavaScript.


Hãy mở Visual Studio Code > Tạo một file callback.js và gõ đoạn code sau:

```js
function doHomework(subject) {
    console.log(`Bắt đầu làm bài tập ${subject}.`);
}
```

Ở trên, chúng ta đã tạo ra hàm doHomework(). Hàm này có một biến subject.


Tiếp đến, chúng ta gọi hàm:


```js
doHomework('Toán');
// Bắt đầu làm bài tập Toán.
```

Bây giờ, hãy thêm callback làm tham số thứ 2 của hàm doHomework().


Hàm callback sau đó được định nghĩa trong đối số thứ hai của lệnh gọi doHomework() của chúng ta.

```js
function doHomework(subject, callback) {
    console.log(`Bắt đầu làm bài tập ${subject}.`);
    callback();
}

doHomework('math', function() {
    console.log('Làm bài tập xong!');
});

```

Như bạn sẽ thấy, kết quả là:

```js
// Bắt đầu làm bài tập Toán
// Làm bài tập xong!
```

Nhưng hàm callback không phải lúc nào cũng được định nghĩa trong hàm gọi của chúng ta.


Chúng có thể được định nghĩa hàm callback ở nơi khác trong Javascript như thế này:


```js
function doHomework(subject, callback) {
    setTimeout( function(){
        console.log(`Bắt đầu làm bài tập ${subject}.`);
        callback();
    }, 5000);
    
}

function alertFinished(){
    console.log('Làm bài tập xong!');
}
doHomework('Toán', alertFinished);
 
```

Kết quả của ví dụ này hoàn toàn giống với ví dụ trước, nhưng thiết lập hơi khác một chút.

```js
// Bắt đầu làm bài tập Toán
// Làm bài tập xong!
```

Như bạn có thể thấy, chúng ta đã chuyển định nghĩa hàm alertFinished() làm đối số trong lệnh gọi hàm doHomework().


Đây là một phương thức rất phổ biến trong lập trình web / lập trình JavaScript. Nhưng cẩn thận callback hell bạn nhé