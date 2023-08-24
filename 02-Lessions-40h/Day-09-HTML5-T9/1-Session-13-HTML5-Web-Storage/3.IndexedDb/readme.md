# Cú pháp cơ bản

## 1. Mở kết nối

```js
//dbName là tên của CSDL
var request = window.indexedDB.open(dbName, 1)
var db = null;
```

Lần đầu kết nối chúng ta phải init objectStore cho DB. Ví dụ:

```js
//collectionName Tên của Table hay collection
request.onupgradeneeded = (event) => {
    db = event.target.result
    db.createObjectStore(collectionName, {
        // Giá trị cột key tự động tăng
        autoIncrement: true
    })
}
```

## 2. Thêm dữ liệu

Các câu lệnh CURD ta đều phải thực hiện qua transaction. Default mode là readonly. Muốn sửa xóa thì ta phải dùng readwrite

```js
db.transaction(collection, "readwrite")
.objectStore(collectionName)
.add(value)
```

## 3. Đọc dữ liệu

```js
var request = db.transaction(collectionName).objectStore(collectionName).get(key)

request.onsuccess = (event) => {
    console.log(`Value is: ${event.target.result}` )
}
```

## 4. Sửa dữ liệu

```js
var objectStore = this.db.transaction(collectionName, 'readwrite').objectStore(collectionName)
var request = objectStore.get(key)

request.onsuccess = (event) => {
    var data = event.target.result
    // Cập nhật giá trị mới
    data.someAttr = true
    // Lưu vào DB
    objectStore.put(data, key)
 }
```

## 5. Xóa dữ liệu

```js
 db.transaction(collectionName, "readwrite").objectStore(collectionName).delete(key)
```