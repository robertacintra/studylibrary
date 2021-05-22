import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {
    id: 0,
    text: '',
    done: false
  };

  done = false;

  @Output() remove = new EventEmitter();
  @Output() sendTodoDone = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo() {
    this.remove.emit(this.todo);
  }

  markAsDone() {
    this.done = true;
    this.todo.done  = true;
    this.sendTodoDone.emit(this.todo);
  }

}