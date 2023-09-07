export default class Task {
    constructor(text, id, isImporant = false) {
        this.text = text;
        this.id = id;
        this.isImportant = isImporant;
        this.date = this._getCurrentDate();
    }
    _getCurrentDate() {
        return new Date();
    }
    toggleTaskPriority() {
        this.isImportant = !this.isImportant;
    }
    getDateAsReadableText() {
        const dateAsString = this.date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
        return dateAsString;
    }
}
