import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  text = '';

  constructor() {
    let todos = localStorage.getItem('todos');
    if(todos) {
      let parseTodos = JSON.parse(todos);
      this.todos = parseTodos;
    }else {
      this.todos = []
    }
  }

  ngOnInit(): void {
  }

  addTodo(text: string) {
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, text, false))
    this.text = '';
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(event: Todo) {
    let indice = this.todos.indexOf(event);
    this.todos.splice(indice, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  markAsDone(todo: Todo) {
    let indice = this.todos.indexOf(todo);
    this.todos[indice] = todo;
    console.log('Lista de Tarefas', this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}