# Session 6 - Định dạng sử dụng CSS

## ⭐ 1.Kiểu chữ và Font chữ

- Css Formatting Text
  - color
  - font-size
  - font-weight
  - font-style
  - text-overflow
  - text-transform
  - text-align
  - text-shadow
  - text-index
  - text-decoration
  - line-height
  - font-family
- Google Font, CDN Font: <https://www.w3schools.com/css/css_font.asp>
- Font icon

## ⭐ 2.CSS Box Model

### 2.1 Box Model ?

![box model](css_box_model.png)

Demo boxmodel.html


### 2.3 Width và  Height của một Element

The total width of an element should be calculated like this:

> Total element width = width + left padding + right padding + left border + right border + left margin + right margin

The total height of an element should be calculated like this:

> Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

### 2.3 Khác nhau giữa các thành phần của Box Model:

**Content** - Là phần content của box

**Padding** - Khoảng trống xung quanh box. Padding là trong suốt

**Border** - là phần viền xung quanh padding và content

**Margin** - Phần khoảng trống nằm ngoài  border. Margin là trong suốt

================================

Để thay được ta đi tìm hiểu chi tiết từng thành phần

### 🌻 padding

Syntax
```css

padding-left: 1em;
padding-right: 1em;
padding-top: 1em;
padding-bottom: 1em;

/* Short Hand ==> Apply to all four sides */
padding: 1em;
/* top and bottom | left and right */
padding: 5% 10%;
/* top | left and right | bottom */
padding: 1em 2em 2em;
/* top | right | bottom | left */
padding: 5px 1em 0 2em;
```
Demo: padding-demo.html

### 🌻 Border

Syntax:
```css
/* syntax details */
border-left-with:1px;
border-left-color: red;
border-left-style: solid;

/* short hand */
/* width | style | color */
border: medium dashed green;
border: 1px solid #ddd;
```
More example: Basic Example Folder

Buider Online: <https://cssgenerator.org/border-css-generator.html>

### 🌻 margin

Syntax

```css
margin-top:1em;
margin-bottom:1em;
margin-left:1em;
margin-right:1em;
/* Apply to all four sides */
margin: 1em;
margin: -3px;
/* top and bottom | left and right */
margin: 5% auto;
/* top | left and right | bottom */
margin: 1em auto 2em;
/* top | right | bottom | left */
margin: 2px 1em 0 auto;
```
Demo: margin-demo.html

Một số thuộc tính thường dùng chung khác:

### 📌 box-sizing

Syntax

```css
box-sizing: border-box;
box-sizing: content-box;
```

Demo: box-sizing.html

### 📌 border-radius

Syntax:

```css
/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;
/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;
/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;
/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;
/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;
/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;
/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;
```

Builder Online: <https://cssgenerator.org/border-radius-css-generator.html>

### 📌 box-shadow

Syntax

```css
/* Keyword values */
box-shadow: none;
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;
/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;
/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

Builder Online: <https://cssgenerator.org/box-shadow-css-generator.html>

### 📌 overflow

Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;
```

Demo Online: <https://developer.mozilla.org/en-US/docs/Web/CSS/overflow>


## ⭐ 3. Horizontal Alignment - Canh theo chiều ngang

- text-align
- margin: number auto;

## ⭐ 4. Vertical Alignment - Canh theo chiều dọc

- Vertical Alignment a Image follow text
- Vertical Alignment a text follow table cell
- Vertical Alignment a Element follow Div Tag

## ⭐ 5. Display Property

- display: inline, inline-block, block, table, table-cell...
- float: left, right, unset
- clear: left, right, unset, both

Doc Guide: <https://developer.mozilla.org/en-US/docs/Web/CSS/display>

## ⭐ 6. Display Flex

View flexbox.md
