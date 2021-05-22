import {Injectable} from '@angular/core';
import {SERVER_API_URL} from '../../app.constants';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {createRequestOption} from '../util/request-util';
import {StripeProductType} from '../types/stripe/stripe-product.type';

@Injectable({
  providedIn: 'root'
})
export class StripeProductsService {
  private resourceUrl = SERVER_API_URL + 'api/stripe/product/products';

  constructor(private http: HttpClient) {
  }

  getStripeProducts(req?: any): Observable<HttpResponse<StripeProductType[]>> {
    const options = createRequestOption(req);
    return this.http.get<StripeProductType[]>(this.resourceUrl, {params: options, observe: 'response'});
  }

}
