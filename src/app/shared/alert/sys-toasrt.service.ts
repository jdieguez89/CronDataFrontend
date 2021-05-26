import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class SysToasrtService {
  constructor(public toastr: ToastrService,
              private translateService: TranslateService,
              private router: Router) {
  }

  showSuccess(msg: string): void {
    this.toastr.success(msg, 'Success');
  }

  showError(title: string, msg: string): void {
    this.toastr.error(msg, title);
  }

  showWarning(msg: string, title: string): void {
    this.toastr.warning(msg, title);
  }

  showInfoAssets(msg: string, title: string): void {
    this.toastr.info(msg, title);
  }

  showInfo(title: string, message: string): void {
    this.toastr.info(message, title);
  }


  showToast(position: any = 'top-left'): void {
    // this.toastr.infoToastr('This is a toast.', 'Toast', {position: position});
  }

  showSuccessProcess(title: string, msg: string): void {
    this.toastr.success(this.extractMessage(msg), this.extractTitle(title));
  }

  showErrorResponse(title: string, error: HttpErrorResponse): void {
    this.toastr.error(this.buildMessage(error.error.code), this.extractTitle(title));
  }

  showSuccessBottom(msg: string): void {
    this.toastr.success(msg, 'Success!');
  }

  buildMessage(code: number): string {
    return '';
  }

  extractMessage(key: string): string {
    let msg = '';
    this.translateService.get(key).subscribe(value => {
      msg = value;
    });
    return msg;
  }


  private extractTitle(title: string): string {
    let tit = '';
    this.translateService.get(title).subscribe(value => {
      tit = value;
    });
    return tit;
  }
}
