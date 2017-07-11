import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Message } from './message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';

const initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
  newMessage: Subject<Message> = new Subject<Message>();
  messages: Observable<Message[]>;
  updates: Subject<any> = new Subject<any>();
  create: Subject<Message> = new Subject<Message>();
  markThreadAsRead: Subject<any> = new Subject<any>();

  constructor() {
    this.messages = this.updates
      .scan((messages: Message[],
        operation: IMessagesOperation) => {
          return operation(messages);
      }, initialMessages)
      .publishReplay(1)
      .refCount();

    this.create
      .map((message: Message): IMessagesOperation => {
        return (messages: Message[]) => {
          return messages.concat(message);
        };
      })
      .subscribe(this.updates);

    this.newMessage
      .subscribe(this.create);

    this.markThreadAsRead
      .map((thread: Thread) => {
        return (messages: Message[]) => {
          return messages.map((message: Message) => {
            if (message.thread.id === thread.id) {
              message.isRead = true;
            }
            return message;
          });
        };
      })
      .subscribe(this.updates);
  }

  addMessage(message: Message): void {
    this.newMessage.next(message);
  }

  messageForThreadUser(thread: Thread, user: User): Observable<Message> {
    return this.newMessage
      .filter((message: Message) => {
        return (message.thread.id === thread.id) &&
            (message.author.id !== user.id);
      });
  }

}

export const messageServiceInjectables: Array<any> = [
  MessagesService
];
