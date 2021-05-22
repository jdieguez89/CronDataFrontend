import {Injectable} from '@angular/core';
import {SESSION_AUTH_TOKEN} from '../../shared/constants/global.constant';

@Injectable({providedIn: 'root'})
export class TokenManagerService {

  public getLocalToken(): any {
    return localStorage.getItem(SESSION_AUTH_TOKEN);
  }

  public setLocalToken(token: string): any {
    return localStorage.setItem(SESSION_AUTH_TOKEN, token);
  }

  public clearLocalToken() {
    localStorage.removeItem(SESSION_AUTH_TOKEN);
  }

  public getSessionToken(): any {
    return sessionStorage.getItem(SESSION_AUTH_TOKEN);
  }

  public setSessionToken(token: string): any {
    return sessionStorage.setItem(SESSION_AUTH_TOKEN, token);
  }

  public clearSessionToken() {
    sessionStorage.removeItem(SESSION_AUTH_TOKEN);
  }

}
