import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {PasswordResetInitService} from './password-reset-init.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SysHttpResponseErrorService} from '../../../../services/sys-http-response-error.service';
import {SysToasrtService} from '../../../../alert/sys-toasrt.service';

@Component({
  selector: 'app-password-reset-init',
  templateUrl: './password-reset-init.component.html',
})
export class PasswordResetInitComponent implements AfterViewInit {
  @ViewChild('email', {static: false})
  email?: ElementRef;
  success = false;
  requesting = false;
  resetRequestForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
  });

  constructor(private passwordResetInitService: PasswordResetInitService,
              private fb: FormBuilder,
              private toasrtService: SysToasrtService,
              private errorService: SysHttpResponseErrorService,
              public activeModal: NgbActiveModal) {
  }

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.focus();
    }
  }

  requestReset(): void {
    this.requesting = true;
    // @ts-ignore
    this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(() => {
      this.success = true;
      setTimeout(() => {
        this.activeModal.close();
      }, 3000);
      this.toasrtService.showSuccessBottom('We send you an email to finish password reset process');
    }, error => {
      this.errorService.processError(error);
    });
  }
}
