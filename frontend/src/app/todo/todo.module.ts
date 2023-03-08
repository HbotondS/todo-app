import { NgModule } from '@angular/core';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatLineModule } from "@angular/material/core";

@NgModule({
  imports: [
    TodoPageRoutingModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatLineModule
  ],
  declarations: [ TodoPage ]
})
export class TodoPageModule {}
