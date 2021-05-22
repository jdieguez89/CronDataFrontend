import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITEMS_PER_PAGE} from '../../constants/pagination.constants';

@Component({
  selector: 'app-utm-items-per-page',
  templateUrl: './items-per-page.component.html',
  styleUrls: ['./items-per-page.component.scss']
})
export class ItemsPerPageComponent implements OnInit {
  itemsPerPage: number[] = [10, 15, 25, 35, 50, 75, 100];
  @Output() itemsInPage = new EventEmitter<number>();
  itemsAmount = ITEMS_PER_PAGE;

  constructor() {
  }

  ngOnInit() {
  }

  onSelectChange($event: {}) {
    this.itemsInPage.emit(this.itemsAmount);
  }
}
