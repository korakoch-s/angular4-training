import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { DefaultComponent } from './default/default.component';
import { JsReintroComponent } from './demo/js-reintro/js-reintro.component';
import { TsIntroComponent } from './demo/ts-intro/ts-intro.component';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  {
    path: 'demo', component: DemoAppComponent, children: [
      { path: 'js-reintro', component: JsReintroComponent },
      { path: 'ts-intro', component: TsIntroComponent }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    DemoAppComponent,
    DefaultComponent,
    JsReintroComponent,
    TsIntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PopoverModule.forRoot(),
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
