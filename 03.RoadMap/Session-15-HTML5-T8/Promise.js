//https://www.w3schools.com/js/js_promise.asp
/**
 * Promise (ES6)
 * - Promise ? là một khái niệm sinh ra để xử lý các tác vụ bất đồng bộ, mà trước đó thường
 *  hay sử dụng callback, mà dùng callback thì gặp callback hell (callback lồng sâu vào nhau).
 *  Giúp code clear hơn, dễ maintain code hơn.
 * - Sync ?
 * - Async ?
 * - Callback
 * - Callback hell 
 * - How to use ?
 * - Example
 * 
 */

// - How to use ?

let promise = new Promise(
    // Executor
    // Hàm thực thì khi gọi Promise, được thực thi trước khi object promise được trả về
    // resolve: đại diện thành công
    // reject: thất bại
    function(resolve, reject){
        // Login Here
        //1. Pending default
        if(true){
              //2. Fulfilled
            resolve([
                {
                    id: 1, name: 'Javascript'
                },
                {
                    id: 2, name: 'Html Css'
                }
            ]); 
        }else{
            //3. Rejected
            reject({
                code: 400,
                message: "Not Found !"
            }); 
        }
    }
);
// promise là một lời hứa, hứa sau khi thực hiện xong thì nó sẽ báo kết quả.
promise
    .then(function(course){
        // Sau lời hứa nếu thành công thì trả về kết quả ở đây
        // và bạn làm gì với kết quả đó ở đây
        console.log("OK", course);
        //return data; trả về đầu vào cho then thứ 2
    })
    /*
     Có thể sử dụng nhiều then nối nhau
     Kết quả trả về của then trước là đầu vào tham số cho then sau
     Tức là thằng sau cần kết quả của thằng trước để xử lý
     ==> tránh được callback hell
     .then(function(){
       
        
    })
    */
    .catch(function(error){
        // nếu thất bại
        // thì làm điều gì đó
        console.log("Failure",error)
    })
    .finally(function(){
        console.log("finally done !")
    });
