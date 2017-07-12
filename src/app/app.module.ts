import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { MessagesService } from './message/message.service';
import { ThreadsService } from './thread/thread.service';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ChatPageComponent } from './chat-page/chat-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent,
    ChatThreadComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    FromNowPipe,
    ChatNavBarComponent,
    ChatPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    MessagesService,
    ThreadsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
