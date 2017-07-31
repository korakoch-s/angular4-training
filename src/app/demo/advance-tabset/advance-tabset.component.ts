import { Component, OnInit, AfterContentInit, QueryList, ContentChildren } from '@angular/core';
import { AdvanceTabComponent } from '../advance-tab/advance-tab.component';

@Component({
  selector: 'app-advance-tabset',
  templateUrl: './advance-tabset.component.html',
  styleUrls: ['./advance-tabset.component.scss']
})
export class AdvanceTabsetComponent implements OnInit, AfterContentInit {
  @ContentChildren(AdvanceTabComponent) tabs: QueryList<AdvanceTabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: AdvanceTabComponent): void {
    this.tabs.toArray().forEach( t => {
      t.active = false;
    });
    tab.active = true;
    event.preventDefault();
  }

}
