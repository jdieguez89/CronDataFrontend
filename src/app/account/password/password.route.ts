import { Route } from '@angular/router';
import {PasswordComponent} from './password.component';
import {Authority} from '../../shared/constants/authority.constants';
import {UserRouteAccessService} from '../../core/auth/user-route-access-service';


export const passwordRoute: Route = {
  path: 'password',
  component: PasswordComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'global.menu.account.password',
  },
  canActivate: [UserRouteAccessService],
};
