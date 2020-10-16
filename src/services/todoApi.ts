import * as consts from '../config';
import Axios from 'axios';
import { ITask } from '@/models/itask';
import { Task } from '@/models/task';


export class TodoApi{
    
    private static todoAxios = Axios.create();

    static async deleteTodo(task: Task): Promise<void> {
        const url = consts.urlApi+'fiche/'+task.id;
        const response = await this.todoAxios.delete<void>(url);
    }

    static async createNewTodo(task: Task): Promise<void> {
        const url = consts.urlApi+'fiche';
        const response = await this.todoAxios.post<ITask[]>(url);
    }

    static async getAllTodos(ITaskL): Promise<Task[]>{
      const url = consts.urlApi+'fiche';
      const response = await this.todoAxios.get<ITask[]>(url);
      return response.data.map(itask => new Task(itask.title, itask.id, ));
    }
  }