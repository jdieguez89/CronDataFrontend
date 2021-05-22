import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Login} from './login.model';
import {AccountService} from '../auth/account.service';
import {AuthServerProvider} from '../auth/auth-jwt.service';
import {flatMap} from 'rxjs/operators';
import {Account} from '../user/account.model';

@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {
  }

  login(credentials: Login): Observable<Account | null> {
    return this.authServerProvider.login(credentials).pipe(flatMap(() => this.accountService.identity(true)));
  }

  logout(): void {
    this.authServerProvider.logout().then(() => this.accountService.authenticate(null));
  }
}
