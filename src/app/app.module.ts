import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap';
import { DefaultComponent } from './features/default/default.component';
import { MainMenuComponent } from './features/main-menu/main-menu.component';

import { UserService } from './user/user.service';
import { MessagesService } from './message/message.service';
import { ThreadsService } from './thread/thread.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'default', component: DefaultComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent,
    MainMenuComponent,
    UserService,
    MessagesService,
    ThreadsService
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule
  ],
  providers: [
    UserService,
    MessagesService,
    ThreadsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
