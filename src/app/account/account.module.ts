import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PasswordStrengthBarComponent} from './password/password-strength-bar.component';
import {PasswordComponent} from './password/password.component';
import {accountState} from './account.route';
import {UserProfileComponent} from './profile/user-profile/user-profile.component';
import {ProfileOverviewComponent} from './profile/user-profile/profile-overview/profile-overview.component';
import {PersonalInformationComponent} from './profile/user-profile/personal-information/personal-information.component';
import {EmailSettingsComponent} from './profile/user-profile/email-settings/email-settings.component';
import {ChangePasswordComponent} from './profile/user-profile/change-password/change-password.component';
import {AccountInformationComponent} from './profile/user-profile/account-information/account-information.component';
import {ProfileSidebarComponent} from './profile/user-profile/shared/components/layout/profile-sidebar/profile-sidebar.component';
import {SyspenSharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AccountProfileHeaderComponent} from './profile/user-profile/shared/components/layout/account-profile-header/account-profile-header.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    SyspenSharedModule,
    RouterModule.forChild(accountState)],
  declarations: [
    PasswordComponent,
    PasswordStrengthBarComponent,
    UserProfileComponent,
    ProfileOverviewComponent,
    PersonalInformationComponent,
    EmailSettingsComponent,
    ChangePasswordComponent,
    AccountInformationComponent,
    ProfileSidebarComponent,
    AccountProfileHeaderComponent,
  ],
  exports: [],
  providers: [NgbActiveModal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AccountModule {
}
