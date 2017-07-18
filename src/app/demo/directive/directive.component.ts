import { Component, OnInit } from '@angular/core';
import { DemoData, exampleDatas } from './directive-demo.model';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  datas: DemoData[];

  constructor() { }

  ngOnInit() {
  }

  setDatas() {
    this.datas = exampleDatas();
  }

  clearDatas() {
    this.datas = null;
  }

  appendDatas() {
    // exampleDatas().forEach(itm => {
    //   this.datas.push(itm);
    // });

    let count = 0;
    const dummyData = exampleDatas();
    const iid = setInterval(() => {
      if (count > dummyData.length - 1) {
        clearInterval(iid);
      }else {
        this.datas.push( dummyData[count]);
        count++;
      }
    }, 1000);
  }
}
