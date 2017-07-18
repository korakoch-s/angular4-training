import { Component, OnInit } from '@angular/core';
import { ChildClass, Foo, Bar } from './ts-intro.model'

@Component({
  selector: 'app-ts-intro',
  templateUrl: './ts-intro.component.html',
  styleUrls: ['./ts-intro.component.scss']
})
export class TsIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logConsole(msg: string) {
    const now = new Date();
    console.log('[' + now.toString() + '] ' + msg);
  }

  introClasses() {
    let myself = new ChildClass('Koch', 'S.', 39);
    this.logConsole('myself.info() = ' + myself.info());

    myself = ChildClass.defaultChild();
    this.logConsole('myself.info() from default = ' + myself.info());
  }

  introTimeout() {
    this.logConsole('Begin click timeout. It will be waiting for 2 seconds.');
    const me = this;
    setTimeout(function () {
      me.logConsole('Do this after 2 seconds');
    }, 2000);
  }

  introInterval() {
    this.logConsole('Begin click interval.');
    let count = 0;
    const iid = setInterval(() => {
      if (count >= 3) {
        clearInterval(iid);
        this.logConsole('Interval complet!');
      } else {
        this.logConsole('Interval of count = ' + count);
        count++;
      }
    }, 1000);
  }

  introPromise() {
    const myself = ChildClass.defaultChild();
    this.logConsole('Before call promise function.');
    myself.getValueFromLongProcess().then(ret => {
      this.logConsole('Return value = ' + ret);
    });
    this.logConsole('After call promise function.');
  }

  introObservable() {
    const me = this;
    const myself = ChildClass.defaultChild();
    me.logConsole('Begin subscribe...');
    let subscrip = myself.actionSubject.subscribe((val) => {
      me.logConsole(val);
    });
    me.logConsole('start action....');
    myself.startActions();
    me.logConsole('while action running...');

    setTimeout(function () {
      me.logConsole('after action run for 5 seconds, unsubscribe1');
      subscrip.unsubscribe();
    }, 5000);
    me.logConsole('log line after unsubscribe1');

    setTimeout(function () {
      me.logConsole('after action run for 10 seconds, re-subscribe');
      subscrip = myself.actionSubject.subscribe((val) => {
        me.logConsole(val);
      });
    }, 10000);
    me.logConsole('log line re-subscribe');

    setTimeout(function () {
      me.logConsole('after action run for 15 seconds, unsubscribe2');
      subscrip.unsubscribe();
    }, 15000);
    me.logConsole('log line unsubscribe2');

  }

  introGuardSomething(x: number | string) {
    if (typeof x === 'string') {
      this.logConsole('.substr in guard = ' + x.substr(2));
    }

    // this.logConsole('.substr out guard = ' + x.substr(2)); //compile error
  }

  introGuardObject() {
    this.doGuardObject(new Foo());
    this.doGuardObject(new Bar());
  }

  doGuardObject(arg: Foo | Bar ) {
   if (arg instanceof Foo) {
       console.log(arg.foo); // OK
       // console.log(arg.bar); // Error!
   }
   if (arg instanceof Bar) {
       // console.log(arg.foo); // Error!
       console.log(arg.bar); // OK
   }

   console.log(arg.common); // OK
   // console.log(arg.foo); // Error!
   // console.log(arg.bar); // Error!

  }
}
