import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../shared/services/applications.service';
import {ApplicationType} from '../shared/type/application.type';

@Component({
  selector: 'app-cron-applications',
  templateUrl: './cron-applications.component.html',
  styleUrls: ['./cron-applications.component.scss']
})
export class CronApplicationsComponent implements OnInit {
  private request: any;
  loading = true;
  applications: ApplicationType[] = [];

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.getApplications();
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

}
