import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../core/user/user.model';
import {UserService} from '../../../core/user/user.service';
import {SysToasrtService} from '../../../shared/alert/sys-toasrt.service';


@Component({
  selector: 'app-ser-mgmt-delete-dialog',
  templateUrl: './user-management-delete-dialog.component.html'
})
export class UserMgmtDeleteDialogComponent {
  user!: User;

  constructor(private userService: UserService,
              public activeModal: NgbActiveModal,
              private utmToast: SysToasrtService) {
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(login: any) {
    this.userService.delete(login).subscribe(response => {
      this.utmToast.showSuccess('User deleted successfully');
      this.activeModal.dismiss(true);
    });
  }
}
