import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../app.constants';
import {TokenManagerService} from '../../../core/auth/token-manager.service';
import {RuleResponseType} from '../../types/prometheus/rules/rule-response.type';
import {createRequestOption} from '../../util/request-util';

@Injectable({
  providedIn: 'root'
})
export class PromQueryRulesService {
  public resourceUrl = SERVER_API_URL + 'api/prometheus/rules';

  constructor(private http: HttpClient, private tokenService: TokenManagerService) {
  }

  query(req?: any): Observable<HttpResponse<RuleResponseType>> {
    const options = createRequestOption(req);
    return this.http.get<RuleResponseType>(this.resourceUrl, {
      params: options,
      observe: 'response',
    });
  }


}
