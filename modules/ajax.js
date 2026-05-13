class Ajax {
    /**
     * GET запрос
     */
    async get(url) {
        try {
            const response = await fetch(url);
            return await this._handleResponse(response);
        } catch (error) {
            console.error('Fetch error (GET):', error);
            throw error;
        }
    }

    /**
     * POST запрос
     */
    async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await this._handleResponse(response);
        } catch (error) {
            console.error('Fetch error (POST):', error);
            throw error;
        }
    }

    /**
     * DELETE запрос
     */
    async delete(url) {
        try {
            const response = await fetch(url, { method: 'DELETE' });
            return await this._handleResponse(response);
        } catch (error) {
            console.error('Fetch error (DELETE):', error);
            throw error;
        }
    }

    // Приватный метод для обработки ответа
    async _handleResponse(response) {
        const data = await response.json().catch(() => null);
        return { data, status: response.status };
    }
}

export const ajax = new Ajax();