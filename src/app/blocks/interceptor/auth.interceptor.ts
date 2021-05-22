import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {TokenManagerService} from '../../core/auth/token-manager.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenManagerService: TokenManagerService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (request.url.startsWith('http') && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))
    ) {
      return next.handle(request);
    }
    const token = this.tokenManagerService.getLocalToken() || this.tokenManagerService.getSessionToken();
    if (token && !request.url.includes('authenticate')) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return next.handle(request);
  }
}
