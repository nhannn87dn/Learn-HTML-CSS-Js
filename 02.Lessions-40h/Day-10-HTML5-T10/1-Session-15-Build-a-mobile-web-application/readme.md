# Building a Mobile Web Application

## Viewport

Viewport trong CSS là một thuật ngữ để chỉ kích thước và vị trí hiển thị của nội dung trên trình duyệt. Nó định nghĩa khu vực hiển thị mà các phần tử HTML có thể nhìn thấy và tương tác được trên màn hình.

Viewport trong CSS được chia thành hai loại chính:

1. **Viewport Window**: Đây là kích thước của cửa sổ trình duyệt. Nó thay đổi khi người dùng thay đổi kích thước cửa sổ trình duyệt.

1. **Layout Viewport**: Đây là kích thước được sử dụng để hiển thị nội dung trên màn hình và có thể khác với kích thước cửa sổ trình duyệt. Layout viewport có thể lớn hơn hoặc nhỏ hơn viewport window tùy thuộc vào việc phóng to hoặc thu nhỏ trang web.

Viewport trong CSS có vai trò quan trọng trong việc đảm bảo trang web hiển thị một cách phù hợp trên các thiết bị và kích thước màn hình khác nhau. Quan tâm đến viewport cũng giúp tạo trải nghiệm tốt hơn cho người dùng trên các thiết bị di động.

Để kiểm soát và điều chỉnh viewport trong CSS, chúng ta có thể sử dụng các thuộc tính và khai báo sau:

1. **width**: Định nghĩa chiều rộng của viewport. Ví dụ: `width: 100%` sẽ làm cho viewport bằng kích thước của cửa sổ trình duyệt.

1. **initial-scale**: Xác định tỷ lệ ban đầu của viewport. Ví dụ: `initial-scale=1.0` sẽ giữ cho tỷ lệ ban đầu không thay đổi.

1. **minimum-scale** và **maximum-scale**: Xác định giá trị tối thiểu và tối đa cho tỷ lệ của viewport. Ví dụ: `minimum-scale=0.5` sẽ cho phép người dùng thu nhỏ viewport tối đa xuống 50% của kích thước ban đầu.

1. **user-scalable**: Xác định xem người dùng có thể thu phóng (zoom) trên viewport hay không. Ví dụ: `user-scalable=no` sẽ vô hiệu hóa khả năng thu phóng của người dùng.

Viewport trong CSS cung cấp các công cụ và khả năng linh hoạt để tùy chỉnh hiển thị nội dung trên các thiết bị và kích thước màn hình khác nhau, giúp đảm bảo trang web của bạn đáp ứng tốt và hấp dẫn trên mọi nền tảng.

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Trong ví dụ trên, giá trị "width=device-width" sẽ làm cho viewport có cùng chiều rộng với kích thước của thiết bị người dùng. Điều này cho phép trang web hiển thị đúng kích thước trên mọi thiết bị.

Giá trị "initial-scale=1.0" sẽ đặt tỷ lệ phóng ban đầu của viewport là 1.0, tức là không có phóng to hoặc thu nhỏ ban đầu.


## Media Queries


Media Queries trong CSS là một tính năng cho phép bạn áp dụng các kiểu CSS khác nhau dựa trên các điều kiện như kích thước màn hình, thiết bị, hoặc hướng dọc/ngang. Điều này cho phép bạn tạo ra các kiểu CSS tùy chỉnh cho các thiết bị và kích thước màn hình khác nhau, từ đó điều chỉnh cách hiển thị và bố cục của trang web.

Media Queries được sử dụng trong CSS thông qua cú pháp sau:

```css
@media media-type and (media-feature) {
  /* CSS rules */
}
```

Trong đó:

- **media-type**: Định nghĩa loại phương tiện mà media query áp dụng cho. Phổ biến nhất là "screen" (màn hình), nhưng cũng có thể là "print" (in ấn), "speech" (giọng nói) và nhiều loại phương tiện khác.

- **media-feature**: Định nghĩa các điều kiện để áp dụng media query. Có nhiều media feature khác nhau, như kích thước màn hình, độ phân giải, hướng dọc/ngang, tỷ lệ khung hình, v.v.

Dưới đây là một số ví dụ về sử dụng Media Queries:

1. **Áp dụng kiểu CSS cho màn hình có độ rộng nhỏ hơn hoặc bằng 768px**:

```css
@media screen and (max-width: 768px) {
  /* CSS rules áp dụng cho màn hình nhỏ hơn hoặc bằng 768px */
}
```

2. **Áp dụng kiểu CSS cho màn hình có độ phân giải retina (độ phân giải gấp đôi)**:

```css
@media only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and (min--moz-device-pixel-ratio: 2),
       only screen and (-o-min-device-pixel-ratio: 2/1),
       only screen and (min-device-pixel-ratio: 2),
       only screen and (min-resolution: 192dpi),
       only screen and (min-resolution: 2dppx) {
  /* CSS rules áp dụng cho các màn hình có độ phân giải retina */
}
```

3. **Áp dụng kiểu CSS khi màn hình có hướng dọc**:

```css
@media screen and (orientation: portrait) {
  /* CSS rules áp dụng khi màn hình có hướng dọc */
}
```

Với Media Queries, bạn có thể tạo ra nhiều điều kiện và áp dụng các kiểu CSS tùy chỉnh cho từng điều kiện đó. Điều này cho phép bạn tạo ra trang web responsive, thích ứng với các thiết bị và kích thước màn hình khác nhau.

