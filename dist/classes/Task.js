export default class Task {
    constructor(text, id, isImporant = false) {
        this.text = text;
        this.id = id;
        this.isImportant = isImporant;
    }
    toggleTaskPriority() {
        this.isImportant = !this.isImportant;
    }
}
