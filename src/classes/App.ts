import TasksList from './TasksList';
import Task from "./Task";

export default class App {
    tasksList: TasksList;

    constructor() {
        this.tasksList = new TasksList();
    }
}