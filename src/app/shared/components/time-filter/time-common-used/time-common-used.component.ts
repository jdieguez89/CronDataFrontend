import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterCommonType} from '../../../types/filter-common.type';
import {FilterTimeEnum} from '../../../enums/filter-time.enum';

@Component({
  selector: 'app-time-common-used',
  templateUrl: './time-common-used.component.html',
  styleUrls: ['./time-common-used.component.scss']
})
export class TimeCommonUsedComponent implements OnInit {
  commonlyUsed: FilterCommonType[] = [
    {time: FilterTimeEnum.MINUTE, last: 15, label: 'last 15 minutes'},
    {time: FilterTimeEnum.MINUTE, last: 30, label: 'last 30 minutes'},
    {time: FilterTimeEnum.HOUR, last: 1, label: 'last hour'},
    {time: FilterTimeEnum.HOUR, last: 24, label: 'last 24 hours'},
    {time: FilterTimeEnum.DAY, last: 7, label: 'last 7 days'},
    {time: FilterTimeEnum.DAY, last: 30, label: 'last 30 days'},
    {time: FilterTimeEnum.DAY, last: 90, label: 'last 90 days'},
    {time: FilterTimeEnum.YEAR, last: 1, label: 'last year'},
  ];
  @Output() commonChange = new EventEmitter<FilterCommonType>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
