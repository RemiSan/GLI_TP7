import { ITaskListObserver } from './itasklistobserver';

export class Task {
    constructor(public name: string, public id: number, public done: boolean, public observer?: ITaskListObserver) { }
    
    public delete(): void{
        this.observer?.didDelete(this);
    }
}