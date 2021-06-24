import {HttpClient} from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SysToasrtService} from '../../../../../shared/alert/sys-toasrt.service';
import {TargetUpdateComponent} from '../../../../prom-target-management/target-update.component';
import {ApplicationService} from '../../services/applications.service';
import {ApplicationType} from '../../type/application.type';

@Component({
  selector: 'app-cron-app-install-modal',
  templateUrl: './cron-app-install-modal.component.html',
  styleUrls: ['./cron-app-install-modal.component.scss']
})
export class CronAppInstallModalComponent implements OnInit {
  @Input() app!: ApplicationType;
  @Output() installedEvent = new EventEmitter<string>();
  isSaving: any;

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private http: HttpClient,
              private toastrService: SysToasrtService,
              private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
  }

  activate() {
    this.applicationService.activate(this.app).subscribe(response => {
      this.toastrService.showSuccessBottom('Module ' + this.app.appName + ' has been activated successfully');
      this.installedEvent.emit(response.body?.uid);
      this.activeModal.close();
    }, error => this.toastrService.showError('Error activating module',
      'Han error occur while trying to activate this module, please contact with support team'));
  }

  addTarget() {
    this.modalService.open(TargetUpdateComponent, {centered: true});
  }
}
