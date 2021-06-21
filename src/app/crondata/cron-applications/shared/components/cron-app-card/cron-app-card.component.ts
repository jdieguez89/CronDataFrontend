import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ApplicationType} from '../../type/application.type';
import {CronAppInstallModalComponent} from '../cron-app-install-modal/cron-app-install-modal.component';

@Component({
  selector: 'app-cron-app-card',
  templateUrl: './cron-app-card.component.html',
  styleUrls: ['./cron-app-card.component.scss']
})
export class CronAppCardComponent implements OnInit {
  @Input() app!: ApplicationType;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  activate() {
    const modal = this.modalService.open(CronAppInstallModalComponent, {centered: true});
    modal.componentInstance.app = this.app;
  }
}
