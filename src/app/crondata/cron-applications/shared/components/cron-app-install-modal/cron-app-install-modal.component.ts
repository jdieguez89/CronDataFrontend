import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TargetUpdateComponent} from '../../../../prom-target-management/target-update.component';
import {ApplicationType} from '../../type/application.type';

@Component({
  selector: 'app-cron-app-install-modal',
  templateUrl: './cron-app-install-modal.component.html',
  styleUrls: ['./cron-app-install-modal.component.scss']
})
export class CronAppInstallModalComponent implements OnInit {
  @Input() app!: ApplicationType;
  isSaving: any;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  activate() {
  }

  addTarget() {
    this.modalService.open(TargetUpdateComponent, {centered: true});
  }
}
