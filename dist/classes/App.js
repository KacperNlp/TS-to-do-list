import TasksList from './TasksList.js';
import ErrorMessage from './ErrorMessage.js';
var HTMLClassesAndIds;
(function (HTMLClassesAndIds) {
    HTMLClassesAndIds["ButtonId"] = "add-task";
    HTMLClassesAndIds["IdOfInputWithTask"] = "task";
})(HTMLClassesAndIds || (HTMLClassesAndIds = {}));
var ErrorMessagesAndProperties;
(function (ErrorMessagesAndProperties) {
    ErrorMessagesAndProperties[ErrorMessagesAndProperties["MinWidthOfTaskText"] = 3] = "MinWidthOfTaskText";
    ErrorMessagesAndProperties["ErrorForEmptyOrToShortTask"] = "Task must be at least 3 characters long";
})(ErrorMessagesAndProperties || (ErrorMessagesAndProperties = {}));
export default class App {
    constructor() {
        this._addNewTask = (e) => {
            const { IdOfInputWithTask } = HTMLClassesAndIds;
            const { MinWidthOfTaskText, ErrorForEmptyOrToShortTask } = ErrorMessagesAndProperties;
            e.preventDefault();
            const input = document.getElementById(IdOfInputWithTask);
            const taskText = input.value;
            if (taskText.length < MinWidthOfTaskText) {
                new ErrorMessage(ErrorForEmptyOrToShortTask);
                return;
            }
            this.tasksList.addNewTask(taskText);
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
