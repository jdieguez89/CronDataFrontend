import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SyspenSharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NotificationInterceptor} from './blocks/interceptor/notification.interceptor';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {ErrorHandlerInterceptor} from './blocks/interceptor/errorhandler.interceptor';
import {CookieService} from 'ngx-cookie-service';
import {AuthInterceptor} from './blocks/interceptor/auth.interceptor';
import {AuthExpiredInterceptor} from './blocks/interceptor/auth-expired.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AuthServerProvider} from './core/auth/auth-jwt.service';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SyspentestCoreModule} from './core/core.module';
import {TokenManagerService} from './core/auth/token-manager.service';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {LayoutConfigService} from './layout/shared/services/layout-config.service';
import {LayoutConfig} from './layout/shared/config/layout.config';
import {Error3Component} from './error/error3/error3.component';
import {NgbDatepickerConfig, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

// tslint:disable-next-line:typedef
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 0.5,
  swipeEasing: true,
  minScrollbarLength: 40,
  maxScrollbarLength: 300
};

// tslint:disable-next-line:typedef
export function initializeLayoutConfig(appConfig: LayoutConfigService) {
  // initialize app by loading default demo layout config
  return () => {
    if (appConfig.getConfig() === null) {
      appConfig.loadConfigs(new LayoutConfig().configs);
    }
  };
}


// export function translatePartialLoader(http: HttpClient): TranslateHttpLoader;
@NgModule({
  declarations: [
    AppComponent,
    Error3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SyspentestCoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      }
    }),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      autoDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    SyspenSharedModule,
  ],
  providers: [
    LocalStorageService,
    SessionStorageService,
    CookieService,
    {
      // layout config initializer
      provide: APP_INITIALIZER,
      useFactory: initializeLayoutConfig,
      deps: [LayoutConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      deps: [TokenManagerService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      deps: [
        AuthServerProvider,
        TokenManagerService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      deps: [AuthServerProvider, TokenManagerService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      deps: [SessionStorageService, Injector, TokenManagerService],
      multi: true
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dpConfig: NgbDatepickerConfig, private config: NgbModalConfig) {
    this.dpConfig.minDate = {year: moment().year() - 100, month: 1, day: 1};
    config.backdrop = 'static';
  }
}
