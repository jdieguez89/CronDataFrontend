import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import * as moment from 'moment';
import {TimeFilterType} from '../../types/time-filter.type';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FilterTimeEnum} from '../../enums/filter-time.enum';
import {FilterCommonType} from '../../types/filter-common.type';


@Component({
  selector: 'app-filter-time',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.scss'],
  providers: [NgbActiveModal]
})
export class TimeFilterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() invertContent!: boolean;
  @Input() timeDefault!: FilterCommonType;
  /**
   * Use this property to set default range, receive object type ElasticFilterDefaultTime
   */
  @Input() defaultTime!: FilterDefaultTime;
  @Input() formatInstant!: boolean;
  @Input() container!: string;
  @Input() changeOnInit!: 'YES' | 'NO';
  /**
   * Use this attribute to control multiple emmit, need to avoid recursive calling
   */
  @Input() isEmitter!: boolean;
  @Output() timeFilterChange = new EventEmitter<TimeFilterType>();


  times: { time: FilterTimeEnum, label: string } [] = [
    {time: FilterTimeEnum.YEAR, label: 'year'},
    {time: FilterTimeEnum.MONTH, label: 'month'},
    {time: FilterTimeEnum.WEEKS, label: 'weeks'},
    {time: FilterTimeEnum.DAY, label: 'day'},
    {time: FilterTimeEnum.HOUR, label: 'hour'},
    {time: FilterTimeEnum.MINUTE, label: 'minute'},
    {time: FilterTimeEnum.SECOND, label: 'second'}
  ];
  selected = '';
  lastTime!: number;
  timeUnit!: { time: FilterTimeEnum, label: string };
  dateFrom?: string;
  dateTo?: string = FilterTimeEnum.NOW;


  constructor(public activeModal: NgbActiveModal) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    // TODO
    // if (changes && changes.defaultTime && changes.defaultTime.currentValue === null) {
    //   this.dateFrom = null;
    //   this.dateTo = null;
    // }
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    if (this.changeOnInit !== 'NO') {
      if (this.timeDefault) {
        this.applyCommonDate(this.timeDefault);
      }
      if (this.defaultTime) {
        this.applyDefaultTime();
      }
    } else {
      if (this.defaultTime) {
        this.dateFrom = this.defaultTime.from;
        this.dateTo = this.defaultTime.to;
      }
    }
  }

  buildFormatInstantFromDate(time: { from: any, to: any }): { timeFrom: any, timeTo: any } {
    const last = Number(time.from.match(/\d+/g));
    const unit = time.from.match(/[a-zA-Z]+/g)[1];
    return this.resolveInstantDate(unit, last);
  }

  applyDate(): void {
    this.dateTo = 'now';
    this.dateFrom = 'last ' + this.lastTime + ' ' + this.timeUnit.label;
    this.emitFormatInstant(this.timeUnit.time, this.lastTime);
  }

  applyCommonDate(common: FilterCommonType): void {
    this.dateTo = 'now';
    this.dateFrom = common.label;
    this.emitFormatInstant(common.time, common.last);
  }

  emitFormatInstant(unitTime: any, time: any): void {
    const instant = this.resolveInstantDate(unitTime, time);
    this.timeFilterChange.emit({timeFrom: instant.timeFrom, timeTo: instant.timeTo});
  }


  applyRange($event: TimeFilterType): void {
    this.dateTo = $event.timeTo;
    this.dateFrom = $event.timeFrom;
    this.timeFilterChange.emit($event);
  }

  resolveInstantDate(time: FilterTimeEnum, last: number): { timeFrom: string, timeTo: string } {
    const dateTo = new Date(moment().format('YYYY-MM-DD HH:mm:ss'));
    let dateFrom;
    switch (time) {
      case FilterTimeEnum.YEAR:
        dateFrom = new Date(moment().subtract(last, 'y').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.MONTH:
        dateFrom = new Date(moment().subtract(last, 'M').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.WEEKS:
        dateFrom = new Date(moment().subtract(last, 'w').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.DAY:
        dateFrom = new Date(moment().subtract(last, 'd').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.HOUR:
        dateFrom = new Date(moment().subtract(last, 'h').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.MINUTE:
        dateFrom = new Date(moment().subtract(last, 'm').format('YYYY-MM-DD HH:mm:ss'));
        break;
      case FilterTimeEnum.SECOND:
        dateFrom = new Date(moment().subtract(last, 's').format('YYYY-MM-DD HH:mm:ss'));
        break;
    }
    return {
      timeFrom: moment(dateFrom).format('YYYY-MM-DD[T]HH:mm:ss') + '.000Z',
      timeTo: moment(dateTo).format('YYYY-MM-DD[T]HH:mm:ss') + '.000Z',
    };
  }


  private applyDefaultTime(): void {
    this.dateFrom = this.defaultTime.from;
    this.dateTo = this.defaultTime.to;
    this.timeFilterChange.emit(
      {
        timeFrom: this.dateFrom,
        timeTo: this.dateTo
      });
  }
}

export class FilterDefaultTime {
  from: string;
  to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }
}

// "year" | "years" | "y" |
// "month" | "months" | "M" |
// "week" | "weeks" | "w" |
// "day" | "days" | "d" |
// "hour" | "hours" | "h" |
// "minute" | "minutes" | "m" |
// "second" | "seconds" | "s" |
