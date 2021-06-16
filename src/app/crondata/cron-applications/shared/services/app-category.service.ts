import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SERVER_API_URL} from '../../../../app.constants';
import {createRequestOption} from '../../../../shared/util/request-util';
import {AppCategoryType} from '../type/app-category.type';


type EntityResponseType = HttpResponse<AppCategoryType>;
type EntityArrayResponseType = HttpResponse<AppCategoryType[]>;

@Injectable({ providedIn: 'root' })
export class AppCategoryService {
  public resourceUrl = SERVER_API_URL + 'api/app-categories';

  constructor(protected http: HttpClient) {}

  create(target: AppCategoryType): Observable<EntityResponseType> {
    return this.http.post<AppCategoryType>(this.resourceUrl, target, { observe: 'response' });
  }

  update(target: AppCategoryType): Observable<EntityResponseType> {
    return this.http.put<AppCategoryType>(this.resourceUrl, target, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<AppCategoryType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<AppCategoryType[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id?: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
