import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripeSubscribeService {
  private resourceUrl = SERVER_API_URL + 'api/stripe/';

// /api/stripe/subscribe/{priceId}
  constructor(private http: HttpClient) {
  }

  subscribeToPrice(body): Observable<any> {
    return this.http.post<any>(this.resourceUrl + 'subscribe', body,
      {
        observe: 'response',
        // @ts-ignore
        responseType: 'text'
      });
  }

  unsubscribeFromPrice(body?: any): Observable<any> {
    return this.http.post<any>(this.resourceUrl + 'unsubscribe', body);
  }
}
