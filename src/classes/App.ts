import TasksList from './TasksList.js';

enum HTMLClassesAndIds {
    ButtonId = 'add-task',
    IdOfInputWithTask = 'task'
}

export default class App {
    tasksList: TasksList;
    addTaskForm: HTMLFormElement

    constructor() {
        this.tasksList = new TasksList();
        this._getButton();
    }

    _getButton(): void {
        const { ButtonId } = HTMLClassesAndIds;

        this.addTaskForm = document.getElementById(ButtonId) as HTMLFormElement;
        this._setEventOnButton();
    }

    _setEventOnButton(): void {
        this.addTaskForm.addEventListener('submit', this._addNewTask)
    }

    _addNewTask = (e) => {
        const { IdOfInputWithTask } = HTMLClassesAndIds;
        e.preventDefault();

        const input = document.getElementById(IdOfInputWithTask) as HTMLInputElement;
        this.tasksList.addNewTask(input.value);
        this._resetInputValue(input);
    }

    _resetInputValue(input: HTMLInputElement) {
        input.value = '';
    }
}