import {Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {SORT_ROTATE} from './const/sort.const';
import {SortDirection} from './type/sort-direction.type';
import {SortEvent} from './type/sort-event';

@Directive({
  selector: 'th[appColumnSortable]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[class.utm-table-sort-desc]': 'direction=== "asc"',
    '[class.utm-table-sort-asc]': 'direction=== "desc"',
    '[class.utm-table-sort-none]': 'direction === ""',
    '(click)': 'rotate()'
  }
})

export class SortableDirective implements OnChanges {
  @Input() sortable!: string;
  @Input() direction: SortDirection = '';
  @Input() isSortable = true;
  @Output() sort = new EventEmitter<SortEvent | string>();
  @Input() sortEvent!: SortEvent;

  constructor() {
  }

  rotate(): void {
    if (this.isSortable) {
      this.direction = SORT_ROTATE[this.direction];
      this.sort.emit({column: this.sortable, direction: this.direction});
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable && changes.sortable.currentValue) {
      console.log('sortable');
    }
  }

}
