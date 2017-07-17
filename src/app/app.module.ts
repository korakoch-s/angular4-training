import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JavascriptTypeComponent } from './topic/javascript-type/javascript-type.component';
import { DemoAppComponent } from './demo-app/demo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptTypeComponent,
    DemoAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
