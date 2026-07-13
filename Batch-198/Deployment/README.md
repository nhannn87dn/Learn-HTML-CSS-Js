# Deploy HTML Project

## Chuẩn bị Một repo để chứa mã nguồn

- Bước 1: Đăng ký tài khoản github
- Bước 2: Cài đặt git vào máy tính cá nhân
  - Kiểm tra Git đã cài chưa: nhấn Windown + R --> Mở Run --> cmd --> command line.
- Bước 3: Xác thực cấu hình

```bash
# Cấu hình user name 
git config --global user.name "username"
```

Thay đổi `username` thành username của bạn khi đăng ký tài khoản ở bước 1.

```bash
# Cấu hình email
git config --global user.email "example@gmail.com"
```

Thay đổi `example@gmail.com` thành email của bạn khi đăng ký tài khoản ở bước 1.

- Bước 4: Init Project

```bash
git init
```

Lệnh này tạo một repo local ở máy cá nhân

- Bước 5: Code

Code project như bình thường

- Bước 6: Đồng bộ code giữa local và remote github

**6.1 Bạn cần tạo một remote trước**

 và kết nối local và remote theo lệnh sau:

 ```bash
git branch -M main
git remote add origin https://github.com/nhannn87dn/fgfdgfgfg.git
 ```

 Thay thế `https://github.com/nhannn87dn/fgfdgfgfg.git` thành link remote của bạn.

 **6.2 Đồng bộ code local lên remote**

 ```bash
git push -u origin main
 ```

## Deploy lên github page

```
Bước 12. Bật GitHub Pages

Vào repository

Settings
↓
Pages
↓
Source
Chọn
Deploy from a branch
↓
Branch
main

Folder
/(root)

↓
Save

Bước 13. Đợi Deploy

Khoảng

30 giây

đến

2 phút

GitHub sẽ build website.
```


## Chi tiết hướng dẫn

Xem link: https://chatgpt.com/s/t_6a5492d6af508191bb330783ca07c5f9