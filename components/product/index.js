export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-3 border-0 shadow-sm" style="width: 100%;"> 
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <img src="${data.src}" class="img-fluid rounded" alt="${data.title}" style="max-height: 200px;">
                        </div>
                        
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text" style="color: #666; line-height: 1.6;">${data.text}</p>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}