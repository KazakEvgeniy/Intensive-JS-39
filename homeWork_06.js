

// 1) Почитать про принципы программирования KISS, DRY, YAGNI + почитать про "Антипаттерны" Чистого кода

// принцип программирования KISS

// Аббревиатура KISS расшифровывается «keep it short and simple» — «делай кратко и просто».

// Принцип KISS — это когда вы делаете просто и только то, что просит заказчик или работодатель.
// Принцип KISS — это когда вы пишете код, который будет понятен другим разработчикам даже через десять лет.
// Принцип KISS — это когда вы разбираетесь в задаче и чётко понимаете, когда работу можно считать выполненной.

// Принцип KISS — это когда вы берёте задачу и решаете её простым способом:

// Не подключаете всю библиотеку, если нужна всего пара функций.
// Не закладываете избыточные функции, если о них не просил заказчик.
// Не используете избыточные классы и методы.
// Не перегружаете интерфейс и не делаете сложную бизнес-логику.
// Не выполняете другие действия, если они не влияют на работу проекта.


// принципы программирования DRY

// Принцип программирования DRY (англ. Don’t repeat yourself, в переводе Не повторяй себя) предполагает разделение крупной системы, например, разработанного вами ПО на более мелкие, неповторяющиеся компоненты. Если у вас есть несколько компонентов, выполняющих одни и те же задачи, то согласно принципу DRY следует сократить их количество, в идеале, чтобы каждый компонент не повторялся.

// После того, как систему разделили на компоненты, отвечающие за исполнение четко определенных задач, их можно организовать в классы, что называется модульной архитектурой.

// принципы программирования YAGNI

// You Aren’t Gonna Need It / Вам это не понадобится

// Этот принцип прост и очевиден, но ему далеко не все следуют. Если пишете код, то будьте уверены, что он вам понадобится. Не пишите код, если думаете, что он пригодится позже.

// Этот принцип применим при рефакторинге. Если вы занимаетесь рефакторингом метода, класса или файла, не бойтесь удалять лишние методы. Даже если раньше они были полезны – теперь они не нужны.

// Может наступить день, когда они снова понадобятся – тогда вы сможете воспользоваться git-репозиторием, чтобы воскресить их из мертвых.

// "Антипаттерны" Чистого кода:

let linkAntipatterns = "https://leprosus.medium.com/%D1%81%D0%B0%D0%BC%D1%8B%D0%B5-%D1%85%D0%BE%D0%B4%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B0%D0%BD%D1%82%D0%B8-%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD%D1%8B-8077d1f93";


// 2) Прочитать про способы хранения LocalStorage, SessionStorage и Cookie

// LocalStorage — это объект, предоставляемый браузером, который позволяет хранить данные без срока действия. Это означает, что данные, сохраненные с помощью localStorage, не будут удалены после закрытия браузера и останутся доступными при следующем открытии веб-сайта. LocalStorage идеально подходит для хранения данных, которые необходимо сохранить на длительный срок, например, информации о предпочтениях пользователя.

// Однако есть и недостатки. Во-первых, у localStorage есть ограничение на размер в 5МБ. Во-вторых, данные, хранящиеся в localStorage, не защищены, поскольку они хранятся в виде простого текста.



// SessionStorage
// SessionStorage очень похож на localStorage с тем отличием, что данные, сохраненные в sessionStorage, удаляются после закрытия браузера. Это делает sessionStorage идеальным для хранения данных, которые актуальны только в рамках одной сессии, например, данные формы, которую пользователь заполняет.

// Также у sessionStorage есть те же ограничения, что и у localStorage: ограничение размера и отсутствие защиты данных.


// Session
// В отличие от localStorage и sessionStorage, которые хранят данные на стороне клиента, session хранит данные на сервере. Это означает, что данные session защищены от манипуляций со стороны клиента и не ограничены размером.

// Однако, поскольку данные session хранятся на сервере, они потребляют серверные ресурсы. Кроме того, они доступны только в течение одной сессии, после которой они удаляются.

// Cookies
// Cookies — это небольшие текстовые файлы, которые веб-сайт может записать на компьютер пользователя. Они могут хранить небольшое количество данных (до 4КБ) и имеют срок действия, который можно установить при записи cookie.

// Cookies могут быть доступны на всех страницах сайта и сохраняться между сессиями, что делает их идеальными для идентификации пользователя. Однако они могут быть отключены пользователем, что делает их ненадежным методом хранения.

// В заключение, каждый из этих методов имеет свои преимущества и недостатки, и выбор между ними зависит от конкретной ситуации.





// 3) HTML / CSS - Базовая структура html документа, БЭМ методология

// Базовая структура html документа:

// <!DOCTYPE html>
// <html>
// 	<head>
// 		<!-- служебная информация,мета-данные,подключение скриптов и стилей -->
// 	</head>
// 	<body>
// 		<!-- содержимое сайта -->
// 	</body>
// </html>


// BEM (БЭМ) — это сокращение от «Блок, Элемент, Модификатор» и является методологией разработки веб-приложений, которая позволяет создавать масштабируемые и структурированные проекты. В основе лежит идея разделения кода на независимые блоки, которые легко можно переиспользовать и комбинировать. Блоки. Блоки — это базовые компоненты, из которых состоит интерфейс. Они являются независимыми и могут быть переиспользованы в разных местах проекта.




// 4) Почитать про паттерны функционального программирования + посмотреть примеры использования


const linkFunctionProgramm = "https://doka.guide/js/fp/";


// 5) Способы позиционирования контента на странице


const linkPositionElem = "https://itchief.ru/html-and-css/position";


// 6) Веса селекторов

// Специфичность в css или приоритет селекторов
// Приоритет селекторов
// Когда в CSS имеется несколько правил, устанавливающих одно и тоже CSS свойство некоторому элементу, приоритетным из них является то, в котором селектор имеет большую специфичность (вес).
// Специфичность селекторов удобно представлять в виде 4 чисел: 0,0,0,0.
// При этом сравнение селекторов по весу нужно выполнять слева направо. Если первая цифра одного селектора больше, чем у другого, то он является более специфичным и к элементу будет применяться CSS-свойство, заданное в нём. Если цифры равны, то выполняем сравнение следующих цифр селекторов и т.д.


// Если у сравниваемых селекторов все цифры равны, то будет применяться тот, который ниже из них расположен по коду.
// Как считать эти цифры? Каждый селектор в зависимости от типа имеет вес:
// •	универсальный селектор (не добавляет вес) – 0,0,0,0;
// •	селекторы по тегу, псевдоэлемент добавляют единичку к четвёртой цифре – 0,0,0,1;
// •	селекторы по классу и по атрибуту, псевдоклассы добавляют единичку ко третьей цифре – 0,0,1,0;
// •	селектор по идентификатору добавляют единичку ко второй цифре – 0,1,0,0;
// Стили, расположенные в атрибуте style элемента, являются более специфичными по сравнению с селекторами. Вес этих стилей определяется единицей в первой цифре – 1,0,0,0.



// Например:
// •	* – 0,0,0,0;
// •	li – 0,0,0,1;
// •	li::before – 0,0,0,2;
// •	ul > li – 0,0,0,2;
// •	div input+label – 0,0,0,3;
// •	h1 + div[data-target] – 0,0,1,2;
// •	.btn.show – 0,0,2,0;
// •	ul li a.item – 0,0,1,3;
// •	#aside div.show – 0,1,1,1;
// •	style="..." – 1,0,0,0;
// Повысить важность определённого CSS свойства можно с помощью ключевого слова !important. В этом случае будет использоваться именно данное CSS-свойство.
