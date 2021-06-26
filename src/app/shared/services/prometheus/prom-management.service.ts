import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../app.constants';
import {TokenManagerService} from '../../../core/auth/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PromManagementService {
  public resourceUrl = SERVER_API_URL + 'api/prometheus/';

  constructor(private http: HttpClient, private tokenService: TokenManagerService) {
  }

  getHealth(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'healthy', {
      observe: 'response'
    });
  }


  check(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'ready', {
      observe: 'response',
    });
  }

  reload(): Observable<any> {
    return this.http.post(this.resourceUrl + 'reload', null,{
      observe: 'response', responseType: 'text',
    });
  }


}
