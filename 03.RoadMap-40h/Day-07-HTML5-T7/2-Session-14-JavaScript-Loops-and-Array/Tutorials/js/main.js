/**
 * - Khởi tạo một Array
 * - Cách sử dụng mảng
 * - Array Methods
 * - Array Iteration
 * - Destructuring ES6 => https://www.w3schools.com/react/react_es6_destructuring.asp
 * - Rest Parameter ES6 ==> https://www.w3schools.com/js/js_es6.asp#mark_rest
 * - Spread ES6 => https://www.w3schools.com/react/react_es6_spread.asp
 * 
 */ 

// Tạo một mảng

const cars = ["Saab", "Volvo", "BMW"];

const arr = []; //empty array

bangcuuchuong();

function bangcuuchuong()
{
document.write("<table border=1 width=100%>")
    for(i=1;i<=9;i++)   
    {
	document.write("<tr>")
    for(n=2;n<=9;n++)   
    document.write("<td>" +n + "x" + i +"="+ (n*i));
    document.write("</td>");
	document.write("</tr>")
    }
document.write("</tr></table>")
}