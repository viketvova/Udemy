/* Задание
1) Создать HTML страницу и подключить к ней файл скрипта
2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
·      Первая будет спрашивать "Ваш бюджет на месяц?"
·      Вторая "Введите дату в формате YYYY-MM-DD"
3) Создать объект appData, который будет содержать такие данные:
·      бюджет (передаем сюда переменную из п.2)
·      данные времени - timeData (передаем сюда переменную из п.2)
·      объект с обязательными расходами - expenses (смотри пункт 4)
·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
·      массив данных с доп. доходом - income (оставляем пока пустым)
·      свойство savings (выставляем его как false)
4) Задать пользователю по 2 раза вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
6) Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let money;
do {
    money = Number(prompt("Ваш бюджет на месяц?",""));
}
while(!money);
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let moneySpend;
do {
    moneySpend = prompt("Введите обязательную статью расходов в этом месяце","");
}
while(!moneySpend);
let moneyDrop
// = Number(prompt("Во сколько обойдется?",""));
do {
    moneyDrop = Number(prompt("Во сколько обойдется?",""));
}
while (!moneyDrop);
let moneySpend2;
do {
    moneySpend2 = prompt("Введите обязательную статью расходов в этом месяце","");
}
while (!moneySpend2);
let moneyDrop2;
do {
moneyDrop2 = Number(prompt("Во сколько обойдется?",""));
}
while(!moneyDrop2);
let appData =  {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false};
appData.expenses[moneySpend] = moneyDrop;
appData.expenses[moneySpend2] = moneyDrop2;
alert("Ваш бюджет на 1 день составляет: " + Math.round((appData.budget - (appData.expenses[moneySpend] + appData.expenses[moneySpend2])) / 30) + "грн.");
