'use strict';

// if (2*4 == 9){
//     console.log('Условие верное!');
    
// } else{
// console.log('Условие НЕверное!');
// }

let num = 50;

// if записывается с такими так
if(num < 49){
    console.log('Условие НЕверное!');
}

// else if записывается с такими скобками
else if (num > 100){
    console.log('Много');
} else {
    console.log('Условие верное 1!');
}

// Второй вид записи условий.
(num == 50) ? console.log('Условие верное 2!') : console.log('Условие НЕверное!');

// услови Swithc
num = 50;

switch (num){  // проверяем переменную num
    case 49:      // выражение case заменяет if, после двоеточия пишем действие, при выполнении условия.
        console.log('switch Неверно');
        break;
    case 100:
        console.log('switch Много');
        break;
    case 80:
        console.log('switch Много');
        break;
    case 50: // тут надо записывать не с двумя знакамим равно num == 50 а просто записываем это значение 50, которое ищем.
        console.log('switch Верно');
        break;
    default:
     console.log('Дефолт. что-то пошло не так.');
        break;

}

// switch можно использовать только для конкретных вариантов а не для сравнение, больше, меньше и т.д.
let city = 50000;
switch (city){
    case 10000 :
        console.log('поселок');
        break;
    case 50000 :
        console.log('маленький город');
        break;
    case 100000 :
        console.log('средний город');
        break;
    case 500000 :
        console.log('большой город');
        break;
    default :
        console.log('результат неизвестен');

}

(city == 10000) ? console.log('Кол-во верно') : console.log('Не верно нифига');