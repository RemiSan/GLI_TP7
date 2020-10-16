import * as consts from '../config';
import Axios from 'axios';
import { ITask } from '@/models/itask';


export class TodoApi{
    private static todoAxios = Axios.create();
    
    static async getAllTodos(): Promise<ITask[]>{
      const url = consts.urlApi+'fiche';
      const response = await this.todoAxios.get<ITask[]>(url);
      console.log(response);
      return response.data;
    }
  }