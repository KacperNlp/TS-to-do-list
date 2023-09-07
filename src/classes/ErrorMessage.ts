enum HTMLClassesAndIds {
    LayerClass = 'layer',
    MessageBoxClass = 'box-error-message',
    RemoveBtnClass = 'error-btn'
}

export default class ErrorMessage {
    message: string;

    constructor(message: string) {
        this.message = message;
        this.generateErrorMessage();
    }

    private generateErrorMessage() {
        const { MessageBoxClass, LayerClass } = HTMLClassesAndIds;

        const messageBox = this.createErrorHtmlElement(MessageBoxClass, this.message);
        const layer = this.createErrorHtmlElement(LayerClass);
        const removeBtn = this.createRemoveBtn('X');

        layer.appendChild(messageBox);
        messageBox.appendChild(removeBtn);
        document.body.appendChild(layer);

        removeBtn.addEventListener('click', this.removeError.bind(this, layer));
        layer.addEventListener('click', this.removeError.bind(this, layer));
    }

    private createErrorHtmlElement(elClass: string, elText: string | null = null): HTMLDivElement {
        const htmlEl = document.createElement('div');
        htmlEl.classList.add(elClass)

        if(!!elText) {
            const textBox = document.createElement('p');
            textBox.innerText = elText;
            htmlEl.appendChild(textBox);
        }

        return htmlEl;
    }

    private removeError(layer: HTMLDivElement) {
        document.body.removeChild(layer);
    }

    private createRemoveBtn(btnContent: string): HTMLButtonElement {
        const { RemoveBtnClass } = HTMLClassesAndIds;

        const button = document.createElement('button');
        button.classList.add(RemoveBtnClass);
        button.innerText = btnContent;

        return button;
    }
}