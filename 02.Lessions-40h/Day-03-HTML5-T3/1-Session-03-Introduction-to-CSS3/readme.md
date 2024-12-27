# Session 3 - Introduction to CSS3

CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (HTML). Nói ngắn gọn hơn là ngôn ngữ tạo phong cách cho trang web. Bạn có thể hiểu đơn giản rằng, nếu HTML đóng vai trò định dạng các phần tử trên website như việc tạo ra các đoạn văn bản, các tiêu đề, bảng,…thì CSS sẽ giúp chúng ta có thể thêm style vào các phần tử HTML đó như đổi bố cục, màu sắc trang, đổi màu chữ, font chữ, thay đổi cấu trúc…

## ⭐ Cú pháp CSS

Selector{property: value}

Ví dụ:

```css
h1 {
    color: red,
    back
}

#div {width: 100px}
```

## ⭐Css Selector là gì ?

Hiểu đơn giản CSS Selector là thứ cho phép bạn nhắm mục tiêu tới các phần tử HTML để áp dụng các thuộc tính CSS cho chúng.

CSS Selector giống như là đường đẫn, chỉ định để cho CSS biết bạn đang muốn điều chỉnh, tạo kiểu cho phần tử HTML nào vậy.

```html
<style>
    /*
    Universal selector
     */
    * {
        font-family: "Aria";
    }
    /*
    Tô màu cho thẻ h1
    Lấy chính tên thẻ để làm tên selector
    ==> Gọi là: tag name selector
    */
    h1 {
        color: red;
    }
    /*
    Tô màu cho thẻ h1
    Lấy chính giá trị của class làm tên selector
    ==> Gọi là: class selector
    */
    .heading {
        color: green;
    }
    /*
    Tô màu cho thẻ h1
    Lấy chính giá trị của ID làm tên selector
    ==> Gọi là: class selector
    */
    #heading1 {
        color: green;
    }
</style>
<body>
    <h1 id="heading1" class="heading">Hello Css </h1>
</body>
```

Có 5 nhóm Selector cơ bản:

1. Basic CSS Selectors
    -  Universal selector `*{...}`
    - Type selector `h1{..}`
    - Class selector `.test{..}`
    - ID selector `#demo{..}`
    - Attribute selector: `input[type="email"]`
2. Grouping CSS Selectors
    - Selector list: `div, span{...}`
3. Combination CSS Selectors
    - Descendant combinator: `div span`, span là con của div.
    - Child combinator: `ul > li`, li là con liền kề 1 cấp với ul
    - General sibling combinator: `p ~ span`, tất cả span là thẻ đứng sau thẻ p
    - Adjacent sibling combinator; `p + span`, 1 thẻ span liền kề gần nhất với p
    - Column combinator Experimental
4. Pseudo-classes and pseudo-elements
    - Pseudo classes (Lớp giả): `a:visited`
    - Pseudo elements (Element giả): `p::first-child`
5. Structure of a selector

Đọc thêm: 

- <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>
- <https://www.w3schools.com/cssref/css_selectors.php>


## ⭐ Đơn vị độ dài trong Css

Đọc chi tiết:  <https://www.w3schools.com/css/css_units.asp>

- Đơn vị Tương đối: %, rem, em, vw, vh, vmin, vmax, ch
- Đơn vị tuyệt đối (Absolute): px, pt, cm, mm, inch, pc

Thường sử dụng nhất: px, %, rem, em

## ⭐ Các kiểu Style

- Internal: Css được đặt ngay trong file dùng nó thông qua thẻ `<style></style>`
- External: Css được đặt ở bên ngoài file dùng nó và được nhúng vào bằng thẻ `<link rel="stylesheet" type="text/css" href="style.css" />`
- Inline: Css được đặt ngay trên thẻ mở của element `<h1 style="display:inline">`

### Khi nào thì dùng loại nào ?

- Internal: Dùng khi bạn muốn phần CSS đó chỉ áp dụng trong 1 file .html cụ thể.
- External: Dùng khi bạn muốn phần CSS đó áp dụng cho nhiều file .html khác nhau.
- Inline: Dùng khi bạn muốn CSs đó chỉ áp dụng cho element hiện tại.

## ⭐ Generic Cascading Order

Hay được gọi là thứ tự ưu tiên của Css.

- CSS Specificity: <https://www.w3schools.com/css/css_specificity.asp>

| Các dạng rule | Thứ tự ưu tiên | Phạm vi tác động |
|---------------|----------------|------------------| 
| inline | 1 | 4 | 
| id | 2 | 3 | 
| class | 3 | 2 | 
| tag | 4 | 1 |


- Thứ tự ưu tiên tăng dần, tỉ lệ nghịch với phạm vi tác động.
- Selector nằm sau thì ưu tiên hơn selector nằm trước.
- Selector nào có !important thì ưu tiên hơn

Phạm vị tác động: là khi áp dụng css thì css đó ảnh hưởng đến bao nhiêu element.

Ví dụ xem ở Folder Examples của session 5

Để đơn giản và dễ nhớ hơn có Mẹo sau:

| Rule | Điểm số |
|---------------|----------------|
| inline | 1000 |
| id | 100 |
| class | 10 |
| tag | 1 |
| * | 0 |

Khi bạn dùng nhiều các `selector` cùng một lúc với nhau, cái nào nhiều điểm hơn thì Css của cái đó được ưu tiên.

Ví dụ: cùng một lúc thẻ `p` có đến 5 loại selector css áp dụng

```html
<style>
    *{
        color: black
    }
    #demo{color:yellow}
    .test{color: green}
    p{color: blue}
   
</style>
<p class="test" id="demo" style="color:red">This is Css</p>
```


## ⭐ Comment in Css

```css
/* comment one line */
.test {...}
/**
 comment multiline 
 */
```

## ⭐ Css Function

5 hàm thường dùng trong CSS

- var()
- calc()
- rgb()
- rgba()
- attr()


## ⭐ Giá trị mặc định của một thuộc tính CSS

- Doc: <https://www.w3schools.com/cssref/css_default_values.php>
- Tại sao phải reset Css mặc định của trình duyệt ?

## ⭐ Pseudo Classes, Pseudo Elements

- :first-child
- :last-child
- :hover
- :empty
- :nth-child(n)
- :focus
- :checked

List Pseudo Classes: <https://www.w3schools.com/css/css_pseudo_classes.asp>
List Pseudo Elements: <https://www.w3schools.com/css/css_pseudo_elements.asp>

## ⭐ Styles cho một liên kết Hyperlink

- a
- a:link
- a:visited
- a:hover
- a:active

Example: <https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_visited>


## ⭐ Hỗ trợ đa trình duyệt là gì ?

- <https://caniuse.com/?search=sticky/>
- Test Real browser: <https://www.browserstack.com/>