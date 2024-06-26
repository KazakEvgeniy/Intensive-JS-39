
// 1) HTTP Методы:

// GET-используется для запроса данных от указанного ресурса.

// POST-используется для отправки данных на сервер для создания/обновления ресурса.

// PUT-используется для отправки данных на сервер для создания / обновления ресурса.

//    Разница между POST и PUT заключается в том, что PUT-запросы являются идентичными. То есть, вызов одного и того же запроса PUT несколько раз всегда будет приводить к одному и тому же результату. Напротив, вызов POST-запроса неоднократно имеет побочные эффекты от создания одного и того же ресурса несколько раз.

// HEAD-почти идентичен GET, но без тела ответа.
//    Другими словами, если GET/users возвращает список пользователей, то HEAD/users сделает такой же запрос, но не вернет список пользователей. Запросы HEAD полезны для проверки того, что будет возвращен запрос GET, перед тем, как фактически выполнить запрос GET, например, перед загрузкой большого файла или тела ответа.

// DELETE-удаляет указанный ресурс.

// PATCH-метод для частичного изменения сущности на сервере. Как правило содержит в себе информацию для
// изменений на сервере. Также, как и POST-запрос, имеет тело.

// OPTIONS - это метод протокола HTTP (наряду с GET, POST, HEAD и т.д.)

//    Он используется для описания параметров соединения с целевым ресурсом (обнаружение поддерживаемых сервером фич). Метод позволяет клиенту определять опции и/или требования, связанные с ресурсом, но не производя никаких действий над ним и не инициируя его загрузку.

//  Синтаксис:

//    OPTIONS /index.html HTTP/1.1 - так указывается особый URL для обработки,

//    OPTIONS * HTTP/1.1 - так указывается сервер целиком.

//  Запрос не имеет тела, успешный ответ - да. Пример успешного ответа:

//     HTTP/1.1 200 OK
//     Allow: OPTIONS, GET, HEAD, POST
//     Cache-Control: max-age=604800
//     Date: Thu, 13 Oct 2016 11:45:00 GMT
//     Expires: Thu, 20 Oct 2016 11:45:00 GMT
//     Server: EOS (lax004/2813)
//     x-ec-custom-error: 1
//     Content-Length: 0

// Запрос является безопасным и идемпотентным.




// 2) Ключевые особенности "HTTP" Версии 3.0

// /HTTP/3 - официальный стандарт HTTP, который вышел в августе 2020 года. Он позволяет использовать большее количество потоков, чем HTTP/2.

// HTTP и HTTP/2 использует TCP как нижележащий слой. TCP несовершенен, его главные проблемы:

// TCP требует рукопожатие для установки нового соединения, чтобы проверить, что клиент и сервер существуют и готовы обмениваться данными. Нужно сделать полный круговой путь по сети, прежде чем можно будет делать что-то ещё.

// TCP видит все данные, которые передает, как один «файл», или поток байтов, даже если передаются несколько файлов одновременно (например, загружается страница с несколькими ресурсами). Это означает, что потеря пакетов TCP с данными одного файла приводит к тому, что все остальные файлы будут ждать восстановления этих пакетов.

// На смену TCP пришел QUIC (который работает поверх UDP), и для того, чтобы адаптироваться к нему, пришлось некоторым образом изменить HTTP/2 и ввести HTTP/3. HTTP/3 похож по синтаксису и семантике на HTTP/2. HTTP/3 следует той же последовательности обмена сообщениями запроса и ответа с форматом данных, который содержит методы, заголовки, коды состояния и тело.

// В отличие от упорядоченной схемы обмена сообщениями TCP, UDP (а значит и QUIC) допускает многонаправленное транслирование рассылки сообщений, что помогает решать проблемы блокировки заголовка строки (HoL) на уровне пакетов. Кроме того, QUIC изменил способ установления связи между клиентом и сервером, уменьшив задержку, связанную с повторяющимися соединениями. HTTP/3 также использует новый механизм сжатия заголовков.


// 3) Способы отмены запроса:

// XMLHttpRequest:

// -До появления fetch мы использовали XMLHttpRequest, у него был метод abort(). Достаточно сохранить ссылку на экземпляр реквеста и в нужное время вызвать метод


// Axios:
// В axios для закрытия промиса мы можем передать параметр cancelToken.


// Fetch:

// Для fetch есть похожее api — AbortController. Пример использования:

//   let controller = new AbortController();
// fetch(url, {
//   signal: controller.signal
// });

// controller.abort();


// Отдельно можно использовать некоторые свойства и методы свойства signal.


// let controller = new AbortController();
// let signal = controller.signal;

// // срабатывает при вызове controller.abort()
// signal.addEventListener('abort', () => alert("отмена!"));

// controller.abort(); // отмена!

// alert(signal.aborted); // true


// 4. Создание примитивных значений:


// String:

let str1 = "Hello";//с помощью двойных кавычек,одинарных и косых (бэктики)
let str2 = String("Hello");
let str3 = toString(25);
let str4 = 5 + '';//при сложении со строкой

console.log(typeof str1, typeof str2, typeof str3, typeof str4);

// number

const num2 = 25;
const unPlus = +'25';

const answer = +prompt('Сколько вам лет?', "");

//всё что мы будем получат от пользователей-всё юудет типом данных string!!!!

//3.parseInt()..

console.log(typeof (parseInt('привет', 10)));//второй аргумент указывает на десятичную систему,это не совсем очевидное преобразование методами..

let str = '20px';
let newstr = parseInt(str);
console.log(typeof newstr)



console.log(typeof num1, typeof num2, typeof unPlus);




// boolean

console.log(typeof (Boolean('10')));//boolean
console.log(typeof (!!'10'));//boolean
console.log(typeof (!'10'));//boolean
console.log(Boolean('10'));//true
console.log(Boolean(''));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(0));//false
console.log(Boolean(1));//true
//операторы &&   ||   !    !!-Всегда возвращают тип даннных boolean


null

let nullValue = null;
const answer2 = prompt('Сколько вам лет?', "");//если пользовательничего не ввел или же значение от сервера

undefined

let undefinedValue = undefined;
let x;//отдаёт значение в случае когда у переменной не присвоено значение

function getMessage() {
	console.log('mess');
}//любая функция должна возвращать что-то,в данном примере без return будет undefined

symbol

let id = Symbol();

// Можно создать и прямо в объекте

const user = {
	name: 'test',
	[Symbol('id3')]: 2
}


bigInt

console.log(Number.MAX_SAFE_INTEGER);
const numberBigint = 2n;
const someBgin = BigInt(5191949149494949441848887445165);



// Почему, если обратиться к переменным созданным через let, const до их объявления, мы получаем ReferenceError?

// Объект ReferenceError представляет ошибку, возникающую при обращении к переменной, которая не существует (или не была инициализирована) в текущей области видимости.

// У объявлений let/const существует специфическое ошибочное поведение, называемое временной мертвой зоной (TDZ, Temporal Dead Zone): переменные появляются, но не могут использоваться.



// Решить: 

const res = "B" + "a" + (1 - "hello");
(1 - "hello")//не математическое действие, вернёт NaN
"B" + "a"//обычная канкатинация
"Ba" + NaN //при сложении со строкой,всегда получим строку
"BaNaN";


const res2 = (true && 3) + "d";
(true && 3)// оператор && останавливается на  false,в данном случае вернёт последнее значение
3 + "d"//канкатинация,вернёт строку
"3d"

const res3 = Boolean(true && 3) + "d";
Boolean(true && 3)//приведёт к типу данных boolean,в данном примере остановится на 3-это true
true + "d"//вернёт строку

