import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRouteAccessService} from '../core/auth/user-route-access-service';
import {AlertComponent} from '../shared/alert/alert.component';
import {AccessDeniedComponent} from '../shared/components/auth/access-denied/access-denied.component';
import {ADMIN_ROLE, USER_ROLE} from '../shared/constants/global.constant';
import {IframeViewComponent} from './iframe-view/iframe-view.component';
import {TargetComponent} from './prom-target-management/target.component';
import {SyspenComponent} from './syspen.component';
import {AlertManagerComponent} from './alert-manager/alert-manager.component';

const routes: Routes = [
  {path: '', redirectTo: 'crondata'},
  {
    path: 'crondata',
    component: SyspenComponent,
    canActivate: [UserRouteAccessService],
    data: {authorities: [USER_ROLE, ADMIN_ROLE]},
    children: [
      // {path: '', redirectTo: 'frame'},
      {path: 'access-denied', component: AccessDeniedComponent},
      {
        path: 'frame/:frame',
        component: IframeViewComponent,
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
      {
        path: 'metric-targets',
        component: TargetComponent,
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
      {
        path: 'alerts',
        component: AlertManagerComponent,
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountModule),
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
      {
        path: 'admin',
        loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
      {
        path: 'check',
        loadChildren: () => import('../app-management/app-management.module').then(m => m.AppManagementModule),
        canActivate: [UserRouteAccessService],
        data: {authorities: [USER_ROLE, ADMIN_ROLE]}
      },
    ]
  }]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyspenRoutingModule {
}

