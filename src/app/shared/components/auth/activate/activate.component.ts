import {Component, OnInit} from '@angular/core';
import {flatMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivateService} from './activate.service';
import {LoginModalService} from '../../../../core/login/login-modal.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
})
export class ActivateComponent implements OnInit {
  error = false;
  success = false;
  checking = true;
  going = 6;
  interval: any;

  constructor(private activateService: ActivateService,
              private loginModalService: LoginModalService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(flatMap(params => this.activateService.get(params.key))).subscribe(
      () => {
        this.success = true;
        this.checking = false;
        this.interval = setInterval(() => this.redirectingCount(), 1000);
        setTimeout(() => this.redirect(), 5000);
      },
      () => {
        this.success = false;
        this.error = true;
        this.checking = false;
      }
    );
  }

  redirect() {
    this.router.navigate(['/auth/login']).then(() => {
      clearInterval(this.interval);
    });
  }

  redirectingCount() {
    if (this.going > 0) {
      this.going -= 1;
    }
  }

  login(): void {
    this.loginModalService.open();
  }
}
