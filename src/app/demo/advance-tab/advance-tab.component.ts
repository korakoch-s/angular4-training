import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advance-tab',
  templateUrl: './advance-tab.component.html',
  styleUrls: ['./advance-tab.component.scss']
})
export class AdvanceTabComponent implements OnInit {
  @Input() title: string;
  active = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
