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
1. Изменена структура Mainpage для правильного отображения карусели. Так же изменена логика работы кнопки добавления новой карточки для правильной работы с каруселью.
```js
 getHTML() {
        return `
        <div id="top-controls" class="container mt-3 text-center">
            <div id="logo-container"></div>
            <div id="buttons-container" class="d-flex justify-content-center gap-2 mt-2"></div>
        </div>

        <div id="carousel-wrapper" class="mt-4">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" style="max-width: 600px; margin: 0 auto;">
                <div class="carousel-inner" id="carousel-items-container">
                    </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span>
                </button>
            </div>
        </div>
    `;
    }
    clickAdd(data) {
        const newData = { ...data, id: MainPage.nextId++ };
        MainPage.cardsData.push(newData);
        this.render();

    }

    render() {
        this.parent.innerHTML = '';
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        const logoRoot = document.getElementById('logo-container');
        const buttonsRoot = document.getElementById('buttons-container');
        const carouselRoot = document.getElementById('carousel-items-container');
        const logo = new LogoComponent(logoRoot);
        logo.render();
        const badd = new ButtonComponent(buttonsRoot);
        badd.render(MainPage.cardsData[0], this.clickAdd.bind(this));
        const deleteLastBtn = new DeleteLastComponent(buttonsRoot);
        deleteLastBtn.render(this.clickDeleteLast.bind(this));
        MainPage.cardsData.forEach((item, index) => {
            const productCard = new ProductCardComponent(carouselRoot);
            productCard.render(item, this.clickCard.bind(this), index === 0);
        });
    }
```
2. Для работы с каруселью переделан ProductCardComponent, теперь это carousel-item. Так же идет проверка на 0 идекс для правильного отображения этой карусели.
```js
    render(data, listener, isActive) {
        const html = this.getHTML(data, isActive);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
    getHTML(data, isActive) {
        return `
            <div class="carousel-item ${isActive ? 'active' : ''}">
                <div class="card mx-auto" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                    <div class="card-body text-center">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}" style="background-color: red; border-color: red;">Подробнее</button>
                    </div>
                </div>
            </div>
        `;
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
