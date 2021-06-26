import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../app.constants';
import {TokenManagerService} from '../../../core/auth/token-manager.service';
import {TargetsResponseType} from '../../types/prometheus/targets/targets-response.type';
import {createRequestOption} from '../../util/request-util';

@Injectable({
  providedIn: 'root'
})
export class PromQueryTargetsService {
  public resourceUrl = SERVER_API_URL + 'api/prometheus/targets';

  constructor(private http: HttpClient, private tokenService: TokenManagerService) {

  }

  query(req?: any): Observable<HttpResponse<TargetsResponseType>> {
    const options = createRequestOption(req);
    return this.http.get<TargetsResponseType>(this.resourceUrl, {
      params: options, observe: 'response'
    });
  }


}
