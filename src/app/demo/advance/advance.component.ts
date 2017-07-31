import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  tabs: any;
  constructor() { }

  ngOnInit() {
    this.tabs = [
      { title: 'About', content: 'This is about tab.' },
      { title: 'Blog', content: 'This is blog tab.' },
      { title: 'Contact us', content: 'This is contact us tab.' }
    ];
  }

}
