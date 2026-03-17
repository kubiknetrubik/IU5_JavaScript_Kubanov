# ЛР 3. Простое веб-приложение. Верстка

**Кубанов Сергей ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-данной-лабораторной-работы)
- [Тема](#тема)
- [Сайт для вдохновения](#сайт-для-вдохновения)
- [Дополнительные задания](#дополнительные-задания)
- [План](#план)
- [Задание](#задание)

## Цель данной лабораторной работы 
Знакомство с node, npm, написание простого приложения на JavaScript. В ходе выполнения работы, вам предстоит ознакомиться с кодом реализации простого интерфейса и вывода данных, и затем выполнить задания по варианту.

## Тема
Проезд по транспортной карте «90 минут».

## Сайт для вдохновения
[Метро](https://mosmetro.ru/)

## Дополнительные задания
1. Проверка на Infinity
```js
if(!isFinite(firstNumber)){
            firstNumber=""
}
```
2. Смена знака
```js
 document.getElementById("btn_op_sign").onclick = function () {
        if (!selectedOperation) {
            if (firstNumber !== '') {
                firstNumber = (parseFloat(firstNumber) * -1).toString();
                outputElement.innerHTML = firstNumber;
            }
        } else {
            if (secondNumber !== '') {
                secondNumber = (parseFloat(secondNumber) * -1).toString();
                outputElement.innerHTML = secondNumber;
            }
        }
    };
```
3. Переход по иконке гитхаба
```html
<a href="https://github.com/kubiknetrubik">
      <img src="assets/git.png" alt="git">
</a>
```
4. Цифры в result посрередине
```css
.result {
  width: 220px;
  height: 50px;
  margin-bottom: 15px;
  padding-right: 10px;
  background: rgb(255, 255, 255);
  text-align: right;
  line-height: 50px;
  color: #000000;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #000000;
  border-radius: 25px;

}
```
## План

1. Инструменты для работы
2. Что такое node, npm и package.json
3. Как работать с html в JS
4. Инициализация проекта
5. Создание главной страницы, подключение bootstrap
6. Простая кнопка на JavaScript
7. Структурирование проекта
8. Верстка главной страницы
9. Верстка страницы продукта

## Задание 
Знакомство с node, npm. Верстка интерфейса с карточками (страница списка с фильтрацией и страница подробнее), данные получать через mock объекты (коллекция). Добавить кнопку добавления (копировать первую карточку), кнопку удаления карточки. В хедере на обеих страницах должна быть кнопка Домой
