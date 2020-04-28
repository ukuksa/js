'use strict';
let money, time;
function start() {
	time = +prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
				
				if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null 
					&& a != '' && b != '' && a.length < 50) {
					console.log("done");
					appData.expenses[a] = b;
				} else {
					console.log ("bad result");
					i--;
				}	
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);

	alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Cредний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высший уровень");
		} else {
			console.log("Ошибка, не верный тип данных");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Введите не обязательную статью расходов в этом месяце", '');
				
				if ( (typeof(a))==='string' && (typeof(a)) != null && a != '' && a.length < 50) {
					console.log("done");
					appData.optionalExpenses[i+1] = a;
				} else {
					console.log ("bad result");
					i--;
				}	
		}
	},
	chooseIncome: function() {
		let check = false;
		while(check == false) {
			let items = prompt("Что принесет доп. доход? (Перечислить через , ");
			if(typeof(items)==='string' && items != '' && typeof(items) != null){
				appData.income = items.split(", ");
				appData.income.push(prompt("Возможно есть что-то еще?"));
				appData.income.sort();
				check = true;
			}else{
				continue;
			}
		}
		appData.income.forEach(function(item, i) {
			alert(i+1 + ", " + item);
		})
	}
};

appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}
