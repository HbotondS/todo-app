import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map, Observable } from "rxjs";
import { Todo } from "../../todo.model";

@Injectable({providedIn: "root"})
export class TodoService {
  constructor(private apollo: Apollo) {}

  getTodos(): Observable<Todo[]> {
    return this.apollo.query<any>({
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

}
