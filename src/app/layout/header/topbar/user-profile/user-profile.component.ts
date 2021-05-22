// Angular
import {Component, Input, OnInit} from '@angular/core';
// RxJS
import {Observable} from 'rxjs';
import {AccountService} from '../../../../core/auth/account.service';
import {AuthServerProvider} from '../../../../core/auth/auth-jwt.service';
import {Router} from '@angular/router';
import {Account} from '../../../../core/user/account.model';

@Component({
  selector: 'app-top-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileTopBarComponent implements OnInit {
  // Public properties
  user$: Observable<Account | null> | null = null;

  @Input() userDropdownStyle = 'dark';
  @Input() avatar = true;
  @Input() greeting = true;
  @Input() badge!: boolean;
  @Input() icon!: boolean;

  constructor(private accountService: AccountService,
              private router: Router,
              private authService: AuthServerProvider) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit(): void {
    this.user$ = this.accountService.identity();
  }

  /**
   * Log out
   */
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
