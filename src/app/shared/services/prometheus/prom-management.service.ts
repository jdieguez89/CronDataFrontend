import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PROMETHEUS_URL} from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PromManagementService {
  public resourceUrl = PROMETHEUS_URL + '-/';

  constructor(private http: HttpClient) {
  }

  getHealth(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'healthy', {observe: 'response'});
  }


  check(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'ready', {observe: 'response'});
  }

  reload(): Observable<any> {
    return this.http.post(this.resourceUrl + 'reload', {observe: 'response', responseType: 'text'});
  }


}
