import { NgModule } from '@angular/core';
import { TodoPageRoutingModule } from './todo-routing.module';
import { TodoPage } from './todo.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatLineModule } from '@angular/material/core';
import { AddTodoDialog } from './components/add-todo-dialog/add-todo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TodoPageRoutingModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatLineModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [ TodoPage, AddTodoDialog ]
})
export class TodoPageModule {}
