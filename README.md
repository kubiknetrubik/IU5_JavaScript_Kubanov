# ЛР 4.Бэкенд на Express.js

**Кубанов Сергей ИУ5-44Б**

## Содержание <!-- omit in toc -->

- [Цель работы](#цель-работы)
- [Тема](#тема)
- [Сайт для вдохновения](#сайт-для-вдохновения)
- [Дополнительные задания](#дополнительные-задания)
- [Порядок показа](#порядок-показа)

## Цель работы
Реализация на Node.js собственного веб-сервиса для API, данные хранятся в json файле. Тестирование через Postman/Insomnia 5 методов: список с фильтрацией, получение одной записи, добавление, редактирование, удаление

## Тема
Проезд по транспортной карте «90 минут».

## Сайт для вдохновения
[Метро](https://mosmetro.ru/)

## Дополнительные задания
1. Разобраться в методах PUT, OPTIONS, HEAD.

2. Написать фильтрацию по тексту.
```js
    const getAllStocks = (req, res) => {
        const { title, text } = req.query;
        const stocks = stocksService.findAll(title, text);
        res.json(stocks);
    };
    const findAll = (title,text) => {
        const stocks = fileService.readData(dataFilePath);
        if (title) {
            return stocks.filter(stock => 
                stock.title.toLowerCase().includes(title.toLowerCase())
            );
        }
        if (text){
            return stocks.filter(stock => 
                stock.text.toLowerCase().includes(text.toLowerCase())
            );
        }
        return stocks;
    };
```
3. Разобраться в кодах статуса.

## Порядок показа 
Объяснить реализацию требуемых функций, объяснить использование three.js
