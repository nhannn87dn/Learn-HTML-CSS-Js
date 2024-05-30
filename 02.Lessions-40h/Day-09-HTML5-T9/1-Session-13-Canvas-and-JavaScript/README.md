# Canvas

Xem thêm tại: https://www.w3schools.com/html/html5_canvas.asp

## Giới thiệu

`<canvas>` là một phần tử HTML5 được sử dụng để vẽ đồ họa thông qua JavaScript. `Canvas` cung cấp một vùng vẽ động, trong đó bạn có thể vẽ các hình dạng, hình ảnh và thậm chí là tạo ra các trò chơi.

## Cấu trúc cơ bản

Để sử dụng `Canvas`, bạn cần hai phần: phần tử HTML `<canvas>` và mã JavaScript để vẽ trên đó.

**HTML:**

```html
<canvas id="myCanvas" width="500" height="500"></canvas>
```

**JavaScript:**

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
```

`ctx` là đối tượng ngữ cảnh đồ họa 2D mà chúng ta sẽ sử dụng để vẽ.

## Các phương thức và thuộc tính cơ bản của `Canvas`

Dưới đây là một số phương thức và thuộc tính cơ bản để vẽ trên `Canvas`:

- **Vẽ hình chữ nhật:**
  - `fillRect(x, y, width, height)`: Vẽ một hình chữ nhật màu.
  - `strokeRect(x, y, width, height)`: Vẽ một hình chữ nhật chỉ có viền.
  - `clearRect(x, y, width, height)`: Xóa một vùng hình chữ nhật.

- **Vẽ đường:**
  - `beginPath()`: Bắt đầu một đường mới.
  - `moveTo(x, y)`: Di chuyển bút vẽ đến vị trí (x, y).
  - `lineTo(x, y)`: Vẽ một đoạn thẳng đến vị trí (x, y).
  - `stroke()`: Vẽ các đường đã được định nghĩa.

- **Vẽ hình tròn:**
  - `arc(x, y, radius, startAngle, endAngle, anticlockwise)`: Vẽ một cung tròn hoặc hình tròn.

- **Đổ màu:**
  - `fillStyle`: Thiết lập màu sắc hoặc mẫu để đổ màu bên trong.
  - `strokeStyle`: Thiết lập màu sắc hoặc mẫu cho viền.

## Ví dụ minh họa

### Vẽ hình chữ nhật

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Vẽ hình chữ nhật màu
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100); // (x, y, width, height)

// Vẽ hình chữ nhật chỉ có viền
ctx.strokeStyle = 'red';
ctx.strokeRect(250, 50, 150, 100); // (x, y, width, height)
```

### Vẽ đường

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 200); // Bắt đầu từ (50, 200)
ctx.lineTo(200, 200); // Vẽ đến (200, 200)
ctx.lineTo(125, 300); // Vẽ đến (125, 300)
ctx.closePath(); // Đóng đường
ctx.stroke(); // Vẽ đường
```

### Vẽ hình tròn

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(300, 300, 75, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
ctx.fillStyle = 'green';
ctx.fill(); // Đổ màu bên trong hình tròn
ctx.stroke(); // Vẽ viền
```

## Vẽ hình ảnh

Bạn cũng có thể vẽ hình ảnh lên `Canvas`:

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let img = new Image();
img.onload = function() {
  ctx.drawImage(img, 100, 100, 200, 150); // (image, x, y, width, height)
};
img.src = 'path/to/your/image.jpg';
```

## Kết hợp các phương thức

Bạn có thể kết hợp nhiều phương thức để tạo ra các hình ảnh phức tạp hơn:

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Vẽ hình chữ nhật
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Vẽ hình tròn
ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
// Vẽ hình tròn
ctx.fillStyle = 'green';
ctx.fill(); // Đổ màu bên trong hình tròn
ctx.stroke(); // Vẽ viền hình tròn

// Vẽ đường thẳng
ctx.beginPath();
ctx.moveTo(300, 50); // Bắt đầu từ (300, 50)
ctx.lineTo(400, 150); // Vẽ đến (400, 150)
ctx.strokeStyle = 'purple';
ctx.lineWidth = 5; // Đặt độ dày của đường
ctx.stroke(); // Vẽ đường

// Vẽ một tam giác
ctx.beginPath();
ctx.moveTo(450, 300); // Đặt điểm bắt đầu tại (450, 300)
ctx.lineTo(500, 350); // Vẽ đường đến (500, 350)
ctx.lineTo(400, 350); // Vẽ đường đến (400, 350)
ctx.closePath(); // Đóng tam giác
ctx.fillStyle = 'orange';
ctx.fill(); // Đổ màu bên trong tam giác
ctx.stroke(); // Vẽ viền tam giác

// Vẽ một đường cong (Bezier Curve)
ctx.beginPath();
ctx.moveTo(50, 400); // Bắt đầu từ (50, 400)
ctx.bezierCurveTo(150, 350, 250, 450, 350, 400); // Vẽ đường cong Bezier
ctx.strokeStyle = 'black';
ctx.stroke(); // Vẽ đường cong

// Vẽ một đoạn văn bản
ctx.font = '30px Arial';
ctx.fillStyle = 'red';
ctx.fillText('Hello Canvas!', 50, 450); // Đặt văn bản tại (50, 450)
ctx.strokeText('Hello Canvas!', 50, 500); // Vẽ viền văn bản tại (50, 500)

```