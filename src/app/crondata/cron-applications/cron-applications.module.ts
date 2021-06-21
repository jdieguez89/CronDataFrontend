import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CronApplicationsRoutingModule} from './cron-applications-routing.module';
import {CronApplicationsComponent} from './cron-applications/cron-applications.component';
import {CronAppCardComponent} from './shared/components/cron-app-card/cron-app-card.component';
import {SyspenSharedModule} from '../../shared/shared.module';
import { CronAppInstallModalComponent } from './shared/components/cron-app-install-modal/cron-app-install-modal.component';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [CronApplicationsComponent, CronAppCardComponent, CronAppInstallModalComponent],
    imports: [
        CommonModule,
        CronApplicationsRoutingModule,
        SyspenSharedModule,
        NgSelectModule
    ]
})
export class CronApplicationsModule {
}
