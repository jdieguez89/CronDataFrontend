import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {setMaxDateToday} from '../../../util/datepicker-util';
import {ngbDateToDate} from '../../../util/date.util';
import {TimeFilterType} from '../../../types/time-filter.type';

@Component({
  selector: 'app-time-range-filter',
  templateUrl: './time-range-filter.component.html',
  styleUrls: ['./time-range-filter.component.scss']
})
export class TimeRangeFilterComponent implements OnInit {
  rangeTimeTo!: NgbDate;
  timeFrom: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  timeTo: NgbTimeStruct = {hour: 23, minute: 59, second: 59};
  rangeTimeFrom!: NgbDate;
  maxDate = setMaxDateToday();
  @Output() rangeChange = new EventEmitter<TimeFilterType>();

  constructor() {
  }

  ngOnInit(): void {
  }

  isValidDate(): any {
    if (this.rangeTimeFrom && this.rangeTimeTo) {
      const from = Number(new Date(this.extractDate(this.rangeTimeFrom, this.timeFrom)).getTime());
      const to = Number(new Date(this.extractDate(this.rangeTimeTo, this.timeTo)).getTime());
      return to - from >= 0;
    } else {
      return false;
    }
  }

  extractDate(date: NgbDate, time: NgbTimeStruct): string {
    return ngbDateToDate(date, time);
  }

  applyRange(): any {
    if (this.isValidDate()) {
      this.rangeChange.emit({
        timeFrom: this.extractDate(this.rangeTimeFrom, this.timeFrom),
        timeTo: this.extractDate(this.rangeTimeTo, this.timeTo)
      });
    }
  }
}
