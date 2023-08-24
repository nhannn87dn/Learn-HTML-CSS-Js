# Promise

Trong JavaScript, Promise là một cơ chế xử lý bất đồng bộ (asynchronous) để điều khiển luồng thực thi và xử lý kết quả của các tác vụ không đồng bộ. Promise đại diện cho một giá trị chưa được xác định trong tương lai và cho phép bạn thực hiện các xử lý tiếp theo sau khi tác vụ không đồng bộ hoàn thành thành công hoặc thất bại.

Giải thích cách sử dụng Promise:

1. Tạo một Promise: Để tạo một Promise, bạn sử dụng từ khóa `new Promise()` và truyền một hàm khởi tạo như tham số. Hàm khởi tạo này nhận hai tham số là `resolve` và `reject`, được sử dụng để xác định kết quả của Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Thực hiện các công việc không đồng bộ
  // Nếu thành công, gọi resolve(value)
  // Nếu thất bại, gọi reject(error)
});
```

2. Xử lý kết quả của Promise: Bạn có thể sử dụng các phương thức `.then()` và `.catch()` để xử lý kết quả của Promise.

- Phương thức `.then()` được sử dụng để đăng ký một hàm callback để xử lý kết quả thành công của Promise. Đối số của hàm callback là giá trị được trả về từ `resolve()`.

```javascript
myPromise.then((value) => {
  // Xử lý giá trị thành công
});
```

- Phương thức `.catch()` được sử dụng để đăng ký một hàm callback để xử lý lỗi hoặc thất bại của Promise. Đối số của hàm callback là giá trị được truyền từ `reject()`.

```javascript
myPromise.catch((error) => {
  // Xử lý lỗi hoặc thất bại
});
```

3. Trạng thái của Promise: Promise có ba trạng thái: "pending" (đang chờ), "fulfilled" (hoàn thành) và "rejected" (bị từ chối). Khi một Promise được tạo, nó bắt đầu ở trạng thái "pending". Khi xử lý thành công, Promise chuyển sang trạng thái "fulfilled" và gọi hàm callback được đăng ký bằng `.then()`. Trong trường hợp xảy ra lỗi hoặc không thành công, Promise chuyển sang trạng thái "rejected" và gọi hàm callback được đăng ký bằng `.catch()`.


Trước tiên ta di tìm hiểu VÌ SAO LẠI CẦN ĐẾN Promises thông qua một ví dụ:

```js
//Mô phỏng trả về một mảng users từ Database
function getUsers() {
  let users = [];
  //Sử dụng setTimeout để Delay 3 giây
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 3000);
  return users;
}
// Định nghĩa hàm Tìm user có tên john
function findUser(username) {
  const users = getUsers(); 
  /* dựa trên kết quả lấy được, đi tìm user có tên */
  const user = users.find((user) => user.username === username);
  return user;
}
//Gọi hàm 
console.log(findUser('john'));

//Kết quả
undefined

```

Giải thích:

- Bản chất các tiến trình của Javascript là đồng bộ
- Tại hàm findUser, lấy mảng users và tìm user xảy ra đồng thời. Chứ nó không đợi tìm được users rồi mới đi tìm kiếm người tên john
- Chính vì vậy kết quả là undefined


Khắc phục bằng cách sử dụng Promise

```js

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
      resolve(users); // Trả về mảng users
    }, 3000);
  });
}

```


Promise có các phương thức để xử lý kết quả khi nó được giải quyết hoặc từ chối. Các phương thức quan trọng nhất là:

- .then(): Được sử dụng để xử lý kết quả thành công của một Promise.
- .catch(): Được sử dụng để xử lý lỗi hoặc trạng thái từ chối của một Promise.
- .finally(): Được sử dụng để thực hiện các công việc sau khi một Promise đã hoàn thành bất kể kết quả là thành công hay thất bại.

```js

getUsers
.then((value) => {
    console.log("Success:", value);
})
.catch((error) => {
    console.log("Error:", error);
})
.finally(() => {
    console.log("finally Done !");
})
;

```


Dưới đây là ví dụ đã được chuyển thành Promise:


```js

function findUser(username) {
  return getUsers()
    .then((users) => {
      const user = users.find((user) => user.username === username);
      return user;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

findUser('john')
.then((user) => {
    console.log(user);
})
.catch((error) => {
    console.error('Error:', error);
});
//Kết quả
{ username: 'john', email: 'john@test.com' }
```


Trong đoạn mã trên:

1. Hàm getUsers() trả về một Promise và sử dụng resolve(users) để trả về mảng users sau khi tác vụ không đồng bộ hoàn thành.

2. Trong hàm findUser(username), chúng ta gọi getUsers() và sử dụng .then() để xử lý kết quả trả về từ Promise. Trong hàm callback của .then(), chúng ta tìm user có tên tương ứng và trả về user đó.

3. Cuối cùng, chúng ta gọi hàm findUser('john') và sử dụng .then() để xử lý user được trả về từ Promise. Nếu có lỗi xảy ra, chúng ta sử dụng .catch() để xử lý và hiển thị thông báo lỗi.

Với việc sử dụng Promise, chúng ta có thể xử lý các tác vụ không đồng bộ một cách tuần tự và dễ đọc hơn bằng cách sử dụng .then() và .catch() để xử lý kết quả hoặc lỗi.