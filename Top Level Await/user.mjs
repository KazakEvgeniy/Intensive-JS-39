// let users;
// 1 вариант -при экспорте в user-undefined
// (async () => {
// 	const url = 'https://jsonplaceholder.typicode.com/users';
// 	const response = await fetch(url);
// 	users = await response.json();
// })();

// export { users };

// 2 вариант-экспорт users и по дефолту функцию,которая возвращает промис

// let users;

// export default (async () => {
// 	const url = 'https://jsonplaceholder.typicode.com/users';
// 	const response = await fetch(url);
// 	users = await response.json();
// })();

// export { users };

// 3 вариант Использование ожидания верхнего уровня

const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export { users };