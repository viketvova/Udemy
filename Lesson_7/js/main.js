// Получить кнопку "Начать расчет" через id
let buttonStart = document.getElementById("start"),
    //Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)  
    expensesItem = document.querySelectorAll(".expenses-item"),
    //Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    //· Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
    //Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    incomeItem = document.querySelector("#income"),
    checkbox = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");
//Получить все блоки в правой части программы через классы (которые 
//имеют класс название-value, начиная с и заканчивая )
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let money, time;

buttonStart.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == " " || money == null) {
        monet = prompt("Ваш бюджет?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1; // потому что январь 0 месяц
    day.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b) != null)
            && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener("click", function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
   
});

countBtn.addEventListener("click", function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        }
        else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        }
        else {
            levelValue.textContent = "Произошла ошибка";
        }
    }else{
        daybudgetValue.textContent = "Произошла ошибка!";
    }
});

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener("click", function() {
    if(appData.savings == true) {
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function() {
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
    
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener("input", function() {
    if(appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let = appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    
};
