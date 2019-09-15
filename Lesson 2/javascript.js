/* Задание
Дописать нашу программу по видео.
0) Дописать else для возвращения на цикл обратно
1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
2) Проверить, чтобы все работало и не было ошибок в консоли
3) Добавить папку со вторым уроком в свой репозиторий на GitHub */

'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

 for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = +prompt("Во сколько обойдется?","");  

       if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b) != null)
        && a!="" && b !="" && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b; 
        } 
        //нужно вернуться на цикл обратно
        else {
            i--;
        }
    };


// Convert for() in do{}while
// let a, 
// b;
// do {
//     a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//     if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null
// && a != "" && b != "" && a.length < 50)   {
//     console.log("done");
//         appData.expenses[a] = b;
// }else{
// continue;
// }
//     }
// while (Object.keys(appData.expenses).length < 2);


//Convert for() in while{}
// let a,
//     b;
// while (Object.keys(appData.expenses).length < 2) {
//     a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null
//         && a != "" && b != "" && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// }

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

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