export class ButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }
    addListeners(listener,data) {
        document
            .getElementById("add-button")
            .addEventListener("click",() => listener(data))
    }
    getHTML() {
        return (
            `
                <button id="add-button" class="btn btn-primary" type="button" style="background-color: red; border-color: red; display: block;width: 33%;">Добавить</button>
            `
        )
    }
    render(data,listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener,data)
    }
}
