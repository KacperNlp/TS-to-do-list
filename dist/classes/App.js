import TasksList from './TasksList.js';
var HTMLClassesAndIds;
(function (HTMLClassesAndIds) {
    HTMLClassesAndIds["ButtonId"] = "add-task";
    HTMLClassesAndIds["IdOfInputWithTask"] = "task";
})(HTMLClassesAndIds || (HTMLClassesAndIds = {}));
export default class App {
    constructor() {
        this._addNewTask = (e) => {
            const { IdOfInputWithTask } = HTMLClassesAndIds;
            e.preventDefault();
            const input = document.getElementById(IdOfInputWithTask);
            this.tasksList.addNewTask(input.value);
            this._resetInputValue(input);
        };
        this.tasksList = new TasksList();
        this._getButton();
    }
    _getButton() {
        const { ButtonId } = HTMLClassesAndIds;
        this.addTaskForm = document.getElementById(ButtonId);
        this._setEventOnButton();
    }
    _setEventOnButton() {
        this.addTaskForm.addEventListener('submit', this._addNewTask);
    }
    _resetInputValue(input) {
        input.value = '';
    }
}
