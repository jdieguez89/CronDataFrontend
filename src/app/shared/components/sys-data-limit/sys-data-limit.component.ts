import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export const DATA_LIMIT_RANGE = [50, 100, 200, 500, 1000, 2500];

@Component({
  selector: 'app-sys-data-limit',
  templateUrl: './sys-data-limit.component.html',
  styleUrls: ['./sys-data-limit.component.scss']
})
export class SysDataLimitComponent implements OnInit {
  limitRange = DATA_LIMIT_RANGE;
  limit = 100;
  @Output() limitChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.limitChange.emit(this.limit);
  }

  applyLimit(lim: number) {
    this.limit = lim;
    this.limitChange.emit(lim);
  }
}
