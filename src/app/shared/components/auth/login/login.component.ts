import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PasswordResetInitComponent} from '..';
import {LoginService} from '../../../../core/login/login.service';
import {SysToasrtService} from '../../../alert/sys-toasrt.service';
import {SysHttpResponseErrorService} from '../../../services/sys-http-response-error.service';
import {AccountService} from '../../../../core/auth/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {
  @ViewChild('username', {static: false})
  username?: ElementRef;
  loading = false;
  authenticationError = false;

  loginForm: any = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false],
  });

  constructor(private loginService: LoginService,
              private router: Router,
              private toasrtService: SysToasrtService,
              private errorService: SysHttpResponseErrorService,
              private modalService: NgbModal,
              private accountService: AccountService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.checkLogin();
  }

  ngAfterViewInit(): void {
    if (this.username) {
      this.username.nativeElement.focus();
    }
  }

  checkLogin(): void {
    this.accountService.identity(true).subscribe(value => {
      if (value) {
        this.router.navigate(['/app']);
      }
    });
  }

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: '',
    });
    // this.activeModal.dismiss('cancel');
  }

  login(): void {
    this.loading = true;
    this.loginService
      .login({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        rememberMe: this.loginForm.get('rememberMe').value,
      }).subscribe(
      () => {
        this.toasrtService.showSuccess('Login successfully');
        this.authenticationError = false;
        this.loading = false;
        // this.activeModal.close();
        this.router.navigate(['/app']);
        // if (
        //   this.router.url === '/account/register' ||
        //   this.router.url.startsWith('/account/activate') ||
        //   this.router.url.startsWith('/account/reset/')
        // ) {
        //   this.router.navigate(['/app']);
        // }
      },
      (error) => {
        this.errorService.processError(error);
        this.loading = false;
        this.authenticationError = true;
        // this.toasrtService.showError()
      }
    );
  }

  requestResetPassword(): void {
    // this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/account/reset', 'request']);
  }

  forgot(): void {
    this.modalService.open(PasswordResetInitComponent, {centered: true});
  }
}
