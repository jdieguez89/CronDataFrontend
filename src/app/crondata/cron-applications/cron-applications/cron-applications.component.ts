import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AppCategoryService} from '../shared/services/app-category.service';
import {ApplicationService} from '../shared/services/applications.service';
import {AppCategoryType} from '../shared/type/app-category.type';
import {ApplicationType} from '../shared/type/application.type';

@Component({
  selector: 'app-cron-applications',
  templateUrl: './cron-applications.component.html',
  styleUrls: ['./cron-applications.component.scss']
})
export class CronApplicationsComponent implements OnInit {
  request = {
    page: 0,
    size: 100,
    'appName.contains': null,
    'appCategoryId.equals': null,
    sort: 'appCategoryId,asc'
  };
  loading = true;
  applications: ApplicationType[] = [];
  searchingApp = false;
  categories!: AppCategoryType[];

  constructor(private applicationService: ApplicationService,
              private appCategoryService: AppCategoryService) {
  }

  ngOnInit(): void {
    this.getApplications();
    this.getCategories();
  }

  getCategories() {
    this.appCategoryService.query({page: 0, size: 100}).subscribe(response => {
      if (response.body) {
        this.categories = response.body;
      }
    });

  }

  getApplications() {
    this.applicationService.query(this.request)
      .subscribe(
        (res: HttpResponse<ApplicationType[]>) => {
          if (res.body) {
            this.onSuccess(res.body, res.headers);
          }
        },
        () => this.onError()
      );
  }

  protected onSuccess(data: ApplicationType[], headers: HttpHeaders): void {
    this.applications = data;
    this.loading = false;
  }

  protected onError(): void {
    // this.ngbPaginationPage = this.page ?? 1;
  }

  searchApp($event: any) {
    this.request['appName.contains'] = $event;
    this.request.page = 0;
    this.getApplications();
  }

  onFilterByCategory($event: any) {
    this.request['appCategoryId.equals'] = $event.id;
    this.request.page = 0;
    this.getApplications();
  }

  clearSelect() {
    this.request['appCategoryId.equals'] = null;
    this.request.page = 0;
    this.getApplications();
  }
}
