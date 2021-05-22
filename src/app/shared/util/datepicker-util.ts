/**
 * Return valid dates to pass to datepicker
 */
export function setMaxDateToday(): { year: number, month: number, day: number } {
  const dateObj = new Date();
  return {
    year: dateObj.getUTCFullYear(),
    month: dateObj.getUTCMonth() + 1,
    day: dateObj.getUTCDate()
  };
}

export function compareDate(fromDate: any, toDate: any): boolean {
  if (fromDate !== undefined && toDate !== undefined) {
    if (fromDate !== null && toDate !== null) {
      return fromDate.getTime() - toDate.getTime() > 0;
    } else {
      return false;
    }
  }
  return false;
}
