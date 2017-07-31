import { Injectable } from '@angular/core';
import { ILog } from './ilog';

@Injectable()
export class LogService {

  constructor(private implementation: ILog) { }

  log(msg: string): string {
    return this.implementation.log(msg);
  }

}
