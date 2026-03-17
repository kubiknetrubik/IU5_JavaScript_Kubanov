export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
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

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    render(data, listener, isActive) {
        const html = this.getHTML(data, isActive);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listener);
    }
}