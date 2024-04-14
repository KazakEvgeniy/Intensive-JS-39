"use strict";


// 1) Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?

// Массивы в JavaScript являются особой разновидностью объектов, которые могут хранить наборы данных в виде упорядоченной коллекции. Однако, по сравнению с массивами в других языках программирования, массивы в JavaScript могут рассматриваться как "неправильные" из-за того, что они совмещают в себе несколько структур данных:

// Упорядоченные списки: В основном массивы в JavaScript функционируют как упорядоченные списки, где каждый элемент имеет свой индекс и доступ к элементам осуществляется по индексу.

// Свойства объектов: Массивы в JavaScript также являются объектами и могут иметь свои собственные свойства и методы, что отличает их от простых упорядоченных списков.

// Динамические массивы: В JavaScript массивы являются динамическими структурами данных, то есть они могут изменять размер во время выполнения программы, добавляя новые элементы или удаляя существующие.

// Ассоциативные массивы: В JavaScript массивы могут быть использованы как ассоциативные массивы, где в качестве индексов могут использоваться не только числа, но и строки или символы. Это позволяет создавать массивы, в которых каждому элементу присваивается уникальный ключ.

// Таким образом, массивы в JavaScript представляют собой универсальную структуру данных, которая может быть использована для различных целей и сочетает в себе особенности нескольких других структур данных, что делает их иногда неправильными с точки зрения классических определений массивов в других языках программирования

// Массивы совмещают в себе следующие структуры данных:

// Стэк
// Очередь
// Двустроннюю очередь
// Упорядоченный список
// Массив в JS гетерогенный (может хранить в себе данные разных типов) и динамический (позволяет изменять длину массива). Реализован как частный случай хэш-таблиц.

//////////////////////////////////

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger(text) {
	console.log(`I output only external context: ${this.item}`);
	console.log(`${text}`);
}

const obj = {
	item: "some value"
};

// через метод call(-первый аргумент-тот объект,к кторому делаем привязку this,последующие-аргументы через запятую,которые передаём

logger.call(obj, 'hello');

//через метод apply() В этом случае аргумены передаются в массиве

logger.apply(obj, ['Hello world']);


//третий метод bind() он создаёт новую функцию связанную с определенным контекстом...

function countLogger(num) {
	return this * num;
}

//создадим переменную в которую поместим новую функцтю...

const double = countLogger.bind(2);//т.е 2 будет передаваться в this

console.log(double(3));
console.log(double(5));

///////////////////////////////////


// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.
// - Создайте массив строк и объедините их в одну строку.
// - Найдите максимальный и минимальный элементы в массиве чисел.

// 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = arr.reduce((a, b) => a + b);

console.log(sum);

// 2

let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
	sum2 += arr[i];
}

console.log(sum2);

// 3

let sum3 = 0;

arr.forEach(item => sum3 += item);

console.log(sum3);


// 4

function sumArray(arr, index) {
	if (index === arr.length) {
		return 0;
	}
	return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray(arr, 0));




// - Создайте массив строк и объедините их в одну строку.


let arrStr = ['H', 'e', 'l', 'l', 'o'];

// 1

console.log(arrStr.reduce((a, b) => a + b));

// 2

let str = '';

for (let i = 0; i < arrStr.length; i++) {
	str += arrStr[i];
}

console.log(str);

// 3 через forEach или map-канкатинировать
// 4 рекурсия


///////////////////////////////////////


// Найдите максимальный и минимальный элементы в массиве чисел.


let arrSomeNum = [2, 15, 42, 3, 55, 47, 62, 54, 14, 35, 8];

const getMinAndMaxNumber = arr => `Min number: ${Math.min(...arr)}, Max number: ${Math.max(...arr)}`;

console.log(getMinAndMaxNumber(arrSomeNum));


function getMinNumber(arr) {
	return Math.min(...arr)
}

console.log(getMinNumber(arrSomeNum));


function getMaxNumber(arr) {
	return Math.max(...arr)
}

console.log(getMaxNumber(arrSomeNum));

// методом сортировки

function findMinAndMaxNumber(arr) {
	let sortArr = arr.sort((a, b) => a - b);
	return `Min number - ${sortArr[0]}, Max number ${sortArr.pop()}`;
}

console.log(findMinAndMaxNumber(arrSomeNum));


////////////////////////////////

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.


// «последний пришел – первым ушел» (LIFO – last in first out).



let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

// Метод pop() удаляет последний элемент из массива и возвращает удалённое значение.Вернёт undefined при пустом массиве

stack.pop();
stack.pop();
stack.pop();

console.log(stack);





// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.


// «первым пришел – первым вышел» (FIFO – first in first out).


let stackQueue = [];

stackQueue.push(1);//[1]
stackQueue.push(2);//[1,2]
stackQueue.push(3);//[1,2,3]

// изменить индексацию всего массива,переопределит т.к меняется длина массива

stackQueue.shift();//return=>1=>[2,3]
stackQueue.shift();//return=>2=>[3]
stackQueue.shift();//return=>3=>[]
console.log(stackQueue.shift());//=>undefined


let someQueue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let id = setInterval(() => {
	let i = someQueue.shift();
	if (i) {
		console.log(i);
	} else {
		clearInterval(id);
	}
}, 500);



// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()


const myObj = {
	name: 'Jack',
};

let myFunc = function (id, city) {
	console.log(`${this.name}, ${id}, ${city}`);
};


// Зписываем метод myBind() в прототип функции.
// При помощи оператора Spread-принимаем любое количество аргументов в функцию myBind вторым аргументом

Function.prototype.myBind = function (obj, ...args) {
	let func = this;

	return function (...newArgs) {//Принимает аргументы переданные в newFunc
		func.apply(obj, [...args, ...newArgs]);
	};
};

let newFunc = myFunc.myBind(obj, 'a_random_id');

newFunc('New York');