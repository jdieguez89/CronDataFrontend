import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SortByType} from '../../types/sort-by.type';
import {SortEvent} from '../../directives/sortable/type/sort-event';
import {SortDirection} from '../../directives/sortable/type/sort-direction.type';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit, OnChanges {
  @Input() fields!: SortByType[];
  @Input() sortEvent!: SortEvent;
  @Output() sortBy = new EventEmitter<SortEvent>();
  @Input() default!: string;
  @Input() fieldDefault!: string;
  label: any;
  sort = true;
  field: any;


  constructor() {
  }

  ngOnInit(): void {
    this.field = this.fields[0].field;
    if (this.default) {
      this.label = this.default;
    }
    if (this.fieldDefault) {
      this.field = this.fieldDefault;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.sortEvent && !changes.sortEvent.firstChange) {
      this.label = this.getFieldLabelByColumn(changes.sortEvent.currentValue.column);
      this.sort = changes.sortEvent.currentValue.direction === 'desc';
    }
  }

  sortByFiled(field: SortByType): void {
    this.label = field.fieldName;
    this.field = field.field;
    this.sortBy.emit({column: this.field, direction: this.checkOrder()});
  }

  changeSort(): void {
    this.sort = this.sort ? false : true;
    this.sortBy.emit({column: this.field, direction: this.checkOrder()});
  }

  getFieldLabelByColumn(col: string): string {
    // @ts-ignore
    return this.fields[this.fields.findIndex(value => value.field === col)].fieldName;
  }

  checkOrder(): SortDirection {
    return this.sort ? 'desc' : 'asc';
  }
}
