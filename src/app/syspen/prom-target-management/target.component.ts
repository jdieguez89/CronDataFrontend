import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ITarget, Target} from './target.model';

import {ITEMS_PER_PAGE} from '../../shared/constants/pagination.constants';
import {SortEvent} from '../../shared/directives/sortable/type/sort-event';
import {SortByType} from '../../shared/types/sort-by.type';
import {TargetDeleteDialogComponent} from './target-delete-dialog.component';
import {TargetUpdateComponent} from './target-update.component';
import {TargetService} from './target.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
})
export class TargetComponent implements OnInit, OnDestroy {
  targets?: ITarget[];
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page = 0;
  request = {
    page: this.page,
    size: this.itemsPerPage,
    sort: 'id,asc',
    'host.contains': null
  };
  searchingTarget: any;
  fields: SortByType[] = [
    {
      fieldName: 'Default',
      field: 'id'
    },
    {
      fieldName: 'Host',
      field: 'host'
    },
    {
      fieldName: 'Job',
      field: 'job'
    }
  ];
  loading = true;

  constructor(
    protected targetService: TargetService,
    protected modalService: NgbModal
  ) {
  }

  getTargets(): void {
    this.targetService
      .query(this.request)
      .subscribe(
        (res: HttpResponse<ITarget[]>) => this.onSuccess(res.body, res.headers),
        () => this.onError()
      );
  }

  ngOnInit(): void {
    this.getTargets();
  }

  onSort($event: SortEvent) {
    this.request.sort = $event.column + ',' + $event.direction;
    this.getTargets();
  }


  ngOnDestroy(): void {
  }

  trackId(index: number, item: ITarget): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  delete(target: ITarget): void {
    const modalRef = this.modalService.open(TargetDeleteDialogComponent, {centered: true, size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.target = target;
    modalRef.componentInstance.targetDeleted.subscribe(() => {
      this.getTargets();
    });
  }


  protected onSuccess(data: ITarget[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.targets = data || [];
    this.loading = false;
  }

  protected onError(): void {
    // this.ngbPaginationPage = this.page ?? 1;
  }

  createTarget() {
    const modalCreate = this.modalService.open(TargetUpdateComponent, {centered: true});
    modalCreate.componentInstance.targetUpdated.subscribe(() => {
      this.getTargets();
    });
  }

  searchTarget($event: any) {
    this.request['host.contains'] = $event;
    this.request.page = 0;
    this.getTargets();
  }

  editTarget(target: any) {
    const modalCreate = this.modalService.open(TargetUpdateComponent, {centered: true});
    modalCreate.componentInstance.target = target;
    modalCreate.componentInstance.targetUpdated.subscribe(() => {
      this.getTargets();
    });
  }


  trackIdentity(index: any, item: Target) {
    return item.id;
  }

  loadPage($event: number) {
    this.request.page = $event - 1;
    this.getTargets();
  }
}
