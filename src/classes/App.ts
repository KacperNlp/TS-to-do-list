import TasksList from './TasksList.js';
import Task from "./Task.js";

enum HTMLClassesAndIds {
    ButtonId = 'add-task'
}

export default class App {
    tasksList: TasksList;
    addTaskButton: HTMLButtonElement

    constructor() {
        this.tasksList = new TasksList();
        this._getButton();
        console.log('teher!')
    }

    _getButton(): void {
        const { ButtonId } = HTMLClassesAndIds;

        this.addTaskButton = document.getElementById(ButtonId) as HTMLButtonElement;
        this._setEventOnButton();
    }

    _setEventOnButton(): void {
        console.log(this.addTaskButton);
        this.addTaskButton.addEventListener('click', this._addNewTask)
    }

    _addNewTask = (e) => {
        e.preventDefault();
    }
}