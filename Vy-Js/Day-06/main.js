let a = 5;
let b = '2';//string
let d = 2;//number
let c = a + 1;

a = a + 3;

/* if */

if(a == 5){
    console.log('dung');
}else{
    console.log('sai');
}

//console.log(typeof b);

let ss = d === b;

let amountOrder = 300;
let customerLevel = 'GOLD';


// if(customerLevel === 'VIP'){
//     console.log('discount 10 percent');
// }
// else if(customerLevel === 'GOLD'){
//     console.log('discount 7 percent');
//     if(amountOrder >= 300){
//         console.log('Tang bo noi');
//     }


// }else{
//     console.log('discount 5 percent');
// }

switch (customerLevel) {
    case 'VIP':
    case 'GOLD':
        console.log('discount 10 percent');
        break;
    default:
        console.log('discount 5 percent');
        break;
}



// if(amountOrder === 400 || customerLevel === 'VIP'){
//     console.log('discount 10 percent');
// }

// if(customerLevel != 'VIP'){
//     console.log('discount 5 percent');
// }

// regex pattern for email
const regexEmail = /\S+@\S+\.[com|vn|com.vn]+/g;
// abc@d.nnn
// check if the email is valid
let myEmail = 'abc@gmail.com';
let result_email = regexEmail.test(myEmail); //return true/false

//console.log('<<=== 🚀result_email  ===>>',result_email);

if (result_email) {
    //console.log('The email is valid.');
}


const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
const strs = 'My phone number is: 555 123-4567.';
const result3 = regex2.exec(strs);
//console.log(result3); // ["555 123-4567", "555", "123", "4567"]