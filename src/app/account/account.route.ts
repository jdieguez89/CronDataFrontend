import {Routes} from '@angular/router';
import {passwordRoute} from './password/password.route';
import {userProfileRoute} from './profile/user-profile/user-profile.route';

const ACCOUNT_ROUTES = [
  passwordRoute,
  userProfileRoute];

export const accountState: Routes = [
  {path: '', redirectTo: 'profile'},
  {
    path: '',
    children: ACCOUNT_ROUTES,
  },
];
