import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgSelectModule} from '@ng-select/ng-select';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {FindLanguageFromKeyPipe} from './language/find-language-from-key.pipe';
import {AlertComponent} from './alert/alert.component';
import {AlertErrorComponent} from './alert/alert-error.component';
import {HasAnyAuthorityDirective} from './directives/has-any-authority.directive';
import {SysAlertComponent} from './components/sys-alert/sys-alert.component';
import {ScrollTopComponent} from './components/scroll-top/scroll-top.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {StickyToolbarComponent} from './components/sticky-toolbar/sticky-toolbar.component';
import {ContentAnimateDirective} from './directives/content-animate.directive';
import {HeaderDirective} from './directives/header.directive';
import {HighlightPipe} from './directives/highlight.pipe';
import {KeysPipe} from './directives/keys.pipe';
import {MenuDirective} from './directives/menu.directive';
import {OffcanvasDirective} from './directives/offcanvas.directive';
import {ScrollTopDirective} from './directives/scroll-top.directive';
import {StickyDirective} from './directives/sticky.directive';
import {ToggleDirective} from './directives/toggle.directive';
import {FirstLetterPipe} from './pipes/first-letter.pipe';
import {SortableDirective} from './directives/sortable/sortable.directive';
import {ModalHeaderComponent} from './components/modal-header/modal-header.component';
import {SysSpinnerComponent} from './components/sys-spinner/sys-spinner.component';
import {TabClickEventDirective} from './directives/tab-click-event.directive';
import {FormcontrolErrorComponent} from './components/formcontrol-error/formcontrol-error.component';
import {ItemsPerPageComponent} from './components/items-per-page/items-per-page.component';
import {SortByComponent} from './components/sort-by/sort-by.component';
import {NoDataFoundComponent} from './components/no-data-found/no-data-found.component';
import {TimeFilterComponent} from './components/time-filter/time-filter.component';

import {LoginComponent, PasswordResetFinishComponent, PasswordResetInitComponent} from './components/auth';

import {AccessDeniedComponent} from './components/auth/access-denied/access-denied.component';
import {Error6Component} from '../error/error6/error6.component';
import {TimeRangeFilterComponent} from './components/time-filter/time-range-filter/time-range-filter.component';
import {TimeCommonUsedComponent} from './components/time-filter/time-common-used/time-common-used.component';
import {AuthComponent} from './components/auth/auth/auth.component';
import {ButtonLoaderDirective} from './directives/button-loader.directive';
import {SysDataLimitComponent} from './components/sys-data-limit/sys-data-limit.component';
import {ActivateComponent} from './components/auth/activate/activate.component';
import {DeleteAccountComponent} from './components/auth/delete-account/delete-account.component';
import {SysToggleComponent} from './components/sys-toggle/sys-toggle.component';
import {SysSearchInputComponent} from './components/sys-search-input/sys-search-input.component';
import {SysFileDragDropDirective} from './components/sys-file-upload/shared/directives/sys-file-drag-drop.directive';
import {SysFileUploadComponent} from './components/sys-file-upload/sys-file-upload.component';
import {SysPageHeaderComponent} from './components/sys-page-header/sys-page-header.component';
import {SafePipe} from './pipes/safe.pipe';
import { CronIframeComponent } from './components/cron-iframe/cron-iframe.component';


@NgModule({
  imports: [
    PerfectScrollbarModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgbModule,
    LoadingBarModule,
    RouterModule,
    NgSelectModule,
  ],
  declarations: [
    LoginComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SysAlertComponent,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
    ScrollTopComponent,
    SearchResultComponent,
    StickyToolbarComponent,
    ModalHeaderComponent,
    SysSpinnerComponent,
    FormcontrolErrorComponent,
    ItemsPerPageComponent,
    TimeFilterComponent,
    SortByComponent,
    NoDataFoundComponent,
    SysSearchInputComponent,
    ContentAnimateDirective,
    HeaderDirective,
    TabClickEventDirective,
    HighlightPipe,
    KeysPipe,
    MenuDirective,
    OffcanvasDirective,
    ScrollTopDirective,
    StickyDirective,
    ToggleDirective,
    SortableDirective,
    FirstLetterPipe,
    AccessDeniedComponent,
    Error6Component,
    TimeRangeFilterComponent,
    TimeCommonUsedComponent,
    SysDataLimitComponent,
    AuthComponent,
    ButtonLoaderDirective,
    ActivateComponent,
    DeleteAccountComponent,
    SysToggleComponent,
    SysFileDragDropDirective,
    SysFileUploadComponent,
    SysPageHeaderComponent,
    SafePipe,
    SafePipe,
    CronIframeComponent
  ],
  entryComponents: [],
    exports: [
        // Modules
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        TranslateModule,
        InlineSVGModule,
        NgbModule,
        LoadingBarModule,
        FindLanguageFromKeyPipe,
        SysAlertComponent,
        AlertComponent,
        AlertErrorComponent,
        HasAnyAuthorityDirective,
        ScrollTopComponent,
        SearchResultComponent,
        StickyToolbarComponent,
        FormcontrolErrorComponent,
        ItemsPerPageComponent,
        TimeFilterComponent,
        SysSearchInputComponent,
        SortByComponent,
        SysSpinnerComponent,
        NoDataFoundComponent,
        // Directive
        ContentAnimateDirective,
        HeaderDirective,
        TabClickEventDirective,
        HighlightPipe,
        KeysPipe,
        MenuDirective,
        OffcanvasDirective,
        ScrollTopDirective,
        StickyDirective,
        ToggleDirective,
        SortableDirective,
        FirstLetterPipe,
        ModalHeaderComponent,
        SysDataLimitComponent,
        ButtonLoaderDirective,
        Error6Component,
        DeleteAccountComponent,
        SysToggleComponent,
        SysFileUploadComponent,
        SafePipe,
        CronIframeComponent,
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class SyspenSharedModule {
}
