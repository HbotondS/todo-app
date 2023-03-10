import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private config: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ''
  };

  constructor(private snackBar: MatSnackBar) {}

  success(msg: string, action: string): void {
    this.config.panelClass = 'success-snackbar';
    this.snackBar.open(msg, action, this.config);
  }

  error(msg: string, action: string): void {
    this.config.panelClass = 'error-snackbar';
    this.snackBar.open(msg, action, this.config);
  }
}
