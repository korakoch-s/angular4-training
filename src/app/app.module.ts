import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DefaultComponent } from './features/default/default.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'default', component: DefaultComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
