import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../message/message.model';
import { Thread } from '../thread/thread.model';
import { User } from '../user/user.model';
import { MessagesService } from '../message/message.service';
import { ThreadsService } from '../thread/thread.service';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;

  constructor(public messageService: MessagesService,
            public threadsService: ThreadsService,
            public usersService: UserService,
            public el: ElementRef) { }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    this.draftMessage = new Message();
    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      }
    );
    this.usersService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
      }
    );
    this.messages.subscribe((messages: Array<Message>) => {
      setTimeout(() => {
        this.scrollToBottom();
      });
    });
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messageService.addMessage(m);
    this.draftMessage = new Message();
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el.nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }

}
