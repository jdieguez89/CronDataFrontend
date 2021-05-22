import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRouteAccessService} from '../core/auth/user-route-access-service';
import {ADMIN_ROLE} from '../shared/constants/global.constant';
import {AppMetricsComponent} from './app-metrics/app-metrics.component';
import {AuditsComponent} from './audits/audits.component';
import {HealthChecksComponent} from './health-checks/health-checks.component';
import {LogsComponent} from './logs/logs.component';
import {UserTrackerComponent} from './user-tracker/user-tracker.component';


const routes: Routes = [
  {path: '', redirectTo: 'health', pathMatch: 'full'},
  {
    path: 'health',
    component: HealthChecksComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE]
    },
  },
  {
    path: 'logs',
    component: LogsComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE]
    },
  },
  {
    path: 'user-track',
    component: UserTrackerComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE]
    },
  },
  {
    path: 'user-access-audit',
    component: AuditsComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE]
    }
  },
  {
    path: 'application-metrics',
    component: AppMetricsComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE]
    }
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppManagementRoutingModule {
}

