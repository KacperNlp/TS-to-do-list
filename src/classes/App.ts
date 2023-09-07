import TasksList from './TasksList.js';
import ErrorMessage from './ErrorMessage.js';

enum HTMLClassesAndIds {
    ButtonId = 'add-task',
    IdOfInputWithTask = 'task',
}

enum ErrorMessagesAndProperties {
    MinWidthOfTaskText = 3,
    ErrorForEmptyOrToShortTask = "Task must be at least 3 characters long"
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
        const { MinWidthOfTaskText, ErrorForEmptyOrToShortTask } = ErrorMessagesAndProperties;
        e.preventDefault();

        const input = document.getElementById(IdOfInputWithTask) as HTMLInputElement;
        const taskText = input.value;

        if(taskText.length < MinWidthOfTaskText ) {
            new ErrorMessage(ErrorForEmptyOrToShortTask);
            return;
        }

        this.tasksList.addNewTask(taskText);
        this._resetInputValue(input);
    }

    _resetInputValue(input: HTMLInputElement) {
        input.value = '';
    }
}