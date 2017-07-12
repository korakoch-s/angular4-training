import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ThreadsService } from '../thread/thread.service';
import { Thread } from '../thread/thread.model';

@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss']
})
export class ChatThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;

  constructor(public threadsService: ThreadsService) {
  }

  ngOnInit(): void {
    this.threadsService.currentThread.subscribe((currentThread: Thread) => {
      this.selected = currentThread && this.thread && (currentThread.id === this.thread.id);
    });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }

}
