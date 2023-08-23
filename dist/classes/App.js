import TasksList from './TasksList.js';
var HTMLClassesAndIds;
(function (HTMLClassesAndIds) {
    HTMLClassesAndIds["ButtonId"] = "add-task";
})(HTMLClassesAndIds || (HTMLClassesAndIds = {}));
export default class App {
    constructor() {
        this._addNewTask = (e) => {
            e.preventDefault();
        };
        this.tasksList = new TasksList();
        this._getButton();
        console.log('teher!');
    }
    _getButton() {
        const { ButtonId } = HTMLClassesAndIds;
        this.addTaskButton = document.getElementById(ButtonId);
        this._setEventOnButton();
    }
    _setEventOnButton() {
        console.log(this.addTaskButton);
        this.addTaskButton.addEventListener('click', this._addNewTask);
    }
}
