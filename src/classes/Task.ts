export default class Task {
    text: string;
    id: number;
    isImportant: boolean;
    date: Date;

    constructor(text: string, id: number, isImporant: boolean = false) {
        this.text = text;
        this.id = id;
        this.isImportant = isImporant;
        this.date = this._getCurrentDate();
    }

    private _getCurrentDate():Date {
        return new Date();
    }

    toggleTaskPriority(): void {
        this.isImportant = !this.isImportant;
    }

    getDateAsReadableText(): string {
        const dateAsString = this.date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
        console.log(dateAsString);
        
        return dateAsString;
    }
}