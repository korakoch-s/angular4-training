/* tslint:disable max-line-length */
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.scss']
})
export class MyfirstComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  startTime = new Date();
  anotherVal = 'Another value from parent';

  constructor() { }

  ngOnInit() {
    console.log('Component ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Component ngOnChanges');
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        console.log('change ==> ' + prop);
      }
    }
  }

  ngDoCheck() {
    console.log('Component ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Component ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Component ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Component ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Component ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Component ngOnDestroy');
  }

  updateStartTime() {
    this.startTime = new Date();
  }

  secondValueOut($event) {
    console.log('Value = ' + $event);
  }
}
