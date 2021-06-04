import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RuleResponseType} from '../../types/prometheus/rules/rule-response.type';
import {createRequestOption} from '../../util/request-util';

@Injectable({
  providedIn: 'root'
})
export class PromQueryRulesService {
  // public resourceUrl = SERVER_API_URL + 'api/utm-configuration-parameters';
  public resourceUrl = 'http://localhost:9098/api/v1/rules';

  constructor(private http: HttpClient) {
  }

  query(req?: any): Observable<HttpResponse<RuleResponseType>> {
    const options = createRequestOption(req);
    return this.http.get<RuleResponseType>(this.resourceUrl, {params: options, observe: 'response'});
  }


}
