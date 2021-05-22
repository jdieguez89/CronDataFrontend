import {Route} from '@angular/router';
import {UserProfileComponent} from './user-profile.component';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserRouteAccessService} from '../../../core/auth/user-route-access-service';

export const userProfileRoute: Route = {
  path: 'profile',
  component: UserProfileComponent,
  canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: 'global.menu.account.password',
  },
  children: [
    {
      path: '',
      redirectTo: 'personal-information',
      canActivate: [UserRouteAccessService],
    },
    // {
    //   path: 'account-information',
    //   component: AccountInformationComponent,
    //   canActivate: [UserRouteAccessService],
    // },
    {
      path: 'personal-information',
      component: PersonalInformationComponent,
      canActivate: [UserRouteAccessService],
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent,
      canActivate: [UserRouteAccessService],
    },
  ]
};
