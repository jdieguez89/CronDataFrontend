import {NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export function ngbDateToDate(date: NgbDate, time: NgbTimeStruct): string {
  return date.year + '-' + validateDateNumber(date.month) + '-' +
    validateDateNumber(date.day) +
    'T' + validateDateNumber(time.hour) + ':' +
    validateDateNumber(time.minute) + ':' +
    validateDateNumber(time.second) + '.999Z';
}


/**
 * Determine if need add 0 at start of number
 * @param unit Number time
 */
export function validateDateNumber(unit: number): any {
  return (unit < 10 ? ('0' + unit) : unit);
}

/**
 * Convert NgbDate to java.data.instant format
 */
export function convertNgDateToDate(date: NgbDate, from: boolean): string {
  const month = date.month;
  return date.year + '-' + (month < 10 ? '0' + month : month) + '-' + (date.day < 10 ? '0' + date.day : date.day) + (from ? 'T00:00:00Z' : 'T11:59:59Z');
}
