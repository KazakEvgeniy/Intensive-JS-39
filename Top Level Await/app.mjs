
// 1 вариант
// import { users } from './user.mjs';

// function render(users) {
// 	if (!users) {
// 		throw 'The user list is not available';
// 	}

// 	const list = users
// 		.map((user) => {
// 			return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
// 		})
// 		.join('');

// 	return `<ol>${list}</ol>`;
// }

// const container = document.querySelector('.container');
// try {
// 	container.innerHTML = render(users);
// } catch (e) {
// 	container.innerHTML = e;
// }


// 2 вариант

// import promise, { users } from './user.mjs';

// function render(users) {
// 	if (!users) {
// 		throw 'The user list is not available.';
// 	}
// 	let list = users
// 		.map((user) => {
// 			return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
// 		})
// 		.join(' ');

// 	return `<ol>${list}</ol>`;
// }

// promise.then(() => {
// 	let container = document.querySelector('.container');
// 	try {
// 		container.innerHTML = render(users);
// 	} catch (error) {
// 		container.innerHTML = error;
// 	}
// });


// 3 вариант

// В этом случае app.mjs модуль будет ждать user.mjs завершения модуля, прежде чем выполнять его тело.

import { users } from './user.mjs';

function render(users) {
	if (!users) {
		throw 'The user list is not available.';
	}
	let list = users
		.map((user) => {
			return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
		})
		.join(' ');

	return `<ol>${list}</ol>`;
}

let container = document.querySelector('.container');

try {
	container.innerHTML = render(users);
} catch (error) {
	container.innerHTML = error;
}


// несколько вариантов использования:

// Динамический путь к зависимостям

// const words = await import(`/i18n/${navigator.language}`);

// Резервный вариант зависимости

// let module;
// try {
// 	module = await import('https://cdn1.com/module');
// } catch {
// 	module = await import('https://cdn2.com/module');
// }

// Краткое содержание
// Модуль ожидания верхнего уровня действует как asyncфункция.
// Когда модуль импортирует модуль await верхнего уровня, он ожидает завершения модуля await верхнего уровня, прежде чем оценивать его тело.