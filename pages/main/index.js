import { ButtonComponent } from "../../components/button/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { LogoComponent } from "../../components/corner-logo/index.js";
import { DeleteLastComponent } from "../../components/button-del/index.js";
import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";
import { AddCardModal } from "../../components/add-card-modal/index.js";
export class MainPage {
   

    constructor(parent) {
        this.parent = parent;
        this.cardsData2 = [];
    }
    getData() {
        ajax.get(stockUrls.getStocks(), (data) => {
            this.cardsData2 = data;
            this.renderData();
        });
    }
    renderData() {
        const container = document.getElementById('carousel-items-container');
        if (!container) return;
        container.innerHTML = ''; 

        this.cardsData2.forEach((item, index) => {
            const productCard = new ProductCardComponent(container);
            productCard.render(item, this.clickCard.bind(this), index === 0);
        });
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
    clickDeleteLast() {
        if (this.cardsData2.length === 0) return;
        const lastId = this.cardsData2[this.cardsData2.length - 1].id;
        ajax.delete(stockUrls.removeStockById(lastId), () => {
            this.getData();
        });
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
        badd.render(null, () => {
            const modal = new AddCardModal(() => {
                this.getData();
            });
            modal.show();
        });
        const deleteLastBtn = new DeleteLastComponent(buttonsRoot);
        deleteLastBtn.render(this.clickDeleteLast.bind(this));
        this.getData();
    }
}