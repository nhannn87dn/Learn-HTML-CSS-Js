# Cách sử dụng Git cơ bản

## I. Giới thiệu
- Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) được sử dụng rộng rãi trong quản lý mã nguồn của dự án phần mềm.
- Git cho phép nhiều người làm việc trên cùng một dự án mà không gây xung đột và dễ dàng hợp nhất (merge) các thay đổi.
- Git lưu trữ dữ liệu dự án trong các repository, mỗi người có thể sao chép (clone) một repository và làm việc độc lập.

## II. Cài đặt Git
- Truy cập trang chủ Git (https://git-scm.com) và tải xuống phiên bản phù hợp với hệ điều hành của bạn.
- Cài đặt Git theo hướng dẫn trên trang web.

**Cấu hình**

```bash
git config --global user.name "User Name"
git config --global user.email "username@gmail.com"
```

## III. Tạo repository
1. Tạo repository trên máy cục bộ:
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
5. `git clone <repository_url>`: Sao chép (clone) một repository từ máy chủ từ xa về máy cục bộ.
6. `git status`: Hiển thị trạng thái hiện tại của repository.
7. `git log`: Hiển thị danh sách các commit đã thực hiện.

## V. Các phương thức làm việc với nhánh (branching)
1. `git branch`: Liệt kê các nhánh hiện có trong repository.
2. `git branch <branch_name>`: Tạo một nhánh mới với tên là `<branch_name>`.
3. `git checkout <branch_name>`

: Chuyển đổi sang nhánh có tên là `<branch_name>`.
4. `git merge <branch_name>`: Hợp nhất (merge) các thay đổi từ nhánh `<branch_name>` vào nhánh hiện tại.
5. `git push origin <branch_name>`: Đẩy (push) một nhánh lên repository từ máy cục bộ lên máy chủ từ xa.

## VI. Các quy trình làm việc với Git

Tạo một kho mới:

a. Tạo kho trống trên máy tính: git init hoặc

b. Sao chép kho từ một nguồn từ xa: git clone <url>.

Làm việc với các tệp:

a. Thay đổi tệp trong working directory.

b. Kiểm tra trạng thái của kho: git status.

c. Đưa các tệp vào staging area: git add <file>.

d. Commit các thay đổi: git commit -m "<message>".

Tương tác với remote repository:

a. Đẩy các commit từ local repository lên remote repository: git push.

b. Kéo các thay đổi từ remote repository về local repository: git pull.
