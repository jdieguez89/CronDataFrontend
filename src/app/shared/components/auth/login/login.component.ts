import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {PasswordResetInitComponent} from '..';
import {AccountService} from '../../../../core/auth/account.service';
import {LoginService} from '../../../../core/login/login.service';
import {ApplicationService} from '../../../../crondata/cron-applications/shared/services/applications.service';
import {SysToasrtService} from '../../../alert/sys-toasrt.service';
import {SysHttpResponseErrorService} from '../../../services/sys-http-response-error.service';

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
              private applicationService: ApplicationService,
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
        this.router.navigate(['/app/crondata/frame/grafana']);
      }
    }, error => console.log(error));
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
        this.navigateOnLogin().subscribe(url => {
          this.router.navigate([url]);
        });
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


  navigateOnLogin(): Observable<string> {
    return new Observable<string>(subscriber => {
      this.applicationService.query({'isInstalled.equals': true}).subscribe(response => {
        if (response.body && response.body?.length === 0) {
          subscriber.next('/app/crondata/application/install');
        } else {
          subscriber.next('/app/crondata/frame/grafana');
        }
      });
    });
  }


  requestResetPassword(): void {
    // this.activeModal.dismiss('to state requestReset');
    this.router.navigate(['/account/reset', 'request']);
  }

  forgot(): void {
    this.modalService.open(PasswordResetInitComponent, {centered: true});
  }
}
