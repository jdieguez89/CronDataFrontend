import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../app.constants';
import {IRole} from './roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public resourceUrl = SERVER_API_URL + 'api/users/authorities';

  constructor(private http: HttpClient) {
  }

  /**
   * Create a role
   */
  create(role: IRole): Observable<HttpResponse<IRole>> {
    return this.http.post<IRole>(this.resourceUrl, role, {observe: 'response'});
  }

  /**
   * Update a role
   */
  update(role: IRole): Observable<HttpResponse<IRole>> {
    return this.http.put<IRole>(this.resourceUrl, role, {observe: 'response'});
  }

  findAll(): Observable<HttpResponse<string[]>> {
    return this.http.get<string[]>(this.resourceUrl, {observe: 'response'});
  }

  /**
   * Delete a role
   */
  delete(name: string): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${name}`, {observe: 'response'});
  }
}
