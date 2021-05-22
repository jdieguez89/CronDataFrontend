import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoleDeleteComponent} from './role-delete/role-delete.component';
import {Role} from './roles.model';
import {RolesService} from './roles.service';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  createRoleForm!: FormGroup;
  editRoleForm!: FormGroup;
  roles!: string[];
  roleToEdit!: string | null | undefined;

  constructor(private fb: FormBuilder,
              private roleService: RolesService,
              private modalService: NgbModal) {
  }

  get createRoleName(): any {
    return this.createRoleForm.get('createRoleName');
  }

  get editRoleName(): any {
    if (this.editRoleForm) {
      return this.editRoleForm.get('editRoleName');
    }
  }

  ngOnInit() {
    this.createRoleForm = this.buildRoleCreationForm();
    this.loadRoles();
  }

  buildRoleCreationForm() {
    return this.fb.group({
      createRoleName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,45}'),
          forbiddenNameValidator(/role/i)
        ]
      ]
    });
  }

  createRole() {
    if (this.createRoleName.valid) {
      const nameShow: string = this.createRoleName.value;
      const name = 'ROLE_' + nameShow;
      const role = new Role(name, nameShow);
      this.roleService.create(role).subscribe(() => {
        this.cleanCreateRoleForm();
        this.loadRoles();
      });
    }
  }

  updateRole(role: Role) {
    if (this.editRoleName.valid && role) {
      role.nameShow = (this.editRoleName.value as string).toUpperCase();
      this.roleService.update(role).subscribe(() => {
        this.loadRoles();
      });
      this.cancelEditRoleAction();
    }
  }

  deleteRole(name: string | null | undefined) {
    if (name) {
      this.roleService.delete(name).subscribe(() => {
        this.loadRoles();
      });
    }
  }

  editRoleAction(role: Role) {
    this.roleToEdit = role.name;
    this.editRoleForm = this.fb.group({
      editRoleName: [
        role.nameShow,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]{1,45}'),
          forbiddenNameValidator(/role/i)
        ]
      ]
    });
  }

  cancelEditRoleAction() {
    this.roleToEdit = null;
    this.editRoleForm.reset();
  }

  deleteRoleAction(role: Role) {
    const deleteModalRef = this.modalService.open(RoleDeleteComponent, {backdrop: 'static', centered: true});
    deleteModalRef.componentInstance.role = role;
    deleteModalRef.result.then(() => {
      this.deleteRole(role.name);
    });

  }

  cleanCreateRoleForm() {
    this.createRoleName.setValue('');
  }

  loadRoles() {
    this.roleService.findAll().subscribe((response: HttpResponse<any>) => {
      if (response.body) {
        this.roles = response.body;
      }
    });
  }
}
