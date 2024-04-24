"use strict";

// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли): 

// 1

new Promise((resolve, reject) => {
	resolve("a");//при вызове функции resolve(arg)-состояние c [[PromiseState]]:"pending" меняется на [[PromiseState]]:"fulfilled"
}).then((res) => {
	return res + "b"; //к строке 'a' прибавляет 'b',возвращает 'ab'
}).then((res) => {   //к 'ab' прибавляет 'c',возвращает 'abc'
	return res + "с";
}).finally((res) => { //Метод принимает один аргумент-функция-колбэк, которая будет вызвана при завершении промис res=>undefined
	return res + "!!!!!!!";
}).catch((res) => {
	return res + "d";//игнорируется,также  функция resolve/reject ожидает только один аргумент (или ни одного). Все дополнительные аргументы будут проигнорированы.
}).then((res) => {
	console.log(res);//в res-строка "abc" выведется в консоль
});

// 2

function doSmth() {
	return Promise.resolve("123");//функция,которая вернёт Promise с результатом,т.е [[PromiseState]]:"fulfilled",[[PromiseResult]]:"123"
}

doSmth()
	.then(function (a) {
		console.log("1", a);//1 и строку "123"
		return a;
	})
	.then(function (b) {
		console.log("2", b); //2 и строку "123"
		return Promise.reject("321"); //вернёт Promise [[PromiseState]]:"rejected",[[PromiseResult]]:"321"
	})
	.catch(function (err) {
		console.log("3", err);//при вызове reject("321"),сразу попадёт в блок catch и выведет в консоль 3 и "321",
	})
	.then(function (c) {//функция resolve/reject ожидает только один аргумент (или ни одного). Все дополнительные аргументы будут проигнорированы.
		console.log("4", c); //4 и undefined
		return c;
	});


// 	3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

const someArr = [10, 12, 15, 21];


function delayedIndexDisplay(arr) {
	arr.forEach((item, i) => {
		setTimeout(() => console.log(i), 3000 * i);
	})

}

delayedIndexDisplay(someArr);


// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

// await может быть использован внутри async function или на верхнем уровне модуля.

// Top Level Await позволяет модулям действовать как большие асинхронные функции: модули ECMAScript могут ожидать ресурсов, заставляя другие модули, которые их импортируют, ждать, прежде чем они начнут оценивать свое тело.


// Варианты использования:

// Динамический импорт

// const strings = await import(`/i18n/${navigator.language}`);
// Инициализация ресурсов

// const connection = await dbConnector();
// Это позволяет модулям представлять ресурсы, а также выдавать ошибки в тех случаях, когда модуль невозможно использовать.

// Резервные варианты зависимостей

// let jQuery;
// try {
//   jQuery = await import('https://cdn-a.example.com/jQuery');
// } catch {
//   jQuery = await import('https://cdn-b.example.com/jQuery');
// }

// Особенности выполнения модуля:

// Выполнение текущего модуля откладывается до тех пор, пока Promise не будет выполнен.
// Выполнение родительского модуля откладывается до тех пор, пока дочерний модуль, вызвавший await, и все его дочерние элементы не экспортируют привязки.
// Сиблинги модуля, а также сиблинги родительского модуля могут продолжать выполнение в том же синхронном порядке — при условии, что в графе нет циклов или других ожидаемых Промисов.
// Модуль, вызвавший await, возобновляет свое выполнение после того, как Промис будет выполнен.
// Родительский модуль и последующие деревья продолжают выполняться в синхронном порядке до тех пор, пока не будет других ожидаемых Промисов.
// Циклические зависимости модулей могут привести к взаимоблокировке.



//БОНУС ЗАДАНИЕ
/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// 	.then(...)
// 	.catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl

// Promise:

// function fetchUrl(url) {
// 	return fetch(url)
// }


// fetchUrl('https://google/com&#39')


// fetch('https://google/com&#39')
// 	.then(data => data.json())
// 	.then(data => console.log(data))


async function fetchUrl(url, count) {

	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		return response.ok ? json : Promise.reject(json);

	} catch (e) {
		return count > 0
			? fetchUrl(url, count - 1)//используем рекурсивный вызов в случае попадания в блок catch
			: Promise.reject(
				`Код ошибки: ${e?.status || 'нет данных'}. ${e?.message || 'Неизвестная ошибка'
				}`
			);
	}
}

console.log(fetchUrl("https://jsonplaceholder.typicode.com/photos/1", 4));