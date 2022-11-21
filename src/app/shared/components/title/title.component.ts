import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() no?: string;
  @Input() centerText?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
