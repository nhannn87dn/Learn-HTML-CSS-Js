# New Features of CSS3

## Subgrid

"Subgrid" là một thuộc tính CSS mới trong Grid Layout Module Level 2. Nó cho phép bạn sử dụng một lưới con bên trong một lưới cha, giúp tạo ra các bố cục đa chiều phức tạp hơn trong thiết kế web.

Khi sử dụng thuộc tính "subgrid" trên một mục con của lưới cha, các thuộc tính lưới (như "grid-template-columns" và "grid-template-rows") của lưới cha sẽ được kế thừa và áp dụng cho lưới con. Điều này giúp đảm bảo rằng các cột và hàng trong lưới con sẽ phù hợp với cấu trúc lưới cha mà không cần định nghĩa lại các thuộc tính lưới.

Ví dụ, giả sử bạn có một lưới cha với cấu trúc cột và hàng đã được định nghĩa:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
```

Bạn muốn tạo một lưới con bên trong một mục con của lưới cha mà có cùng cấu trúc cột và hàng. Trước khi có thuộc tính "subgrid", bạn phải định nghĩa lại cấu trúc lưới cho lưới con:

```css
.grid-item {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
}
```

Nhưng với "subgrid", bạn có thể sử dụng thuộc tính một lần trong lưới cha và áp dụng nó cho lưới con:

```css
.grid-item {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

Khi đó, lưới con sẽ kế thừa cấu trúc cột và hàng từ lưới cha mà không cần định nghĩa lại. Điều này giúp tiết kiệm thời gian và giảm sự lặp lại trong mã CSS.

Tuy nhiên, hiện tại (cutoff knowledge 2021), thuộc tính "subgrid" đang trong quá trình phát triển và chưa được hỗ trợ rộng rãi trên các trình duyệt. Vì vậy, bạn nên kiểm tra tài liệu và hỗ trợ trình duyệt để biết thêm chi tiết về tính tương thích và tính sẵn sàng của "subgrid" trong dự án của bạn.

## CSS Nesting

Doc: https://developer.chrome.com/articles/css-nesting/

Before

```css
.nesting {
  color: hotpink;
}

.nesting > .is {
  color: rebeccapurple;
}

.nesting > .is > .awesome {
  color: deeppink;
}
```

After 

```css
.nesting {
  color: hotpink;

  > .is {
    color: rebeccapurple;

    > .awesome {
      color: deeppink;
    }
  }
}
```