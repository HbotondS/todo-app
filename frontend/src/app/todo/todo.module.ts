import { NgModule } from '@angular/core';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.component';

@NgModule({
  imports: [TodoPageRoutingModule],
  declarations: [TodoPage]
})
export class TodoPageModule {}
