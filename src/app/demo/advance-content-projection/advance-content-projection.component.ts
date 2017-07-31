import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[app-advance-content-projection]',
  templateUrl: './advance-content-projection.component.html',
  styleUrls: ['./advance-content-projection.component.scss']
})
export class AdvanceContentProjectionComponent implements OnInit {
  @Input() header: string;
  @HostBinding('attr.class') cssClass = 'message';

  constructor() { }

  ngOnInit() {
    console.log('header', this.header);
  }

}
