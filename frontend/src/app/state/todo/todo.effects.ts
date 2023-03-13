import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { TodoService } from '../../todo/service/spring/todo.service';
import {
  addTodo, addTodoFailed, addTodoSuccess,
  deleteTodo,
  deleteTodoFailed,
  deleteTodoSuccess,
  loadTodos,
  loadTodosFailed,
  loadTodosSuccess
} from './todo.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { NotificationService } from '../../common/notification/notification.service';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private service: TodoService,
    private notificationService: NotificationService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.service.getTodos().pipe(
          map(todos => loadTodosSuccess({ todos })),
          catchError(error => of(loadTodosFailed({ error })))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap(({ id }) =>
        this.service.deleteTodo(id).pipe(
          map(() => deleteTodoSuccess()),
          catchError(error => of(deleteTodoFailed({ error })))
        )
      )
    )
  );

  loadTodosFailed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodosFailed),
      map(({ error }) => {
        console.error(error);
        this.notificationService.error('Failed to load Todos.', 'Close');
      })
    ),
  { dispatch: false }
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      switchMap(({ name }) =>
        this.service.addTodo(name).pipe(
          map((id) => addTodoSuccess({ id })),
          catchError(error => of(addTodoFailed({ error })))
        )
      )
    )
  );
}
