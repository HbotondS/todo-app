import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/spring/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoPage implements OnInit {
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.service.getTodos().subscribe(result => console.log(result.data.getTodos));
  }
}
