# ЛР 1. Calculator. HTML/CSS
**Кубанов Сергей ИУ5-44Б**

**Цель** данной лабораторной работы - знакомство с инструментами построения пользовательских интерфейсов web-сайтов: HTML, CSS. В ходе выполнения работы, вам предстоит ознакомиться с кодом реализации простого калькулятора,  и затем выполнить задания по варианту.

**Тема:** Проезд по транспортной карте «90 минут».

**Сайт для вдохновения:** [Метро](https://mosmetro.ru/)

**Дополнительные задания:**
1. Закрытие Overlay на Escape
```js
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    }
    });

```
2. Переход на схему метро по лого
```js
document.getElementById("corner").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_scheme").style.display = 'block';
}
```
```css
.corner-image {
  position: absolute;
  top: 50px;
  left: 30px;

  cursor: pointer;
}
```
## План

1. HTML- разметка
2. Базовая структура HTML-документа
3. Создание проекта
4. Верстка калькулятора
5. CSS
6. Применение CSS к HTML-документу
7. Стилизация верстки калькулятора с помощью CSS
8. Задание