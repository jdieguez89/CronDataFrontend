import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SERVER_API_URL} from '../../../../../../app.constants';
import {createRequestOption} from '../../../../../../shared/util/request-util';
import {NotificationType} from '../type/notification.type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private resourceUrl = SERVER_API_URL + 'api/notifications';

  constructor(private http: HttpClient) {
  }

  query(req?: any): Observable<HttpResponse<NotificationType[]>> {
    const options = createRequestOption(req);
    return this.http.get<NotificationType[]>(this.resourceUrl, {params: options, observe: 'response'});
  }
}
