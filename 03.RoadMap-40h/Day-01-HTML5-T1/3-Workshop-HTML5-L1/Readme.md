# Workshop HTML5

## Phân tích Layout

- Học phân tích bố cục Layout chính
- Phân tích các thành phần hiển thị
  - Block, section
  - Heading
- Cách trình bày bố cục sao cho thân thiện người dùng.

## Làm chủ Head Element

- Các thành phần cơ bản trong head
- Cách sử dụng Title và cách đặt tên title chuẩn SEO
- Cách sử dụng các thẻ Meta
  - Meta chung
  - Meta SEO
  - Meta Social share
- Cách nhúng Css trong head
- Cách nhúng Code Google Analytic, Google Tag vào head
- Cách chèn favicon full option <https://mobiforge.com/design-development/adding-favicons-in-a-multi-browser-multi-platform-world>

Favicon markup Full

```html
<link rel="icon" sizes="48x48" href="icon-48.png">
<link rel="icon" sizes="96x96" href="icon-96.png">
<link rel="icon" sizes="144x144" href="icon-144.png">
<link rel="icon" sizes="192x192" href="icon-192.png">
<link rel="icon" sizes="256x256" href="icon-256.png">
<link rel="icon" sizes="384x384" href="icon-384.png">
<link rel="icon" sizes="512x512" href="icon-512.png">
<link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57.png">
<link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60.png">
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72.png">
<link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76.png">
<link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114.png">
<link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120.png">
<link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152.png">
<link rel="apple-touch-icon" sizes="167x167" href="apple-touch-icon-167.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180.png">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000">
<meta name="msapplication-TileColor" content="#ff0000">
<meta name="msapplication-TileImage" content="/ms-tile-144.png">
<link rel="manifest" href="/manifest.json">
```


## GitHub Cơ Bản

Sau đây là flow cơ bản khi bạn sử dụng Git:

Clone project từ server về Local Repository

Check-out 1 nhánh từ Local Repository về Working Space

Bạn sẽ làm việc (thêm, sửa, xoá tại Working Space)

Add : xác nhận sự thay đổi của các files (đưa đến vùng Staging Area)

Commit: cập nhật sự thay đổi lên Local Repository

Về cơ bản đến đây là bạn đã hoàn thành 1 chu trình sử dụng Git. Lúc này, nếu như bạn muốn cập nhật sự thay đổi này lên server thì bạn sẽ dùng lệnh push để đẩy chúng lên server.

**Step 1**: Tạo một tài khoản github

**Step 2**: Cài đặt github <https://git-scm.com/downloads>


**Step 3**: Thiết lập chứng thực cá nhân

```bash
git config --global user.name "User Name"
git config --global user.email "username@gmail.com"
```
**Step 4**: Thiết lập Git cho dự án

```bash
# Add git cho một dự án mới
# Tại cửa thư mục chứa dự án, Mở Terminal

git init

## Dự án đã tồn tại trên Github

git clone [url repository]
# ex
git clone https://github.com/user/repository.git

```

### Cách lệnh Git thường dùng

Quy trình làm việc với Github xem Git Model tại link sau <https://nvie.com/posts/a-successful-git-branching-model/>


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
git push origin <name_branch>
```

Ngoài ra, nếu chưa tồn tại remote trên server thì bạn cần phải add mới một remote trước rồi mới push:

```bash
git remote add origin <remote_url>
git push origin <name_branch>
```

Sau một thời gian cập nhật các file và push lên git trên branch mới, bây giờ mình cần ghép (merge) code lại vào nhánh gốc (master). Trước tiên, cần phải checkout ra khỏi branch hiện tại cần gộp để vào branch master, sau đó thì dùng lệnh merge để ghép branch mới vào master:

```bash
git checkout master
git merge <new_branch>
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

Gộp commit

```bash
 git rebase -i HEAD~
```

Sau dấu ~ là số commit bạn muốn gộp. Sau khi gõ lệnh này một cửa sổ trình soạn thảo hiện ra. Thay đổi ký tự pick của dòng các dòng sau dòng đầu thành s rồi lưu lại/kết thúc. Khi đó, trình soạn thảo để chỉnh sửa giải thích commit thiết lập cho commit sau khi đã tổng hợp sẽ được hiển thị, nên hãy chỉnh sửa lưu lại/kết thúc.

Pull từ remote repository

```bash
git pull origin master
```

Lệnh trên sẽ gộp những thay đổi mới kéo về từ máy chủ từ xa với nhánh hiện tại trên máy local.

## Structured data

Doc:  <https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data>

- Structured data ?
- Giới thiệu các loại Schema thường dùng: Article, Breadcrumb, FAQ, Product
- Schema và lợi ích trong SEO
- Cách sử dụng: Microdata | Json-LD
