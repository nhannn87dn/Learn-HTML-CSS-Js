# IndexedDB

IndexedDB là một cơ sở dữ liệu trình duyệt web được hỗ trợ bởi các trình duyệt hiện đại như Chrome, Firefox, và Edge. IndexedDB cung cấp một cơ chế lưu trữ dữ liệu phía máy khách (client-side) cho ứng dụng web, cho phép bạn lưu trữ và truy xuất dữ liệu dễ dàng mà không cần phụ thuộc vào kết nối mạng.

IndexedDB API cung cấp một tập hợp các phương thức và sự kiện để tạo, mở, xóa và truy vấn cơ sở dữ liệu. Dữ liệu được lưu trữ dưới dạng key-value pairs (cặp khóa-giá trị), tương tự như một cấu trúc dữ liệu từ điển. Mỗi giá trị được lưu trữ có một khóa duy nhất để xác định và truy xuất nhanh chóng.

IndexedDB hỗ trợ các hoạt động không đồng bộ, cho phép thực hiện các tác vụ lưu trữ và truy xuất dữ liệu mà không làm đứt giao diện người dùng. Điều này làm cho IndexedDB trở thành một giải pháp lưu trữ dữ liệu hiệu quả cho các ứng dụng web đòi hỏi truy xuất dữ liệu nhanh và hoạt động offline.

IndexedDB API cung cấp các đối tượng và phương thức chính sau:

1. **IndexedDB**: Đối tượng chính đại diện cho cơ sở dữ liệu. Bạn có thể sử dụng phương thức `open()` để mở hoặc tạo một cơ sở dữ liệu mới.

1. **Transaction**: Đối tượng đại diện cho một giao dịch (transaction) để thực hiện các hoạt động đọc và ghi dữ liệu. Bạn có thể sử dụng phương thức `objectStore()` để truy cập đến các object store (bộ lưu trữ đối tượng) trong giao dịch.

1. **Object Store**: Đối tượng lưu trữ các đối tượng dữ liệu trong cơ sở dữ liệu. Bạn có thể sử dụng phương thức `add()`, `put()`, `get()`, `delete()` và `getAll()` để thêm, lấy, cập nhật và xóa dữ liệu trong object store.

1. **Index**: Đối tượng cho phép bạn tạo các chỉ mục cho các trường dữ liệu cụ thể trong object store. Chỉ mục giúp tăng tốc độ truy vấn dữ liệu.

1. **Cursor**: Đối tượng cho phép bạn lặp qua các bản ghi trong object store. Bạn có thể sử dụng cursor để duyệt qua dữ liệu và thực hiện các thao tác trên từng bản ghi.

Với IndexedDB API, bạn có thể lưu trữ và truy xuất dữ liệu phức tạp trong trình duyệt web và xây dựng các ứng dụng web mạnh mẽ, có khả năng hoạt động offline và truy xuất dữ liệu nhanh chóng. Tuy nhiên, việc sử dụng IndexedDB yêu cầu một số kiến thức về cách làm việc với cơ sở dữ liệu không đồng bộ và có cú pháp phức tạp hơn so với việc sử dụng cơ sở dữ liệu truyền thống trong JavaScript.


Dưới đây là một ví dụ đơn giản về cách sử dụng IndexedDB API trong một ứng dụng web để lưu trữ và truy vấn danh sách người dùng:

```javascript
// Mở hoặc tạo cơ sở dữ liệu IndexedDB
const request = indexedDB.open('userDB', 1);

// Xử lý sự kiện khi cơ sở dữ liệu được mở hoặc tạo thành công
request.onsuccess = function(event) {
  const db = event.target.result;
  
  // Thêm dữ liệu vào cơ sở dữ liệu
  function addUser(user) {
    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');
    const request = objectStore.add(user);
    
    request.onsuccess = function(event) {
      console.log('User added to the database');
    };
    
    transaction.oncomplete = function(event) {
      console.log('Transaction completed');
    };
  }
  
  // Lấy danh sách người dùng từ cơ sở dữ liệu
  function getUsers() {
    const transaction = db.transaction(['users'], 'readonly');
    const objectStore = transaction.objectStore('users');
    const request = objectStore.getAll();
    
    request.onsuccess = function(event) {
      const users = event.target.result;
      console.log('Users:', users);
    };
    
    transaction.oncomplete = function(event) {
      console.log('Transaction completed');
    };
  }
  
  // Thêm người dùng vào cơ sở dữ liệu
  const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
  addUser(user);
  
  // Lấy danh sách người dùng từ cơ sở dữ liệu
  getUsers();
};

// Xử lý sự kiện khi cơ sở dữ liệu cần được tạo mới hoặc nâng cấp
request.onupgradeneeded = function(event) {
  const db = event.target.result;
  
  // Tạo object store để lưu trữ người dùng
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', { keyPath: 'id' });
  }
};
```

Trong ví dụ trên:

1. Đầu tiên, chúng ta mở hoặc tạo cơ sở dữ liệu IndexedDB bằng cách sử dụng phương thức `indexedDB.open()`. Nếu cơ sở dữ liệu đã tồn tại, nó sẽ được mở; nếu không, nó sẽ được tạo mới.

1. Trong hàm xử lý sự kiện `onsuccess`, chúng ta lấy đối tượng cơ sở dữ liệu từ `event.target.result`.

1. Sau đó, chúng ta định nghĩa hai hàm: `addUser()` để thêm người dùng vào cơ sở dữ liệu và `getUsers()` để lấy danh sách người dùng từ cơ sở dữ liệu.

1. Trong `addUser()`, chúng ta tạo một giao dịch (`transaction`) với chế độ đọc và ghi (`readwrite`). Sau đó, chúng ta truy cập vào object store `users` và sử dụng phương thức `add()` để thêm người dùng vào cơ sở dữ liệu.

1. Trong `getUsers()`, chúng ta tạo một giao dịch với chế độ chỉ đọc (`readonly`). Chúng ta truy cập vào object store `users` và sử dụng phương thức `getAll()` để lấy tất cả người dùng từ cơ sở dữ liệu.

1. Cuối cùng, chúng ta gọi hàm `addUser()` để thêm một người dùng vào cơ sở dữ liệu và gọi hàm `getUsers()` để lấy danh sách người dùng từ cơ sở dữ liệu.

Trong ví dụ trên, chúng ta tạo một cơ sở dữ liệu IndexedDB có tên là "userDB" và một object store có tên là "users" để lưu trữ các đối tượng người dùng. Chúng ta sử dụng các phươngTrong ví dụ trên, chúng ta sử dụng IndexedDB API để tạo một cơ sở dữ liệu có tên "userDB" và một object store có tên "users" để lưu trữ các đối tượng người dùng. Chúng ta sử dụng các phương thức `add()` và `getAll()` để thêm và lấy dữ liệu từ cơ sở dữ liệu.

Lưu ý rằng IndexedDB là một API mạnh mẽ và cú pháp phức tạp hơn so với ví dụ trên. Để sử dụng IndexedDB API một cách hiệu quả, bạn cần tìm hiểu thêm về các phương thức và sự kiện khác nhau mà nó cung cấp.