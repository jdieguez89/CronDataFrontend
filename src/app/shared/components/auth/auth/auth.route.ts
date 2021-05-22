import {Route} from '@angular/router';
import {activateRoute} from '../activate/activate.route';
import {loginRoute} from '../login/login.route';
import {passwordResetFinishRoute} from '../password-reset/finish/password-reset-finish.route';
import {AuthComponent} from './auth.component';


export const authRoutes: Route = {
  path: 'auth',
  component: AuthComponent,
  children: [
    loginRoute,
    passwordResetFinishRoute,
    activateRoute
  ]
};
