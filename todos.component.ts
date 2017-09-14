
import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: `./todos.component.html` ,
  // styleUrls: [`./todo.component.css`],
})
export class TodosComponent implements OnInit{
  todos;
  text;
  constructor( private _todosservice: TodosService) {}
  ngOnInit() {
    this.todos = this._todosservice.getTodos();
  };
 addTodo() {
    var newTodos = {
      text: this.text
    }
    this.todos.push(newTodos);
    this._todosservice.addTodo(newTodos);
 }
}

