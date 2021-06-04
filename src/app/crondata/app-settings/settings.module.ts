import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppConfigComponent} from './app-config/app-config.component';
import {AppConfigDeleteConfirmComponent} from './config/app-config-delete-confirm/app-config-delete-confirm.component';
import {AppConfigParamsComponent} from './config/app-config-params/app-config-params.component';
import {AppConfigSectionsComponent} from './config/app-config-sections/app-config-sections.component';
import {SettingsRoutingModule} from './settings-routing.module';
import {FormsModule} from '@angular/forms';
import {SyspenSharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [AppConfigComponent,
    AppConfigDeleteConfirmComponent,
    AppConfigParamsComponent,
    AppConfigSectionsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    SyspenSharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SettingsModule {
}
