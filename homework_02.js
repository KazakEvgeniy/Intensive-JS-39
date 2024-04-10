

// Задание 1 – Создать объект counter всеми возможными способами;

const counter = {};//Одним из самых простых способов создания объекта является синтаксис литерала объекта.


//////////////////

const book = new Object({ title: 'Война и мир', author: 'Лев Толстой' });//при помощи new-аналогичен первому


//////////////////

// При помощи функции конструктора и оператора new

function UserCounter2(name, id) {
	this.name = name;
	this.id = id;
	this.hello = () => {
		console.log(`Привет ${this.name}`);

	};
}

const userOne = new UserCounter2('Joey', 1);
const userTwo = new UserCounter2('Chandler', 2);


console.log(userOne, userTwo);

///////////////////

// Команда Object.create() позволяет создавать новые объекты с заданным объектом-прототипом. Эта команда используется в JavaScript для реализации механизма одиночного наследования.

// Object.create(proto)
// Object.create(proto, propertiesObject)

const user = {
	name: 'Joey',
	age: 34
};

const newObj = Object.create(user);//первый аргумент это прототип(что будет наследоваться для созданного объекта)

console.log(newObj.name);


const newObj2 = Object.create({
	name: 'Joey',
	age: 34
});

console.log(newObj2.name, newObj2.age);


// В качестве второго параметра передаётся объект где мы можем указать поля для данного объекта


const persone = Object.create({}, {
	//можем настраивать эти поля передавая PropertyDescriptor
	name: {
		value: "Joey",//поле является объектом,для того чтобы задать значение ключу name,записываем в value
		enumerable: true// (поддающийся перечислению) по умолчанию false
	},
	age: {
		value: 35,
		writable: true//по умолчанию в false-говорит о том что поля нельзя изменять
	},
	surname: {
		value: "Tribbiani",
		configurable: true// (параметр говорит о том что мы можем удалять какой-либо ключ из объекта) по умолчанию false
	},
	user: {
		get() {
			return `Hello ${this.name}`
		},
		set(value) {
			console.log('Set age', value);
		}
	}
});


//эти поля не будут входить в итерацию цикла если явно не установить свойства Descriptor
// enumerable: true (поддающийся перечислению) по умолчанию false
for (let key in persone) {
	console.log(persone[key]);
}

// writable: true//по умолчанию в false-говорит о том что поля нельзя изменять
persone.age = 40;
console.log(persone.age);

// configurable: true (параметр говорит о том что мы можем удалять какой-либо ключ из объекта) по умолчанию false
delete persone.surname
console.log(persone.surname);//undefined

console.log(persone.user);//Hello Joey (свойство геттера)

persone.user = 'Nick';
console.log(persone.user);


// ЗАДАНИЕ 2 – Скопировать объект counter всеми возможными способами;


const counterBox = {
	haight: 1024,
	weigt: 1024,
	color: {
		border: 'red',
		background: 'black'
	},
	optionTest: function () {
		console.log('something test');
	}
};

//////1 создать функцию

function objCopy(obj) {
	const newObj = {};
	for (let key in obj) {
		newObj[key] = obj[key];
	}
	return newObj;
}

console.log(objCopy(counterBox));//поверхностная копия,так же можно через условия,проверять на typeOf,или через рекурсию и делать глубокие копии,не очень оптимально если есть большие вложеннсти 

/////2 Object.assign

const objCopy2 = Object.assign({}, counterBox);//копирует в первый аргумент,второй переданный,если ничего не передано в первый создаёт новый

console.log(objCopy2);//поверхностная копия


/////3 Spread

const objCopy3 = { ...counterBox };

console.log(objCopy3);//поверхностная копия


/////4 JSON


const objCopy4 = JSON.parse(JSON.stringify(counterBox));//глубокая копия

console.log(objCopy4);//глубокая копия


/////5 Lodash DeepClone-используя сторонние библиотеки

////6  structuredClone

// structuredClone(value) Объект, который нужно клонировать. Это может быть любой структурированный клонируемый тип .
// structuredClone(value, options)

// options Необязательный
// Объект со следующими свойствами:

// transfer
// Массив передаваемых объектов , которые будут перемещены, а не клонированы в возвращаемый объект.

