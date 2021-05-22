// Angular
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// NgBootstrap
import {NgbDropdownModule, NgbProgressbarModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
// Translation
// Loading bar
// Ngx DatePicker
// Perfect Scrollbar
// SVG inline
// Material
// Core Module
import {HeaderComponent} from './header/header.component';
import {AsideLeftComponent} from './aside/aside-left.component';
import {FooterComponent} from './footer/footer.component';
import {BrandComponent} from './brand/brand.component';
import {TopbarComponent} from './header/topbar/topbar.component';
import {MenuHorizontalComponent} from './header/menu-horizontal/menu-horizontal.component';
import {HeaderMobileComponent} from './header/header-mobile/header-mobile.component';
import {SyspenSharedModule} from '../shared/shared.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {LanguageSelectorComponent} from './header/topbar/language-selector/language-selector.component';
import {NotificationComponent} from './header/topbar/notification/notification.component';
import {SearchDefaultComponent} from './header/topbar/search-default/search-default.component';
import {QuickActionComponent} from './header/topbar/quick-action/quick-action.component';
import {UserProfileTopBarComponent} from './header/topbar/user-profile/user-profile.component';
import {UserProfile4Component} from './header/topbar/user-profile4/user-profile4.component';
import {SearchDropdownComponent} from './header/topbar/search-dropdown/search-dropdown.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {SubheaderComponent} from './subheader/subheader.component';
import {SubheaderSearchComponent} from './subheader/subheader-search/subheader-search.component';
import {Subheader1Component} from './subheader/subheader1/subheader1.component';
import {Subheader2Component} from './subheader/subheader2/subheader2.component';
import {Subheader3Component} from './subheader/subheader3/subheader3.component';

@NgModule({
  declarations: [
    FooterComponent,
    // headers
    HeaderComponent,
    BrandComponent,
    HeaderMobileComponent,

    // topbar components
    TopbarComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    UserProfileTopBarComponent,
    QuickActionComponent,
    UserProfile4Component,
    SearchDefaultComponent,
    SearchDropdownComponent,
    SubheaderComponent,
    // aside left menu components
    AsideLeftComponent,
    // horizontal menu components
    MenuHorizontalComponent,
    SubheaderSearchComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,

  ],
  exports: [
    FooterComponent,
    // headers
    HeaderComponent,
    BrandComponent,
    HeaderMobileComponent,
    // aside left menu components
    AsideLeftComponent,
    // horizontal menu components
    MenuHorizontalComponent,
    SubheaderComponent,
    SubheaderSearchComponent,
    Subheader1Component,
    Subheader2Component,
    Subheader3Component,
  ],
  providers: [],
  imports: [
    RouterModule,
    SyspenSharedModule,
    PerfectScrollbarModule,
    FormsModule,
    TranslateModule.forChild(),
    LoadingBarModule,
    InlineSVGModule,
    // ng-bootstrap modules
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbTooltipModule,
  ]
})
export class LayoutModule {
}
