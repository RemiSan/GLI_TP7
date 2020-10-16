import { Task } from "./task";

export interface ITaskListObserver {
    didDelete(task : Task): void;
}