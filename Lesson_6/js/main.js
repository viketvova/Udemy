// Получить кнопку "Начать расчет" через id
let buttonStart = document.getElementById("start"),
//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)  
    input = document.querySelectorAll(".expenses-item"),
//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
    button = document.getElementsByTagName("button"),
    buttonFirst = button[0],
    buttonSecond = button[1],
    buttonThird = button[2],
//· Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpenses = document.querySelectorAll(".optionalexpenses-item"),
//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    chooseIncomeLabel = document.querySelector("#income"),
    checkbox = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");
//Получить все блоки в правой части программы через классы (которые 
//имеют класс название-value, начиная с и заканчивая )
    budget = document.getElementsByClassName("budget-value");
    daybudget = document.getElementsByClassName("daybudget-value");
    level = document.getElementsByClassName("level-value");
    expenses = document.getElementsByClassName("expenses-value");
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value");
    income = document.getElementsByClassName("income-value");
    monthsavings = document.getElementsByClassName("monthsavings-value");
    yearsavings = document.getElementsByClassName("yearsavings-value");
   
//Проверить, чтобы все работало и не было ошибок в консоли 
console.log(buttonStart);
console.log(input);
console.log(button);
console.log(buttonFirst);
console.log(buttonSecond);
console.log(buttonThird);
console.log(optionalExpenses);
console.log(chooseIncomeLabel);
console.log(checkbox);
console.log(sum);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);
console.log(budget);
console.log(daybudget);
console.log(expenses);
console.log(optionalexpenses);
console.log(income);
console.log(monthsavings);
console.log(yearsavings);