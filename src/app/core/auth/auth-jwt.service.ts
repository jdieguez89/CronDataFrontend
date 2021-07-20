import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SERVER_API_URL} from '../../app.constants';
import {SESSION_AUTH_TOKEN} from '../../shared/constants/global.constant';
import {Login} from '../login/login.model';
import {TokenManagerService} from './token-manager.service';

type JwtToken = {
  id_token: string;
};

@Injectable({providedIn: 'root'})
export class AuthServerProvider {
  constructor(private http: HttpClient,
              private cookie: CookieService,
              private tokenManagerService: TokenManagerService) {
  }

  getToken(): string {
    return this.tokenManagerService.getLocalToken() || this.tokenManagerService.getSessionToken() || '';
  }

  login(credentials: Login): Observable<void> {
    return this.http
      .post<JwtToken>(SERVER_API_URL + 'api/authenticate', credentials)
      .pipe(map(response => {
        this.authenticateSuccess(response, credentials.rememberMe);
      }));
  }

  logout(): Promise<void> {
    return new Promise<void>(resolve => {
      this.cookie.deleteAll();
      this.tokenManagerService.clearLocalToken();
      this.tokenManagerService.clearSessionToken();
      resolve();
    });
  }

  private authenticateSuccess(response: JwtToken, rememberMe: boolean): void {
    const jwt = response.id_token;
    this.cookie.set(SESSION_AUTH_TOKEN, jwt);
    if (rememberMe) {
      this.tokenManagerService.setLocalToken(jwt);
    } else {
      this.tokenManagerService.setSessionToken(jwt);
    }
  }
}
