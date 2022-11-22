import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './components/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar: MatSnackBar) { }

  show(message: string, action?: string) {
    this.snackbar.open(message, action, {
      duration: 3000
    });
  }

  showSuccess(message: string, action?: string, header?: string) {
    this.snackbar.openFromComponent(NotifierComponent, {
      duration: 2000,
      panelClass: 'success',
      data: {
        message: message,
        action: action,
        header: header,
        notifierType: 'success'
      }
    });
  }

  showError(message: string, action?: string, header?: string) {
    this.snackbar.openFromComponent(NotifierComponent, {
      duration: 7000,
      panelClass: 'error',
      data: {
        message: message,
        action: action,
        header: header,
        notifierType: 'error'
      }
    });
  }
}
