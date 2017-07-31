import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from './log.service';
import { logConsoleFactory } from './log.factory';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss'],
  providers: [
    { provide: 'API_URL', useValue: 'http://api.fakedb.mydomain.com/v1/'},
    { provide: LogService, useFactory: logConsoleFactory}
  ]
})
export class DiComponent implements OnInit {

  public logMsg: string[] = [];
  public msg: string;

  constructor( @Inject('API_URL') public backendUrl: string,
                private log: LogService) {
  }

  ngOnInit() {
  }

  logClick() {
    this.logMsg.push(this.log.log(this.msg));
    this.msg = '';
  }
}
