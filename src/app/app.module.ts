import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { DefaultComponent } from './default/default.component';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { JsReintroComponent } from './demo/js-reintro/js-reintro.component';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  {
    path: 'demo', component: DemoAppComponent, children: [
      { path: 'js-reintro', component: JsReintroComponent }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    DemoAppComponent,
    DefaultComponent,
    JsReintroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
