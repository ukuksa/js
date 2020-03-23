'use strict';

let money = +prompt("How much you have money in month?");
console.log(money);
var time = new Date;
alert(time.getFullYear() +"-"+ time.getMonth() +"-"+ time.getDay());

let question = +prompt("Введите обязательную статью расходов в этом месяце");
let answer = +prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    expeses: {},
    optionalExpenses: {},
    timeData: time,
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", '');
appData.expenses.a1 = a2;
alert(appData.budget / 30);
