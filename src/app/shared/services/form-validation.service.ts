import {Injectable} from '@angular/core';
import {AccountService} from '../../core/auth/account.service';
import {FormControl, ValidationErrors} from '@angular/forms';
import {ROLE_ENTERPRISE} from '../constants/global.constant';

export const IPV4_REGEX = '\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b';
export const IPV4_ENTERPRISE_REGEX = '^$|([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])' +
  '((/([01]?\\d\\d?|2[0-4]\\d|25[0-5]))?)$';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor(private accountService: AccountService) {
  }

  validateIp(formControl: FormControl): ValidationErrors {
    const valid = formControl.value.match(this.getRegex());
    if (!valid) {
      return {errorFormat: 'error'};
    } else {
      return null;
    }

  }

  getRegex(): string {
    let regex = '';
    this.accountService.identity().subscribe(account => {
      regex = account.authorities.includes(ROLE_ENTERPRISE) ? IPV4_ENTERPRISE_REGEX : IPV4_REGEX;
    });
    return regex;
  }

}
