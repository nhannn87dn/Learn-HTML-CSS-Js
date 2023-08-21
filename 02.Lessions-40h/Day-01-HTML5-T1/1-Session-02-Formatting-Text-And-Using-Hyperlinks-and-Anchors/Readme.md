# ⭐Định dạng văn bản sử dụng các Tag đơn giản


## ✅ Heading là gì

Thẻ Heading hay còn gọi là các thẻ H1, H2, H3, H4, H5, H6. Đây là thứ tự ưu tiên của các chuyên mục trong bài viết theo mức độ giảm dần từ H1 -> H6.

Thông thường có 3 thẻ được sử dụng nhiều nhất trong việc tối ưu website đó là H1, H2, H3. Các heading được dùng để nhấn mạnh nội dung của chính chủ đề đang được nói đến.

- Thẻ Heading H1:  Nội dung chính mà bạn muốn nói đến, thông thường người ta sẽ đặt từ khóa chính vào trong thẻ này nhằm nhấn mạnh nội dung cần muốn nói đến là gì. Bạn nên đặt 1 thẻ H1 cho một page thì tốt hơn và nên đặt H1 chính là tiêu đề bài viết là hợp lý nhất.

- Thẻ Heading H2: Mô tả ngắn gọn cho nội dung chính bổ trợ cho thẻ H1. Bạn có thể sử dụng nhiều hơn thẻ H1 cho từng trường hợp . Nhưng thường thì bạn nên sử dụng từ 3- 5 thẻ H2 là hợp lý nhất .

- Thẻ Heading H3: Thẻ này được sử dụng để mô tả chi tiết cho từng ý trong bài được cụ thể hơn. Bạn nên kết hợp 3 thẻ này cho Website của bạn sẽ đạt hiệu quả cao hơn.

- Thẻ Heading H4: Với thẻ này thì thường được sử dụng mô tả cho những sản phẩm hoặc dịch vụ ít liên quan đến những cái chính.

Cách sử dụng thẻ Heading

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## ✅ Định dạng text với các thẻ cơ bản


- Thẻ `<b>`: Bôi đậm | Cách sử dụng:  `<b>I am Bold</b>`
- Thẻ `<strong>`: nhân mạnh, bôi đậm  | Cách sử dụng:  `<strong>I am Strong</strong>`
- Thẻ `<del>`: gạch ngang (xóa) | Cách sử dụng:  `<del>I am Del</del>`

- Thẻ `<u>`: gạch chân | Cách sử dụng:  `<u>I am underline</u>`

- Thẻ `<i>`: in nghiêng | Cách sử dụng:  `<i>I am Roma</i>`

- Thẻ `<small>`: font size chữ nhỏ hơn | Cách sử dụng:  `<small>I am small</small>`



## ✅ Explain monospaced font, preformatted text, and block quotation

- code: <https://www.w3schools.com/tags/tag_code.asp>

- pre: <https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_pre>

- blockquote: <https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_blockquote_test>



## ✅ Danh sách và các kiểu danh sách

Danh sách lợp học, danh sánh môn học ==> mang tính liệt kê ra từng dòng. Có đánh số thứ tự hoặc không.

Ví dụ:

1. Toán
2. Lý
3. Hóa

Thì trong Html được thể hiện với 2 thẻ ul, ol.

- Với thẻ `ol`
```html
<ol>
<li>Toán</li>
<li>Lý</li>
<li>Hóa</li>
</ol>

Cho ra kết quả:

1. Toán
2. Lý
3. Hóa
```
- Với thẻ `ul`
```html
<ul>
<li>Toán</li>
<li>Lý</li>
<li>Hóa</li>
</ul>
Cho ra kết quả:
. Toán
. Lý
. Hóa

```
Có rất nhiều kiểu ký tự đầu dòng khác nhau, gọi là **style list**

Định dạng bằng thuộc tính css `list-style-type`
```html
<ul style="list-style-type: lower-alpha">
<li>Toán</li>
<li>Lý</li>
<li>Hóa</li>
</ul>

```

Danh sách các kiểu style xem link: <https://www.w3schools.com/cssref/pr_list-style-type.php>


## ✅ Background color and image

**Tô màu nền cho một element**

```html
<!-- hex color name -->
<h1 style="background-color: red">Heading</h1>
<!-- hex --> 
<div style="background-color: #f60">

<!-- rgb --> 
<div style="background-color: rgb(0,0,0)">
```
Xem thêm về Gradient CSS

Builder Online: <https://cssgenerator.org/gradient-css-generator.html>

**Tô màu văn bản text**

```html
<h1 style="color: red">Heading</h1>
```
Các kiểu giá trị màu:

- Color name: red, yellow, blue
- Hex: #fff, #000, #f60
- RGB: Black = (0,0,0)


Chi tiết về màu xem link: <https://www.w3schools.com/html/html_colors.asp>

***

## ⭐Creating Hyperlinks and Anchors

Tạo liên kết và điểm neo

1. Cú pháp:

```html
<!-- 
    url: là liên kết đích
    link text: là text hiển thị liên kết
-->
<a href="url">link text</a>
```

2. Liên kết sử sụng `target`

```html
<!-- _blank: mở link ở tab mới -->
<a target="_blank" href="url">link text</a>

<!-- _seft: mặc định mở link ở tab hiện tại -->
<a target="_seft" href="url">link text</a>

```

3. Liên kết tuyệt đối

Ví dụ trong có một folder dự án như sau

```html
root/
├─ files/
│  ├─ upload/
│  │  ├─ favicon.ico
│  │  ├─ doc.pdf
├─ img/
│  ├─ image-1.png
│  ├─ image-2.jpg
├─ download.html
├─ contact-us.html
├─ index.html

```
Bạn đang có một domain trỏ đến thư mục root. Khi đó khi đó một URL sẽ bắt đầu bằng `https://domain.com`



Ở trang index.html bạn có một liên kết

```html
 <p>Lorem example links <a href="https://domain.com/contact-us.html">Contact page</a></p>
```

==> **Đường dẫn tuyệt đối** (là một chuỗi đầy đủ bao gồm http://, tên miền của trang web, đường dẫn đến tập tin)

4. Liên kết tương đối


Ở trang index.html bạn có một liên kết

```html
 <p>Lorem example links <a href="download.html">download page</a></p>
```

==> **Liên kết tương đối** (là một phần nhỏ của đường dẫn tuyệt đối, thông thường đường dẫn tương đối là phần đường dẫn đến tập tin)

4. Các kiểu mở rộng của liên kết

- Liên kết gửi mail
- Liên kết gửi tin nhắn skype
- Liên kết gửi tin Zalo
- Liên kết gọi điện thoại

Ví dụ

```html
    <a href="tel:19008198">Call to 19008198</a>
    <a href="Files/File.rar">Download</a>
    <hr />
    <a href="skype:thanhtungo?chat">Start skype chat</a> ?
    <hr />
    <a href="skype:thanhtungo?call">Start skype call</a> ?
    <hr />
    <a href="https://www.messenger.com/t/ngothanhtung.it"> CHAT WITH TUNG</a>
```