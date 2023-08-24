import Task from "./Task.js";

const MAX_ID_VALUE = 10000;

enum HTMLClassesAndIds {
    TasksListId = 'tasks-list',
    ClassForMessageWhenListIsEmpty = 'list-placeholder',
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
        this._generateStructureOfTasksToHtml();
    }

    removeTask(idOfTaskToRemove: number) {
        const arrayAfterFiltering = this.tasks.filter(({ text, id }) => id !== idOfTaskToRemove);

        this.tasks = arrayAfterFiltering;
        this._generateStructureOfTasksToHtml();
    }

    _generateTaskId(): number {
        return Math.floor(Math.random() * MAX_ID_VALUE);
    }

    _generateStructureOfTasksToHtml() {
        this.tasksContainer.innerHTML = '';

        this.tasks.reverse().forEach(({text, id}) => {
            const task = this._createListElement(text, id);
            this.tasksContainer.appendChild(task);
        })

        if(!this.tasks.length) {
            this._createMessageForEmptyList();
        }
    }

    _createListElement(text: string, id: number): HTMLLIElement {
        const listElement = document.createElement('li');
        listElement.classList.add('task');

        const button = document.createElement('button');
        button.innerText = 'Remove Task';
        button.classList.add('task-button');

        button.addEventListener('click', () => {
            this.removeTask(id);
        })

        const textElement = document.createElement('p');
        textElement.innerText = text;

        listElement.appendChild(button);
        listElement.appendChild(textElement);

        return listElement;
    }

    _createMessageForEmptyList() {
        const { ClassForMessageWhenListIsEmpty } = HTMLClassesAndIds;

        const message = document.createElement('p');
        message.classList.add(ClassForMessageWhenListIsEmpty);
        message.innerText = "Right now you don't have any task....";

        this.tasksContainer.appendChild(message);
    }
}