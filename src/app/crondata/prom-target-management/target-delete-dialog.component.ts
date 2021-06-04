import {Component, EventEmitter, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {SysToasrtService} from '../../shared/alert/sys-toasrt.service';
import {ITarget} from './target.model';
import {TargetService} from './target.service';

@Component({
  templateUrl: './target-delete-dialog.component.html',
})
export class TargetDeleteDialogComponent {
  target!: ITarget;
  @Output() targetDeleted = new EventEmitter<any>();

  constructor(protected targetService: TargetService,
              private sysToasrtService: SysToasrtService,
              public activeModal: NgbActiveModal) {
  }

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(): void {
    this.targetService.delete(this.target.id).subscribe(() => {
      this.targetDeleted.emit('success_delete');
      this.sysToasrtService.showSuccess('Target deleted successfully');
      this.activeModal.close();
    }, error => this.sysToasrtService.showError('Error', 'Error while trying to delete Target'));
  }
}
