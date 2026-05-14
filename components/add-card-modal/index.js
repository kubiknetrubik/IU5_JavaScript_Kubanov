import { ajax } from "../../modules/ajax.js";
import { stockUrls } from "../../modules/stockUrls.js";

export class AddCardModal {
    constructor(onSuccess) {
        this.onSuccess = onSuccess; 
        this.modalElement = null;
        this.modalInstance = null;
    }

    getHTML() {
        return `
            <div class="modal fade" id="addCardModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel">Добавление новой карточки</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="addCardForm">
                                <div class="mb-3">
                                    <label for="titleInput" class="form-label">Название *</label>
                                    <input type="text" class="form-control" id="titleInput" maxlength="50">
                                    <div id="titleError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="textInput" class="form-label">Описание *</label>
                                    <textarea class="form-control" id="textInput" maxlength="200"></textarea>
                                    <div id="textError" class="invalid-feedback"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="srcInput" class="form-label">URL изображения *</label>
                                    <input type="text" class="form-control" id="srcInput" maxlength="200">
                                    <div id="srcError" class="invalid-feedback"></div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                            <button type="button" class="btn btn-primary" id="saveCardBtn">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    show() {
        document.body.insertAdjacentHTML('beforeend', this.getHTML());
        this.modalElement = document.getElementById('addCardModal');
        this.modalInstance = new bootstrap.Modal(this.modalElement);
        
        const saveBtn = document.getElementById('saveCardBtn');
        saveBtn.addEventListener('click', this.handleSave.bind(this));
        
        this.modalElement.addEventListener('hidden.bs.modal', () => {
            this.modalElement.remove();
        });

        this.modalInstance.show();
    }

    // Делаем метод асинхронным
    async handleSave() {
        const title = document.getElementById('titleInput').value.trim();
        const text = document.getElementById('textInput').value.trim();
        const src = document.getElementById('srcInput').value.trim();

        this.clearErrors();

        let isValid = true;

        if (title === '') {
            this.showError('titleError', 'Заголовок не может быть пустым');
            isValid = false;
        } else if (title.length > 50) {
            this.showError('titleError', 'Максимум 50 символов');
            isValid = false;
        }

        if (text === '') {
            this.showError('textError', 'Описание не может быть пустым');
            isValid = false;
        } else if (text.length > 200) {
            this.showError('textError', 'Максимум 200 символов');
            isValid = false;
        }

        if (src === '') {
            this.showError('srcError', 'URL изображения не может быть пустым');
            isValid = false;
        } else if (src.length > 200) {
            this.showError('srcError', 'Максимум 200 символов');
            isValid = false;
        }

        if (!isValid) return;

        const newCard = { title, text, src };

        try {
            // Используем await вместо коллбека
            await ajax.post(stockUrls.createStock(), newCard);
            
            this.modalInstance.hide();
            
            if (this.onSuccess) {
                this.onSuccess();
            }
        } catch (error) {
            console.error('Ошибка при сохранении карточки:', error);
            // Тут можно вывести общую ошибку для пользователя, если запрос не прошел
            alert('Не удалось сохранить карточку. Попробуйте позже.');
        }
    }

    clearErrors() {
        const fields = ['titleInput', 'textInput', 'srcInput'];
        fields.forEach(id => {
            const input = document.getElementById(id);
            if (input) input.classList.remove('is-invalid');
        });
        const errorDivs = ['titleError', 'textError', 'srcError'];
        errorDivs.forEach(id => {
            const div = document.getElementById(id);
            if (div) div.innerText = '';
        });
    }

    showError(errorId, message) {
        const errorDiv = document.getElementById(errorId);
        if (errorDiv) {
            errorDiv.innerText = message;
        }
        const fieldId = errorId.replace('Error', 'Input');
        const field = document.getElementById(fieldId);
        if (field) field.classList.add('is-invalid');
    }
}