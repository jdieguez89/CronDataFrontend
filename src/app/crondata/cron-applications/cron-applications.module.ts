import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CronApplicationsRoutingModule} from './cron-applications-routing.module';
import {CronApplicationsComponent} from './cron-applications/cron-applications.component';
import {CronAppCardComponent} from './shared/components/cron-app-card/cron-app-card.component';


@NgModule({
  declarations: [CronApplicationsComponent, CronAppCardComponent],
  imports: [
    CommonModule,
    CronApplicationsRoutingModule
  ]
})
export class CronApplicationsModule {
}
