// обработчик события нажатия на кнопку =
document.getElementById('equal').onclick = function() {
    // получение значений из полей ввода - поле находим по id
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    const sum = a + b;
    // записываем результат в значение элемента (мы будем в калькуляторе записывать в innerHTML)
    document.getElementById('result').textContent = 'Результат: ' + sum;
}