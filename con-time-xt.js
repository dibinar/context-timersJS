//[Контексты]


// 303.1 

    // "use strict";
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', parent);
    // function parent() {
    // 	console.log(this.value); // 
    // 	function child() {
    // 		console.log(this.value); // 
    
    // 	child();
    // }

// 304.1 

    // "use strict";
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', func);
    // function func() {
    //     let self = this;
    // 	alert( square() );
    // 	function square() {
    // 		return self.value * self.value;
    // 	}
    //     square();
    // }

// 


// 304.2 

    // "use strict";
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', func);
    // function func() {
    // 	alert( square(this) );
    // 	function square(param) {
    // 		return param.value * param.value;
    // 	}
    // }


// 304.3 

    // "use strict";
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', func);
    // function func() {
    // 	let square = () => {
    // 		console.log(this.value * this.value)
    // 	}
    //     square();
    // }


// 305.1 

    // function func() {
    // 	console.log(this.value);
    // }
    // func.call(elem1);
    // func.call(elem2);
    // func.call(elem3);


// 305.2 

    // let elem = document.querySelector('#elem');
    // let param1= 'John'
    // let param2= 'Smit'
    // function func(param1, param2) {
    // 	console.log(this.value + ', ' + param1 + ' ' + param2);
    // }
    // func.call(elem, param1, param2);


// 306.1 

    // let elem = document.querySelector('#elem');
    // let surname = 'John'
    // let name = 'Smit'
    // function func(surname, name) {
    // 	console.log(this.value + ', ' + surname + ' ' + name);
    // }
    // func.apply(elem, [surname, name]);


// 307.1 

    // let elem = document.getElementById('elem');
    // function func(name, surname) {
    // 	console.log(this.value + ', ' + name + ' ' + surname);
    // }
    // let newFunc = func.bind(elem);
    // newFunc('John', 'Smit');
    // newFunc('Eric', 'Luis'); 



// <Таймеры>

// 308<1>

    // setInterval(function() {
    // 	console.log('!');
    // }, 3000);


// 309<1> 

    // let i = 100;
    // setInterval(() => console.log(--i), 1000);


// 310<1> 

    // let i = 10;
    // let timerId = setInterval(function() {
    // 	console.log(--i);
    // 	if (i <= 0) {
    // 		clearInterval(timerId);
    // 	}
    // }, 1000);


// 311<1> 

    // let start = document.querySelector('#start');
    // start.addEventListener('click', function() {
    // 	let i = 100;
    // 	setInterval(function() {
    // 		console.log(--i);
    // 	}, 1000);
    // });


// 311<2>

    // let start = document.querySelector('#start');
    // start.addEventListener('click', function func() {
    // 	let i = 100;
    // 	setInterval(function() {
    // 		console.log(--i);
    // 	}, 1000);
    // 	this.removeEventListener('click', func);
    // });


// 312<1> 

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // let timerId;
    // start.addEventListener('click', function() {
    // 	let i = 100;
    // 	timerId = setInterval(function() {
    // 		console.log(--i)
            // if (i <= 0){
            // 	clearInterval(timerId);
            // }
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	clearInterval(timerId);
    // });


// 312<2>

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // start.addEventListener('click', function() {
    // 	timerId = setInterval(function() {
    // 		let date = new Date;
    // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	clearInterval(timerId);
    // });


// 312<3>

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // start.addEventListener('click', function() {
    // 	timerId = setInterval(function() {
    // 		let date = new Date;
    // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	clearInterval(timerId);
    // });


// 312<4> 

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // start.addEventListener('click', function() {
    // 	timerId = setInterval(function() {
    // 		let date = new Date;
    // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	clearInterval(timerId);
    // });


// 312<5>

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // start.addEventListener('click', function() {
    // 	timerId = setInterval(function() {
    // 		let date = new Date;
    // 		console.log(date.getMinutes() + ' ' + date.getSeconds());
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	clearInterval(timerId);
    // });


