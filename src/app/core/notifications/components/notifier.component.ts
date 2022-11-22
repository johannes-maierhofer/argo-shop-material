import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Notification } from '../models/Notification';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: Notification,
    public snackBarRef: MatSnackBarRef<NotifierComponent>)
  { }

  ngOnInit(): void {
  }

}
