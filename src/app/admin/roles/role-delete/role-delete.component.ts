import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Role} from '../roles.model';

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.scss']
})
export class RoleDeleteComponent implements OnInit {

  role!: Role;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  deleteConfirmation() {
    this.activeModal.close('ok');
  }

  cancelDelete() {
    this.activeModal.dismiss('cancel');
  }
}
