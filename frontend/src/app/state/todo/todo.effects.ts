import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { TodoService } from '../../todo/service/spring/todo.service';
import { loadTodos, loadTodosFailed, loadTodosSuccess } from './todo.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private service: TodoService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.service.getTodos().pipe(
          tap(todos => console.log(todos)),
          map(todos => loadTodosSuccess({ todos })),
          catchError(error => of(loadTodosFailed({ error })))
        )
      )
    )
  );
}