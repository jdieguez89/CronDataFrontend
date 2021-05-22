import {HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {delay} from 'rxjs/operators';
import {AccountService} from '../../../core/auth/account.service';
import {IUser, User} from '../../../core/user/user.model';
import {UserService} from '../../../core/user/user.service';
import {ITEMS_PER_PAGE} from '../../../shared/constants/pagination.constants';
import {SortEvent} from '../../../shared/directives/sortable/type/sort-event';
import {SysHttpResponseErrorService} from '../../../shared/services/sys-http-response-error.service';
import {SortByType} from '../../../shared/types/sort-by.type';
import {UserMgmtDeleteDialogComponent} from '../user-delete/user-management-delete-dialog.component';
import {UserMgmtUpdateComponent} from '../user-update/user-management-update.component';

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserMgmtComponent implements OnInit, OnDestroy {
  currentAccount: any;
  users!: User[];
  error: any;
  success: any;
  routeData: any;
  links: any;
  totalItems: any;
  itemsPerPage: any;
  page: any;
  predicate: any;
  previousPage: any;
  reverse: any;
  search!: string;
  fields: SortByType[] = [
    {
      fieldName: 'Default',
      field: 'id'
    },
    {
      fieldName: 'Login',
      field: 'login'
    },
    {
      fieldName: 'Email',
      field: 'email'
    },
    {
      fieldName: 'Activated',
      field: 'activated'
    },
    {
      fieldName: 'Created Date',
      field: 'createdDate'
    },
    {
      fieldName: 'Last Modified By',
      field: 'lastModifiedBy'
    },
    {
      fieldName: 'Last Modified Date',
      field: 'lastModifiedDate'
    }

  ];
  searchingUser = false;
  private sortBy!: string;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private errorService: SysHttpResponseErrorService
  ) {
    this.itemsPerPage = ITEMS_PER_PAGE;
  }

  ngOnInit() {
    this.accountService.identity().subscribe(account => {
      this.currentAccount = account;
      this.loadAll();
      this.registerChangeInUsers();
    });
  }

  ngOnDestroy() {
  }

  registerChangeInUsers() {
    // this.eventManager.subscribe('userListModification', response => this.loadAll());
  }

  setActive(user: IUser, isActivated: any) {
    user.activated = isActivated;

    this.userService.update(user).subscribe(response => {
      this.error = null;
      this.success = 'OK';
      this.loadAll();
    }, error => {
      this.errorService.processError(error);
      this.success = null;
      this.error = 'ERROR';
    });
  }

  loadAll() {
    this.userService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sortBy
      })
      .subscribe(
        (res: HttpResponse<User[]>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body)
      );
  }

  trackIdentity(index: any, item: User) {
    return item.id;
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
    }
  }

  deleteUser(user: User) {
    const modalRef = this.modalService.open(UserMgmtDeleteDialogComponent, {
      size: 'sm',
      backdrop: 'static',
      centered: true
    });
    modalRef.componentInstance.user = user;
    modalRef.result.then(
      result => {
        // Left blank intentionally, nothing to do here
      },
      reason => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

  searchUser($event: string) {
    this.search = $event;
    if (this.search !== '' || this.search !== undefined) {
      const req = {login: this.search};
      this.searchingUser = true;
      this.userService.query(req).pipe(delay(2000)).subscribe(users => {
        if (users.body) {
          this.users = users.body;
        }
        this.searchingUser = false;
      });
    } else {
      this.loadAll();
    }
  }

  onSort($event: SortEvent) {
    this.sortBy = $event.column + ',' + $event.direction;
    this.loadAll();
  }

  createUser() {
    const modal = this.modalService.open(UserMgmtUpdateComponent, {centered: true});
    modal.componentInstance.userChange.subscribe(() => {
      this.loadAll();
    });
  }

  editUser(user: User) {
    const modal = this.modalService.open(UserMgmtUpdateComponent, {centered: true});
    modal.componentInstance.user = user;
    modal.componentInstance.userChange.subscribe(() => {
      this.loadAll();
    });
  }

  private onSuccess(data: User[] | null, headers: HttpHeaders) {
    this.totalItems = headers.get('X-Total-Count');
    if (data) {
      this.users = data;
    }
    this.searchingUser = false;
    this.users = this.users.filter(usr => {
      const usrHides = ['system', 'user'];
      return !usrHides.includes(typeof usr.login === 'string' ? usr.login : '', 0);
    });
  }

  private onError(error: HttpErrorResponse) {
    this.errorService.processError(error);
  }
}
