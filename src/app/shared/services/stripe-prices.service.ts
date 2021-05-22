import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {createRequestOption} from '../util/request-util';
import {StripePricesType} from '../types/stripe/stripe-prices.type';

@Injectable({
  providedIn: 'root'
})
export class StripePricesService {
  private resourceUrl = SERVER_API_URL + 'api/stripe/price/';

  constructor(private http: HttpClient) {
  }

  getStripePrices(req?: any): Observable<HttpResponse<StripePricesType[]>> {
    const options = createRequestOption(req);
    return this.http.get<StripePricesType[]>(this.resourceUrl + 'prices', {params: options, observe: 'response'});
  }

  getPriceById(priceId: string): Observable<HttpResponse<StripePricesType>> {
    return this.http.get<StripePricesType>(this.resourceUrl + `${priceId}`, {observe: 'response'});
  }
}
