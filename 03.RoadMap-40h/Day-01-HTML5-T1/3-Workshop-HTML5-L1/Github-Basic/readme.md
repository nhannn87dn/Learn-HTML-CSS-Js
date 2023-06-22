# Cách sử dụng Git cơ bản

## I. Giới thiệu
- Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) được sử dụng rộng rãi trong quản lý mã nguồn của dự án phần mềm.
- Git cho phép nhiều người làm việc trên cùng một dự án mà không gây xung đột và dễ dàng hợp nhất (merge) các thay đổi.
- Git lưu trữ dữ liệu dự án trong các repository, mỗi người có thể sao chép (clone) một repository và làm việc độc lập.

## II. Cài đặt Git

Để biết máy mình cài Git chưa

Nhập lệnh sau vào cửa sổ terminal hoặc command line

```bash
git --version
```

Nếu thấy có nội dùng: git version 2.39.2.windows.1 thì thành công

Nếu chưa thì cài đặt như sau:

- Truy cập trang chủ Git (https://git-scm.com/download) và tải xuống phiên bản phù hợp với hệ điều hành của bạn.
- Cài đặt Git theo hướng dẫn trên trang web.


Đối với MacOs: nếu chưa cài thì có thể cài bằng xCode hoặc brew

```bash
brew install git
```

Nếu chưa cào brew thì cài bằng cách dán đoạn sau vào terminal

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


## II. Cấu hình Git 

Sau khi cài xong git bạn cấu hình.

Trước tiên Truy cập trang GitHub (https://github.com) tạo một tài khoản sau đó mở Terminal hoặc Command Prompt

```bash
git config --global user.name "User Name"
git config --global user.email "username@gmail.com"
```

- Thay Username thành tên các bạn
- Thay username@gmail.com thành email mà bạn đã đăng ký tài khoản github

## III. Tạo repository
1. Tạo repository trên máy tính của bạn:
   - Mở Terminal hoặc Command Prompt.
   - Di chuyển đến thư mục dự án của bạn bằng lệnh `cd <đường_dẫn_đến_thư_mục>`.
   - Gõ lệnh `git init` để khởi tạo một repository Git mới.

2. Tạo repository trên GitHub (hoặc dịch vụ tương tự):
   - Truy cập trang GitHub (https://github.com) và đăng nhập vào tài khoản của bạn.
   - Click vào nút "New repository".
   - Đặt tên cho repository, chọn các cài đặt khác (public/private) và nhấp vào nút "Create repository".

### IV. Các lệnh cơ bản của Git
1. `git add <file>`: Thêm file vào staging area để chuẩn bị commit.
2. `git commit -m "<message>"`: Tạo một commit với message mô tả thay đổi đã thực hiện.
3. `git push`: Đẩy (push) các commit lên repository từ máy cục bộ lên repository trên máy chủ từ xa (ví dụ: GitHub).
4. `git pull`: Lấy (pull) các commit mới nhất từ repository trên máy chủ từ xa về máy cục bộ.
5. `git clone <url của repository>`: Sao chép (clone) một repository từ máy chủ từ xa về máy cục bộ.
6. `git status`: Hiển thị trạng thái hiện tại của repository.
7. `git log`: Hiển thị danh sách các commit đã thực hiện.

## V. Các phương thức làm việc với nhánh (branching)
1. `git branch`: Liệt kê các nhánh hiện có trong repository.
2. `git branch <branch_name>`: Tạo một nhánh mới với tên là `<branch_name>`.
3. `git checkout <branch_name>`: Chuyển đổi sang nhánh có tên là `<branch_name>`.

4. `git merge <branch_name>`: Hợp nhất (merge) các thay đổi từ nhánh `<branch_name>` vào nhánh hiện tại.

5. `git push origin <branch_name>`: Đẩy (push) một nhánh lên repository từ máy cục bộ lên máy chủ từ xa.

## VI. Các quy trình làm việc với Git

Ví dụ bạn có một thư mục ở trên máy tính

```html
homeworks/
├─ day-01/
│  ├─ index.html
├─ day-02/
│  ├─ index.html
```

Và bạn muốn đưa code trong thư mục `homeworks` lên github online.

### Bước 1

Mở thư mục homeworks bằng Terminal hoặc Command Promp, hoặc mở trong VS Code rồi chọn new Terminal ở thanh Menu


Tạo respo ở local: 

```bash
git init
```

### Bước 2

Thiết lập nhánh mặc định

```bash
git brand -M main
```

Kết nối local với git Remote

```bash
git remote add origin <link github repository>
```

Check lại đã add được chưa bằng lệnh

```bash
git remote -v
```

### Bước 3

Chỉnh sửa, thêm mới ... sau đó dùng lệnh

```bash
git add .
```

Để Đưa các tệp vào staging area

### Bước 4

Commit các thay đổi: 

```bash
git commit -m "<message>"
```

Tương tác với remote repository:


a. Đẩy các commit từ local repository lên remote repository: 

Ví dụ bạn đang ở nhánh main ở local, và muốn đồng bộ lên remote repository

```bash
git push -u origin main
```

Lưu ý: nếu nhánh master thì đổi tên lại thôi

b. Kéo các thay đổi từ remote repository về local repository: 

```bash
git pull origin main
```
