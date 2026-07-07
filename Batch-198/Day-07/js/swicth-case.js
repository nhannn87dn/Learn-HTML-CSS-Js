const level = 'VIP';
/*
Nếu level = VIP thì được chiết khấu 10%
Nếu level = GOLD thì được chiết khấu 7%
Nếu level = SILVER thì được chiết khấu 5%
Còn lại không được chiết khấu
*/
switch (level) {
    case 'VIP': //TH level === VIP
        console.log('10%');
        break; // bỏ qua câu lệnh phía sau.
    case 'GOLD':
        console.log('7%');
        break;
    case 'SILVER':
        console.log('5%');
        break;
    //tương đương với else
    default:
        console.log('0%');
        break;
}