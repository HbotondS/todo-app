import { Todo } from '../../todo/todo.model';
import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  addTodoFailed,
  addTodoSuccess,
  deleteTodo,
  deleteTodoFailed,
  deleteTodoSuccess,
  loadTodos,
  loadTodosFailed,
  loadTodosSuccess
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending'
};

export const TodoReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the todos
  on(loadTodos, (state) => ({ ...state, status: 'loading' })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(deleteTodoSuccess, (state) => ({
    ...state,
    error: null,
    status: 'success'
  })),
  // Handle todos load failure
  on(deleteTodoFailed, (state, { error }) => ({
    ...state,
    error,
    status: 'error'
  })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    error: null,
    status: 'success'
  })),
  // Handle todos load failure
  on(loadTodosFailed, (state, { error }) => ({
    ...state,
    error,
    status: 'error'
  })),

  on(addTodo, (state, { name }) => ({
    ...state,
    status: 'loading',
    todos: [ ...state.todos, { id: undefined, name } ]
  })),
  on(addTodoSuccess, (state, { id }) => ({
    ...state,
    status: 'success',
    error: null,
    todos: state.todos.map(todo => todo.id === undefined ? { ...todo, id } : todo)
  })),
  on(addTodoFailed, (state, { error }) => ({
    ...state,
    error,
    status: 'error'
  }))
);
