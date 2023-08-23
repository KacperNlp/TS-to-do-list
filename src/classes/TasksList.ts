import Task from "./Task.js";

const MAX_ID_VALUE = 10000;

enum HTMLClassesAndIds {
    TasksListId = 'tasks-list'
}

export default class TasksList {
    tasks: Task[]
    tasksContainer: HTMLUListElement

    constructor() {
        this.tasks = [];
        this.tasksContainer = document.getElementById(HTMLClassesAndIds.TasksListId) as HTMLUListElement;
    }

    addNewTask(text: string) {
        const id = this._generateTaskId();
        const newTask = new Task(text, id);
        this.tasks.push(newTask);
        this._appendTasksToHtml();
    }

    removeTask(idOfTaskToRemove: number) {
        const arrayAfterFiltering = this.tasks.filter(({ text, id }) => id !== idOfTaskToRemove);

        this.tasks = arrayAfterFiltering;
    }

    _generateTaskId(): number {
        return Math.floor(Math.random() * MAX_ID_VALUE);
    }

    _appendTasksToHtml() {
        this.tasksContainer.innerHTML = '';

        this.tasks.reverse().forEach(({text, id}) => {
            const task = this._createListElement(text, id);
            this.tasksContainer.appendChild(task);
        })
    }

    _createListElement(text: string, id: number): HTMLLIElement {
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