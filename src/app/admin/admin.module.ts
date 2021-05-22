import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminRoutingModule} from './admin-routing.module';
import {UserMgmtDeleteDialogComponent} from './user/user-delete/user-management-delete-dialog.component';
import {UserMgmtDetailComponent} from './user/user-detail/user-management-detail.component';
import {UserMgmtComponent} from './user/user-list/user-management.component';
import {UserMgmtUpdateComponent} from './user/user-update/user-management-update.component';
import {SyspenSharedModule} from '../shared/shared.module';
import {RolesComponent} from './roles/roles.component';
import {RoleDeleteComponent} from './roles/role-delete/role-delete.component';

@NgModule({
  declarations: [
    UserMgmtComponent,
    UserMgmtUpdateComponent,
    UserMgmtDetailComponent,
    UserMgmtDeleteDialogComponent,
    RolesComponent,
    RoleDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SyspenSharedModule
  ],
  exports: [
    UserMgmtComponent,
    UserMgmtUpdateComponent,
    UserMgmtDetailComponent,
    UserMgmtDeleteDialogComponent,
    RolesComponent,
  ],
  entryComponents: [
    UserMgmtDeleteDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: []
})
export class AdminModule {
}
