import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/thread.service';

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.scss']
})
export class ChatThreadsComponent implements OnInit {
  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit() {
  }

}
