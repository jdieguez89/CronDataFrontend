import { Route } from '@angular/router';

import { ActivateComponent } from './activate.component';
import {UserRouteAccessService} from '../../../../core/auth/user-route-access-service';

export const activateRoute: Route = {
  path: 'activate-account',
  component: ActivateComponent,
  canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: 'activate.title',
  },
};
