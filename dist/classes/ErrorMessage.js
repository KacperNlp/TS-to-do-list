var HTMLClassesAndIds;
(function (HTMLClassesAndIds) {
    HTMLClassesAndIds["LayerClass"] = "layer";
    HTMLClassesAndIds["MessageBoxClass"] = "box-error-message";
    HTMLClassesAndIds["RemoveBtnClass"] = "error-btn";
})(HTMLClassesAndIds || (HTMLClassesAndIds = {}));
export default class ErrorMessage {
    constructor(message) {
        this.message = message;
        this.generateErrorMessage();
    }
    generateErrorMessage() {
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
    createErrorHtmlElement(elClass, elText = null) {
        const htmlEl = document.createElement('div');
        htmlEl.classList.add(elClass);
        if (!!elText) {
            const textBox = document.createElement('p');
            textBox.innerText = elText;
            htmlEl.appendChild(textBox);
        }
        return htmlEl;
    }
    removeError(layer) {
        document.body.removeChild(layer);
    }
    createRemoveBtn(btnContent) {
        const { RemoveBtnClass } = HTMLClassesAndIds;
        const button = document.createElement('button');
        button.classList.add(RemoveBtnClass);
        button.innerText = btnContent;
        return button;
    }
}
