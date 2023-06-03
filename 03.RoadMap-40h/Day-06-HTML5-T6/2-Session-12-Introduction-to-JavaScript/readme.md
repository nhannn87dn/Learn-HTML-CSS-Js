# Introduction-to-JavaScript

Intro: <https://www.w3schools.com/js/js_versions.asp>

## 1. JavaScript Where To Html?

## 2. Variables JavaScript

- Doc: <https://www.w3schools.com/js/js_variables.asp>
- Declaring Variables and Scope (<https://www.w3schools.com/js/js_scope.asp>)
- Variable Naming Rules

## 3. Data Types in JavaScript

- boolean, null, number, string, array, object, function
- Doc: <https://www.w3schools.com/js/js_datatypes.asp>

## 4. JavaScript Output

- <https://www.w3schools.com/js/js_output.asp>
- Writing into an HTML element, using innerHTML.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

## 5. Using Comments

- Single line Comment
- Multi-line Comments
- Why comment ?

## 6. What Built-in Functions ?

- alert(), confirm(), parseInt(), eval(), prompt()...

## 7. JavaScript Events and Event Handlers

- <https://www.w3schools.com/js/js_events.asp>
- <https://www.w3schools.com/jsref/dom_obj_event.asp>
- eBook Section 12

## 8. Intro Jquery

- JQuery giúp đơn giản việc theo tác với HTML DOM
- <https://www.w3schools.com/js/js_htmldom.asp>
- Có thể trộn lẫn Javascript Syntax và Jquery lại với nhau
- Ajax with Jquery
- Validation with Jquery

Example Javascript

```js
// Lấy theo ID
document.querySelector('#myElement');
// Lấy theo Class
document.querySelectorAll('.myElement');
// Lấy theo tag
document.querySelectorAll('div');

```

With Jquery

```js
// Lấy theo ID
$('#myElement');
// Lấy theo Class
$('.myElement');
// Lấy theo tag
$('div');

```

Sự kiện click 

```js
//Jquery
$('#myElement').on('click', function() {
    console.log('I am handsome!');
});
//Javascript
document.querySelector('#myElement').addEventListener('click', function() {
    console.log('I am handsome!');
});
```
