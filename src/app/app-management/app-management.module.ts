import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {SyspenSharedModule} from '../shared/shared.module';
import {AppManagementRoutingModule} from './app-management-routing.module';
import {AppMetricsComponent} from './app-metrics/app-metrics.component';
import {UtmJvmMetricsComponent} from './app-metrics/utm-jvm-metrics/utm-jvm-metrics.component';
import {UtmSystemMetricsComponent} from './app-metrics/utm-system-metrics/utm-system-metrics.component';
import {UtmThreadDetailComponent} from './app-metrics/utm-thread-metrics/utm-thread-detail/utm-thread-detail.component';
import {UtmThreadMetricsComponent} from './app-metrics/utm-thread-metrics/utm-thread-metrics.component';
import {AuditsComponent} from './audits/audits.component';
import {HealthChecksComponent} from './health-checks/health-checks.component';
import {HealthDetailComponent} from './health-checks/health-detail/health-detail.component';
import {LogsComponent} from './logs/logs.component';
import {UserTrackerComponent} from './user-tracker/user-tracker.component';


@NgModule({
  declarations: [
    HealthChecksComponent,
    HealthDetailComponent,
    UserTrackerComponent,
    AuditsComponent,
    AppMetricsComponent,
    UtmJvmMetricsComponent,
    UtmThreadMetricsComponent,
    UtmThreadDetailComponent,
    UtmSystemMetricsComponent,
    LogsComponent],
  entryComponents: [
    HealthDetailComponent],
  imports: [
    CommonModule,
    AppManagementRoutingModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    SyspenSharedModule,
  ],
  exports: [
    HealthChecksComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [NgbActiveModal]
})
export class AppManagementModule {
}
