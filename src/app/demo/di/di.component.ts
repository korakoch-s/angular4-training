import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from './log.service';
import { logConsoleFactory, logDBFactory } from './log.factory';

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

  public logMsgs: string[] = [];
  public msg: string;

  constructor( @Inject('API_URL') public backendUrl: string,
                private log: LogService) {
  }

  ngOnInit() {
  }

  logClick() {
    this.logMsgs.push(this.log.log(this.msg));
    this.msg = '';
  }

  logConsoleClick() {
    this.log = new LogService(logConsoleFactory());
  }

  logDBClick() {
    this.log = new LogService(logDBFactory());
  }
}
