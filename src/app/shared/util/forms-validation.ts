import {FormControl, ValidationErrors} from '@angular/forms';

export const IPV4_REGEX = '\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b';
export const IPV4_ENTERPRISE_REGEX = '^$|([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\' +
  '.([01]?\\d\\d?|2[0-4]\\d|25[0-5])' +
  '((/([01]?\\d\\d?|2[0-4]\\d|25[0-5]))?)$';

export function validateIp(formControl: FormControl): ValidationErrors {
  // const valid = formControl.value.match(IPV4_REGEX) || formControl.value.match(IPV4_ENTERPRISE_REGEX);
  const valid = formControl.value.match(IPV4_ENTERPRISE_REGEX);
  if (!valid) {
    return {errorFormat: 'error'};
  } else {
    return null;
  }
}

