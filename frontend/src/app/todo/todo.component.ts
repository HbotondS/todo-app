import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodos } from '../state/todo/todo.actions';
import { selectAllTodos } from '../state/todo/todo.selectors';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoPage implements OnInit {
  public allTodos$ = this.store.select<Todo[]>(selectAllTodos);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
