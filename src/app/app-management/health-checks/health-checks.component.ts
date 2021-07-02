import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Health, HealthDetails, HealthKey, HealthService, HealthStatus} from './health-checks.service';
import {HttpErrorResponse} from '@angular/common/http';
import {HealthDetailComponent} from './health-detail/health-detail.component';

@Component({
  selector: 'app-health-checks',
  templateUrl: './health-checks.component.html',
  styleUrls: ['./health-checks.component.scss']
})
export class HealthChecksComponent implements OnInit {
  health?: Health;

  constructor(private modalService: NgbModal, private healthService: HealthService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  getBadgeClass(statusState: HealthStatus): string {
    if (statusState === 'UP') {
      return 'badge-success';
    } else {
      return 'badge-danger';
    }
  }

  refresh(): void {
    this.healthService.checkHealth().subscribe(
      health => (this.health = health),
      (error: HttpErrorResponse) => {
        if (error.status === 503) {
          this.health = error.error;
        }
      }
    );
  }

  showHealth(health: { key: HealthKey; value: HealthDetails }): void {
    const modalRef = this.modalService.open(HealthDetailComponent, {centered: true});
    modalRef.componentInstance.health = health;
  }
}
