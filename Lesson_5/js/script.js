/* 1) Скачать архив, прикрепленный к уроку (АРХИВ ДЛЯ ДЗ). Внутри папки с 5м уроком создать еще одну, где и выполнить это задание (чтобы не перемешивались)
2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:
· Восстановить порядок в меню, добавить пятый пункт
· Заменить картинку заднего фона на другую из папки img
· Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
· Удалить рекламу со страницы
· Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
3) Проверить, чтобы все работало и не было ошибок в консоли */
'use strict'

let menuTop = document.querySelectorAll(".menu-item"),
    menu = document.querySelector(".menu"),
    ourTitle = document.getElementById("title"),
    commercial = document.querySelector(".adv"),
    column = document.getElementsByClassName("column"),
    askQuestion = document.getElementById("prompt"),
    body = document.querySelector("body");

let li = document.createElement("li");
li.className = "menu-item";
li.textContent = "Пятый пункт"
menu.appendChild(li);

menu.insertBefore(menuTop[2], menuTop[1]);

ourTitle.textContent = "Мы продаем только подлинную технику Apple";

document.body.style.background="url('../img/apple_true.jpg')";

column[1].removeChild(commercial);

askQuestion.textContent = (prompt("Как вы относитесь к технике Apple?"));

console.log(column);
