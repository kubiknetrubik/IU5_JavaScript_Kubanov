# ЛР 2. Calculator. JavaScript

**Кубанов Сергей ИУ5-44Б**

**Цель** данной лабораторной работы — знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS, JavaScript. В ходе выполнения работы вам предстоит продолжить реализовывать простой калькулятор, а затем выполнить задания по варианту.

**Тема:** Проезд по транспортной карте «90 минут».

**Сайт для вдохновения:** [Метро](https://mosmetro.ru/)

**Дополнительные задания:**
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

1. Программирование логики с помощью JavaScript
2. Доступ к HTML-элементам из JavaScript
3. Программирование кнопок калькулятора
4. Запуск калькулятора с помощью LiveServer
5. Задание