import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../user/user.service';
import { ThreadsService } from './../thread/thread.service';
import { MessagesService } from './../message/message.service';
import { Message } from './../message/message.model';
import { Thread } from './../thread/thread.model';
import { User } from './../user/user.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        if (this.message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
      }
    );
  }

}
