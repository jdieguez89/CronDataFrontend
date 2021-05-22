import * as moment from 'moment';

/**
 * Return date range based on time defined(year,month,week,all,day) if is not defined
 * get value day
 * @param time Range to return date
 */
export function resolveRangeByTime(time: string): { timeFrom: any, timeTo: any, range: any } {
  let dateTo;
  let dateFrom;
  if (time === 'year') {
    dateTo = new Date(moment().format('YYYY-MM-DD HH:MM:ss'));
    dateFrom = new Date(moment().subtract(365, 'd').format('YYYY-MM-DD HH:MM:ss'));
  } else if (time === 'month') {
    dateTo = new Date(moment().format('YYYY-MM-DD HH:MM:ss'));
    dateFrom = new Date(moment().subtract(30, 'd').format('YYYY-MM-DD HH:MM:ss'));
  } else if (time === 'week') {
    dateTo = new Date(moment().format('YYYY-MM-DD HH:MM:ss'));
    dateFrom = new Date(moment().subtract(7, 'd').format('YYYY-MM-DD HH:MM:ss'));
  } else if (time === 'all') {
    dateTo = null;
    dateFrom = null;
  } else {
    dateTo = new Date(moment().format('YYYY-MM-DD HH:MM:ss'));
    dateFrom = new Date(moment().format('YYYY-MM-DD HH:MM:ss'));
    time = 'day';
  }

  return {
    timeFrom: dateFrom ? moment(dateFrom).format('YYYY-MM-DD') + 'T00:00:00.000Z' : null,
    timeTo: dateFrom ? moment(dateTo).format('YYYY-MM-DD') + 'T23:59:59.999Z' : null,
    range: time
  };
}

/**
 * Return label based on time if is not defined
 * get value day
 * @param time String of time range
 */
export function resolveFilterName(time: string): string {
  let label = '';
  switch (time) {
    case 'day':
      label = 'filter.time.day';
      break;
    case 'week':
      label = 'filter.time.week';
      break;
    case 'month':
      label = 'filter.time.month';
      break;
    case 'year':
      label = 'filter.time.year';
      break;
    case 'all':
      label = 'filter.time.all';
      break;
    default :
      label = time;
      break;
  }
  return label;
}
