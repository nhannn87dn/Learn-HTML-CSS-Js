# Callback hell và những cách giải quết

Với nhiều người mới làm việc với JS thì callback đúng là một cái gì đó nguy hiểm, thực sự là như vậy! nếu có một vài tác vụ bất đồng bộ cái này lần lượt thục hiện tiếp sau cái kia mà bạn viết không cẩn thị thì cái mà bạn tạo ra chính là một call back hell.

Giả sử tôi càn làm 4 tác vụ (bất đồng bộ ) lần lượt sau vái này tiếp sau cái kia, cách viết như sau chính là callback hell


```js
/** this is a callback hell **/

function doTasks(){
	setTimeout(function(){
		console.log('task 1');
		setTimeout(function(){
			console.log('task 2');
			setTimeout(function(){
				console.log('task 3');
				setTimeout(function(){
					console.log('task 1');
				}, 800)
			}, 700)
		}, 600)
	}, 500)
}

doTasks()
```

Đoạn code này nhìn thực sự rối, người đọc code ko thể hiểu để bảo trì, nâng cấp, vậy có cách nào để giải quết vấn đề này không?


## Water Fall callback

cách dầu tiên tôi nghĩ đến chính là Water Fall callback, đơn giản là chia callback ra nhiều hàm rồi làn luwowit cái trước gọi cái sau 😃.

cách này chỉ là một cách viết khác so với hell ởn trên tuy là có clear hơn đoi chút những xem ra vẫn không cái thiện nhiều về mặt maintain code sau này


```js
function task1(){
	console.log('task 1')
	setTimeout(task2, 500)
}

function task2(){
	console.log('task 2')
	setTimeout(task3, 600)
}

function task3(callback){
	console.log('task 3')
	setTimeout(task4, 700)
}

function task4(callback){
	console.log('task 4')
}

task1()
....
task4()


```


## Dùng Promisse

**Promisse** là một cách khá triệt để để xử lý Callback hell, một promisse sẽ định nghĩa một tác vụ bất đồng bộ với hai phương thức cơ bản là resolve docs (hay fullfill ) để báo tác vụ thành công ``reject` var then để thực hiện tác vụ tiếp theo để chỉ tác vụ thất bại.

ta sẻ xử lý 4 tác vụ trên với promisse như sau:

```js
var tasks = new Promise(function(resolve, reject){
	setTimeout(resolve, 500)
})
	
tasks.then(function(){
	console.log('task 1')
})
.then(function(){
	return new Promise(function(resolve, reject){
		setTimeout(resolve, 600)
	})
})
.then(function(){
	console.log('task 2')
})
.then(function(){
	return new Promise(function(resolve, reject){
		setTimeout(resolve, 700)
	})
})
.then(function(){
	console.log('task 3')
})
.then(function(){
	return new Promise(function(resolve, reject){
		setTimeout(resolve, 800)
	})
})
.then(function(){
	console.log('task 4')
})
```

có vẻ hơi dài dòng nghỉ 😄, nhưng thay vào đó ta sẽ được một code flow cực kỳ rõ ràng ta sẽ dễ dàng debug cũng như ddowcj đoạn code này, nó sẽ đợi 500ms rồi log ra task 1 sau đó đợi 600ms rồi log ra task 2 v.v… thực sự vấn để Callback hell đã được giải quết. nhưng vấn đề là cú pháp hơi dài dòng một chút, những nhà phát triển JavaScript cũng nhận ra điều này và đưa ra những cải tiến lớn đó là generater function ở phiên bản ES6 và async/await với ES6+


## Generater function

nếu bạn muốn hiểu rõ hơn về generater function mời đọc qua bài viết này của tôi.

với giả pháp này code của chúng ta sẽ dẽ nhìn hơn khá nhiều, nói một cách dễ hiểu đây như một cách pause hàm lại và resume lại sau mỗi lần goi next, đây quả thực là một chức năng mạnh mẽ không chỉ với

đây là một tính năng của ES6 nên mình sẽ dùng cú pháp ES6 luôn nhé.


```js
function delay(ms){
	return new Promise((res, rej) => {setTimeout(res, ms)})
}

function *doTasks(){
	yield delay(500)
	console.log('task 1')

	yield delay(600)
	console.log('task 2')

	yield delay(700)
	console.log('task 3')

	yield delay(800)
	console.log('task 4')
}

let tasks = doTasks();

while (!tasks.done) tasks.next()
```


khá là gọn gẽ 😄 những vẫn chưa phải sô một, xin trân trọn giới thiệu async/await

## async/await

đây là một tính năng mới của ES7, không cần phải nói nhiều làm gì đoạn code sau sẽ nói lên tất cả 

```js
function doTask1(){
	setTimeout(() => {
		console.log('task 1')
	}, 500)
}

function doTask2(){
	setTimeout(() => {
		console.log('task 2')
	}, 600)
}

function doTask3(){
	setTimeout(() => {
		console.log('task 3')
	}, 500)


function doTask4(){
	console.log('task 4')
}



sync function doTasks() {
  await doTask1()
  await doTask2()
  await doTask3()
  await doTask4()
}

doTasks()

```
trên đây mình đã giới thiệu mội vài cách cơ bản đẻ giải quyết callback hell, hy vọng giúp ích được cho ai cần


@minhlucvan