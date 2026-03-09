export class DeleteLastComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("delete-last-button")
            .addEventListener("click", listener);
    }

    getHTML() {
        return `
            <button id="delete-last-button" class="btn btn-primary" type="button" style="background-color: red; border-color: red; display: block;width: 33%;">Удалить последнюю карту</button>
        `;
    }

    render(listener) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(listener);
    }
}