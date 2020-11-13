import * as consts from '../config';
import Axios from 'axios';
import { ITask } from '@/models/itask';
import { Task } from '@/models/task';
import { ITaskListObserver } from '@/models/itasklistobserver';


export class TodoApi{
    
    private static todoAxios = Axios.create();

    static async deleteTodo(task: Task): Promise<void> {
        const url = consts.urlVueProxy+'fiche/'+task.id;
        const response = await this.todoAxios.delete<void>(url);
    }

    static async createNewTodo(nameTask: string): Promise<void> {
        const url = consts.urlVueProxy+'fiche';
        const response = await this.todoAxios.post<void>(url,{ "title" : nameTask });
    }

    static async getAllTodos(observer: ITaskListObserver): Promise<Task[]>{
      const url = consts.urlVueProxy+'fiche';
      const response = await this.todoAxios.get<ITask[]>(url);
      return response.data.map(itask => new Task(itask.title, itask.id, observer));
    }
  }