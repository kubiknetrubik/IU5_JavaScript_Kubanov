import { ButtonComponent } from "../../components/button/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { LogoComponent } from "../../components/corner-logo/index.js";
import { DeleteLastComponent } from "../../components/button-del/index.js";
export class MainPage {
    static cardsData = [
        {
            id: 1,
            src: "../../assets/troyka-front.png",
            title: "Карта «Тройка»",
            text: "Электронная транспортная карта"
        },
        {
            id: 2,
            src: "../../assets/ediniy-face.png",
            title: "Билет «Единый»",
            text: "Право на одну поездку"
        },
        {
            id: 3,
            src: "../../assets/social-card.png",
            title: "Карта москвича",
            text: "Льготный проезд для студентов"
        },
    ];
    static nextId = 4;

    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    getHTML() {
        return `
        <div id="top-controls" class="container mt-3 text-center">
            <div id="logo-container"></div>
            <div id="buttons-container" class="d-flex justify-content-center gap-2 mt-2"></div>
        </div>
        <div id="analyze" class="container mt-3 text-center">
            <button id="analyze-network-btn" class="btn btn mt-2">
                Анализ нагрузки сети
            </button>
            <button id="fast-name" class="btn btn mt-2">
                Социальная карта
            </button>
            <div id="load-report-display"></div>
            <div id="load-fast-name"></div>

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

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    clickAdd(data) {
        const newData = { ...data, id: MainPage.nextId++ };
        MainPage.cardsData.push(newData);
        this.render();

    }
    clickDeleteLast() {
        if (MainPage.cardsData.length > 0) {
            MainPage.cardsData.pop();
            this.render();
        }
    }
    calculateNetworkLoad() {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const report = {
            title: "Отчет по осевой нагрузке хабов",
            value: 0,
            timestamp: new Date().toLocaleTimeString()
        };
        let i = 0;
        const n = matrix.length;
        while (i < n) {
            report.value += matrix[i][i];
            report.value += matrix[i][n - 1 - i];
            i++;
        }
        if (n % 2 !== 0) {
            const mid = Math.floor(n / 2);
            report.value -= matrix[mid][mid];
        }
        const display = document.getElementById('load-report-display');
        if (display) {
            display.innerHTML = `
            <div class="alert info mt-2">
                <strong>${report.title}</strong><br>
                Показатель: ${report.value} ед.<br>
                <small>Обновлено: ${report.timestamp}</small>
            </div>
        `;
        }
    }
    formatStationNames(inputString) {
        let words = inputString.split(" ");
        words = words.map(word => {
            let sortedChars = word.toLowerCase().split("").sort().join("");
            return sortedChars.slice(0, 1).toUpperCase() + sortedChars.slice(1);
        });
        words.sort();
        const display = document.getElementById('load-fast-name');
        if (display) {
            display.innerHTML = `
            <div class="alert info mt-2">
                <strong>Название для быстрого поиска</strong><br>
                ${inputString}: ${words.join(" ")} <br>

            </div>
        `;
        }
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
        document.getElementById('analyze-network-btn').addEventListener('click', () => this.calculateNetworkLoad());
        document.getElementById('fast-name').addEventListener('click', (e) => this.formatStationNames(e.target.innerText));
        MainPage.cardsData.forEach((item, index) => {
            const productCard = new ProductCardComponent(carouselRoot);
            productCard.render(item, this.clickCard.bind(this), index === 0);
        });
    }
}