const calendarEvent = {
	title: "Builder.io Conf",
	date: new Date(123),
	attendees: ["Steve"]
}


const copied = structuredClone(calendarEvent);

console.log(copied);


// ЗАДАНИЕ 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {
	console.log('Function Declaration');
};

let makeCounter2 = function () {
	console.log('Function Expression');
};

let makeCounter3 = () => {
	console.log('arrow function');
};

; (function makeCounterIIFE() {
	console.log('Это самовызывающаяся функция');
}())




// Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:

const obj1 = { here: { is: "on", other: "3" }, object: 'Z' };

const obj2 = { here: { is: "on", other: "2" }, object: 'Z' };



const deepEqual = (object1, object2) => {

	// получаем ключи двух объектов в качестве массива

	const objKeys1 = Object.keys(object1);
	const objKeys2 = Object.keys(object2);

	// сравниваем длину массивов,если не равна возвращаем false

	if (objKeys1.length !== objKeys2.length) return false;

	// перебираем ключи массиова [ 'here', 'object' ], их значения

	for (let key of objKeys1) {
		const value1 = object1[key];//{ is: 'on', other: '3' } / 'Z'
		const value2 = object2[key];//{ is: "on", other: "2" } /'Z'

		// проверяет что значение перебираемого объекта не пустые,т.е есть примит тип данных,либо объект функцией isObject

		const isObjects = isObject(value1) && isObject(value2);//{ is: 'on', other: '3' } != null и typeof object === "object"


		// isObjects-вернёт true если значения не null или typeof object === "object",первый случай
		// !isDeepEqual(value1, value2)-делает рекурсионный вызов с вложенными свойствами что даст false 



		if ((isObjects && !deepEqual(value1, value2)) || (!isObjects && value1 !== value2)) {
			return false;
		}

		// 1 object != null && typeof object === "object" // 1 isObjects { is: 'on', other: '3' }=={ is: "on", other: "2" } =>true

		// 2 !isDeepEqual(value1, value2))=>{ is: 'on', other: '3' } и { is: "on", other: "2" } =>переберет ключи [is,other] =значения ключей  'on' "3" и 'on' "2"

	}
	return true;
};

const isObject = (object) => {
	return object != null && typeof object === "object";
};


console.log(deepEqual(obj1, obj2));



// Бонус 
// Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
	return str
		.split('')
		.reverse()
		.join('');

	// return [...str].reverse().join('')
}

console.log(reverseStr('Hello'));

////////////////////////////


// Метод JSON.stringify()

const obj3 = { here: { is: "on", other: "2" }, object: 'Z' };

const obj4 = { here: { is: "on", other: "2" }, object: 'Z' };

console.log(JSON.stringify(obj3) === JSON.stringify(obj4));//сравнивает строки,потому если поменять поля местами будет false






// Задание 4 - прочитать и описать работу глобальной функции structuredClone()




// const myDeepCopy = structuredClone(myOriginal);

const mainObj = {
	haight: 1024,
	weigt: 1024,
	color: {
		border: 'red',
		background: 'black'
	},
	// optionTest: function () {
	// 	console.log('something test');
	// }
};

const copyObj = structuredClone(mainObj);

console.log(copyObj);



// Возможности и ограничения
// Структурированное клонирование устраняет многие (хотя и не все) недостатки метода JSON.stringify(). Структурированное клонирование может работать с циклическими структурами данных, поддерживает множество встроенных типов данных и, как правило, является более надежным и часто более быстрым.

// Тем не менее, у него все еще есть некоторые ограничения, которые могут застать вас врасплох:

// Прототипы: если вы используете structuredClone() с экземпляром класса, то в качестве возвращаемого значения вы получите обычный объект, поскольку при структурированном клонировании цепочка прототипов объекта отбрасывается.
// Функции: если ваш объект содержит функции, они будут тихо отброшены.
// Неклонируемые: некоторые значения не подлежат структурированному клонированию, в частности, Error и узлы DOM. Это приведет к выбросу structuredClone().
// Если какое-либо из этих ограничений является препятствием для вашего варианта использования, такие библиотеки, как Lodash, по-прежнему предоставляют пользовательские реализации других алгоритмов глубокого клонирования, которые могут соответствовать или не соответствовать вашему варианту использования.



