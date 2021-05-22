import {HttpResponse} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITEMS_PER_PAGE} from '../../shared/constants/pagination.constants';
import {FilterTimeEnum} from '../../shared/enums/filter-time.enum';
import {FilterCommonType} from '../../shared/types/filter-common.type';
import {TimeFilterType} from '../../shared/types/time-filter.type';
import {UtmAuditsService} from './audits.service';
import {UtmAudit} from './shared/type/audit.model';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit, OnDestroy {
  audits!: UtmAudit[];
  links: any;
  totalItems!: number;
  page = 1;
  itemsPerPage = ITEMS_PER_PAGE;
  dateDefault: FilterCommonType = {time: FilterTimeEnum.DAY, last: 7, label: 'last 7 days'};
  eventDate!: TimeFilterType;
  loading = true;

  constructor(private auditsService: UtmAuditsService) {
    this.itemsPerPage = ITEMS_PER_PAGE;
  }

  ngOnInit() {
  }


  loadAll() {
    const req = {
      page: this.page - 1,
      size: this.itemsPerPage,
      // sort: this.sortBy,
      fromDate: (this.eventDate.timeFrom ? this.eventDate.timeFrom.split('T')[0] : null),
      toDate: (this.eventDate.timeTo ? this.eventDate.timeTo.split('T')[0] : null)
    };
    this.auditsService
      .query(req)
      .subscribe(
        (res: HttpResponse<UtmAudit[]>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body)
      );
  }

  loadPage(page: number) {
    this.page = page;
    this.loadAll();
  }

  ngOnDestroy(): void {
  }

  onFilterChange($event: TimeFilterType) {
    this.eventDate = $event;
    this.loadAll();
  }

  private onSuccess(data: any, headers: any) {
    this.totalItems = headers.get('X-Total-Count');
    this.audits = data;
    this.loading = false;
  }

  private onError(error: any) {
    // this.alertService.error(error.error, error.message, null);
  }
}

