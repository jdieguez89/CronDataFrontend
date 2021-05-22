import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {SysToasrtService} from '../alert/sys-toasrt.service';

@Injectable({providedIn: 'root'})
export class SysHttpResponseErrorService {

  constructor(private translateService: TranslateService,
              private toasrtService: SysToasrtService) {
  }

  processError(httpErrorResponse: HttpErrorResponse): void {
    switch (httpErrorResponse.status) {
      // connection refused, server not reachable
      case 0:
        this.toasrtService.showError('Server not reachable',
          this.translateService.instant('error.server.not.reachable'));
        break;

      case 400: {
        const arr = httpErrorResponse.headers.keys();
        let errorHeader = null;
        let entityKey = null;
        arr.forEach(entry => {
          if (entry.toLowerCase().endsWith('app-error')) {
            errorHeader = httpErrorResponse.headers.get(entry);
          } else if (entry.toLowerCase().endsWith('app-params')) {
            entityKey = httpErrorResponse.headers.get(entry);
          }
        });
        if (errorHeader) {
          const entityName = this.translateService.instant('global.menu.entities.' + entityKey);
          this.toasrtService.showError(errorHeader, entityName);
        } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
          const fieldErrors = httpErrorResponse.error.fieldErrors;
          for (const fieldError of fieldErrors) {
            if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
              fieldError.message = 'Size';
            }
            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
            const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
            const fieldName: string = this.translateService.instant('syspentestApp.' + fieldError.objectName + '.' + convertedField);
            this.toasrtService.showError('Error on field "' + fieldName + ' error.' + fieldError.message, fieldName);
          }
        } else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
          this.toasrtService.showError(httpErrorResponse.error.message, httpErrorResponse.error.params);
        } else {
          this.toasrtService.showError('Error', httpErrorResponse.error);
        }
        break;
      }

      case 404:
        this.toasrtService.showError('Not found', this.translateService.instant('error.url.not.found'));
        break;

      case 401:
        this.toasrtService.showError('Insufficient permissions', 'Does not have permissions to access to this resource');
        break;

      case 500:
        this.toasrtService.showError('Internal server error', 'Error in server, please contact with support and notify this issue');
        break;

      default:
        if (httpErrorResponse.error && httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
          this.toasrtService.showError('Error', httpErrorResponse.error.message);
        } else {
          this.toasrtService.showError('Error', 'Unexpected error while trying to access to this resource');
        }
    }
  }
}
