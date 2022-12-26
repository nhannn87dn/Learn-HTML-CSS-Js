# Creating Navigational Aids and Division Based Layout

## ⭐ 1. HTML5 Semantic Tags

Doc: <https://www.w3schools.com/html/html5_semantic_elements.asp>

**❓ What are Semantic Elements?**

A semantic element clearly describes its meaning to both the browser and the developer.

\- Examples of **non-semantic** elements: `<div>` and `<span>` - Tells nothing about its content.

\- Examples of **semantic** elements: `<form>`, `<table>`, `<header>`, `<footer>` and `<article>` - Clearly defines its content.

**🔎 Semantic Elements in HTML**

### 1.1  Structural Semantic Tags

- header, footer, aside, article, main, section, nav

### 1.2 Text-level Semantic Tags 

- mark, time, progress, meter

View Demo: Example/_semantic-text.html

## ⭐ 2.HTML 5 semantic tag layouts

- header, footer, aside, article, main, section, nav

 Demo: layout.jpg - Example/_semantic-layout.html

## ⭐ 3. Div tag (Divisions)

- The `<div>` tag defines a division or a section in an HTML document.

- The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

- The `<div>` tag is easily styled by using the class or id attribute.

> What can do with Div tag in real world ?

View Demo: Example/div-layout.html

## ⭐ 4.Position

Doc: <https://www.w3schools.com/css/css_positioning.asp>

- **position**: absolute | fixed | relative | sticky

> **relative**: giữ nguyên vị trí tương đối, nó lấy chính nó đang đứng làm gốc tọa độ 0.0

> **absolute**: nhận thẻ cha có thuộc tính position gần nhất làm gốc tọa độ 0.0

> **fixed**: cố định vị trí theo tọa độ khung trình duyệt.

- **z-index**: `<number>` thứ tự lớp

Demo: Example/position.html

Real World Example:

- Navbar, Mua Ngay ==>  <https://www.thegioididong.com/>
- Notification, Settings ==> <https://www.facebook.com/>

## ⭐ 5.Navigation bar

- Navigation bar ?
- `<nav>` element
- Create Navigation bar in real world
- Demo: Example\index.html

## ⭐ 6.Extra Css

###  6.1 Box shadow Css

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```
Doc: <https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow>
Builder: <https://cssgenerator.org/box-shadow-css-generator.html>
Example Box shadow: <https://getcssscan.com/css-box-shadow-examples>

###  6.2 Css Image Sprites

- <https://www.w3schools.com/css/css_image_sprites.asp>
