import { Component, OnInit } from '@angular/core';

import { ChatExampleData } from './data/chat-example-data';
import { UserService } from './user/user.service';
import { ThreadsService } from './thread/thread.service';
import { MessagesService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UserService) {
      ChatExampleData.init(messagesService, threadsService, usersService);
  }

  ngOnInit() {

  }

}
