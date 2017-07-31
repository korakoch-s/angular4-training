import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { MomentModule } from 'angular2-moment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SecureService } from './demo/route-guard/secure.service';
import { SecureGuard } from './demo/route-guard/secure.guard';

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
import { TimeMomentComponent } from './demo/time-moment/time-moment.component';
import { HttpComponent } from './demo/http/http.component';
import { RouteComponent } from './demo/route/route.component';
import { RouteGuardComponent } from './demo/route-guard/route-guard.component';
import { RxjsComponent } from './demo/rxjs/rxjs.component';
import { ReduxComponent } from './demo/redux/redux.component';
import { AdvanceComponent } from './demo/advance/advance.component';
import { AdvanceChildComponent } from './demo/advance-child/advance-child.component';
import { AdvanceContentProjectionComponent } from './demo/advance-content-projection/advance-content-projection.component';
import { AdvanceTabsetComponent } from './demo/advance-tabset/advance-tabset.component';
import { AdvanceTabComponent } from './demo/advance-tab/advance-tab.component';

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
      { path: 'ng-translate', component: TranslateComponent },
      { path: 'ng-moment', component: TimeMomentComponent },
      { path: 'ng-http', component: HttpComponent },
      { path: 'ng-route', component: RouteComponent },
      {
        path: 'ng-routeguard/:id',
        component: RouteGuardComponent,
        canActivate: [SecureGuard]
      },
      { path: 'ng-rxjs', component: RxjsComponent },
      { path: 'ng-redux', component: ReduxComponent },
      { path: 'ng-advance', component: AdvanceComponent }
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
    TranslateComponent,
    TimeMomentComponent,
    HttpComponent,
    RouteComponent,
    RouteGuardComponent,
    RxjsComponent,
    ReduxComponent,
    AdvanceComponent,
    AdvanceChildComponent,
    AdvanceContentProjectionComponent,
    AdvanceTabsetComponent,
    AdvanceTabComponent
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
    }),
    HttpModule
  ],
  providers: [
    SecureGuard,
    SecureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
