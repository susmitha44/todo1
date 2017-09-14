import { Injectable } from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodosService extends Init {

  constructor() {
    super();
    console.log('todo service initialize');
   this.load();
  }
  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addTodo(newTodo) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
