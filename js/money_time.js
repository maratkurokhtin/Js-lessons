'use strict';


let money; // Ваш бюджет на месяц?
let time; // Введите дату в формате YYYY-MM-DD
let appData = {
    budjet : money,
    timeData : time,
};



let optionalExpenses; // объект с НЕобязательными расходами 

let incom; // массив данных с дополнительным расходом

let savings = false; //свойство savings

let firstQestion = prompt ('Введите обязательную статью расходов в этом месяце');
let secondQestion = prompt ('Во сколько обойдется?');

// объект с обязательными расходами
let expenses = {
    firstQestionExpenses : firstQestion,
    secondQestionExpenses : secondQestion,
    };



console.log(expenses.firstQestionExpenses);
console.log(expenses.secondQestionExpenses);
let expensesPerDay = expenses.secondQestionExpenses / 30;
alert('Ваш расход в день составит - ' + expensesPerDay + 'р.');