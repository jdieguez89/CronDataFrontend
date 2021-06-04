import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {SyspenSharedModule} from '../../shared/shared.module';
import {AlertHistoryComponent} from './alert-history/alert-history.component';
import {AlertManagerComponent} from './alert-manager/alert-manager.component';
import {AlertRoutingModule} from './alert-routing.module';


@NgModule({
  declarations: [AlertHistoryComponent, AlertManagerComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    SyspenSharedModule,
    NgSelectModule,
    AlertRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertModule {
}
