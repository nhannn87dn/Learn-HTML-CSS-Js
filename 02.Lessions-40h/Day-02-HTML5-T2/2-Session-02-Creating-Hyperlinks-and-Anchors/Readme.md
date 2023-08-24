# ⭐Creating Hyperlinks and Anchors

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