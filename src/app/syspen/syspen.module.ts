import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutModule} from '../layout/layout.module';
import {SyspenSharedModule} from '../shared/shared.module';
import { AlertManagerComponent } from './alert-manager/alert-manager.component';
import {IframeViewComponent} from './iframe-view/iframe-view.component';
import {TargetDeleteDialogComponent} from './prom-target-management/target-delete-dialog.component';
import {TargetUpdateComponent} from './prom-target-management/target-update.component';
import {TargetComponent} from './prom-target-management/target.component';
import {SyspenRoutingModule} from './syspen-routing.module';
import {SyspenComponent} from './syspen.component';
import {NgSelectModule} from '@ng-select/ng-select';


@NgModule({
  declarations: [
    SyspenComponent,
    IframeViewComponent,
    TargetComponent,
    TargetUpdateComponent,
    TargetDeleteDialogComponent,
    AlertManagerComponent
  ],
  imports: [
    SyspenSharedModule,
    LayoutModule,
    RouterModule,
    SyspenRoutingModule,
    NgSelectModule
  ],
})
export class SyspenModule {
}
