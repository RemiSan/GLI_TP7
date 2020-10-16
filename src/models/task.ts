import { ITaskListObserver } from './itasklistobserver';

export class Task {
    constructor(public name: string, public id: number, public observer: ITaskListObserver) { }
    
    public delete(): void{
        this.observer?.didDelete(this);
    }
}