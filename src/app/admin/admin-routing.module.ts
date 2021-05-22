import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRouteAccessService} from '../core/auth/user-route-access-service';
import {ADMIN_ROLE} from '../shared/constants/global.constant';
import {RolesComponent} from './roles/roles.component';
import {UserMgmtComponent} from './user/user-list/user-management.component';
import {UserMgmtResolve} from './user/user-management.route';
import {UserMgmtUpdateComponent} from './user/user-update/user-management-update.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserMgmtComponent,
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [ADMIN_ROLE],
    }
  },
  {
    path: 'role',
    component: RolesComponent,
    canActivate: [UserRouteAccessService],
    data: {authorities: [ADMIN_ROLE]}
  },
  {
    path: 'new-user',
    component: UserMgmtUpdateComponent,
    canActivate: [UserRouteAccessService],
    resolve: {
      user: UserMgmtResolve
    }
  },
  {
    path: 'user/:login/edit',
    component: UserMgmtUpdateComponent,
    resolve: {
      user: UserMgmtResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

