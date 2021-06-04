import { Component, OnInit } from '@angular/core';
import {NotificationType} from '../../../layout/header/topbar/notification/shared/type/notification.type';
import {ITEMS_PER_PAGE} from '../../../shared/constants/pagination.constants';
import {NotificationSeverityEnum} from '../../../layout/header/topbar/notification/shared/emun/notification.enum';
import {SortByType} from '../../../shared/types/sort-by.type';
import {NotificationService} from '../../../layout/header/topbar/notification/shared/service/notification.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {SortEvent} from '../../../shared/directives/sortable/type/sort-event';
import {TimeFilterType} from '../../../shared/types/time-filter.type';

@Component({
  selector: 'app-alert-history',
  templateUrl: './alert-history.component.html',
  styleUrls: ['./alert-history.component.scss']
})
export class AlertHistoryComponent implements OnInit {
  alerts?: NotificationType[];
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  notificationTypeEnum = NotificationSeverityEnum;
  page = 0;
  request = {
    page: this.page,
    size: this.itemsPerPage,
    sort: 'id,asc',
    'summary.contains': null,
    'receivedAt.greaterThanOrEqual': null,
    'receivedAt.lessThanOrEqual': null,
    'severity.equals': null
  };
  searchingTarget: any;
  fields: SortByType[] = [
    {
      fieldName: 'Default',
      field: 'id'
    },
    {
      fieldName: 'Name',
      field: 'summary'
    },
    {
      fieldName: 'Severity',
      field: 'severity'
    },
    {
      fieldName: 'Received date',
      field: 'receivedAt'
    }
  ];
  loading = true;
  severities = [NotificationSeverityEnum.CRITICAL, NotificationSeverityEnum.WARNING, NotificationSeverityEnum.PAGE];

  constructor(
    private notificationService: NotificationService,
    protected modalService: NgbModal
  ) {
  }

  getAlerts(): void {
    this.notificationService
      .query(this.request)
      .subscribe(
        (res: HttpResponse<NotificationType[]>) => this.onSuccess(res.body, res.headers),
        () => this.onError()
      );
  }

  ngOnInit(): void {
    this.getAlerts();
  }

  onSort($event: SortEvent) {
    this.request.sort = $event.column + ',' + $event.direction;
    this.getAlerts();
  }


  ngOnDestroy(): void {
  }

  trackId(index: number, item: NotificationType): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  protected onSuccess(data: NotificationType[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.alerts = data || [];
    this.loading = false;
  }

  protected onError(): void {
    // this.ngbPaginationPage = this.page ?? 1;
  }

  searchAlert($event: any) {
    this.request['summary.contains'] = $event;
    this.request.page = 0;
    this.getAlerts();
  }

  trackIdentity(index: any, item: NotificationType) {
    return item.id;
  }

  loadPage($event: number) {
    this.request.page = $event - 1;
    this.getAlerts();
  }

  onFilterTimeChange($event: TimeFilterType) {
    console.log($event);
    // @ts-ignore
    this.request['receivedAt.lessThanOrEqual'] = $event.timeTo;
    // @ts-ignore
    this.request['receivedAt.greaterThanOrEqual'] = $event.timeFrom;
    this.request.page = 0;
    this.getAlerts();
  }

  onFilterSeverityChange($event: any) {
    this.request['severity.equals'] = $event;
    this.request.page = 0;
    this.getAlerts();
  }
}
