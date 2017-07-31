import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { MomentModule } from 'angular2-moment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { DefaultComponent } from './default/default.component';
import { JsReintroComponent } from './demo/js-reintro/js-reintro.component';
import { TsIntroComponent } from './demo/ts-intro/ts-intro.component';
import { MyfirstComponent } from './demo/myfirst/myfirst.component';
import { SecondComponent } from './demo/second/second.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { MyHighlightDirective } from './demo/directive/my-highlight.directive';
import { MyUnlessDirective } from './demo/directive/my-unless.directive';
import { FormComponent } from './demo/form/form.component';
import { DiComponent } from './demo/di/di.component';
import { TranslateComponent } from './demo/translate/translate.component';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  {
    path: 'demo', component: DemoAppComponent, children: [
      { path: 'js-reintro', component: JsReintroComponent },
      { path: 'ts-intro', component: TsIntroComponent },
      { path: 'ng-component', component: MyfirstComponent },
      { path: 'ng-directive', component: DirectiveComponent },
      { path: 'ng-form', component: FormComponent },
      { path: 'ng-di', component: DiComponent },
      { path: 'ng-translate', component: TranslateComponent}
    ]
  },
];

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DemoAppComponent,
    DefaultComponent,
    JsReintroComponent,
    TsIntroComponent,
    MyfirstComponent,
    SecondComponent,
    DirectiveComponent,
    MyHighlightDirective,
    MyUnlessDirective,
    FormComponent,
    DiComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PopoverModule.forRoot(),
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
