import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../core/user/user.model';
import {UserService} from '../../../core/user/user.service';
import {SysToasrtService} from '../../../shared/alert/sys-toasrt.service';


@Component({
  selector: 'app-user-mgmt-update',
  templateUrl: './user-management-update.component.html',
  styleUrls: ['./user-managment-update.component.scss']
})
export class UserMgmtUpdateComponent implements OnInit {
  @Input() user!: User;
  @Output() userChange = new EventEmitter<string>();
  languages!: any[];
  authorities!: any[];
  isSaving!: boolean;
  creating = false;

  constructor(private userService: UserService,
              public activeModal: NgbActiveModal,
              private utmToast: SysToasrtService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.isSaving = false;
    this.authorities = [];
    this.userService.authorities().subscribe(authorities => {
      this.authorities = authorities;
    });
    if (!this.user) {
      this.user = new User();
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    console.log(this.user);
    if (!this.user.id === undefined) {
      this.userService.update(this.user)
        .subscribe(response => this.onSaveSuccess(response, 'update'),
          (error) => this.onSaveError(error, 'update'));
    } else {
      this.user.langKey = 'en';
      this.userService.create(this.user)
        .subscribe(response => this.onSaveSuccess(response, 'create'),
          (error) => this.onSaveError(error, 'create'));
    }
  }

  addRol(roleadmin: string): void {
  }

  private onSaveSuccess(result: any, type: any): void {
    this.isSaving = false;
    if (type === 'update') {
      this.utmToast.showSuccess('User updated successfully');
    } else {
      this.utmToast.showSuccess('User created successfully');
    }
    this.activeModal.close();
    this.userChange.emit('changed');
  }

  private onSaveError(error: any, type: any): void {
    this.isSaving = false;
    this.utmToast.showError('Problem', error.error.title);
  }
}
