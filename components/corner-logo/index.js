export class LogoComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', '<div id="corner" class="corner-image" style="display: block;width: 33%;"><img src="assets/metron.png" alt="Логотип" style="width: 250px;"></div>');
    }
}