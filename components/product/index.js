export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }
    formatStationNames(inputString) {
        let words = inputString.split(" ");
        words = words.map(word => {
            let sortedChars = word.toLowerCase().split("").sort().join("");
            return sortedChars.slice(0, 1).toUpperCase() + sortedChars.slice(1);
        });
        words.sort();
        return words.join(" ");
    }
    getHTML(data) {
        // Вызываем функцию для заголовка
        const formattedTitle = this.formatStationNames(data.title);

        return `
            <div class="card mb-3 border-0 shadow-sm" style="width: 100%;">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <img src="${data.src}" class="img-fluid rounded" alt="${data.title}" style="max-height: 200px;">
                    </div>
                    
                    <h5 class="card-title text-primary">${formattedTitle}</h5>
                    <p class="card-text text-muted" style="font-size: 0.9rem;">
                        <small>Оригинал: ${data.title}</small>
                    </p>
                    <hr>
                    <p class="card-text">${data.text}</p>
                </div>
            </div>
        `;
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}