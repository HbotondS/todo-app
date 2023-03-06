import { NgModule } from '@angular/core';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ TodoPageRoutingModule, CommonModule ],
  declarations: [ TodoPage ]
})
export class TodoPageModule {}
