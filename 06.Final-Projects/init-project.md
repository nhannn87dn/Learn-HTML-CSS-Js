# Thiết lập một dự án HTML từ con số 0

## Step 1 - Phân tích dự án

Dựa trên bản vẻ Mockup (bản vẻ khớp với thực tế nhất) cho trước

- Bố cục Layout
- Màu sắc chủ đạo, màu sắc tại mỗi vị trí trên dự án
- Font chữ, kích thước chữ
- iCon, Logo
- Thông tin profile bắt buộc như tên đơn vị, địa chỉ, hotline, email, social links
- Công nghệ dự kiến sử dụng

## Step 2 - Cấu trúc dự án HTML

Cấu trúc cơ bản một dự án HTML có sử dụng js, css, và hình ảnh

```html
root/
├─ js/
│  ├─ main.js
├─ images/
│  ├─ image-1.png
│  ├─ image-2.jpg
├─ css/
│  ├─ global.css
│  ├─ index.css
│
├─ download.html
├─ contact-us.html
├─ index.html

```
Nếu sử dụng thêm các thư viện bổ trợ khác như Font Awesome, Owl Carousel thì đặt thư viện đó vào folder tên là plugins


## Step 3 - Cấu hình StyleSheet

Tùy thuộc vào công nghệ áp dụng mà bạn định hướng làm StyleSheet cho dự án.

> Hướng dấn sau đây theo hướng 100% CSS thuần

1. Reset CSS mặc định của trình duyệt: Dùng Normalize.css hoặc tự code

2. Cấu hình CSS dùng chung cho toàn bộ dự án

Toàn bộ CSS dùng chung cho dự án đặt vào một file tên là **css/global.css**

- CSS Body: Font chung, size chữ chung, line-height chung...
- CSS phần header, footer, container, button, input...


3. CSS dùng cho trang nào thì tạo riêng một file CSS cho trang đó ví dụ: **css/index.css**

4. Responsive StyleSheet có thể làm theo 2 hướng

- Đưa luôn vào từng file css riêng như đã chia
- Hoặc tạo thêm một file **css/responsive.css** rồi đưa tất cả các phần mục đích để làm responsive cho toàn bộ dự án vào. Nhúng vào head để ở cuối cùng.