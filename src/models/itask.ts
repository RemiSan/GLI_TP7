export interface ITask {
    id: number;
    title: string;
    done: boolean;
    user?: any;
    estimatedTime: number;
    tag: any[];
    lieu?: any;
    url?: any;
    noteExplicative?: any;
    section?: any;
}