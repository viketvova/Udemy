/* Задание
1) Написать проверку, что пользователь может:
· Ввести в дополнительных доходах (chooseIncome) только строку
· Не может оставить строку пустой
· Не может отменить вопрос
2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
· Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)*/

'use strict';
let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");
    
            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b) != null)
                && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            }else {
                i--;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        }
        else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }
        else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?",""),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3;) {
            let j = prompt("Статья необязательных расходов?", "");
            while (j == "" || j == null) {
                j = prompt("Статья необязательных расходов?", "");
            }
            appData.optionalExpenses[++i] = j;
        }
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        }
            while(typeof items == "NaN" || items == null || items == "")
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();
        appData.income.forEach(function(element, i){
            
            console.log("Способы доп. заработка: " + ++i + " - " + element);
            
        })
      
        
    },
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": "+ appData[key]);
    }



