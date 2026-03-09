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
        return `<div id="main-page" class="d-flex flex-wrap"></div>`;
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        const productPage = new ProductPage(this.parent, cardId);
        productPage.render();
    }

    clickAdd(data) {
        const newData = { ...data, id: MainPage.nextId++ };
        MainPage.cardsData.push(newData);
        
        const productCard = new ProductCardComponent(this.pageRoot);
        productCard.render(newData, this.clickCard.bind(this));
    }
    clickDeleteLast() {
        if (MainPage.cardsData.length > 0) {
            MainPage.cardsData.pop();
            this.render();
        }
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        
        const logo = new LogoComponent(this.pageRoot);
        logo.render();

        const badd = new ButtonComponent(this.pageRoot);
        badd.render(MainPage.cardsData[0], this.clickAdd.bind(this));

        const deleteLastBtn = new DeleteLastComponent(this.pageRoot);
        deleteLastBtn.render(this.clickDeleteLast.bind(this));
        MainPage.cardsData.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(item, this.clickCard.bind(this));
        });
    }
}