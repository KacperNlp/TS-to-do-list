export default class Task {
    text: string;
    id: number;
    isImportant: boolean;

    constructor(text: string, id: number, isImporant: boolean = false) {
        this.text = text;
        this.id = id;
        this.isImportant = isImporant;
    }

    toggleTaskPriority() {
        this.isImportant = !this.isImportant;
    }
}