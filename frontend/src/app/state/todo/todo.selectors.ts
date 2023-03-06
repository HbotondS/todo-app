import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodos = createFeatureSelector<TodoState>('todoState');
export const selectAllTodos = createSelector(
  selectTodos,
  (todoState: TodoState) => todoState.todos
);
