import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ADMIN_ROLE, USER_ROLE} from './shared/constants/global.constant';
import {Error3Component} from './error/error3/error3.component';
import {UserRouteAccessService} from './core/auth/user-route-access-service';
import {authRoutes} from './shared/components/auth/auth/auth.route';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'app',
    loadChildren: () => import('./syspen/syspen.module').then(m => m.SyspenModule),
    canActivate: [UserRouteAccessService],
    data: {authorities: [USER_ROLE, ADMIN_ROLE]}
  },
  authRoutes,
  {path: '**', redirectTo: 'page-not-found'},
  {
    path: 'page-not-found',
    component: Error3Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
