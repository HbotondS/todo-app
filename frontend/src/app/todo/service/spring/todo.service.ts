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

  deleteTodo(id: number): Observable<any> {
    console.log(id);
    return this.apollo.mutate({
      mutation: gql`
        mutation DeleteTodoById($id: Int!) {
          deleteTodo(id: $id)
        }
      `,
      variables: {
        id // pass the valid ID value
      }
    });
  }
}
