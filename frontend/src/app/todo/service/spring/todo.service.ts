import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, Observable } from 'rxjs';
import { Todo } from '../../todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private apollo: Apollo) {}

  getTodos(): Observable<Todo[]> {
    return this.apollo.query<{ getTodos: Todo[]; }>({
      query: gql`
        query {
          getTodos {
            id,
            name
          }
        }
      `
    }).pipe(
      map((response) => response.data.getTodos)
    );
  }

  deleteTodo(id: string | undefined): Observable<boolean | undefined> {
    return this.apollo.mutate<{ deleteTodo: boolean; }>({
      mutation: gql`
        mutation DeleteTodoById($id: String!) {
          deleteTodo(id: $id)
        }
      `,
      variables: {
        id // pass the valid ID value
      }
    }).pipe(
      map(response => response.data?.deleteTodo)
    );
  }

  addTodo(name: string): Observable<string | undefined> {
    return this.apollo.mutate<{ addTodo: Todo; }>({
      mutation: gql`
        mutation AddTodo($name: String!) {
          addTodo(name: $name) {
            id
          }
        }
      `,
      variables: {
        name
      }
    }).pipe(
      map(response => response.data?.addTodo.id)
    );
  }
}
