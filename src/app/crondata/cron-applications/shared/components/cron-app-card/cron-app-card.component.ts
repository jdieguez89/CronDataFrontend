import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SysToasrtService} from '../../../../../shared/alert/sys-toasrt.service';
import {ModalConfirmationComponent} from '../../../../../shared/components/modal-confirmation/modal-confirmation.component';
import {ApplicationService} from '../../services/applications.service';
import {ApplicationType} from '../../type/application.type';
import {CronAppInstallModalComponent} from '../cron-app-install-modal/cron-app-install-modal.component';

@Component({
  selector: 'app-cron-app-card',
  templateUrl: './cron-app-card.component.html',
  styleUrls: ['./cron-app-card.component.scss']
})
export class CronAppCardComponent implements OnInit {
  @Input() app!: ApplicationType;
  @Output() refresh = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal,
              private toastrService: SysToasrtService,
              private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
  }

  activate() {
    const modal = this.modalService.open(CronAppInstallModalComponent, {centered: true});
    modal.componentInstance.app = this.app;
    modal.componentInstance.installedEvent.subscribe(() => {
      this.refresh.emit(true);
    });
  }

  deactivateModule(module: ApplicationType) {
    const modal = this.modalService.open(ModalConfirmationComponent, {centered: true});
    modal.componentInstance.header = 'Deactivate module';
    modal.componentInstance.message = 'Related dashboards and alerts will be deleted. ' +
      'Are you sure that you want deactivate this module?';
    modal.componentInstance.confirmBtnText = 'Deactivate';
    modal.componentInstance.confirmBtnIcon = 'flaticon-squares-4';
    modal.componentInstance.confirmBtnType = 'delete';
    modal.result.then(() => {
      this.applicationService.deactivate(module).subscribe(() => {
        this.toastrService.showSuccessBottom('Module ' + this.app.appName + ' has been deactivated successfully');
        this.refresh.emit(true);
      }, error => this.toastrService.showError('Error deactivating module',
        'Han error occur while trying to deactivate this module, please contact with support team'));
    });
  }


  viewDoc(app: ApplicationType) {
    window.open(app.installationLink, '_blank');
  }
}
