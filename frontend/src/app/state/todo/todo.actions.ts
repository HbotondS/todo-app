import { createAction, props } from '@ngrx/store';
import { Todo } from '../../todo/todo.model';

export const loadTodos = createAction('[Todo Page] Load Todos');

export const deleteTodo = createAction(
  '[Todo Page] Delete Todo',
  props<{ id: number; }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo API] Delete Todo Success'
);

export const deleteTodoFailed = createAction(
  '[Todo API] Delete Todo Failed',
  props<{ error: string; }>()
);

export const loadTodosSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ todos: Todo[]; }>()
);

export const loadTodosFailed = createAction(
  '[Todo API] Todo Load Failed',
  props<{ error: string; }>()
);
