import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-moment',
  templateUrl: './time-moment.component.html',
  styleUrls: ['./time-moment.component.scss']
})
export class TimeMomentComponent implements OnInit {
  public myDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
