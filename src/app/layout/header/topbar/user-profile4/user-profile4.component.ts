// Angular
import {Component, Input, OnInit} from '@angular/core';
// RxJS
import {Observable} from 'rxjs';
import {AccountService} from '../../../../core/auth/account.service';
import {AuthServerProvider} from '../../../../core/auth/auth-jwt.service';
import {Account} from '../../../../core/user/account.model';

// NGRX


@Component({
  selector: 'app-user-profile4',
  templateUrl: './user-profile4.component.html',
})
export class UserProfile4Component implements OnInit {
  // Public properties
  user$!: Observable<Account | null>;
  @Input() avatar = true;
  @Input() greeting = true;
  @Input() badge!: boolean;
  @Input() icon!: boolean;

  constructor(private accountService: AccountService,
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
  }
}
