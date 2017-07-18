import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Input() inputVal: string;
  @Input('customVal') anotherInput: any;
  @Output() onValueOut = new EventEmitter<string>();
  isDisabled = true;
  classes = 'binding-class2';
  isSpecial = false;
  twoWayVal: string;

  constructor() { }

  ngOnInit() {
  }

  goClick() {
    this.onValueOut.emit('value from second component.');
  }

  toggleClasses() {
    if (this.classes === 'binding-class1') {
      this.classes = 'binding-class2';
    } else {
      this.classes = 'binding-class1';
    }
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
