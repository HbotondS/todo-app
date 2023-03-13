import { createAction, props } from '@ngrx/store';
import { Todo } from '../../todo/todo.model';

export const loadTodos = createAction('[Todo Page] Load Todos');

export const deleteTodo = createAction(
  '[Todo Page] Delete Todo',
  props<{ id: string | undefined; }>()
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

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ name: string; }>()
);

export const addTodoSuccess = createAction(
  '[Todo API] Add Todo Success',
  props<{ id: string | undefined; }>()
);

export const addTodoFailed = createAction(
  '[Todo API] Add Todo Failed',
  props<{ error: string; }>()
);
