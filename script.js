// ------------------------------------- Variables 

// Переменные дают возможность повторного доступа к значениям

// Имена переменных

// Рекомендации, как называть переменные:

// PascalCase(типы и классы), DB_PASSWORD(значения известны до запуска приложения и не меняются)

// camelCase (все остальные переменные, используется чаще всего)

// Названия переменных должны быть понятными

// Объявление переменных 

// let, const - ECMAScript 6

// var - устарело

// let a (объявление)

// const c = 10 (объявление и присваивание)

// a = true (присваивание)

// let - эта переменная позволяет переприсваивать значение 

// const - только один раз, новое значение нельзя присвоить в дальнейшем

// Практика

// let myName

// myName = 'Vova'

// console.log(myName)

// const myName

// myName = 'Michael'

// Тип переменной определяется типом присвоенного значения

// const a = 10

// const b = 'abc'

// Типы: примитивные и ссылочные

// Переменная > имеет значение > значение имеет тип

// Примитивные типы: string (строка), boolean (логический), number (число)
// null(значение отсутствует), undefined(неопределенное значение), symbol (символ)

// Ссылочный тип: object (объект)

// Значения примитивных типов:

// 'Hello World', undefined, true, 25 - примитивные типы

// {
// 	a: 10
// 	b: true
// } 

// [1,2,3] - массивы это тоже объекты

// - ссылочный тип


// Статическая типизация:

// String a = 'abc'

// int b = 10

// b = 'xyz' // Error


// Динамическая типизация:

// a = 'abc' // string

// a = 10 // number

// JS - динамически-типизированный язык

// let a = 10

// a = true

// a = 'Vova'

// a = undefined

// !!!Все переменные объявлять перед их использованием

// !!!Стараться использовать const везде, где это возможно

// ----------------------------------------------------------------------------

// ------------------------------------------- Objects 

// Практически все сущности в JS - объекты

// Объект - это набор свойств 'имя: значение'

// Объект - тип значений

// Объект - тип переменных

// const myCity = {
	// city: 'Los Angeles'
	// popular: true,
	// country: 'USA'
// }

// Получение значений свойств в объектах:

// const myCity = {
	// city: 'Los Angeles'
	// popular: true,
	// country: 'USA'
// }

// console.log(myCity.city)
// 'Los Angeles'

// console.log(myCity.popular)
// true

// Изменение значений свойств объектов

// const myCity = {
// city: 'Los Angeles'
// }

// myCity.city = 'New York'

// console.log(myCity)
// {city: 'New York'}


// Добавление новых свойств

// const myCity = {
// city: 'Los Angeles'
// }

// myCity.popular = true

// console.log(myCity)
// {city: 'Los Angeles', popular: true}

// myCity.country = 'USA'

// console.log(myCity)
// {city: 'Los Angeles, popular: true, country: 'USA'}

// Удаление свойств в объекте

// const myCity = {
	// city: 'New York',
	// popular: true,
	// country: 'USA'
// }

// delete myCity.country
// console.log(myCity)
// {city: 'New York', popular: true}

// Вложенные свойства

// const myCity = {
// 	city: 'New York',
// 	info: {
// 		isPopular: true,
// 		country: 'USA'
// 	}
// }

// console.log(myCity.info.isPopular)

// delete myCity.info['isPopular'] - квадратные скобки использовать, в случае, если нужно использовать выражение
// в остальных использовать точечную запись

// console.log(myCity)
// {city: 'New York', info: {country: 'USA'}}

// Использование переменных

// const name = 'Vova'
// const postsQty = 23

// const userProfile = {
// name,
// postsQty,
// hasSignedAgreement: false
// }

// Сокращенные свойства рекомендуется размещать в начале объекта

// Глобальные объекты:

// window - веб браузеры

// global - Node.js

// Унифицированный глобальный объект

// globalThis

// Свойства глобальных объектов 

// console

// window.console

// global.console

// Методы объекта

// Метод - свойство объекта, значение которого - функция

// const myCity = {
// 	city: 'New York',
// 	cityGreeting: function () {
// 		console.log('Greetings!')
// 	}
// }

// myCity.cityGreeting()
// 'Greetings!'

// Сокращенный формат записи методов

// const myCity = {
// 	city: 'New York',
// 	cityGreeting() {
// 		console.log('Greetings!')
// 	}
// }

// myCity.cityGreeting() - вызов метода
// 'Greetings!'

// JSON - Javascript Object Notation

// JSON.parse() - конвертация JSON в объект

// JSON.stringify() - конвертация объекта в JSON, для передачи данных на сервер

// const post = {
// 	title: 'my post',
// 	likesQty: 5
// }

// post

// JSON.stringify(post)

// const postStringified = JSON.stringify(post)

// JSON.parse(postStringified)

// JSON формат передачи данных между компьютерами в интернете

// ---------------------------------------- Мутация в JavaScript

// Копирование значения (copy by value)

// const a = 10

// let b = a

// b = 30

// console.log(a) // 10

// console.log(b) // 30

// Значения ссылочного типа

// const person = {
// 	name: 'Vov',
// 	age: 21
// }

// person.age = 22
// person.isAdult = true

// console.log(person.age) // 22
// console.log(person.isAdult) // true

// Мутирование копий

// const person = {
// 	name: 'Vov',
// 	age: 25
// }

// const person2 = person - копирование ссылки (copy by reference)

// person2.age = 26
// person2.isAdult = true

// console.log(person.age) // 26
// console.log(person.isAdult) // true

// Как избежать мутаций:

// Var 1:

// const person = {
// 	name: 'Vov',
// 	age: 25
// }

// const person2 = Object.assign({}, person)

// person2.age = 26

// console.log(person2.age) // 26
// console.log(person.age) // 25

// Var 2:

// const person = {
// 	name: 'Vov',
// 	age: 25
// }

// const person2 = { ...person} - ссылки на вложенные объекты сохраняются

// '...' - оператор разделения объекта на свойства

// person2.name = 'Alice'

// console.log(person2.name) // Alice
// console.log(person.name) // Vov

// Var 3:

// const person = {
// 	name: 'Vov',
// 	age: 25
// }

// const person2 = JSON.parse(JSON.stringify(person))

// ссылки на вложенные объекты не сохраняются

// person2.name = 'Alice'

// console.log(person2.name) // Alice
// console.log(person.name) // Vov