// 312<6> 

    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // let timerId;
    // start.removeEventListener('click', function() {
    // 	let i = 0;
    // 	timerId = setInterval(function() {
    // 		console.log('!')
    // 	}, 1000);
    // });
    // stop.addEventListener('click', function() {
    // 	let i = 0;
    // 	timerId = setInterval(function() {
    // 		console.log('!')
    // 	}, 1000);
    // });


// 313<1>

// Ответ: Number нужен для того чтобы числа складывались как числа. Если не написать Number, то 1 будут складываться как строки.


// 313<2> 

    // let elem = document.querySelector('#elem');
    // setInterval(function() {
    // 	elem.value = Number(elem.value) - 1;
    // }, 1000);


// 313<3> 

    // let elem = document.querySelector('#elem');
    // let timerId = setInterval(function() {
    // 	elem.value = Number(elem.value) - 1;
    // 		if (elem.value <= 0) {
    // 		clearInterval(timerId);
    // 	}
    // },1000);


// 314<1>

    // let elem = document.querySelector('#elem');
    // elem.addEventListener('click', function() {
    // 	let self = this;
    // 	setInterval(function() {
    // 		self.value = Number(elem.value) + 1;
    // 	}, 1000);
    // });


// 314<2> 

    // let elem = document.querySelector('#elem');
    // elem.addEventListener('click', function() {
    // 	setInterval(() => elem.value = Number(elem.value) + 1, 1000);
    // });


// 314<3>

    // let elem = document.querySelector('#elem');//получаем ссылку 
    // elem.addEventListener('click', function() { //реакция по клику
    // 	setInterval((function(self) { // внешняя анонимная функция
    // 		return function() { //внутренняя анонимная функция, воспроизводит 1 каждую секунду
    // 			console.log(self.value);//выводит значения атрибута в консоль
    // 		}
    // 	})(this), 1000);//функция срабатывает каждую секунду. Таймер функции
    // });


// 315<1> 

    // let elem = document.querySelector('#elem');
    // elem.addEventListener('click', function() {
    // 	setInterval(function(self) {
    // 		self.value--;
    // 	}, 1000, this);
    // });


// 316<3> 

    // let start = document.querySelector('#start');
    // let input = document.querySelector('#input');
    // let timerId;
    // start.addEventListener('click', function() {
    //     timerId = setInterval(function() {
    //         input.value = +input.value * +input.value;
    // 	}, 1000);
    // });


// 316<4> 

    // let p = document.querySelector('p');
    // let input = document.querySelector('#input');
    // let timerId;
    // input.addEventListener('blur', function() {
    //     p.textContent = input.value; 
    //     timerId = setInterval(function() {
    //         if(+p.textContent > 0 ){
    //             p.textContent = +p.textContent - 1; 
    //         }else{
    //             	clearInterval(timerId);
    //         }
    // 	}, 1000);
    // });


// 316<5>

    // let p = document.querySelector('p');
    // let start = document.querySelector('#start');
    // let input = document.querySelector('#input');
    // let timerId;
    // start.addEventListener('click', function() {
    //     p.textContent = input.value; 
    //     timerId = setInterval(function() {
    //         if(+p.textContent > 0 ){
    //             p.textContent = +p.textContent - 1; 
    //         }else{
    //             	clearInterval(timerId);
    //         }
    // 	}, 1000);
    // });


// 316<6> 

    // let p = document.querySelector('p');
    // let start = document.querySelector('#start');
    // let stop  = document.querySelector('#stop');
    // let timerId;
    // start.addEventListener('click', function() {
    // 	let i = 1;
    // 	timerId = setInterval(function() {
    // 		p.textContent = i++;
    // 	}, 1000);});
    // stop.addEventListener('click', function(){
    // 	clearInterval(timerId);
    // });


// 316<7>

    // let p = document.querySelector('p');
    // let k = 0;
    // setInterval(function(){
    //     k++;
    //     if(k % 2 == 0){
    //         p.setAttribute('class','colored');
    //     }else{
    //         p.setAttribute('class','colorgreen');
    //     }
    // }, 1000)


// 316<8>

    // let p = document.querySelector('p');
    // setInterval(function(){
    //     let date = new Date();
    //     let num = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
    //     p.textContent = num;
    // })