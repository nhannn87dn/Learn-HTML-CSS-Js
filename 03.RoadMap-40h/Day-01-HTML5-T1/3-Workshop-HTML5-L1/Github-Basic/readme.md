# GitHub Cơ Bản


**Step 1**: Tạo một tài khoản github

**Step 2**: 

Cài đặt github <https://git-scm.com/downloads>

Với Mac: 

* Hoặc dùng Tool <https://sourceforge.net/projects/git-osx-installer/>
* Hoặc xem bài viết: https://gist.github.com/kamermanpr/23bc20180dc277bc8043558f0c22f8a9

**Step 3**: Thiết lập chứng thực cá nhân

```bash
git config --global user.name "User Name"
git config --global user.email "username@gmail.com"
```

**Step 4**: Thiết lập Git cho dự án

Add git cho một dự án mới

Tại cửa thư mục chứa dự án, Mở Terminal

```bash
git init
git remote add origin https://github.com/user/repository.git
```


Sau khi bạn thay đổi source code: thêm mới, sửa, xoá files,… Bạn cần phải cập nhật lên Staging Area. Để cập nhật hết các files:

```bash
git add .
```

Sau lệnh add, bạn cần sử dụng câu lệnh Commit để đây thông tin thay đổi lên Local Respository

```bash
git commit -m "Update nội dung gì đó"
```

Sau câu lệnh Commit, thông tin mới chỉ được cập nhật lên Local Repository. Nếu muốn cập nhật lên server thì bạn phải sử dụng câu lệnh push:

```bash
git push -u origin <name_branch>
```



### Cách lệnh Git thường dùng

Quy trình làm việc với Github xem Git Model tại link sau <https://nvie.com/posts/a-successful-git-branching-model/>

Video đề xuất: <https://www.youtube.com/watch?v=vQgcl8VouLU>

Xem trạng thái của git hiện tại

```bash
git status 
```
Clone, sao chép code từ một remote git

```bash
git clone https://github.com/user/repository.git

```

Thêm link repository git

```bash
git remote add origin <link repo>
```

Xóa link repository git

```bash
git remote remove origin
```

Thay đổi link repository git

```bash
git remote set-url origin git://new.url.here
```

Check remote repository

```bash
git remote -v
```

```bash
# danh sách branch hiện có
git branch

# Để tạo mới một branch
git branch <name_branch>

# Tạo branch mới và chuyển đến
git checkout -b <name_branch>

# Chuyển đến một branch với tên
git checkout <name_branch>  

```

Xem lại lịch sử commit

```bash
git log
```

Lệnh git log sẽ cho bạn biết về người commit, ngày giờ, message của những lần commit đó.

Xem thay đổi trước khi push

```bash
git diff
```

Lệnh này giúp bạn biết những gì đã được thay đổi giữa nhánh hiện tại và nhánh trước nó.


Đồng bộ thay đổi từ remote repository về local

```bash
git pull origin main
```

Lệnh trên sẽ gộp những thay đổi mới kéo về từ máy chủ từ xa với nhánh hiện tại trên máy local.
