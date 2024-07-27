// 0988777666
/*
Cần kiểm tra xem số trên có thõa mãn đk
- có bắt đầu = số 0 hay ko
- có đủ độ dài 10 kí tự không
- có phải kí tự số hay không
*/

const pattern = /^0([0-9]+){9}/;
const str = "0988777661";

const result = pattern.test(str); //true | false
console.log(result);

const email = "yourname12._@gmail.com";
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isValid = pattern_email.test(email);
console.log(isValid);
