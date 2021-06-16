import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRouteAccessService} from '../../core/auth/user-route-access-service';
import {ADMIN_ROLE, USER_ROLE} from '../../shared/constants/global.constant';
import {CronApplicationsComponent} from './cron-applications/cron-applications.component';

const routes: Routes = [
    {path: '', redirectTo: 'install'},
    {
      path: 'install',
      component: CronApplicationsComponent,
      canActivate: [UserRouteAccessService],
      data: {authorities: [USER_ROLE, ADMIN_ROLE]}
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronApplicationsRoutingModule {
}

