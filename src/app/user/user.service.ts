import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { User } from './user.model';

@Injectable()
export class UserService {
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  public setCurrentUthis(newUser): void {
    this.currentUser.next(newUser);
  }

}

export const userServiceInjectables: Array<any> = [
  UserService
];
