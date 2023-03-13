import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, loadTodos } from '../state/todo/todo.actions';
import { selectAllTodos } from '../state/todo/todo.selectors';
import { Todo } from './todo.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTodoDialog } from './components/add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoPage implements OnInit {
  public allTodos$ = this.store.select<Todo[]>(selectAllTodos);

  constructor(
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  deleteTodo(id: string | undefined): void {
    this.store.dispatch(deleteTodo({ id }));
  }

  openAddTodoDialog(): void {
    const dialogRef = this.dialog.open(AddTodoDialog);

    dialogRef.afterClosed().subscribe(name => {
      if (name !== undefined) {
        this.store.dispatch(addTodo({ name }));
      }
    });
  }
}
