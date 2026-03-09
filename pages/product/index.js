import { ProductComponent } from "../../components/product/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        if (this.id == 1) {
            return {
                id: 1,
                src: "../../assets/troi-full.png",
                title: `Карта «Тройка»`,
                text: "Это электронная транспортная карта города Москвы с возможностью пополнения и использования на любом виде общественного транспорта.Существуют альтернативные варианты оплаты проезда с функционалом карты «Тройка» в виде брелоков, браслетов, жетонов, вкладышей и наклеек, а также виртуальных мобильных карт с системой оплаты посредством технологии NFC."
            }
        }
        if (this.id == 2) {
            return {
                id: 1,
                src: "../../assets/one-full.png",
                title: `Билет «Единый»`,
                text: "Билет «Единый» позволяет совершать поездки на метро, МЦК и наземном транспорте.Одна поездка по билету равна одному проходу на любом виде транспорта.Билет действует на всей территории Москвы, включая Зону Б."
            }
        }
        if (this.id == 3) {
            return {
                id: 1,
                src: "../../assets/mos-full.png",
                title: `Карта москвича для обучающихся`,
                text: "Дошкольникам, школьникам, учащимся колледжей и техникумов, студентам, аспирантам, ординаторам, ассистентам-стажерам, обучающимся по очной форме, по карте москвича положен проезд по льготным тарифам на наземном городском транспорте Москвы, в метро, МЦК, МЦД (Зоны «Центральная» и «Пригород»)."
            }
        }
        if (this.id !=1 || this.id !=2||this.id !=3) {
            return {
                id: 1,
                src: "../../assets/troi-full.png",
                title: `Карта «Тройка»`,
                text: "Это электронная транспортная карта города Москвы с возможностью пополнения и использования на любом виде общественного транспорта.Существуют альтернативные варианты оплаты проезда с функционалом карты «Тройка» в виде брелоков, браслетов, жетонов, вкладышей и наклеек, а также виртуальных мобильных карт с системой оплаты посредством технологии NFC."
            }
        }


    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }
    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}