import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/core/notifications/notifier.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

constructor(private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  showNotification() {
    this.notifier.show('An ordenary notification', 'OK')
  }

  showSuccess() {
    this.notifier.showSuccess('Very successful message', 'OK', 'Success')
  }

  showError() {
    this.notifier.showError('Something bad happened', 'OK', 'Error')
  }
}
