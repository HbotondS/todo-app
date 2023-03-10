import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: [ './add-todo-dialog.component.scss' ]
})
export class AddTodoDialog {
  todo: string = '';

  constructor(public dialogRef: MatDialogRef<AddTodoDialog>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
