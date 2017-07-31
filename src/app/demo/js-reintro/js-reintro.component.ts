import { Component, OnInit } from '@angular/core';
import * as purejs from './js-reintro.purejs';

@Component({
  selector: 'app-js-reintro',
  templateUrl: './js-reintro.component.html',
  styleUrls: ['./js-reintro.component.scss']
})
export class JsReintroComponent implements OnInit {
  testVar1;
  testVar11 = typeof (this.testVar1);

  testVar2 = null;
  testVar22 = typeof (this.testVar2);

  testVar3 = parseInt('hello', 10);
  testVar4 = parseInt('350.123', 10);

  testVar5 = isFinite(1 / 0);
  testVar6 = isNaN(1 / 0);

  testVar7 = (1 << 3);

  tmp123: any = 123;

  constructor() { }

  ngOnInit() {
  }

  testFuncVar() {
    console.log('Print var1 before declare loop = ', var1);
    for (var var1 = 0; var1 < 5; var1++) {
      console.log('Print var1 = ', var1);
    }
    console.log('Print var1 after declare loop = ', var1);
  }

  testFuncLet() {
    // console.log('Print let1 before declare loop = ', let1);
    for (let let1 = 0; let1 < 5; let1++) {
      console.log('Print let1 = ', let1);
    }
    // console.log('Print let1 after declare loop = ', let1);
  }

  introControlStructure() {
    if (true) {
      console.log('Do something when true');
    } else {
      // console.log('Do something when not true');
    }

    let count = 0;
    while (count < 5) {
      console.log('Do when count < 5; count = ', count);
      count++;
    }

    count = 0;
    do {
      console.log('Do when count < 5; count = ', count);
      count++;
    } while (count < 5);

    for (let i = 0; i < 5; i++) {
      console.log('Do this for i = ', i);
    }

    const strArray = ['txt1', 'txt2', 'txt3'];
    for (const val of strArray) {
      console.log('Do this for val = ', val);
    }

    const objPerson = {
      fname: 'Korakoch',
      lname: 'Singkam',
      gender: 'male',

      fullName(): string {
        return this.fname + ' ' + this.lname
      }
    };
    if (typeof objPerson === 'object') {
      for (const prop in objPerson) {
        if (objPerson.hasOwnProperty(prop)) {
          console.log('Value of ' + prop + ' = ' + objPerson[prop]);
        }
      }
    }

    const genderType = (objPerson.gender === 'male') ? 'a man' : 'not a man';
    console.log('He is ' + genderType);

    const fullName = objPerson && objPerson.fullName();
    console.log('Full name = ' + fullName);

    let cacheName: string;
    let tmpName = cacheName || (cacheName = objPerson.fullName());
    console.log('Temp name = ' + tmpName);
    cacheName = 'Temp Name';
    tmpName = cacheName || (cacheName = objPerson.fullName());
    console.log('Another Temp name = ' + tmpName);

    switch (objPerson.gender) {
      case 'male':
        console.log('This is a man,');
        break;
      case 'female':
        console.log('This is a woman,');
        break;
      default:
        console.log('This is unknow gender,');
    }
  }

  introObject() {
    const obj = {
      name: 'Korakoch Singkam',
      'for': 'training demo', // for is reserve word should use '_for' instead.
      course: {
        name: 'Angular4',
        level: 'Intermidieat',
        duration: '3 days'
      }
    }

    console.log('obj.for = ', obj.for);
    console.log('obj.course.name = ', obj.course.name);
    console.log('obj[course][duration] = ', obj['course']['duration']);

    console.log('Custom Objects');
    const p1 = purejs.makePerson('Korakoch', 'Singkam');
    console.log('p1.fullName() = ', p1.fullName());
    console.log('p1.fullNameReverse() = ', p1.fullNameReverse());

    purejs.testPrototype();
  }

  introArray() {
    const ar1 = new Array();
    ar1[0] = 'dog';
    ar1[1] = 'cat';
    ar1[2] = 'rat';
    console.log('ar1.length = ', ar1.length);

    const ar2 = ['dog', 'cat', 'rat'];
    console.log('ar2.length = ', ar2.length);

    ar1[100] = 'hippo';
    console.log('ar1.length = ', ar1.length);
    console.log('ar1[99] = ', ar1[99]);

    ar2.forEach((val, index, ar2) => {
      console.log('Current index = ' + index + ', value = ' + ar2[index] + ' or ' + val);
    });
  }

  introFunction() {
    purejs.introFunction();
    const ret = purejs.recursiveFactorial(5);
    console.log('Factorial of 5 = ', ret);
  }

  introClosure() {
    const x = purejs.makeAdder(5);
    const y = purejs.makeAdder(20);
    console.log('x(6) = ', x(6));
    console.log('y(7) = ', y(7));
  }

}
