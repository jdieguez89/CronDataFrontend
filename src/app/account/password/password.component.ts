import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AccountService} from '../../core/auth/account.service';
import {Account} from '../../core/user/account.model';
import {PasswordService} from './password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
})
export class PasswordComponent implements OnInit {
  doNotMatch = false;
  error = false;
  success = false;
  account$?: Observable<Account | null>;
  passwordForm: any = this.fb.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });
  changing = false;

  constructor(private passwordService: PasswordService, private accountService: AccountService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.account$ = this.accountService.identity();
  }

  changePassword(): void {
    this.error = false;
    this.success = false;
    this.doNotMatch = false;

    const newPassword = this.passwordForm.get(['newPassword']).value;
    if (newPassword !== this.passwordForm.get(['confirmPassword']).value) {
      this.doNotMatch = true;
    } else {
      this.changing = true;
      this.passwordService.save(newPassword, this.passwordForm.get(['currentPassword']).value).subscribe(
        () => {
          this.success = true;
          this.changing = false;
        },
        () => (this.error = true)
      );
    }
  }
}
