import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoPage implements OnInit {
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.service.getTodos().subscribe({
      next: (todos) => console.log(todos),
      error: err => console.log(err)
    });
  }
}
