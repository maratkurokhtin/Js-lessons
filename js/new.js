'use strict'; // Эта запись пишеться в первой строке кода и означает что мы пишем на стандарте ES6. И некоторые ошибки кода работать не будут. Не работает в ИЕ9 и ниже

let a = 5;
console.log(a);

//const obj = {
//    name: "Alex"
//};

//const arr = [1, 4, 6, 3];


/* 4. Динамическая типизация даных.

// Старый способ

 //console.log(typeof(String(4)));

// Cпособ 2
//console.log("www" + 5);

// Превращение типов данных в строку. Надо спереди поставить строку(можно пустую) и сложить ее с перменной.
 console.log(typeof("www" + false));

// Преобразование типо вданнх в число

//Способ 1
console.log(typeof(Number('4')));

// Способ 2. Унарный плюс. Ставим плюс перед строкой. Поставив перед любым типом данных плюс мы превращаем его в число.
console.log(typeof(+'4'));

// Можно сложить числа 

console.log(typeof(5 + +'4'));
console.log(5 + +'4');

// Превращаем строку в число c помощью команды parseInt()
console.log(typeof(parseInt('15px', 10)));

//Все что мы получаем от пользователя из тегов Input - строка. Поэтому перед переменной ставим просто плюс

// let ans = +prompt("Укажите свой возраст", '');

// логические данные
// 0, '', null, undefined, NaN - Это все false
//1-й способ получить булиновое число придать переменной проверку if 

let switcher = null;

if (switcher){
    console.log("Warking..")
}

switcher = 1;

if (switcher){
    console.log("Warking..")
}

// 2 способ получить булиновое значение.

console.log(typeof(Boolean('15'))); // этот способ испольузется редко.

// 3 способ получить булиновое значение. поставить перед типом данных два восклицательных знака

console.log(typeof(!!'15')); // этот способ испольузется редко.


4 Динамическая типизация данных */

//alert('Привет мир!'); // Самое простое модальное окно. Останавливает все скрипты до нажатия кнопки Ок.
// confirm("Тебе уже есть 18?");
// let messege = confirm ('Тебе уже есть 18?');
// console.log(messege);

//  let answer = +prompt('Напиши свое имя', 'Имя');
// //  console.log(answer);
// console.log(typeof(answer));

// console.log('строка1 ' + 'строка 2'); // складываем строки
// console.log(4 + ' строка 2'); // складываем число и строку, превращаем все в строку.

// ***************** ОПЕРАТОРЫ

let incr = 10, // Можно после объявления let объявлять переменные через запятую, но вконце точка с запятой.
    decr = 10;


console.log(incr++);
console.log(decr--);

console.log(530%222);// остаток от деления

// = Одно равно, это приравнивание
// == Двойное равно, это проверка на равенство
// === Тройное равно, сравнение по типам данных

console.log("2" == 2) ; // дает true потому что в обоих случаях двойки.
console.log("2" === 2) ; // дает false потому что слева строка а справа цифра.

// && - и 
// || - или

let isChacked = true,
    isClose = false;

console.log(isChacked || isClose);
console.log("Уже с коммитом!");

//Работаем с пользователем.
// let myVar = 5;
// console.log('Изначальное значение - ' , myVar);

// let newVar = confirm('Прибавить единицу');

// if (newVar){
//     myVar ++;
// }
// else myVar --;

// console.log('Новое значение - ' , myVar);
console.log((3 > 2) > 1);