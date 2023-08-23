import Task from "./Task.js";
const MAX_ID_VALUE = 10000;
var HTMLClassesAndIds;
(function (HTMLClassesAndIds) {
    HTMLClassesAndIds["TasksListId"] = "tasks-list";
})(HTMLClassesAndIds || (HTMLClassesAndIds = {}));
export default class TasksList {
    constructor() {
        this.tasks = [];
        this.tasksContainer = document.getElementById(HTMLClassesAndIds.TasksListId);
    }
    addNewTask(text) {
        const id = this._generateTaskId();
        const newTask = new Task(text, id);
        this.tasks.push(newTask);
        this._appendTasksToHtml();
    }
    removeTask(idOfTaskToRemove) {
        const arrayAfterFiltering = this.tasks.filter(({ text, id }) => id !== idOfTaskToRemove);
        this.tasks = arrayAfterFiltering;
    }
    _generateTaskId() {
        return Math.floor(Math.random() * MAX_ID_VALUE);
    }
    _appendTasksToHtml() {
        this.tasksContainer.innerHTML = '';
        this.tasks.reverse().forEach(({ text, id }) => {
            const task = this._createListElement(text, id);
            this.tasksContainer.appendChild(task);
        });
    }
    _createListElement(text, id) {
        const listElement = document.createElement('li');
        listElement.classList.add('task');
        const button = document.createElement('button');
        button.classList.add('task-button');
        const textElement = document.createElement('p');
        textElement.innerText = text;
        listElement.appendChild(button);
        listElement.appendChild(textElement);
        return listElement;
    }
}
