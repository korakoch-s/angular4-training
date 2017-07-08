import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenubarModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
