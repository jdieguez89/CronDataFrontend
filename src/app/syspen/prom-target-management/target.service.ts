import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from '../../app.constants';
import { createRequestOption } from '../../shared/util/request-util';
import { ITarget } from './target.model';

type EntityResponseType = HttpResponse<ITarget>;
type EntityArrayResponseType = HttpResponse<ITarget[]>;

@Injectable({ providedIn: 'root' })
export class TargetService {
  public resourceUrl = SERVER_API_URL + 'api/targets';

  constructor(protected http: HttpClient) {}

  create(target: ITarget): Observable<EntityResponseType> {
    return this.http.post<ITarget>(this.resourceUrl, target, { observe: 'response' });
  }

  update(target: ITarget): Observable<EntityResponseType> {
    return this.http.put<ITarget>(this.resourceUrl, target, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITarget>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ITarget[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id?: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
