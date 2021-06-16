import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PROMETHEUS_URL} from '../../../app.constants';
import {TokenManagerService} from '../../../core/auth/token-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PromManagementService {
  public resourceUrl = PROMETHEUS_URL + '-/';
  headers: HttpHeaders;

  constructor(private http: HttpClient, private tokenService: TokenManagerService) {
    this.headers = new HttpHeaders({
      'Cookie': 'authenticationToken=' + tokenService.getLocalToken()
    });
  }

  getHealth(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'healthy', {
      observe: 'response', headers: this.headers,
      withCredentials: true
    });
  }


  check(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'ready', {
      observe: 'response',
      headers: this.headers,
      withCredentials: true
    });
  }

  reload(): Observable<any> {
    return this.http.post(this.resourceUrl + 'reload', {
      observe: 'response', responseType: 'text',
      headers: this.headers,
      withCredentials: true,
    });
  }


}
