import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {TranslateModule} from '@ngx-translate/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {AlertErrorComponent} from './alert/alert-error.component';
import {AlertComponent} from './alert/alert.component';
import {FormcontrolErrorComponent} from './components/formcontrol-error/formcontrol-error.component';
import {ItemsPerPageComponent} from './components/items-per-page/items-per-page.component';
import {ModalHeaderComponent} from './components/modal-header/modal-header.component';
import {NoDataFoundComponent} from './components/no-data-found/no-data-found.component';
import {ScrollTopComponent} from './components/scroll-top/scroll-top.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {SortByComponent} from './components/sort-by/sort-by.component';
import {StickyToolbarComponent} from './components/sticky-toolbar/sticky-toolbar.component';
import {SysAlertComponent} from './components/sys-alert/sys-alert.component';
import {SysSpinnerComponent} from './components/sys-spinner/sys-spinner.component';
import {TimeFilterComponent} from './components/time-filter/time-filter.component';
import {ContentAnimateDirective} from './directives/content-animate.directive';
import {HasAnyAuthorityDirective} from './directives/has-any-authority.directive';
import {HeaderDirective} from './directives/header.directive';
import {HighlightPipe} from './directives/highlight.pipe';
import {KeysPipe} from './directives/keys.pipe';
import {MenuDirective} from './directives/menu.directive';
import {OffcanvasDirective} from './directives/offcanvas.directive';
import {ScrollTopDirective} from './directives/scroll-top.directive';
import {SortableDirective} from './directives/sortable/sortable.directive';
import {StickyDirective} from './directives/sticky.directive';
import {TabClickEventDirective} from './directives/tab-click-event.directive';
import {ToggleDirective} from './directives/toggle.directive';
import {FindLanguageFromKeyPipe} from './language/find-language-from-key.pipe';
import {FirstLetterPipe} from './pipes/first-letter.pipe';

import {LoginComponent, PasswordResetFinishComponent, PasswordResetInitComponent} from './components/auth';

import {Error6Component} from '../error/error6/error6.component';
import {AccessDeniedComponent} from './components/auth/access-denied/access-denied.component';
import {ActivateComponent} from './components/auth/activate/activate.component';
import {AuthComponent} from './components/auth/auth/auth.component';
import {DeleteAccountComponent} from './components/auth/delete-account/delete-account.component';
import {CronIframeComponent} from './components/cron-iframe/cron-iframe.component';
import {ModalConfirmationComponent} from './components/modal-confirmation/modal-confirmation.component';
import {SysDataLimitComponent} from './components/sys-data-limit/sys-data-limit.component';
import {SysFileDragDropDirective} from './components/sys-file-upload/shared/directives/sys-file-drag-drop.directive';
import {SysFileUploadComponent} from './components/sys-file-upload/sys-file-upload.component';
import {SysPageHeaderComponent} from './components/sys-page-header/sys-page-header.component';
import {SysSearchInputComponent} from './components/sys-search-input/sys-search-input.component';
import {SysToggleComponent} from './components/sys-toggle/sys-toggle.component';
import {TimeCommonUsedComponent} from './components/time-filter/time-common-used/time-common-used.component';
import {TimeRangeFilterComponent} from './components/time-filter/time-range-filter/time-range-filter.component';
import {ButtonLoaderDirective} from './directives/button-loader.directive';
import {SafePipe} from './pipes/safe.pipe';


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
    CronIframeComponent,
    ModalConfirmationComponent
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
      ModalConfirmationComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class SyspenSharedModule {
}
