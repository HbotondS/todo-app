import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class TodoService {
  constructor(private apollo: Apollo) {}

  getTodos(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          getTodos {
            id,
            name
          }
        }
      `
    });
  }

}
